const { app, BrowserWindow, ipcMain } = require('electron')
const server = require('./src/server/app');
function createWindow() {
    server.start();
    // 브라우저 창을 생성합니다.
    const win = new BrowserWindow({
        width: 1204,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWin = win

    win.loadURL('http://localhost:3000/')

}

app.whenReady().then(createWindow)