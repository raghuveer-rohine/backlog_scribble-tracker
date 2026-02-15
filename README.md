# backlog_scribble-tracker
A minimal macOS Backlog Tracker + Scribbler + AI Assistant app - add tasks, jot quick notes, get AI-powered text assistance with local Ollama, auto-save everything locally, and launch instantly with Option+B.

# Backlog Tracker - Native macOS App with AI Integration

## Features

✅ **Task Management**: Create, complete, and organize your backlog items by date

✅ **Scribble Pad**: Quick note-taking area for thoughts and ideas

✅ **AI Assistant (NEW)**: Local AI-powered text processing using Ollama
   - Save custom prompt templates
   - Process text with your selected AI model
   - All processing happens locally - no cloud API needed
   - Copy AI responses with one click

✅ **Persistent Data Storage**: Everything saved to `~/Library/Application Support/BacklogTracker/`

✅ **Native macOS Feel**: System fonts, native window styling, and macOS design patterns

✅ **Automatic Date Grouping**: Tasks organized by creation date

✅ **Global Shortcut**: Launch with Option+B from anywhere

✅ **Lightweight**: Native performance with minimal footprint

## Quick Setup (5 minutes)

### 1. Create Project Structure
```bash
mkdir backlog-tracker-app
cd backlog-tracker-app
```

### 2. Initialize and Install Dependencies
```bash
npm init -y
npm install electron --save-dev
npm install electron-builder --save-dev
```

### 3. Create Project Files

Create these files in your project directory:

- `main.js` (from the Electron Main Process artifact)
- `preload.js` (from the Secure Bridge artifact) 
- `index.html` (from the updated Backlog Tracker artifact)
- `package.json` (replace the generated one with the Project Configuration artifact)

### 4. Project Structure Should Look Like:
```
backlog-tracker-app/
├── main.js
├── preload.js
├── index.html
├── package.json
└── assets/
    └── icon.icns (optional)
```

### 5. Test the App
```bash
npm start
```

### 6. Build the .dmg Installer
```bash
npm run build-mac
```

The .dmg file will be created in the `dist/` folder.

## Using the AI Assistant

The app includes a powerful AI assistant powered by [Ollama](https://ollama.ai), running locally on your machine.

### Setup Ollama (One-time)

1. **Install Ollama** (if not already installed):
   ```bash
   # Visit https://ollama.ai or use Homebrew
   brew install ollama
   ```

2. **Start Ollama service**:
   ```bash
   ollama serve
   ```

3. **Install an AI model** (recommended):
   ```bash
   ollama pull llama3.2:latest
   # Or try other models: qwen2.5:3b, mistral, etc.
   ```

### Configure in the App

1. Open the app and click the **🤖 AI** tab
2. Click **⚙️ Configure Ollama**
3. Click **Test Connection** (default: localhost:11434)
4. Select your preferred model from the dropdown
5. Click **Save Configuration**

### Using AI Features

1. **Save Prompt Templates**: 
   - Example: "Reformat the given text with proper English"
   - Example: "Summarize this text in 3 bullet points"
   - Example: "Fix grammar and spelling errors"

2. **Process Text**:
   - Select a saved prompt
   - Enter your text in the input area
   - Click **Generate Response**
   - Copy the AI-generated result

3. **Customize**:
   - Use custom Ollama host/port for remote setups
   - Switch between different AI models
   - Create multiple prompt templates for different tasks

## Features (Detailed)

### 📝 Task Management
- Create and organize backlog items
- Automatic date grouping (Today, Yesterday, specific dates)
- Mark tasks as complete/incomplete
- Delete tasks with confirmation
- Real-time statistics (pending/completed counts)

### ✍️ Scribble Pad
- Quick note-taking area
- Auto-save as you type
- Perfect for temporary thoughts and ideas

### 🤖 AI Assistant (Powered by Ollama)
- **Local AI Processing**: All AI operations run on your machine
- **Custom Prompts**: Save and reuse prompt templates
- **Flexible Configuration**: Support for custom Ollama host/port
- **Model Selection**: Choose from all your installed Ollama models
- **One-Click Copy**: Copy AI responses to clipboard instantly

✅ **Persistent Data Storage**: Everything saved to `~/Library/Application Support/BacklogTracker/`

✅ **Native macOS Feel**: Uses system fonts, native window styling, and macOS design patterns

✅ **Automatic Date Grouping**: Tasks are organized by creation date

✅ **Complete/Incomplete Tracking**: Click to mark tasks as done

✅ **Lightweight**: ~50MB final app size

✅ **Auto-updatable**: Ready for future update mechanisms

## Troubleshooting

### If npm start fails:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### If build fails:
```bash
# Install Xcode command line tools (if not already installed)
xcode-select --install

# Try building again
npm run build-mac
```

### Custom Icon (Optional):
1. Create a 512x512 PNG image
2. Use online converter to create .icns file
3. Place in `assets/icon.icns`
4. Rebuild the app

## Data Location

Your data is automatically saved to:
- **Tasks**: `~/Library/Application Support/BacklogTracker/tasks.json`
- **Scribble**: `~/Library/Application Support/BacklogTracker/scribble.txt`
- **AI Prompts**: `~/Library/Application Support/BacklogTracker/prompts.json`
- **Ollama Config**: `~/Library/Application Support/BacklogTracker/ollama-config.json`

This ensures data persists across app updates and system restarts.

## Development

- `npm start` - Run in development mode
- `npm run build` - Build for current platform
- `npm run build-mac` - Build macOS .dmg installer
- `npm run dist` - Build without publishing

## Next Steps

1. Customize the app icon in `assets/`
2. Modify the app name and ID in `package.json`
3. Add more features as needed
4. Set up code signing for distribution (optional)

The app is now ready to be distributed as a native macOS application!
