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
  default: () => About
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: '.layout.svelte-1u7aqqs{display:flex;flex-flow:column wrap;align-items:center;justify-content:center;gap:40px;padding:40px;gap:80px;max-width:800px;margin:0 auto}.gg-logo.svelte-1u7aqqs{max-width:200px}.about-info.svelte-1u7aqqs{display:flex;flex-flow:column wrap;justify-content:space-between;align-items:center;gap:40px;line-height:1.5em;flex:1.5}.about-cta.svelte-1u7aqqs{background-color:transparent;color:var(--teal);padding:1.2em 2em;border:2px var(--teal) solid;font-size:1rem;font-weight:400;cursor:pointer;width:fit-content;background-color:white;color:var(--teal);display:none}.about-cta.svelte-1u7aqqs:hover{background-color:var(--teal);color:white}.about-pat.svelte-1u7aqqs{max-width:600px;flex:1}.bio.svelte-1u7aqqs{background-color:rgb(235, 235, 235)}.bio__header.svelte-1u7aqqs{padding:0 2em;position:relative;z-index:1;overflow:hidden}.bio__header.svelte-1u7aqqs::after{content:"";position:absolute;z-index:2;top:0;left:0;right:0;height:25%;background:white}.bio__media.svelte-1u7aqqs{width:60%;float:left;position:relative;z-index:3;max-height:400px}.bio__img.svelte-1u7aqqs{width:100%;max-width:100%;height:auto;vertical-align:middle}.bio-title.svelte-1u7aqqs{position:absolute;z-index:4;bottom:1em;left:auto;right:0;max-width:100%;padding:1em 2em;background:white;color:var(--dark-grey);display:flex;flex-direction:column;gap:10px}.bio-h3.svelte-1u7aqqs{margin-bottom:-.25em;text-transform:uppercase;font-size:1.75em}.bio-h4.svelte-1u7aqqs{position:relative;display:block;width:100%;padding-bottom:.5em;margin-bottom:0}.bio-h4.svelte-1u7aqqs::after{left:auto;right:0;content:"";position:absolute;bottom:0;width:60%;border-bottom:2px solid var(--teal)}.bio__main.svelte-1u7aqqs{background:rgb(235, 235, 235);position:relative;z-index:1;padding:1em 2em;color:var(--teal);font-weight:300;display:flex;flex-flow:column wrap;align-items:center}.bio__main.svelte-1u7aqqs::after{content:"";position:absolute;z-index:2;bottom:0;left:0;right:0;height:10%;background:white}.bio-about.svelte-1u7aqqs{margin-bottom:1em;line-height:1.5em}.bio-cta.svelte-1u7aqqs{color:white;background-color:var(--purple);border:2px solid var(--purple);padding:.75rem;font-size:1rem;z-index:4;position:relative;cursor:pointer}.bio-cta.svelte-1u7aqqs:hover{color:var(--purple);background-color:white;font-weight:400}@media(max-width: 1000px){.about-pat.svelte-1u7aqqs{flex:2}.bio__media.svelte-1u7aqqs{float:none;width:100%;max-height:400px}}',
  map: null
};
const About = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-212337181-1"}" data-svelte="svelte-1y9u5p2"><\/script><script data-svelte="svelte-1y9u5p2">window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    <\/script>`, ""}

<div class="${"layout svelte-1u7aqqs"}"><section class="${"about-info svelte-1u7aqqs"}"><img src="${"/images/GG-Stacked.svg"}" alt="${""}" class="${"gg-logo svelte-1u7aqqs"}">
        <p class="${"about"}">Georgia Grace Collaboration is passionate about empowering our clients by providing sound advice, so you are confident making decisions during the construction of your home. Our priority is building lasting relationships with our clients and nurturing partnerships with expert builders and designers who share our passion for providing client satisfaction. Whether you\u2019re planning a remodel or starting from the ground up, you can rest assured that we are on your side, at your side. We work shoulder to shoulder with you to ensure you have the right team in place and that your vision is completely integrated. 
        </p>

        <p class="${"about"}">We help you navigate the homebuilding journey, from concept to completion. We ensure all professionals on your project are in alignment to achieve your design dreams and budget realities. Let us be your eyes and ears, anticipating and identifying any issues coming down the line. We advocate for you at every step along the way, turning big conversations into practical action.
        </p>
    
        <button class="${"about-cta svelte-1u7aqqs"}">Learn more</button></section>

    <section class="${"about-pat svelte-1u7aqqs"}"><div class="${"bio svelte-1u7aqqs"}"><div class="${"bio__header svelte-1u7aqqs"}"><div class="${"bio__media svelte-1u7aqqs"}"><img src="${"/images/bio.jpg"}" alt="${""}" class="${"bio__img svelte-1u7aqqs"}"></div>
                <div class="${"bio-title svelte-1u7aqqs"}"><h3 class="${"bio-h3 svelte-1u7aqqs"}">Patricia Sims</h3>
                    <h4 class="${"bio-h4 svelte-1u7aqqs"}">Client Advocate</h4></div></div>
            <div class="${"bio__main svelte-1u7aqqs"}"><p class="${"bio-about svelte-1u7aqqs"}">During my years as an employed builder, I learned that my true passion lay at the side of my clients\u2014listening closely to what mattered most to them, and acting on their behalf. At times this was a difficult balancing act, as I also had to protect my builder\u2019s interests. Since then I\u2019ve shifted gears and now work with homeowners looking for an unbiased opinion. This gives me pure joy, as I am able to work closely with the construction team while being able to provide full transparency when asked for my genuine perspective.
                </p>
                <a href="${"/experience"}"><button class="${"bio-cta svelte-1u7aqqs"}">Featured Projects</button></a></div></div></section>

</div>`;
});
