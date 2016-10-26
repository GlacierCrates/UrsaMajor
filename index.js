/* eslint-disable strict, no-var, no-console */
// electron api: https://github.com/electron/electron/tree/master/docs/api

'use strict';

const electron = require('electron');
const {app, Menu, Tray} = electron;
const {BrowserWindow} = electron;
let CONSTS = require('./consts');
let mainWindow = null;
let tray = null;

function launchWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle(app.getName());
  });
  
  mainWindow.on('closed', () => {
    mainWindow = null;
    console.log('window-closed');
  });
}

app.on('window-all-closed', () => {
  // no longer close when all windows are closed
  /*if (process.platform !== 'darwin') {
    app.quit();
  }*/
});

app.on('ready', () => {

  tray = new Tray('glaciercrates.png');
  const contextMenu = Menu.buildFromTemplate([
      {label: 'Start', type: 'normal', click: () => {
        console.log('Start/pause');
      }},
      {label: 'Settings', type: 'normal', click: () => {
        launchWindow();
      }},
      {type: 'separator'},
      {label: 'Help', type: 'normal'},
      {label: 'Exit', type: 'normal', click: () => {
        app.quit();
      }}
    ]);
  tray.setToolTip(CONSTS.APP_TITLE);
  tray.setTitle(CONSTS.APP_TITLE);
  tray.setContextMenu(contextMenu);
});
