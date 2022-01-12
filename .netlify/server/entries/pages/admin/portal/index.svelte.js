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
  default: () => Portal
});
var import_index_8e09b0bf = __toModule(require("../../../../chunks/index-8e09b0bf.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-7xbv47{padding:1rem;display:flex;flex-direction:column;gap:1rem}ul.svelte-7xbv47{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:column;gap:.5rem}li.svelte-7xbv47{padding:.5rem;background-color:var(--teal);color:white;width:fit-content;border-radius:4px}",
  map: null
};
const Portal = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-7xbv47"}"><h1>Admin Portal</h1>

    <ul class="${"svelte-7xbv47"}"><li class="${"svelte-7xbv47"}"><a href="${"/admin/portal/journal"}">Journals</a></li></ul>

</div>`;
});
