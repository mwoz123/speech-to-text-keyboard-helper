import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';



export default class MyPlugin extends Plugin {

	// const commands = [{name: '<enter> command', key: (editor: Editor) => editor},
// {name: '<enter> at the end of line'}]

	async onload() {
		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor) => { //TODO Extract to commands
				editor.replaceRange(
					'\n',
					editor.getCursor(),
				);
				editor.setCursor( {line:  (editor.getCursor().line + 1), ch: 0})
				}
		});
	}
}

