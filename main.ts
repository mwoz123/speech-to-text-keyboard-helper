import { Editor, Plugin } from 'obsidian';



export default class SpeechToTextKeyboardHelper extends Plugin {

	commands = [
		{
			name: 'Start new line', id: 'speech2text-helper-start-new-line', editorCallback: (editor: Editor) => {
				editor.replaceRange("\n", { line: editor.getCursor().line + 1, ch: 0 });
				editor.setCursor({ line: editor.getCursor().line + 1, ch: 0 });
			}
		},
		// { name: 'Start new line after last char', }
	]

	async onload() {
		this.commands.map(e => this.addCommand(e));
	}
}

