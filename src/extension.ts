import * as vscode from "vscode";

export async function activate() {
  await removeOldVersionAfterMigration();
}

export function deactivate() {}

async function removeOldVersionAfterMigration() {
  let uninstallOld = vscode.commands.executeCommand(
    "workbench.extensions.uninstallExtension",
    "ljwhite.ilyat-vscode"
  );
  await Promise.all([uninstallOld]);
}
