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
  default: () => Journal,
  load: () => load
});
var import_index_8e09b0bf = __toModule(require("../../../../../chunks/index-8e09b0bf.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-1ggix2h{display:flex;flex-flow:column nowrap;gap:1rem;padding:1rem}ul.svelte-1ggix2h{margin:0;padding:0;list-style-type:none;display:flex;flex-flow:column nowrap;gap:.5rem}li.svelte-1ggix2h{display:flex;gap:.5rem;align-items:center}.post-status.svelte-1ggix2h{padding:.25rem;border-radius:4px;font-size:.75rem;border:none;background-color:var(--purple);color:white}.published.svelte-1ggix2h{background-color:var(--teal);color:white}.link-btn.svelte-1ggix2h{color:white;background-color:var(--teal);padding:.5rem;width:fit-content}",
  map: null
};
async function load({ session, fetch }) {
  const res = await fetch("/api/journals");
  const journals = await res.json();
  return { props: { posts: journals } };
}
const Journal = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="${"page-container svelte-1ggix2h"}"><h1>Journals</h1>

    <ul class="${"svelte-1ggix2h"}">${(0, import_index_8e09b0bf.b)(posts, (post) => `<li class="${"svelte-1ggix2h"}"><button class="${["post-status svelte-1ggix2h", post.published ? "published" : ""].join(" ").trim()}">${post.published ? `Published` : `Draft`}</button>

                <a${(0, import_index_8e09b0bf.d)("href", "/admin/portal/journal/edit/" + post.id, 0)}>${(0, import_index_8e09b0bf.e)(post.title)}</a>
                
                

            </li>`)}</ul>


    <a href="${"/admin/portal/journal/edit/new"}" class="${"link-btn svelte-1ggix2h"}">Create New Post</a>

</div>`;
});
