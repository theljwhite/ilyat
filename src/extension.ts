import * as vscode from "vscode";

export async function activate() {
  // await removeOldVersionAfterMigration();
  console.log("Extension activated");
}

export function deactivate() {}

async function removeOldVersionAfterMigration() {
  let uninstallOld = vscode.commands.executeCommand(
    "workbench.extensions.uninstallExtension",
    "ljwhite.ilyat-vscode"
  );
  await Promise.all([uninstallOld]);
}
