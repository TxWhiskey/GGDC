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
  default: () => Capabilities
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var capabilities_svelte_svelte_type_style_lang = "";
const css = {
  code: '.layout.svelte-1mrfntq{display:flex;flex-flow:column wrap;align-items:center;justify-content:center;padding:40px;gap:2em;min-height:100vh;max-width:1000px;margin:0 auto}.gg-logo.svelte-1mrfntq{max-width:200px}.about.svelte-1mrfntq{max-width:800px;text-align:center}.about-info.svelte-1mrfntq{display:flex;flex-flow:column wrap;justify-content:space-between;align-items:center;gap:40px;line-height:1.5em;flex:1.5}@media(max-width: 700px){.layout.svelte-1mrfntq{padding:10px}.about-info.svelte-1mrfntq{display:none}}.about-pat.svelte-1mrfntq{flex:1;display:flex;flex-flow:row wrap;justify-content:space-between;gap:2em}.column.svelte-1mrfntq{flex:1;display:flex;flex-flow:column nowrap;gap:2em;align-items:center}.bio.svelte-1mrfntq{background-color:rgb(235, 235, 235);flex:1}.bio__header.svelte-1mrfntq{padding:0 2em;position:relative;z-index:1;overflow:hidden}.bio__header.svelte-1mrfntq::after{content:"";position:absolute;z-index:2;top:0;left:0;right:0;height:40%;background:white}.bio__media.svelte-1mrfntq{width:60%;float:left;position:relative;z-index:3;max-height:400px}.bio-media-alt.svelte-1mrfntq{float:right}.bio__img.svelte-1mrfntq{width:100%;max-width:100%;height:auto;vertical-align:middle}.bio-title.svelte-1mrfntq{position:absolute;z-index:4;bottom:1em;left:auto;right:0;max-width:100%;padding:1em 2em;background:rgba(255, 255, 255, 0.9);display:flex;flex-flow:column wrap;gap:10px;text-align:end;color:var(--dark-grey)}.bio-title-alt.svelte-1mrfntq{left:0;right:auto;text-align:start}.bio-h3.svelte-1mrfntq{margin-bottom:-.25em;text-transform:uppercase;font-size:1.75em}.bio-h4.svelte-1mrfntq{position:relative;display:block;width:100%;padding-bottom:.5em;margin-bottom:0;font-size:x-large}.bio__main.svelte-1mrfntq{background:rgb(235, 235, 235);position:relative;z-index:1;padding:1em;color:var(--teal);font-weight:300;display:flex;flex-flow:column wrap;align-items:center}.services.svelte-1mrfntq{color:var(--teal);font-weight:0;list-style:none;margin:0;padding:0;width:100%;display:flex;flex-direction:column}.service.svelte-1mrfntq{font-weight:300;line-height:1.5em;padding:1em;background-color:inherit}.service.svelte-1mrfntq:nth-child(odd){background-color:rgb(225, 225, 225)}.service-prompt.svelte-1mrfntq{font-weight:400;font-size:1rem;margin-bottom:1em;color:var(--teal)}.service-response.svelte-1mrfntq{padding-left:1em}@media(max-width: 800px){.about-pat.svelte-1mrfntq{flex-direction:column}}@media(max-width: 1000px){.about-pat.svelte-1mrfntq{flex:2}.bio__media.svelte-1mrfntq{float:none;width:100%;max-width:400px;max-height:400px}}',
  map: null
};
const Capabilities = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-212337181-1"}" data-svelte="svelte-1y9u5p2"><\/script><script data-svelte="svelte-1y9u5p2">window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    <\/script>`, ""}

<div class="${"layout svelte-1mrfntq"}"><section class="${"about-info svelte-1mrfntq"}"><img src="${"/images/GG-Stacked.svg"}" alt="${""}" class="${"gg-logo svelte-1mrfntq"}" style="${"margin-bottom: 1em;"}">
        <p class="${"about bio-h4 svelte-1mrfntq"}">Advocating for homeowners during the homebuilding process, and upscaling homebuilders to better serve my clients.
        </p></section>

    <section class="${"about-pat svelte-1mrfntq"}"><div class="${"column svelte-1mrfntq"}"><div class="${"bio svelte-1mrfntq"}"><div class="${"bio__header svelte-1mrfntq"}"><div class="${"bio__media bio-media-alt svelte-1mrfntq"}"><img src="${"/images/home/exterior.jpg"}" alt="${""}" class="${"bio__img svelte-1mrfntq"}"></div>
                    <div class="${"bio-title bio-title-alt svelte-1mrfntq"}"><h3 class="${"bio-h3 svelte-1mrfntq"}">Representing</h3>
                        <h3 class="${"bio-h3 svelte-1mrfntq"}">Homeowners</h3>
                        </div></div>
                <div class="${"bio__main svelte-1mrfntq"}"><ul class="${"services svelte-1mrfntq"}"><li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Are you thinking of building a home or renovating one? Don&#39;t know where to start?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">Let us generate a preliminary scope of work for your dream home. This will allow your builders to provide a comprehensive and competitive bid.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Are you worried about choosing the wrong builder? Need help finding the right one?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">We can do the legwork by reaching out to qualified experts that can execute your vision. This includes reviewing and analyzing their bids.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Wishing you had an experienced ally join you for meetings with specialists to ask the right questions?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">We are familiar with all the ins and outs of the building process. When you bring us on board, we ask the questions you haven\u2019t thought of. Diligence during pre-construction means reduced costs later.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Concerned about reviewing hundreds upon hundreds contractor invoices?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">Let us take that load off your shoulders. We ensure your invoices are in line with jobsite progress and alert you of any discrepancies. 
                            </p></li></ul></div></div>

            <a href="${"/documents/Services%20&%20Pricing%20Guide%20for%20Homeowners.pdf"}" class="${"cta-btn cta-btn-min"}" target="${"_blank"}">Homeowner Representation <br>Services &amp; Pricing Guide</a></div>
        
        <div class="${"column svelte-1mrfntq"}"><div class="${"bio svelte-1mrfntq"}"><div class="${"bio__header svelte-1mrfntq"}"><div class="${"bio__media svelte-1mrfntq"}"><img src="${"/images/home/stairs.jpeg"}" alt="${""}" class="${"bio__img svelte-1mrfntq"}"></div>
                    <div class="${"bio-title svelte-1mrfntq"}"><h3 class="${"bio-h3 svelte-1mrfntq"}">Upscaling</h3>
                        <h3 class="${"bio-h3 svelte-1mrfntq"}">Homebuilders</h3>
                        </div></div>
                <div class="${"bio__main svelte-1mrfntq"}"><ul class="${"services svelte-1mrfntq"}"><li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Do your prospective client&#39;s receive a well thought out document explaining your value?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">Collaboratively, we can create sales collateral that helps homeowners better understand the framework of your company.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Is your company consistent in the way it presents daily correspondence?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">We will create templates for your team to use on a daily basis to bring consistency to your day-to-day form of communicating.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Are you often re-inventing the wheel because there is no established process?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">We will work with your team to document the necessary steps to follow for common processes. This again, will bring consistency, and clarity on what should be happening on each project, from preconstruction to completion.
                            </p></li>
                        <li class="${"service svelte-1mrfntq"}"><h5 class="${"service-prompt svelte-1mrfntq"}">Is your online presence lacking in this day and age?
                            </h5>
                            <p class="${"service-response svelte-1mrfntq"}">Let us work with you and a team of experts to cohesively showcase what your company offers homeowners looking to hire the right builder for their home construction.
                            </p></li></ul></div></div>
        
            <a href="${"/documents/Services & Pricing Guide for Builders.pdf"}" class="${"cta-btn cta-btn-min"}" target="${"_blank"}">Homebuilder Upscaling <br>Services &amp; Pricing Guide</a></div></section>

</div>`;
});
