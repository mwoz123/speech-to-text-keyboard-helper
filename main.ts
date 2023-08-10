import { Editor, Plugin } from 'obsidian';

export default class SpeechToTextKeyboardHelper extends Plugin {
	commands = [
      {
        name: "Prepend new line (and jump to it)",
        id: "speach2text-kb-prepend-new-line",
        editorCallback: (editor: Editor) => {
          const line = editor.getCursor().line;
          editor.replaceRange("\n", { line, ch: 0 });
          editor.setCursor({ line, ch: 0 });
        }
      },
      {
        name: "Append new line (and jump to it)",
        id: "speach2text-kb-append-new-line",
        editorCallback: (editor: Editor) => {
          const line = editor.getCursor().line + 1;
          editor.replaceRange("\n", { line, ch: 0 });
          editor.setCursor({ line, ch: 0 });
        }
      },
	]

	async onload() {
		this.commands.map(e => this.addCommand(e));
	}
}

