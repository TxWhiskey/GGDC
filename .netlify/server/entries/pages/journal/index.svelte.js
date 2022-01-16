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
  default: () => Journal
});
var import_index_8e09b0bf = __toModule(require("../../../chunks/index-8e09b0bf.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-18iq73e{padding-top:1rem;width:100%;display:flex;flex-direction:column;gap:2rem;align-items:center;justify-content:center;margin-bottom:1rem;padding:0 1rem}.page-heading.svelte-18iq73e{font-size:5rem;font-weight:500}.journal-posts.svelte-18iq73e{list-style-type:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-gap:16px;justify-content:center}.journal-post.svelte-18iq73e{text-decoration:none}.post-link.svelte-18iq73e{border:thin solid var(--light-grey);padding:1rem;display:flex;flex-flow:column nowrap;gap:.5rem;height:100%}.post-image.svelte-18iq73e{background-position:center;background-size:cover;height:300px}.post-header.svelte-18iq73e{font-size:1.75rem;font-weight:300}",
  map: null
};
const Journal = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-212337181-1"}" data-svelte="svelte-1y9u5p2"><\/script><script data-svelte="svelte-1y9u5p2">window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    <\/script>`, ""}

<div class="${"page-container svelte-18iq73e"}"><h1 class="${"page-heading svelte-18iq73e"}">Journal</h1>
    <ul class="${"journal-posts svelte-18iq73e"}"><li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/georgiagrace"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/images/home/exterior-construction-2.jpg)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">Connecting Homeowners With The Best Custom Home Builders</h4></a></li>
        <li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/gettingstartedchecklist"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/blogs/gettingstartedchecklist/HomeUnderConstruction.jpg)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">Key Player Checklist to Get You Started Building or Renovating</h4></a></li>
        <li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/firstimpressions"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/blogs/firstimpressions/DSC07350.png)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">First Impression is the Last Impression</h4></a></li>
        <li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/lessonslearned"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/blogs/lessonslearned/Truss.JPG)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">One Homeowner\u2019s Lessons Learned </h4></a></li>
        <li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/insight"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/blogs/insight/Pathricia-Paloma.JPG)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">Insight into 3 Houston Interior Designers: Part 1</h4></a></li>
        <li class="${"journal-post svelte-18iq73e"}">
            <a href="${"/journal/posts/35questions"}" class="${"post-link svelte-18iq73e"}"><div class="${"post-image svelte-18iq73e"}" style="${"background-image: url(/blogs/35questions/beams.jpg)"}"></div>
                <h4 class="${"post-header svelte-18iq73e"}">35 Questions to Ask Potential Builders Before You Hire Them</h4></a></li></ul>
</div>`;
});
