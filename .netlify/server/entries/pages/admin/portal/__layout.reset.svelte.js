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
  default: () => _layout_reset
});
var import_index_8e09b0bf = __toModule(require("../../../../chunks/index-8e09b0bf.js"));
var import_stores_a7d20288 = __toModule(require("../../../../chunks/stores-a7d20288.js"));
var import_firebase_6875ed47 = __toModule(require("../../../../chunks/firebase-6875ed47.js"));
var import_auth = __toModule(require("@firebase/auth"));
var import_app = __toModule(require("@firebase/app"));
var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1fzj5gk{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;height:100vh}.navbar.svelte-1fzj5gk{box-shadow:0 0 5px rgba(0, 0, 0, 0.356)}.navbar-items.svelte-1fzj5gk{list-style:none;padding:.5rem;margin:0;display:flex;flex-flow:row wrap;gap:1rem}.navbar-link.svelte-1fzj5gk:hover{color:var(--teal)}.content.svelte-1fzj5gk{height:100%;overflow:auto}",
  map: null
};
const _layout_reset = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_8e09b0bf.a)(import_stores_a7d20288.s, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `<div class="${"grid svelte-1fzj5gk"}"><nav class="${"navbar svelte-1fzj5gk"}"><ul class="${"navbar-items svelte-1fzj5gk"}"><li class="${"navbar-item"}"><a href="${"/admin/portal"}" class="${"navbar-link svelte-1fzj5gk"}">Admin Portal
                </a></li>
            <li class="${"navbar-item"}"><a href="${"/admin/portal/journal"}" class="${"navbar-link svelte-1fzj5gk"}">Journals</a></li>
            <li class="${"navbar-item"}">${(0, import_index_8e09b0bf.e)((_a = $session.user) == null ? void 0 : _a.email)}</li>
            <li class="${"navbar-item"}"><button class="${"navbar-btn"}">Logout</button></li></ul></nav>        

    <div class="${"content svelte-1fzj5gk"}">${slots.default ? slots.default({}) : ``}</div>

</div>`;
});
