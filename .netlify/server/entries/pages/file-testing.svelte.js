var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => File_testing,
  load: () => load
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var import_firebase_6875ed47 = __toModule(require("../../chunks/firebase-6875ed47.js"));
var import_storage = __toModule(require("firebase/storage"));
var import_app = __toModule(require("@firebase/app"));
var import_auth = __toModule(require("@firebase/auth"));
var fileTesting_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{padding:1rem;display:flex;flex-flow:column nowrap;gap:.5rem}.container-row.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:row wrap;gap:.5rem;align-items:center}.folder-controls.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{background-color:var(--teal);padding:.5rem;border-radius:5px;display:flex;flex-flow:row wrap;gap:.5rem;align-items:center}.file-controls.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{background-color:var(--purple);padding:.5rem;border-radius:5px;display:flex;flex-flow:row wrap;gap:.5rem;align-items:center}button.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{border:none;background-color:transparent;padding:0;display:flex;flex-direction:row;align-items:center}.folder-btn.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{color:white}.new-file-btn.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{color:white}.folder-btn.svelte-1n2hp4j svg.svelte-1n2hp4j.svelte-1n2hp4j{fill:white}.folder-btn.svelte-1n2hp4j:hover svg.svelte-1n2hp4j.svelte-1n2hp4j{filter:drop-shadow( 0 0 5px rgba(0, 0, 0, 0.438))}.breadcrumbs.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:row wrap;gap:.5rem;list-style-type:none;padding:0;margin:0}.crumb.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:row nowrap;align-items:center}.empty.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:row wrap;align-items:center;padding:.5rem;cursor:default}.new-folder.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:row wrap;align-items:center;gap:.5rem;padding:.5rem}.new-file-cancel.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{color:white;font-size:1rem}.new-file-label.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{color:white;cursor:pointer;display:flex;flex-flow:row nowrap;align-items:center}.crumb.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{cursor:pointer}ul.breadcrumbs.svelte-1n2hp4j li.svelte-1n2hp4j+li.svelte-1n2hp4j::before{content:"/\\00a0"}.file-explorer.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{display:flex;flex-flow:column nowrap;border:thin solid black;list-style-type:none;padding:0;margin:0}.file-explorer-item.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{padding:.5rem;cursor:pointer;display:flex;flex-flow:row nowrap;align-items:center;gap:.5rem}.file-explorer-item.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j:hover{background-color:var(--light-grey)}.selected-file.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{background-color:var(--light-grey)}.new-file-label.svelte-1n2hp4j svg.svelte-1n2hp4j.svelte-1n2hp4j{fill:white;padding:0\r\n    }.new-file-cancel.svelte-1n2hp4j svg.svelte-1n2hp4j.svelte-1n2hp4j{fill:white}.new-file-btn.svelte-1n2hp4j svg.svelte-1n2hp4j.svelte-1n2hp4j{fill:white}.file-title.svelte-1n2hp4j.svelte-1n2hp4j.svelte-1n2hp4j{border:none;box-shadow:0 0 2px inset rgba(0, 0, 0, 0.324)}',
  map: null
};
const startingPath = [];
async function load({ page, fetch, session, stuff }) {
  let requestInit = {
    method: "POST",
    body: JSON.stringify({ path: startingPath }),
    headers: { "Content-Type": "application/json" }
  };
  const res = await fetch("/api/files", requestInit);
  const folderStructure = await res.json();
  return { status: 200, props: { folderStructure } };
}
const File_testing = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { folderStructure } = $$props;
  let selectedFileId = null;
  if ($$props.folderStructure === void 0 && $$bindings.folderStructure && folderStructure !== void 0)
    $$bindings.folderStructure(folderStructure);
  $$result.css.add(css);
  return `<div class="${"container svelte-1n2hp4j"}"><h1>File Testing</h1>
    
    <div class="${"container-row svelte-1n2hp4j"}">
        <div class="${"folder-controls svelte-1n2hp4j"}">
            <button class="${"folder-btn svelte-1n2hp4j"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-folder-plus svelte-1n2hp4j"}" viewBox="${"0 0 16 16"}"><path d="${"m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"}"></path><path d="${"M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"}"></path></svg></button>
        
            ${folderStructure.path.length ? `
                <button class="${"folder-btn svelte-1n2hp4j"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-trash svelte-1n2hp4j"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}"></path><path fill-rule="${"evenodd"}" d="${"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}"></path></svg></button>
        
                
                <button class="${"folder-btn svelte-1n2hp4j"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-gear svelte-1n2hp4j"}" viewBox="${"0 0 16 16"}"><path d="${"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}"></path><path d="${"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}"></path></svg></button>` : ``}
            ${``}</div>
        
        
        <div class="${"file-controls svelte-1n2hp4j"}">${`
                <label class="${"new-file-label svelte-1n2hp4j"}" for="${"new-file"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-file-earmark-plus svelte-1n2hp4j"}" viewBox="${"0 0 16 16"}"><path d="${"M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"}"></path><path d="${"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"}"></path></svg>
                    <input type="${"file"}" name="${"new-file"}" id="${"new-file"}" class="${"file-selector svelte-1n2hp4j"}" hidden></label>`}

            ${``}</div>

        ${``}</div>


    
    <ul class="${"breadcrumbs svelte-1n2hp4j"}"><li class="${"crumb svelte-1n2hp4j"}">Media Library</li>
        ${(0, import_index_8e09b0bf.b)(folderStructure.path, (crumb, index) => `<li class="${"crumb svelte-1n2hp4j"}">${(0, import_index_8e09b0bf.e)(crumb.title)}</li>`)}
        ${``}</ul>

    
    <ul class="${"file-explorer svelte-1n2hp4j"}">${!folderStructure.folders.length && !folderStructure.files.length ? `<li class="${"empty svelte-1n2hp4j"}">Empty</li>` : ``}

        ${``}

        
        ${(0, import_index_8e09b0bf.b)(folderStructure.folders, (folder) => `<li class="${"folder file-explorer-item svelte-1n2hp4j"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-folder"}" viewBox="${"0 0 16 16"}"><path d="${"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"}"></path></svg>
            
            ${(0, import_index_8e09b0bf.e)(folder.title)}
        
        </li>`)}

        
        ${(0, import_index_8e09b0bf.b)(folderStructure.files, (file) => `<li class="${[
    "file file-explorer-item svelte-1n2hp4j",
    file.id == selectedFileId ? "selected-file" : ""
  ].join(" ").trim()}">${file.type == "image" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-card-image"}" viewBox="${"0 0 16 16"}"><path d="${"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}"></path><path d="${"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"}"></path></svg>` : `${file.type == "document" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-file-earmark-text"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"}"></path><path d="${"M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"}"></path></svg>` : ``}`}
            
            ${(0, import_index_8e09b0bf.e)(file.title)}
            
        </li>`)}</ul>

</div>`;
});
