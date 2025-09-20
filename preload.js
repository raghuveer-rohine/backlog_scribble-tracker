const { contextBridge, ipcRenderer } = require('electron');

// Expose file system operations to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  saveTasks: (tasks) => ipcRenderer.invoke('save-tasks', tasks),
  loadTasks: () => ipcRenderer.invoke('load-tasks'),
  saveScribble: (text) => ipcRenderer.invoke('save-scribble', text),
  loadScribble: () => ipcRenderer.invoke('load-scribble')
});
