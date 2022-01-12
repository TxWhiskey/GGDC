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
  default: () => Connect
});
var import_index_8e09b0bf = __toModule(require("../../chunks/index-8e09b0bf.js"));
var connect_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--default-width:1000px}.page-container.svelte-1y6qzni{width:100%;display:flex;flex-direction:column;gap:2rem;align-items:center;margin-bottom:1rem}.page-columns.svelte-1y6qzni{display:flex;flex-flow:column wrap-reverse;gap:2em;width:var(--default-width);padding-top:2em}.header-section-logo.svelte-1y6qzni{width:150px}.header-section-text.svelte-1y6qzni{font-size:2em}.form-section.svelte-1y6qzni{flex:1;display:flex;flex-direction:column;gap:2em;align-items:center}.form-content.svelte-1y6qzni{display:flex;flex-direction:column;align-items:center;gap:2rem}.form-row.svelte-1y6qzni{display:flex;flex-flow:row wrap;gap:2rem;width:100%;justify-content:space-between;align-items:center}.form-item.svelte-1y6qzni{border:1px solid var(--light-grey);padding:.5rem 1rem;font-weight:400;color:var(--dark-grey);border-radius:0%}.form-item.svelte-1y6qzni::placeholder{color:var(--dark-grey)}.form-select.svelte-1y6qzni{flex:1}.form-text.svelte-1y6qzni{width:100%}.form-submit.svelte-1y6qzni{border:1px solid var(--light-grey);background-color:white;padding:1rem 2rem;width:100%;font-size:1rem;font-weight:400;border-radius:0%;-webkit-appearance:none;cursor:pointer}.form-submit.svelte-1y6qzni:hover{background-color:var(--light-grey)}.schedule-submit.svelte-1y6qzni{width:100%}.schedule-btn.svelte-1y6qzni{border:1px solid var(--light-grey);background-color:var(--teal);color:white;padding:1rem 2rem;width:100%;font-size:1rem;font-weight:400;border-radius:0%;cursor:pointer}.schedule-btn.svelte-1y6qzni:hover{background-color:var(--light-grey);color:var(--dark-grey)}.details-section.svelte-1y6qzni{flex:1;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;gap:2rem}.details.svelte-1y6qzni{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;gap:1em;width:100%}.detail-header.svelte-1y6qzni{color:var(--teal);font-weight:400}.response-container.svelte-1y6qzni{display:flex;flex-flow:column wrap;gap:1em}@media(max-width: 1000px){:root{--default-width:100%}.page-container.svelte-1y6qzni{padding:1rem 1rem}.page-columns.svelte-1y6qzni{padding:0}.form-section.svelte-1y6qzni{min-width:400px}.form-item.svelte-1y6qzni{width:100%}}@media(max-width: 450px){.form-section.svelte-1y6qzni{min-width:fit-content;width:100%}.form-content.svelte-1y6qzni{width:100%;gap:1em}.form-row.svelte-1y6qzni{gap:1em}.form-item.svelte-1y6qzni{width:100%;font-size:16px}.details-section.svelte-1y6qzni{flex-direction:column;width:100%;padding-top:2rem;gap:1rem}.details.svelte-1y6qzni{align-items:flex-start;width:100%}}",
  map: null
};
const Connect = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let phone = "";
  let architectHired = false;
  let architectSeeking = false;
  let builderHired = false;
  let builderSeeking = false;
  let designerHired = false;
  let designerSeeking = false;
  $$result.css.add(css);
  return `${$$result.head += `<script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-212337181-1"}" data-svelte="svelte-1y9u5p2"><\/script><script data-svelte="svelte-1y9u5p2">window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-212337181-1');
    <\/script>`, ""}



<div class="${"page-container svelte-1y6qzni"}">

    <div class="${"page-columns svelte-1y6qzni"}"><div class="${"form-section svelte-1y6qzni"}"><img src="${"/images/GG-Square.svg"}" alt="${""}" class="${"header-section-logo svelte-1y6qzni"}">
            <h3 class="${"header-section-text svelte-1y6qzni"}">Let&#39;s Connect!
            </h3>

            
            

            ${`${`<form class="${"form-content svelte-1y6qzni"}" action="${"/api/contact"}" method="${"POST"}"><div class="${"form-row svelte-1y6qzni"}"><input type="${"text"}" class="${"form-item svelte-1y6qzni"}" name="${"first-name"}" placeholder="${"First Name"}"${(0, import_index_8e09b0bf.d)("value", firstName, 0)}>
                    <input type="${"text"}" class="${"form-item svelte-1y6qzni"}" name="${"last-name"}" placeholder="${"Last Name"}"${(0, import_index_8e09b0bf.d)("value", lastName, 0)}></div>
                <div class="${"form-row svelte-1y6qzni"}"><input type="${"email"}" class="${"form-item svelte-1y6qzni"}" placeholder="${"*Email"}" required${(0, import_index_8e09b0bf.d)("value", email, 0)}>
                    <input type="${"tel"}" class="${"form-item svelte-1y6qzni"}" placeholder="${"Phone Number"}"${(0, import_index_8e09b0bf.d)("value", phone, 0)}></div>
                <div class="${"form-row svelte-1y6qzni"}"><h3 class="${"status-label"}">Project Type</h3>
                        <select name="${"job-types"}" id="${"job-types"}" class="${"form-item form-select svelte-1y6qzni"}"><option value="${"New Construction"}" class="${"form-option"}">New Construction</option><option value="${"Remodel with Builder"}" class="${"form-option"}">Remodel with Builder</option><option value="${"Remodel By Myself"}" class="${"form-option"}">Remodel By Myself</option><option value="${"Other"}" class="${"form-option"}">Other</option></select></div>
                <div class="${"form-row svelte-1y6qzni"}"><div class="${"status-section"}"><h3 class="${"status-label"}">Architect</h3>
                            <div class="${"status-options"}"><div class="${"status-option"}"><input type="${"checkbox"}" name="${"hired"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", architectHired, 1)}>
                                    <label class="${"checkbox-label"}" for="${"hired"}">Hired</label></div>
                                <div class="${"status-option"}"><input type="${"checkbox"}" name="${"seeking"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", architectSeeking, 1)}>
                                    <label class="${"checkbox-label"}" for="${"seeking"}">Seeking</label></div></div></div>

                        <div class="${"status-section"}"><h3 class="${"status-label"}">Builder</h3>
                            <div class="${"status-options"}"><div class="${"status-option"}"><input type="${"checkbox"}" name="${"hired"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", builderHired, 1)}>
                                    <label class="${"checkbox-label"}" for="${"hired"}">Hired</label></div>
                                <div class="${"status-option"}"><input type="${"checkbox"}" name="${"seeking"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", builderSeeking, 1)}>
                                    <label class="${"checkbox-label"}" for="${"seeking"}">Seeking</label></div></div></div>

                        <div class="${"status-section design"}"><h3 class="${"status-label"}">Interior Designer</h3>
                            <div class="${"status-options"}"><div class="${"status-option"}"><input type="${"checkbox"}" name="${"hired"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", designerHired, 1)}>
                                    <label class="${"checkbox-label"}" for="${"hired"}">Hired</label></div>
                                <div class="${"status-option"}"><input type="${"checkbox"}" name="${"seeking"}" class="${"checkbox"}"${(0, import_index_8e09b0bf.d)("checked", designerSeeking, 1)}>
                                    <label class="${"checkbox-label"}" for="${"seeking"}">Seeking</label></div></div></div></div>
                
                <div class="${"form-row svelte-1y6qzni"}"><textarea name="${""}" id="${""}" cols="${"30"}" rows="${"10"}" class="${"form-item form-text svelte-1y6qzni"}" placeholder="${"Tell us a bit about what you're looking for"}">${""}</textarea></div>

                <div class="${"form-row svelte-1y6qzni"}" style="${"justify-content:center;"}"><input type="${"submit"}" class="${"form-submit svelte-1y6qzni"}">
                    </div>

                <div class="${"form-row svelte-1y6qzni"}" style="${"justify-content:center;"}"><a href="${"https://georgiagracecollaboration.hbportal.co/schedule/6163b3aee4a11230f3e34a24"}" target="${"_blank"}" rel="${"external"}" class="${"schedule-submit svelte-1y6qzni"}"><button class="${"schedule-btn svelte-1y6qzni"}" type="${"button"}">Schedule Discovery Call</button></a></div></form>`}`}</div>

        <div class="${"details-section svelte-1y6qzni"}"><div class="${"details svelte-1y6qzni"}"><div class="${"detail"}"><h5 class="${"detail-header svelte-1y6qzni"}">Phone</h5>
                    <a href="${"tel: 7132482987"}" class="${"detail"}">713.248.2987</a></div>
                <div class="${"detail"}"><h5 class="${"detail-header svelte-1y6qzni"}">Email</h5>
                    <a href="${"mailto: Info@GGCollab.com"}" class="${"detail"}">Info@GGCollab.com</a></div>
                <div class="${"detail"}"><h5 class="${"detail-header svelte-1y6qzni"}">Instagram</h5>
                    <a href="${"https://www.instagram.com/ggcollab/"}" class="${"detail"}">@GGCollab</a></div></div></div></div>

</div>`;
});
