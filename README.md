# backlog_scribble-tracker
A minimal macOS Backlog Tracker + Scribbler app - add tasks, jot quick notes, auto-save everything locally, and launch instantly with Option+B.

# Backlog Tracker - Native macOS App Setup

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

## Features

✅ **Persistent Data Storage**: Tasks are saved to `~/Library/Application Support/BacklogTracker/tasks.json`

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

Your tasks are automatically saved to:
`~/Library/Application Support/BacklogTracker/tasks.json`

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
