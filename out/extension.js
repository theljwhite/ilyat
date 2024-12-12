"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
async function activate() {
    await removeOldVersionAfterMigration();
}
function deactivate() { }
async function removeOldVersionAfterMigration() {
    let uninstallOld = vscode.commands.executeCommand("workbench.extensions.uninstallExtension", "ljwhite.ilyat-vscode");
    await Promise.all([uninstallOld]);
}
//# sourceMappingURL=extension.js.map