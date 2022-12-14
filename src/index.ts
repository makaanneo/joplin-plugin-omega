import joplin from "api";
import { ContentScriptType } from "api/types";

joplin.plugins.register({
  onStart: async function () {
    console.info("Hello world. Test plugin started!");
    await joplin.contentScripts.register(
      ContentScriptType.CodeMirrorPlugin,
      "omega-codemirror",
      "./codemirror/index.js"
    );
  },
});
