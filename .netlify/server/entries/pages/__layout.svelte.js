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
  default: () => _layout
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var import_stores_a7d20288 = __toModule(require("../../chunks/stores-a7d20288.js"));
var nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".nav-bar.svelte-8mxbpr{display:flex;flex-flow:row wrap;gap:10px;padding:10px;align-items:center;box-sizing:border-box;position:fixed;background-color:white;width:100%;box-shadow:0 0 5px rgba(0, 0, 0, 0.356);z-index:100}.nav-header.svelte-8mxbpr{font-size:1rem}.menu-icon.svelte-8mxbpr{margin-left:auto;display:none}.home-link.svelte-8mxbpr{text-decoration:none}.nav-items.svelte-8mxbpr{display:flex;flex-flow:row wrap;padding:0;margin:0 0 0 auto;list-style-type:none;gap:20px;align-items:center;cursor:pointer;text-transform:uppercase;font-size:1rem}.nav-link.svelte-8mxbpr{text-decoration:none;color:var(--dark-grey)}.active.svelte-8mxbpr{color:var(--purple);text-shadow:1px 1px 5px rgba(194, 132, 255, 0.5)}.hide-home.svelte-8mxbpr{display:none}.show-home.svelte-8mxbpr{display:list-item}@media(max-width: 900px){.svelte-8mxbpr{font-size:16px}.nav-header.svelte-8mxbpr{width:100%;display:flex;flex-flow:row nowrap}.menu-icon.svelte-8mxbpr{display:block}.nav-bar.svelte-8mxbpr{gap:10px}.nav-items.svelte-8mxbpr{display:flex;flex-flow:column nowrap;gap:1em;align-items:flex-start;margin:0 0 10px 0}.hide-nav.svelte-8mxbpr{display:none}}",
  map: null
};
const Nav = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_8e09b0bf.a)(import_stores_a7d20288.p, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<nav class="${"nav-bar svelte-8mxbpr"}"><h1 class="${"nav-header svelte-8mxbpr"}"><a href="${"/"}" class="${"home-link svelte-8mxbpr"}"><span class="${"purple  svelte-8mxbpr"}">Georgia</span> <span class="${"teal  svelte-8mxbpr"}">Grace </span><span class="${"grey  svelte-8mxbpr"}">Collaboration</span></a>
            <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"menu-icon svelte-8mxbpr"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}" class="${"svelte-8mxbpr"}"></path></svg></h1>
    <ul class="${["nav-items svelte-8mxbpr", "hide-nav"].join(" ").trim()}"><li class="${"nav-item svelte-8mxbpr"}"><a href="${"/"}" class="${[
    "nav-link hide-home svelte-8mxbpr",
    $page.url.pathname != "/" ? "show-home" : ""
  ].join(" ").trim()}">Home</a></li>
        <li class="${"nav-item svelte-8mxbpr"}"><a href="${"/about"}" class="${["nav-link svelte-8mxbpr", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}">About</a></li>
        <li class="${"nav-item svelte-8mxbpr"}"><a href="${"/capabilities"}" class="${[
    "nav-link svelte-8mxbpr",
    $page.url.pathname === "/capabilities" ? "active" : ""
  ].join(" ").trim()}">Capabilities</a></li>
        <li class="${"nav-item svelte-8mxbpr"}"><a href="${"/experience"}" class="${["nav-link svelte-8mxbpr", $page.url.pathname === "/experience" ? "active" : ""].join(" ").trim()}">Experience</a></li>
        <li class="${"nav-item svelte-8mxbpr"}"><a href="${"/journal"}" class="${["nav-link svelte-8mxbpr", $page.url.pathname === "/journal" ? "active" : ""].join(" ").trim()}">Journal</a></li>
        <li class="${"nav-item svelte-8mxbpr"}"><a href="${"/connect"}" class="${["nav-link svelte-8mxbpr", $page.url.pathname === "/connect" ? "active" : ""].join(" ").trim()}">Let&#39;s Connect</a></li></ul>
</nav>`;
});
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-lsmw33{height:30px;background-color:var(--teal);color:white;margin-top:auto}",
  map: null
};
const Footer = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"footer svelte-lsmw33"}"></div>`;
});
var survey1_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-proano{min-height:100vh;display:flex;flex-flow:column nowrap}.content-container.svelte-proano{margin-top:calc(1.2rem + 20px)}",
  map: null
};
const _layout = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>GG Collab</title>`, ""}`, ""}

<main class="${"container svelte-proano"}">${(0, import_index_8e09b0bf.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
    <div class="${"content-container svelte-proano"}">${slots.default ? slots.default({}) : ``}</div>
    ${(0, import_index_8e09b0bf.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</main>

${``}`;
});
