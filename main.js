const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

const dataDir = path.join(os.homedir(), 'Library', 'Application Support', 'BacklogTracker');
const dataPath = path.join(dataDir, 'tasks.json');
const scribblePath = path.join(dataDir, 'scribble.txt');
const promptsPath = path.join(dataDir, 'prompts.json');
const ollamaConfigPath = path.join(dataDir, 'ollama-config.json');


async function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    minWidth: 600,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    titleBarStyle: 'hiddenInset',
    vibrancy: 'under-window',
    transparent: false,
    show: false
  });

  // Load the app
  mainWindow.loadFile('index.html');

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Remove menu bar
  mainWindow.setMenuBarVisibility(false);
}

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// IPC handlers for file operations
ipcMain.handle('save-tasks', async (event, tasks) => {
  try {
    await ensureDataDir();
    await fs.writeFile(dataPath, JSON.stringify(tasks, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Failed to save tasks:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-tasks', async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(dataPath, 'utf8');
    return { success: true, data: JSON.parse(data) };
  } catch (error) {
    // File doesn't exist or other error - return empty array
    return { success: true, data: [] };
  }
});

app.whenReady().then(() => {
  // Create main window once
  createWindow();

  // Register Option + B
  const ret = globalShortcut.register('Alt+B', () => {
    let win = BrowserWindow.getAllWindows()[0];
    if (!win) {
      createWindow();
    } else {
      if (win.isMinimized()) win.restore();
      win.show();
      win.focus();
    }
  });

  if (!ret) {
    console.log('Registration failed for Alt+B');
  }

  // Autostart (enable launch at login)
  app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath('exe')
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts when quitting
  globalShortcut.unregisterAll();
});




ipcMain.handle('save-scribble', async (event, text) => {
  try {
    await ensureDataDir();
    await fs.writeFile(scribblePath, text, 'utf8');
    return { success: true };
  } catch (error) {
    console.error('Failed to save scribble:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-scribble', async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(scribblePath, 'utf8');
    return { success: true, data };
  } catch (error) {
    return { success: true, data: '' }; // empty file initially
  }
});

ipcMain.handle('save-prompts', async (event, prompts) => {
  try {
    await ensureDataDir();
    await fs.writeFile(promptsPath, JSON.stringify(prompts, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Failed to save prompts:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-prompts', async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(promptsPath, 'utf8');
    return { success: true, data: JSON.parse(data) };
  } catch (error) {
    return { success: true, data: [] }; // empty array initially
  }
});

ipcMain.handle('save-ollama-config', async (event, config) => {
  try {
    await ensureDataDir();
    await fs.writeFile(ollamaConfigPath, JSON.stringify(config, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Failed to save Ollama config:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-ollama-config', async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(ollamaConfigPath, 'utf8');
    return { success: true, data: JSON.parse(data) };
  } catch (error) {
    return { success: true, data: null }; // null if no config
  }
});
