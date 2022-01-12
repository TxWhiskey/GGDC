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
  default: () => Routes
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-tyo258{min-height:150px;height:calc(100vh - var(--nav-height));background:url('/images/hero-house.jpg'), rgba(72, 72, 72, 0.75);background-repeat:no-repeat;background-size:cover;background-blend-mode:multiply;background-position:center;color:white;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}.hero-content.svelte-tyo258{display:flex;flex-flow:row nowrap;justify-content:space-evenly;gap:20px;flex:1;max-width:1200px;padding:40px}.hero-items.svelte-tyo258{display:flex;flex-flow:column wrap;gap:40px;list-style-type:none;margin:0;padding:0;flex:1}.hero-link.svelte-tyo258{color:white;text-decoration:none;border-bottom:white 1px solid;padding-bottom:5px;font-weight:200;font-size:3rem;text-transform:uppercase}.hero-details.svelte-tyo258{display:flex;flex-flow:column nowrap;gap:10px;text-transform:uppercase;text-align:right;flex:1}.hero-detail.svelte-tyo258{font-size:x-large;font-weight:200;color:white}.hero-hr.svelte-tyo258{width:300px;margin-right:0;height:1px;border:none;color:white;background-color:white}.hero-slogan.svelte-tyo258{text-transform:none;margin-left:auto;text-align:right;font-size:x-large;font-weight:200;color:white}.info-section.svelte-tyo258{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4rem;padding:100px var(--content-padding);background-color:rgb(235, 235, 235);color:white}.text-cta.svelte-tyo258{display:flex;flex-flow:column nowrap;gap:40px;justify-content:center;align-items:center;color:var(--teal)}.info-text.svelte-tyo258{font-size:1.5rem;text-align:left;line-height:1.4;max-width:900px;color:var(--teal)}.contact-info-section.svelte-tyo258{display:flex;flex-flow:column wrap;align-items:center;padding:100px 0}.contact-info-container.svelte-tyo258{max-width:var(--standard-width);display:flex;flex-flow:column wrap;align-items:center;gap:2rem}.contact-info-logo.svelte-tyo258{max-width:250px}.contact-info-cta.svelte-tyo258{background-color:white;color:var(--teal);font-size:1.5rem;font-weight:300;cursor:pointer;text-decoration:none;border-bottom:1px var(--teal) solid}.contact-info-cta.svelte-tyo258:hover{color:var(--purple);border-color:var(--purple)}.contact-info-split.svelte-tyo258{display:flex;flex-flow:row wrap;align-items:center;gap:20px}.contact-info-item.svelte-tyo258{flex:1;font-size:1.5rem;font-weight:300;color:var(--teal);text-align:center}@media(max-width: 745px){.hero-br.svelte-tyo258{display:static}}@media(max-width: 900px){.hero.svelte-tyo258{padding:10px;height:calc(100vh - 150px)}.hero-content.svelte-tyo258{flex-flow:column nowrap;justify-content:center;align-items:center;text-align:center;gap:100px}.hero-link.svelte-tyo258{font-size:2rem}.hero-details.svelte-tyo258{text-align:center}.hero-detail.svelte-tyo258{font-size:1rem;align-self:center;justify-content:center}.hero-hr.svelte-tyo258{margin:auto;width:80%\n        }.hero-slogan.svelte-tyo258{text-align:center;margin:auto;font-size:1rem}.info-section.svelte-tyo258{padding:40px}.info-text.svelte-tyo258{font-size:1.25rem;text-align:left}}",
  map: null
};
const Routes = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-212337181-1"}" data-svelte="svelte-1y9u5p2"><\/script><script data-svelte="svelte-1y9u5p2">window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    <\/script>`, ""}

<section class="${"hero svelte-tyo258"}"><div class="${"hero-content svelte-tyo258"}"><ul class="${"hero-items svelte-tyo258"}"><li class="${"hero-item"}"><h3><a href="${"/about"}" class="${"hero-link svelte-tyo258"}">About
                    </a></h3></li>
            <li class="${"hero-item"}"><h3><a href="${"/capabilities"}" class="${"hero-link svelte-tyo258"}">Capabilities
                    </a></h3></li>
            <li class="${"hero-item"}"><h3><a href="${"/experience"}" class="${"hero-link svelte-tyo258"}">Experience
                    </a></h3></li>
            <li class="${"hero-item"}"><h3><a href="${"/connect"}" class="${"hero-link svelte-tyo258"}">Let&#39;s Connect
                    </a></h3></li></ul>
        <div class="${"hero-details svelte-tyo258"}"><h4 class="${"hero-detail svelte-tyo258"}">Your proactive construction <br class="${"hero-br svelte-tyo258"}"> advisor and representative
            </h4>
            <hr class="${"hero-hr svelte-tyo258"}"> 
            <p class="${"hero-slogan svelte-tyo258"}">Planning and preparing <br class="${"hero-br svelte-tyo258"}"> for what lies ahead</p></div></div></section>

<section class="${"info-section svelte-tyo258"}"><div class="${"text-cta svelte-tyo258"}"><p class="${"info-text svelte-tyo258"}">Georgia Grace Collaboration helps you make informed decisions during the construction of your home by analyzing options provided by your builder and design team. We ensure you find the right approach to every circumstance and scenario with a focus on protecting your investment.
        </p>
        
        <a class="${"cta-btn cta-btn-min"}" href="${"/capabilities"}">Guide Me</a></div></section>
 
<section class="${"contact-info-section svelte-tyo258"}"><div class="${"contact-info-container svelte-tyo258"}"><img class="${"contact-info-logo svelte-tyo258"}" src="${"/images/GG-Square.svg"}" alt="${""}">
        <div class="${"contact-info-split svelte-tyo258"}"><a href="${"mailto: Info@GGCollab.com"}" class="${"contact-info-item svelte-tyo258"}">Info@GGCollab.com</a>
            <a href="${"tel: 7132482987"}" class="${"contact-info-item svelte-tyo258"}">713.248.2987</a></div>
        <a href="${"/connect"}" class="${"contact-info-cta svelte-tyo258"}">Get in touch</a></div>
</section>`;
});
