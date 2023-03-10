import { app, Menu, nativeImage, Tray, shell, dialog } from "electron";
import { appConfig } from "@/utils/main/config";
import pkg from "../../package.json";

// Create a status page (task scheduled or running. notifications etc.)
export const makeTray = (iconPath, mainWindow, assistWindow) => {
  const icon = nativeImage.createFromPath(iconPath).resize({ width: 20, height: 20 })
  const appIcon = new Tray(icon)

  appIcon.setToolTip('AuTool')

  const createContextMenu = () =>
    Menu.buildFromTemplate([
      // {
      //   label: "Help documents",
      //   click: () => {
      //     process.nextTick(() => {
      //       shell.openExternal("https://github.com/danalites/autoo");
      //     });
      //   },
      // },
      // { type: "separator" },
      {
        label: "Main window",
        click() {
          mainWindow.show();
          mainWindow.focus();
          // shell.beep()
        },
      },
      {
        label: "Restart",
        click() {
          app.relaunch();
          app.quit();
        },
      },
      {
        label: "Exit",
        click() {
          app.quit();
        }
      },
      { type: "separator" },
      {
        label: "About AuTool",
        click() {
          dialog.showMessageBox({
            title: "AuTool copyright © 2021 Danalites LTD",
            message: "Scalable Software Automation",
            detail: `version: ${pkg.version}\n`,
          });
        },
      },
    ]);

  appIcon.on("click", () => {
    appIcon.setContextMenu(createContextMenu());
    appIcon.popUpContextMenu();
  });
  
  appIcon.on('drop-files', function(event, files) {
    assistWindow.webContents.send('drop-files', files)
  });

  appIcon.setContextMenu(createContextMenu());

}

