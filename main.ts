import { Editor, Plugin } from 'obsidian';

export default class SpeechToTextKeyboardHelper extends Plugin {
  commands = [
    {
      name: "Prepend new line (and jump to it)",
      id: "prepend-new-line",
      editorCallback: (editor: Editor) => {
        const line = editor.getCursor().line;
        createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor, line);
      }
    },
    {
      name: "Append new line (and jump to it)",
      id: "append-new-line",
      editorCallback: (editor: Editor) => {
        const line = editor.getCursor().line + 1;
        createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor, line);
      }
    },
  ]

  async onload() {
    this.commands.map(e => this.addCommand(e));
  }
}

function createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor: Editor, line: number) {
  editor.replaceRange("\n", { line, ch: 0 });
  editor.setCursor({ line, ch: 0 });
}

