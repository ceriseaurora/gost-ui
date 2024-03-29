/* eslint-disable */
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import MonacoEditor from "react-monaco-editor";
// import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
// import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
// import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
// @ts-ignore
// import { language as yamlLanguage } from "monaco-editor/esm/vs/basic-languages/yaml/yaml";

// eslint-disable-next-line
// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    console.log("[label]", label);
    // setLocaleData(zh_CN.contents);
    if (label === "json") {
      return new jsonWorker();
    }
    // if (label === "css" || label === "scss" || label === "less") {
    //   return new cssWorker();
    // }
    // if (label === "html" || label === "handlebars" || label === "razor") {
    //   return new htmlWorker();
    // }
    // if (label === "typescript" || label === "javascript") {
    //   return new tsWorker();
    // }
    return new editorWorker();
  },
};
monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  allowComments: true,
  trailingCommas: "warning",
});
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

export {
  MonacoEditor
}