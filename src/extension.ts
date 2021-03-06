// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-extension-playground" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-extension-playground.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		let options: vscode.InputBoxOptions = {
			prompt: "Label: ",
			placeHolder: "(placeholder)"
		}

		vscode.window.showInformationMessage("Do you want to do this?", "Yes", "No")
			.then(answer => {
				if (answer === "Yes") {
					vscode.window.setStatusBarMessage('Let\'s make an action move!');
					vscode.window.showWarningMessage('Don\'t move, I will shot!');
					vscode.window.showErrorMessage('Guns are fired.');
				}
			});
		
		vscode.window.showQuickPick(['s', 't']);

		vscode.workspace.getConfiguration().update("workbench.colorTheme", 'Abyss');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
