var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => U5Bidu5D,
  load: () => load,
  ssr: () => ssr
});
var import_index_8e09b0bf = __toModule(require("../../../../../../chunks/index-8e09b0bf.js"));
var import_uuid = __toModule(require("uuid"));
var import_firebase_6875ed47 = __toModule(require("../../../../../../chunks/firebase-6875ed47.js"));
var import_storage = __toModule(require("firebase/storage"));
var import_app = __toModule(require("@firebase/app"));
var import_auth = __toModule(require("@firebase/auth"));
const css$g = {
  code: ".loader.svelte-hzlnc2{--size-mid:6vmin;--size-dot:1.5vmin;--size-bar:0.4vmin;--size-square:50%;display:block;position:relative;width:100%;height:100%;display:grid;place-items:center}.loader.svelte-hzlnc2::before,.loader.svelte-hzlnc2::after{content:'';box-sizing:border-box;position:absolute}@keyframes svelte-hzlnc2-loader-6{0%,100%{transform:none}25%{transform:translateX(100%)}50%{transform:translateX(100%) translateY(100%)}75%{transform:translateY(100%)}}.loader.--7.svelte-hzlnc2::before,.loader.--7.svelte-hzlnc2::after{width:var(--size-square);height:var(--size-square);background-color:var(--color)}.loader.--7.svelte-hzlnc2::before{top:calc(50% - var(--size-square));left:calc(50% - var(--size-square));animation:svelte-hzlnc2-loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite}.loader.--7.svelte-hzlnc2::after{top:50%;left:50%;animation:svelte-hzlnc2-loader-7 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite}@keyframes svelte-hzlnc2-loader-7{0%,100%{transform:none}25%{transform:translateX(-100%)}50%{transform:translateX(-100%) translateY(-100%)}75%{transform:translateY(-100%)}}",
  map: null
};
const Spinner = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { height = "2rem" } = $$props;
  let { width = "2rem" } = $$props;
  let { padding = ".5rem" } = $$props;
  let { color = "#008C95" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$g);
  return `<div class="${"loading-indicator svelte-hzlnc2"}" style="${"height:" + (0, import_index_8e09b0bf.e)(height) + "; width:" + (0, import_index_8e09b0bf.e)(width) + ";padding:" + (0, import_index_8e09b0bf.e)(padding)}"><i class="${"loader --7 svelte-hzlnc2"}" style="${"--color: " + (0, import_index_8e09b0bf.e)(color)}"></i>
</div>`;
});
function getDefaultPost() {
  return {
    id: (0, import_uuid.v4)(),
    published: false,
    publishedDate: new Date(),
    createdDate: new Date(),
    content: [
      {
        id: (0, import_uuid.v4)(),
        columns: [
          {
            id: (0, import_uuid.v4)(),
            items: [
              {
                id: (0, import_uuid.v4)(),
                type: "Rich Text",
                payload: {
                  content: '<h1 style="text-align: center;">Title</h1>'
                }
              }
            ]
          }
        ]
      },
      {
        id: (0, import_uuid.v4)(),
        columns: [
          {
            id: (0, import_uuid.v4)(),
            items: [
              {
                id: (0, import_uuid.v4)(),
                type: "Image",
                payload: null
              }
            ]
          }
        ]
      },
      {
        id: (0, import_uuid.v4)(),
        columns: [
          {
            id: (0, import_uuid.v4)(),
            items: [
              {
                id: (0, import_uuid.v4)(),
                type: "Rich Text",
                payload: {
                  content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget eros a dolor pellentesque mattis. Proin et ultricies quam. Duis facilisis diam sit amet magna interdum lobortis. Aliquam a arcu quis purus hendrerit tempus eu vitae mauris. Maecenas placerat nibh vitae libero cursus, in bibendum ipsum laoreet. Donec iaculis tempor ligula, ut blandit leo condimentum ut. Nam iaculis hendrerit ex, id vestibulum urna tincidunt quis. Ut ut tellus facilisis diam imperdiet viverra non vel ipsum. Vivamus sollicitudin et urna quis viverra. Vestibulum lacinia ex nulla, at ultrices odio fringilla at. Proin convallis arcu eget nunc pharetra, a dictum dolor ornare. Etiam at auctor nunc, nec iaculis purus. Integer arcu eros, molestie sit amet felis id, dignissim egestas purus. Nam sed nisi et tortor condimentum lacinia eget sed nunc. Maecenas ex lorem, semper in odio et, iaculis luctus felis.</p>"
                }
              }
            ]
          }
        ]
      },
      {
        id: (0, import_uuid.v4)(),
        columns: [
          {
            id: (0, import_uuid.v4)(),
            items: [
              {
                id: (0, import_uuid.v4)(),
                type: "Rich Text",
                payload: {
                  content: "<p>Ut tincidunt, dolor eu pretium consequat, massa sapien commodo turpis, vitae ullamcorper augue nibh eget orci. Vivamus id nisl vel orci tincidunt suscipit. Phasellus placerat metus erat, et consectetur ipsum blandit viverra. Suspendisse imperdiet magna vitae justo semper, eget sodales velit sodales. Nunc mattis mi scelerisque aliquet facilisis. Donec pellentesque ipsum a bibendum lacinia. Nullam ac dui laoreet, placerat dui eu, vehicula odio. Nullam faucibus lectus sed massa suscipit, suscipit varius est aliquet. Nullam sodales arcu lorem, vitae accumsan mi mollis vel.</p>"
                }
              },
              {
                id: (0, import_uuid.v4)(),
                type: "Button",
                payload: {
                  linkTo: "/",
                  color: "Teal",
                  text: "Call to Action!"
                }
              }
            ]
          }
        ]
      }
    ],
    title: "New Post",
    pdfUrl: null
  };
}
const subscriber_queue = [];
function writable(value, start = import_index_8e09b0bf.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_8e09b0bf.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_8e09b0bf.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_8e09b0bf.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var paragraphPreview_svelte_svelte_type_style_lang = "";
var paragraphConfig_svelte_svelte_type_style_lang = "";
var heading_svelte_svelte_type_style_lang = "";
var headingPreview_svelte_svelte_type_style_lang = "";
var headingConfig_svelte_svelte_type_style_lang = "";
const Image$1 = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var imagePreview_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".image-container.svelte-5a424d{display:flex;flex:1;flex-flow:row nowrap;justify-content:center}",
  map: null
};
const Image_preview = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { payload } = $$props;
  if ($$props.payload === void 0 && $$bindings.payload && payload !== void 0)
    $$bindings.payload(payload);
  $$result.css.add(css$f);
  return `${payload ? `<div class="${"image-container svelte-5a424d"}"><img${(0, import_index_8e09b0bf.d)("src", payload.imageUrl, 0)} alt="${"Unavailable"}" style="${"max-height: " + (0, import_index_8e09b0bf.e)(payload.maxHeight) + "px; max-width: " + (0, import_index_8e09b0bf.e)(payload.maxWidth) + "px"}"></div>` : `<div class="${"image-container svelte-5a424d"}"><img src="${"/images/no-image.jpg"}" alt="${"Unavailable"}" style="${"max-height: 500px; max-width: 500px"}"></div>`}`;
});
var breadcrumbs_svelte_svelte_type_style_lang = "";
const css$e = {
  code: 'ol.svelte-1hg5ovi.svelte-1hg5ovi.svelte-1hg5ovi{display:flex;flex-flow:row wrap;gap:.5rem;list-style-type:none;padding:0;margin:0}li.svelte-1hg5ovi.svelte-1hg5ovi.svelte-1hg5ovi{display:flex;flex-flow:row nowrap;align-items:center;cursor:pointer}ol.svelte-1hg5ovi li.svelte-1hg5ovi+li.svelte-1hg5ovi::before{content:"/\\00a0"}',
  map: null
};
const Breadcrumbs = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  const view = (0, import_index_8e09b0bf.g)("View");
  $$unsubscribe_view = (0, import_index_8e09b0bf.a)(view, (value) => $view = value);
  $$result.css.add(css$e);
  $$unsubscribe_view();
  return `<ol class="${"svelte-1hg5ovi"}"><li class="${"svelte-1hg5ovi"}">Media Library</li>

    ${(0, import_index_8e09b0bf.b)($view.path, (path) => `<li class="${"svelte-1hg5ovi"}">${(0, import_index_8e09b0bf.e)(path.title)}
    </li>`)}

    ${$view.folderLoading ? `<li class="${"svelte-1hg5ovi"}">${(0, import_index_8e09b0bf.v)(Spinner, "Spinner").$$render($$result, {
    width: "1rem",
    height: "1rem",
    padding: "0"
  }, {}, {})}</li>` : ``}

</ol>`;
});
var folderControls_svelte_svelte_type_style_lang = "";
const css$d = {
  code: "button.svelte-1gdakj7.svelte-1gdakj7{border:none;color:white;padding:0;background-color:transparent;display:flex;align-items:center}button.svelte-1gdakj7 svg.svelte-1gdakj7{fill:white}",
  map: null
};
const Folder_controls = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  const view = (0, import_index_8e09b0bf.g)("View");
  $$unsubscribe_view = (0, import_index_8e09b0bf.a)(view, (value) => $view = value);
  $$result.css.add(css$d);
  $$unsubscribe_view();
  return `
<button class="${"folder-btn svelte-1gdakj7"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-folder-plus svelte-1gdakj7"}" viewBox="${"0 0 16 16"}"><path d="${"m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"}"></path><path d="${"M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"}"></path></svg></button>

${$view.path.length ? `
    <button class="${"folder-btn svelte-1gdakj7"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-trash svelte-1gdakj7"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}"></path><path fill-rule="${"evenodd"}" d="${"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}"></path></svg></button>

    ${$view.renamingFolder ? `
        <input type="${"text"}"${(0, import_index_8e09b0bf.d)("value", $view.renameFolderTitle, 0)}>
        
        <button class="${"folder-btn svelte-1gdakj7"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-check-square svelte-1gdakj7"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"}"></path></svg></button>
        
        <button class="${"folder-btn svelte-1gdakj7"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x-square svelte-1gdakj7"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg></button>` : `
        <button class="${"folder-btn svelte-1gdakj7"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-gear svelte-1gdakj7"}" viewBox="${"0 0 16 16"}"><path d="${"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}"></path><path d="${"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}"></path></svg></button>`}` : ``}`;
});
var fileControls_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "button.svelte-1odb5qt.svelte-1odb5qt,label.svelte-1odb5qt.svelte-1odb5qt{border:none;color:white;padding:0;background-color:transparent;display:flex;align-items:center;cursor:pointer}button.svelte-1odb5qt svg.svelte-1odb5qt,label.svelte-1odb5qt svg.svelte-1odb5qt{fill:white}",
  map: null
};
const File_controls = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  const view = (0, import_index_8e09b0bf.g)("View");
  $$unsubscribe_view = (0, import_index_8e09b0bf.a)(view, (value) => $view = value);
  $$result.css.add(css$c);
  $$unsubscribe_view();
  return `${$view.stagedFiles && $view.stagedFiles[0] ? `
        <input class="${"file-title"}" type="${"text"}" name="${"new-file-title"}" id="${"new-file-title"}" placeholder="${"Alternate Title"}"${(0, import_index_8e09b0bf.d)("value", $view.newFileTitle, 0)}>
        
        ${$view.uploadingFile ? `${(0, import_index_8e09b0bf.v)(Spinner, "Spinner").$$render($$result, {
    padding: "0",
    height: "1rem",
    width: "1rem",
    color: "white"
  }, {}, {})}` : `
            <button class="${"svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-upload svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}"></path><path d="${"M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"}"></path></svg></button>`}

        
        <button class="${"new-file-cancel svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x-square svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg></button>` : `
        <label class="${"new-file-label svelte-1odb5qt"}" for="${"new-file"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-file-earmark-plus svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"}"></path><path d="${"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"}"></path></svg>
            <input type="${"file"}" name="${"new-file"}" id="${"new-file"}" class="${"file-selector"}" hidden></label>`}

    ${$view.selectedFile ? `
        <button class="${"new-file-btn svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-trash svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}"></path><path fill-rule="${"evenodd"}" d="${"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}"></path></svg></button>

        
        <button class="${"folder-btn svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-gear svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}"></path><path d="${"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}"></path></svg></button>

        ${$view.renamingFile ? `
            <input type="${"text"}" placeholder="${"New File Name"}"${(0, import_index_8e09b0bf.d)("value", $view.renameFileTitle, 0)}>

            
            <button class="${"folder-btn svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-check-square svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"}"></path></svg></button>

            
            <button class="${"folder-btn svelte-1odb5qt"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x-square svelte-1odb5qt"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg></button>` : ``}` : ``}`;
});
var fileList_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".fe.svelte-owzpjh{margin:0;padding:0;list-style-type:none;border:thin solid var(--grey);border-radius:5px;overflow:auto;height:200px}.fe-item.svelte-owzpjh{cursor:pointer;padding:.5rem;display:flex;align-items:center;gap:.5rem}.fe-item.svelte-owzpjh:hover{background-color:var(--light-grey)}.selected-file.svelte-owzpjh{background-color:var(--light-grey)}button.svelte-owzpjh{border:none;padding:0;background-color:transparent;display:flex;align-items:center}",
  map: null
};
const File_list = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  let view = (0, import_index_8e09b0bf.g)("View");
  $$unsubscribe_view = (0, import_index_8e09b0bf.a)(view, (value) => $view = value);
  $$result.css.add(css$b);
  $$unsubscribe_view();
  return `${view && $view.viewLoaded ? `<ul class="${"fe svelte-owzpjh"}">${(0, import_index_8e09b0bf.b)($view.folders, (folder) => `<li class="${"folder fe-item svelte-owzpjh"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-folder"}" viewBox="${"0 0 16 16"}"><path d="${"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"}"></path></svg>
                
                ${(0, import_index_8e09b0bf.e)(folder.title)}
            
            </li>`)}

        ${$view.showCreateNewFolder ? `<li class="${"folder fe-item svelte-owzpjh"}">
            <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-folder-plus"}" viewBox="${"0 0 16 16"}"><path d="${"m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"}"></path><path d="${"M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"}"></path></svg>

            
            <input type="${"text"}" name="${""}" id="${""}" placeholder="${"New File Title"}"${(0, import_index_8e09b0bf.d)("value", $view.newFolderName, 0)}>

            
            <button class="${"folder-btn svelte-owzpjh"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-check-square"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"}"></path></svg></button>

            
            <button class="${"folder-btn svelte-owzpjh"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x-square"}" viewBox="${"0 0 16 16"}"><path d="${"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}"></path><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg></button></li>` : ``}

        ${(0, import_index_8e09b0bf.b)($view.files, (file) => {
    var _a;
    return `<li class="${[
      "file fe-item svelte-owzpjh",
      file.id == ((_a = $view.selectedFile) == null ? void 0 : _a.id) ? "selected-file" : ""
    ].join(" ").trim()}">${file.type == "image" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-card-image"}" viewBox="${"0 0 16 16"}"><path d="${"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}"></path><path d="${"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"}"></path></svg>` : `${file.type == "document" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-file-earmark-text"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"}"></path><path d="${"M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"}"></path></svg>` : ``}`}
            
            ${(0, import_index_8e09b0bf.e)(file.title)}

        </li>`;
  })}

        ${!$view.folders && !$view.files ? `<li class="${"no-contents fe-item svelte-owzpjh"}">No Files or Foldes</li>` : ``}</ul>` : `${(0, import_index_8e09b0bf.v)(Spinner, "Spinner").$$render($$result, { padding: "0" }, {}, {})}`}`;
});
function createFileExplorerViewState() {
  const { set, subscribe: subscribe2, update } = writable({
    path: [],
    folders: [],
    files: [],
    viewLoaded: false,
    showCreateNewFolder: false,
    newFolderName: null,
    renamingFolder: false,
    renameFolderTitle: null,
    folderLoading: false,
    selectedFile: null,
    stagedFiles: null,
    showFileUpload: false,
    uploadingFile: false,
    newFileTitle: null,
    renamingFile: false,
    renameFileTitle: null
  });
  async function initView(path) {
    let requestInit = {
      method: "POST",
      body: JSON.stringify({ path }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await fetch("/api/files", requestInit);
    const folderStructure = await res.json();
    update((v) => {
      v.files = folderStructure.files;
      v.folders = folderStructure.folders;
      v.path = folderStructure.path;
      v.viewLoaded = true;
      return v;
    });
  }
  async function deleteFileOrFolder(targetId) {
    const res = await fetch("/api/files/delete/" + targetId, { method: "DELETE" });
    if (res.ok) {
      const body = await res.json();
      if (body.type == "File") {
        update((v) => {
          const fileIndex = v.files.findIndex((file) => file.id == body.targetId);
          v.files.splice(fileIndex, 1);
          v.selectedFile = null;
          v.renameFileTitle = false;
          v.renameFileTitle = null;
          return v;
        });
      }
      if (body.type == "Folder")
        ;
    }
  }
  async function renameFileOrFolder(targetId, newName) {
    const res = await fetch(`/api/files/rename/${targetId}/${newName}`, { method: "PATCH" });
    if (res.ok) {
      const body = await res.json();
      if (body.type == "File") {
        update((v) => {
          const fileIndex = v.files.findIndex((file) => file.id == body.targetId);
          v.files[fileIndex].title = body.title;
          v.renameFileTitle = null;
          v.renamingFile = false;
          return v;
        });
      }
      if (body.type == "Folder") {
        update((v) => {
          v.path[v.path.length - 1].title = body.title;
          v.renameFolderTitle = null;
          v.renamingFolder = false;
          return v;
        });
      }
    }
  }
  async function createNewFolder(path, title) {
    const res = await fetch("/api/files/create/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        path,
        title
      })
    });
    const newFolderData = await res.json();
    update((v) => {
      v.folders.push(newFolderData);
      v.showCreateNewFolder = false;
      v.newFolderName = null;
      return v;
    });
  }
  function setFolderLoading(state) {
    update((v) => {
      v.folderLoading = state;
      return v;
    });
  }
  async function loadFolder(path) {
    setFolderLoading(true);
    const res = await fetch("/api/files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        path
      })
    });
    const folderStructure = await res.json();
    update((v) => {
      v.selectedFile = null;
      v.folderLoading = false;
      v.showFileUpload = false;
      v.showCreateNewFolder = false;
      v.renameFolderTitle = null;
      v.renamingFolder = false;
      v.path = folderStructure.path;
      v.files = folderStructure.files, v.folders = folderStructure.folders;
      return v;
    });
  }
  async function uploadFile(file) {
    let path;
    let newFileTitle;
    update((v) => {
      v.uploadingFile = true;
      path = v.path;
      newFileTitle = v.newFileTitle;
      return v;
    });
    const storage = (0, import_storage.getStorage)(import_firebase_6875ed47.a);
    const storageRef = (0, import_storage.ref)(storage, "Media Library/" + file.name);
    const typeAndExtension = file.type.split("/");
    let fileType = typeAndExtension[0] == "image" ? "image" : "document";
    await (0, import_storage.uploadBytes)(storageRef, file).then(async (snapshot) => {
      return await (0, import_storage.getDownloadURL)(snapshot.ref);
    }).then(async (url) => {
      const res = await fetch("/api/files/create/file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          path,
          title: newFileTitle || file.name,
          url,
          type: fileType
        })
      });
      const newFileData = await res.json();
      update((v) => {
        v.files.push(newFileData);
        v.selectedFile = newFileData;
        v.stagedFiles = null;
        v.showFileUpload = false;
        v.uploadingFile = false;
        return v;
      });
    }).catch((err) => console.log(err));
  }
  return {
    subscribe: subscribe2,
    set,
    update,
    deleteFileOrFolder,
    renameFileOrFolder,
    initView,
    loadFolder,
    createNewFolder,
    uploadFile
  };
}
var fileExplorer_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".controls-row.svelte-1bd7nq.svelte-1bd7nq{display:flex;flex-flow:row nowrap;gap:.5rem;align-items:center}.folder-controls.svelte-1bd7nq.svelte-1bd7nq{background-color:var(--teal);border-radius:5px;padding:.5rem}.file-controls.svelte-1bd7nq.svelte-1bd7nq{background-color:var(--purple);border-radius:5px;padding:.5rem}.shadow.svelte-1bd7nq.svelte-1bd7nq{box-shadow:0 0 5px rgba(0, 0, 0, 0.25)}.set-file.svelte-1bd7nq.svelte-1bd7nq{background-color:var(--light-grey);border-radius:5px;padding:.5rem;border:solid thin var(--teal);cursor:pointer}.set-file.svelte-1bd7nq.svelte-1bd7nq:hover{background-color:var(--teal)}button.svelte-1bd7nq.svelte-1bd7nq{border:none;color:var(--teal);font-weight:400;padding:0;background-color:transparent;display:flex;align-items:center}.set-file.svelte-1bd7nq:hover button.svelte-1bd7nq{color:white}",
  map: null
};
const File_explorer = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  const view = createFileExplorerViewState();
  $$unsubscribe_view = (0, import_index_8e09b0bf.a)(view, (value) => $view = value);
  (0, import_index_8e09b0bf.s)("View", view);
  view.initView([]);
  (0, import_index_8e09b0bf.h)();
  $$result.css.add(css$a);
  $$unsubscribe_view();
  return `<div class="${"controls-row svelte-1bd7nq"}"><div class="${"folder-controls shadow controls-row svelte-1bd7nq"}">${(0, import_index_8e09b0bf.v)(Folder_controls, "FolderControls").$$render($$result, {}, {}, {})}</div>
    <div class="${"file-controls shadow controls-row svelte-1bd7nq"}">${(0, import_index_8e09b0bf.v)(File_controls, "FileControls").$$render($$result, {}, {}, {})}</div>
    ${$view.selectedFile ? `<div class="${"set-file shadow controls-row svelte-1bd7nq"}"><button class="${"svelte-1bd7nq"}">Set</button></div>` : ``}</div>

${(0, import_index_8e09b0bf.v)(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}

${(0, import_index_8e09b0bf.v)(File_list, "FileList").$$render($$result, {}, {}, {})}`;
});
var imageConfig_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".controls.svelte-16gyta8{display:flex;flex-flow:row nowrap;gap:.5rem;align-items:center}.add-media.svelte-16gyta8{border:thin solid var(--teal);padding:.5rem;background-color:white;color:var(--teal);font-weight:400}.add-media.svelte-16gyta8:hover{background-color:var(--teal);color:white}.add-media.svelte-16gyta8:disabled{background-color:var(--light-grey);color:var(--grey);border-color:var(--grey);cursor:not-allowed}.image-title.svelte-16gyta8{align-self:stretch}.config-box.svelte-16gyta8{align-self:stretch;font-weight:400}",
  map: null
};
const Image_config = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $editorStore, $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => $editorStore = value);
  let showMediaLibrary = false;
  editorStore.subscribe((s) => {
    var _a;
    if ((_a = s.selected) === null || _a === void 0 ? void 0 : _a.item.payload) {
      showMediaLibrary = false;
    } else {
      showMediaLibrary = true;
    }
  });
  $$result.css.add(css$9);
  $$unsubscribe_editorStore();
  return `<div class="${"controls svelte-16gyta8"}">
    ${$editorStore.selected.item.payload ? `${showMediaLibrary ? `<button class="${"add-media svelte-16gyta8"}">Cancel</button>` : `<button class="${"add-media svelte-16gyta8"}">Replace Image</button>`}
    <input type="${"text"}" disabled class="${"image-title svelte-16gyta8"}"${(0, import_index_8e09b0bf.d)("value", $editorStore.selected.item.payload.imageTitle, 0)}>
    <p>Max-Height:</p>
    <input type="${"text"}" placeholder="${"Max Height"}" class="${"config-box svelte-16gyta8"}"${(0, import_index_8e09b0bf.d)("value", $editorStore.selected.item.payload.maxHeight, 0)}>
    <p>Max-Width: </p>
    <input type="${"text"}" placeholder="${"Max Width"}" class="${"config-box svelte-16gyta8"}"${(0, import_index_8e09b0bf.d)("value", $editorStore.selected.item.payload.maxWidth, 0)}>` : ``}</div>

${showMediaLibrary ? `${(0, import_index_8e09b0bf.v)(File_explorer, "FileExplorer").$$render($$result, {}, {}, {})}` : ``}`;
});
const Rich_text = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { payload = "Insert your text" } = $$props;
  if ($$props.payload === void 0 && $$bindings.payload && payload !== void 0)
    $$bindings.payload(payload);
  return `<p>${(0, import_index_8e09b0bf.e)(payload)}</p>`;
});
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline: inline2 = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey = "no-api-key" } = $$props;
  let { channel = "5" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  (0, import_index_8e09b0bf.h)();
  (0, import_index_8e09b0bf.o)(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline2 !== void 0)
    $$bindings.inline(inline2);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0)
    $$bindings.apiKey(apiKey);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${(0, import_index_8e09b0bf.d)("class", cssClass, 0)}${(0, import_index_8e09b0bf.d)("this", container, 0)}>${inline2 ? `<div${(0, import_index_8e09b0bf.d)("id", id, 0)}${(0, import_index_8e09b0bf.d)("this", element, 0)}></div>` : `<textarea${(0, import_index_8e09b0bf.d)("id", id, 0)} style="${"visibility:hidden"}"${(0, import_index_8e09b0bf.d)("this", element, 0)}></textarea>`}</div>`;
});
var richTextConfig_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".testtest{height:100%}.controls.svelte-96fejz{display:flex;flex-flow:row wrap;gap:1rem}button.svelte-96fejz{border:none;color:white;background-color:var(--teal);padding:.5rem;font-weight:400}button.svelte-96fejz:hover{background-color:var(--light-grey);color:var(--grey)}",
  map: null
};
let smallHeight = "300px";
const Rich_text_config = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $editorStore, $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => $editorStore = value);
  let editorConfig = {
    plugins: "lists link",
    toolbar: "undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link",
    menubar: false,
    height: "100%",
    content_style: "p {margin: 1rem}",
    branding: false
  };
  let height = smallHeight;
  let selected = null;
  let text = "";
  editorStore.subscribe((s) => {
    var _a, _b;
    if ((selected === null || selected === void 0 ? void 0 : selected.item.id) !== ((_a = s.selected) === null || _a === void 0 ? void 0 : _a.item.id) && ((_b = s.selected) === null || _b === void 0 ? void 0 : _b.item.type) == "Rich Text") {
      selected = s.selected;
      text = s.selected.item.payload.content;
    }
  });
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"controls svelte-96fejz"}"><button class="${"svelte-96fejz"}">Set</button>
    <button class="${"svelte-96fejz"}">Cancel</button>
    <button class="${"svelte-96fejz"}">Expand</button></div>

${$editorStore.selected ? `<div style="${"height: " + (0, import_index_8e09b0bf.e)(height) + ";"}">${(0, import_index_8e09b0bf.v)(Editor, "Editor").$$render($$result, {
      scriptSrc: "/node_modules/tinymce/tinymce.min.js",
      conf: editorConfig,
      cssClass: "testtest",
      value: text
    }, {
      value: ($$value) => {
        text = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_editorStore();
  return $$rendered;
});
const Parser$1 = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_8e09b0bf.i)($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${(0, import_index_8e09b0bf.b)(tokens, (token) => `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, Object.assign(token, { renderers }), {}, {})}`)}` : `${renderers[type] ? `${type === "table" ? `${(0, import_index_8e09b0bf.v)(renderers.table || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {
    default: () => `${(0, import_index_8e09b0bf.v)(renderers.tablehead || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_8e09b0bf.v)(renderers.tablerow || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {
        default: () => `${(0, import_index_8e09b0bf.b)(header, (headerItem, i) => `${(0, import_index_8e09b0bf.v)(renderers.tablecell || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {
          header: true,
          align: $$restProps.align[i] || "center"
        }, {}, {
          default: () => `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})}
              `
        })}`)}`
      })}`
    })}
        ${(0, import_index_8e09b0bf.v)(renderers.tablebody || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_8e09b0bf.b)(rows, (row) => `${(0, import_index_8e09b0bf.v)(renderers.tablerow || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {
        default: () => `${(0, import_index_8e09b0bf.b)(row, (cells, i) => `${(0, import_index_8e09b0bf.v)(renderers.tablecell || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {
          header: false,
          align: $$restProps.align[i] || "center"
        }, {}, {
          default: () => `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})}
                `
        })}`)}
            `
      })}`)}`
    })}`
  })}` : `${type === "list" ? `${ordered ? `${(0, import_index_8e09b0bf.v)(renderers.list || import_index_8e09b0bf.m, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => `${(0, import_index_8e09b0bf.b)($$restProps.items, (item) => `${(0, import_index_8e09b0bf.v)(renderers.orderedlistitem || renderers.listitem || import_index_8e09b0bf.m, "svelte:component").$$render($$result, Object.assign(item), {}, {
      default: () => `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `
    })}`)}`
  })}` : `${(0, import_index_8e09b0bf.v)(renderers.list || import_index_8e09b0bf.m, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => `${(0, import_index_8e09b0bf.b)($$restProps.items, (item) => `${(0, import_index_8e09b0bf.v)(renderers.unorderedlistitem || renderers.listitem || import_index_8e09b0bf.m, "svelte:component").$$render($$result, Object.assign(item), {}, {
      default: () => `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `
    })}`)}`
  })}`}` : `${(0, import_index_8e09b0bf.v)(renderers[type] || import_index_8e09b0bf.m, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {
    default: () => `${tokens ? `${(0, import_index_8e09b0bf.v)(Parser$1, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${(0, import_index_8e09b0bf.e)($$restProps.raw)}`}`
  })}`}`}` : ``}`}`;
});
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key2;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key2 in target) {
      if (Object.prototype.hasOwnProperty.call(target, key2)) {
        obj[key2] = target[key2];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (!cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.substr(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape(text)
    };
  }
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *> ?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?: [^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/^ +$/gm, "");
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return "<h" + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + "</h" + level + ">\n";
    }
    return "<h" + level + ">" + text + "</h" + level + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return "<li>" + text + "</li>\n";
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return "<p>" + text + "</p>\n";
  }
  table(header, body) {
    if (body)
      body = "<tbody>" + body + "</tbody>";
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  }
  strong(text) {
    return "<strong>" + text + "</strong>";
  }
  em(text) {
    return "<em>" + text + "</em>";
  }
  codespan(text) {
    return "<code>" + text + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return "<del>" + text + "</del>";
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}
class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
Parser.parse;
Lexer.lex;
const key = {};
const Heading = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = (0, import_index_8e09b0bf.g)(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${(0, import_index_8e09b0bf.d)("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${(0, import_index_8e09b0bf.e)(raw)}`}`}`}`}`}`}`;
});
const Paragraph = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${(0, import_index_8e09b0bf.d)("src", href, 0)}${(0, import_index_8e09b0bf.d)("title", title, 0)}${(0, import_index_8e09b0bf.d)("alt", text, 0)}>`;
});
const Link = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${(0, import_index_8e09b0bf.d)("href", href, 0)}${(0, import_index_8e09b0bf.d)("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${(0, import_index_8e09b0bf.e)(raw.replace(/`/g, ""))}</code>`;
});
const Strong = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${(0, import_index_8e09b0bf.d)("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${(0, import_index_8e09b0bf.d)("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${(0, import_index_8e09b0bf.d)("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${(0, import_index_8e09b0bf.d)("class", lang, 0)}><code>${(0, import_index_8e09b0bf.e)(text)}</code></pre>`;
});
const Br = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = "" } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = (0, import_index_8e09b0bf.h)();
  let tokens;
  let lexer;
  (0, import_index_8e09b0bf.s)(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = __spreadValues(__spreadValues({}, defaultOptions), options);
  {
    {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = __spreadValues(__spreadValues({}, defaultRenderers), renderers);
  return `${(0, import_index_8e09b0bf.v)(Parser$1, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
var richTextPreview_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "p.svelte-vwd61l{text-align:center;margin:0;color:teal}.display.svelte-vwd61l{display:flex;flex-flow:column nowrap;gap:1rem;white-space:normal}",
  map: null
};
const Rich_text_preview = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { payload = { content: "Insert your text" } } = $$props;
  if ($$props.payload === void 0 && $$bindings.payload && payload !== void 0)
    $$bindings.payload(payload);
  $$result.css.add(css$7);
  return `${payload ? `<div class="${"display svelte-vwd61l"}">${(0, import_index_8e09b0bf.v)(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: payload.content }, {}, {})}</div>` : `<p class="${"empty svelte-vwd61l"}">- Empty -</p>`}

`;
});
const Button = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var buttonPreview_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-pjytak{display:flex;justify-content:center}button.svelte-pjytak{display:flex;align-items:center;justify-self:center;background-color:var(--teal);color:white;padding:.5rem;border:none;font-size:1rem;border-radius:4px}",
  map: null
};
const Button_preview = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { payload } = $$props;
  if ($$props.payload === void 0 && $$bindings.payload && payload !== void 0)
    $$bindings.payload(payload);
  $$result.css.add(css$6);
  return `<div class="${"svelte-pjytak"}"><button class="${"svelte-pjytak"}">${payload ? `${(0, import_index_8e09b0bf.e)(payload.text)}` : `No Text`}</button>

</div>`;
});
var buttonConfig_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".container.svelte-18m45ez{display:flex;gap:1rem}button.svelte-18m45ez,a.svelte-18m45ez{font-weight:400;border:none;display:flex;align-self:center;padding:.5rem;background-color:var(--light-grey);border-radius:4px}",
  map: null
};
const Button_config = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => value);
  let payload = {
    color: "Teal",
    linkTo: "/",
    text: "Call to Action"
  };
  let selected = null;
  let buttonStyles = ["Teal", "Purple", "Grey"];
  editorStore.subscribe((s) => {
    var _a, _b;
    if (((_a = s.selected) === null || _a === void 0 ? void 0 : _a.item.id) !== (selected === null || selected === void 0 ? void 0 : selected.item.id) && ((_b = s.selected) === null || _b === void 0 ? void 0 : _b.item.type) == "Button") {
      selected = s.selected;
      payload = __spreadValues({}, s.selected.item.payload);
    }
  });
  $$result.css.add(css$5);
  $$unsubscribe_editorStore();
  return `<div class="${"container svelte-18m45ez"}"><div class="${"control"}"><p>Button Text</p>
        <input type="${"text"}" id="${"text-input"}"${(0, import_index_8e09b0bf.d)("value", payload.text, 0)}></div>
    
    <div class="${"control"}"><p>Link</p>
        <input type="${"text"}" id="${"text-input"}"${(0, import_index_8e09b0bf.d)("value", payload.linkTo, 0)}></div>
    
    <div class="${"control"}"><p>Style</p>
        <select name="${"Button Types"}" id="${"button-selector"}">${(0, import_index_8e09b0bf.b)(buttonStyles, (style) => `<option${(0, import_index_8e09b0bf.d)("value", style, 0)}>${(0, import_index_8e09b0bf.e)(style)}</option>`)}</select></div>
    
    <a${(0, import_index_8e09b0bf.d)("href", payload.linkTo, 0)} target="${"_blank"}" class="${"svelte-18m45ez"}">Test Link</a>

    <button class="${"svelte-18m45ez"}">Set</button>
    <button class="${"svelte-18m45ez"}">Cancel</button>


</div>`;
});
const itemLibrary = [
  {
    title: "Image",
    viewComponent: Image$1,
    configComponent: Image_config,
    previewComponent: Image_preview,
    defaultPayload: null
  },
  {
    title: "Rich Text",
    viewComponent: Rich_text,
    configComponent: Rich_text_config,
    previewComponent: Rich_text_preview,
    defaultPayload: {
      content: "Duis eu rutrum eros. Donec luctus commodo erat, in ornare mauris pulvinar vehicula. Suspendisse quis ultrices eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dui tellus, vulputate sed molestie nec, scelerisque ac magna. Vestibulum iaculis, justo id suscipit varius, nibh sem hendrerit urna, id mattis purus velit ut augue. Mauris at mi semper, lacinia magna vitae, ultrices odio. Nam non dolor odio. Curabitur vitae auctor ex, ultricies auctor tortor. Phasellus elementum aliquet facilisis."
    }
  },
  {
    title: "Button",
    viewComponent: Button,
    configComponent: Button_config,
    previewComponent: Button_preview,
    defaultPayload: {
      linkTo: "/",
      color: "teal",
      text: "Call to Action"
    }
  }
];
function initStore() {
  const { subscribe: subscribe2, set, update } = writable({ postData: null, editing: false, selected: null, expandEditor: false });
  function initStore2(postData) {
    set({
      postData,
      editing: false,
      expandEditor: false,
      selected: null
    });
  }
  function addRow() {
    update((s) => {
      s.postData.content.push({
        id: (0, import_uuid.v4)(),
        columns: [{
          id: (0, import_uuid.v4)(),
          items: []
        }]
      });
      return s;
    });
  }
  function deleteRow(rowId) {
    update((s) => {
      const rows = s.postData.content.filter((r) => r.id != rowId);
      s.postData.content = rows;
      s.editing = false;
      return s;
    });
  }
  function moveRowUp(rowId) {
    update((s) => {
      let rows = s.postData.content;
      const currentIndex = rows.findIndex((item) => item.id == rowId);
      if (currentIndex <= 0) {
        return s;
      }
      const currentItem = rows[currentIndex];
      const previousItem = rows[currentIndex - 1];
      rows[currentIndex] = previousItem;
      rows[currentIndex - 1] = currentItem;
      s.postData.content = rows;
      return s;
    });
  }
  function moveRowDown(rowId) {
    update((s) => {
      let rows = s.postData.content;
      const currentIndex = rows.findIndex((row) => row.id == rowId);
      if (currentIndex >= rows.length - 1) {
        return s;
      }
      const currentItem = rows[currentIndex];
      const nextItem = rows[currentIndex + 1];
      rows[currentIndex] = nextItem;
      rows[currentIndex + 1] = currentItem;
      s.postData.content = rows;
      return s;
    });
  }
  function addColumn(rowId) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((r) => r.id == rowId);
      s.postData.content[rowIndex].columns.push({
        id: (0, import_uuid.v4)(),
        items: []
      });
      return s;
    });
  }
  function deleteColumn(rowIndex, columnId) {
    update((s) => {
      const filteredColumns = s.postData.content[rowIndex].columns.filter((c) => c.id != columnId);
      s.postData.content[rowIndex].columns = filteredColumns;
      s.editing = false;
      return s;
    });
  }
  function moveColumnLeft(rowIndex, columnIndex) {
    if (columnIndex > 0) {
      update((d) => {
        let columns = d.postData.content[rowIndex].columns;
        const target = columns[columnIndex];
        const previous = columns[columnIndex - 1];
        columns[columnIndex - 1] = target;
        columns[columnIndex] = previous;
        d.postData.content[rowIndex].columns = columns;
        return d;
      });
    }
  }
  function moveColumnRight(rowIndex, columnIndex) {
    update((d) => {
      if (columnIndex < d.postData.content[rowIndex].columns.length - 1) {
        let columns = [...d.postData.content[rowIndex].columns];
        const target = columns[columnIndex];
        const next = columns[columnIndex + 1];
        columns[columnIndex + 1] = target;
        columns[columnIndex] = next;
        d.postData.content[rowIndex].columns = columns;
        return d;
      }
      return d;
    });
  }
  function addItem(rowId, columnId, itemType) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((row) => row.id == rowId);
      const columnIndex = s.postData.content[rowIndex].columns.findIndex((c) => c.id == columnId);
      const itemId = (0, import_uuid.v4)();
      const newItem = {
        id: itemId,
        type: itemType,
        payload: itemLibrary.find((i) => i.title == itemType).defaultPayload
      };
      s.postData.content[rowIndex].columns[columnIndex].items.push(newItem);
      return s;
    });
    const focusTarget = document.getElementById("addItemFocus");
    if (focusTarget) {
      focusTarget.focus();
    }
  }
  function deleteItem(rowId, columnId, itemId) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((row) => row.id == rowId);
      const columnIndex = s.postData.content[rowIndex].columns.findIndex((col) => col.id == columnId);
      let itemList = s.postData.content[rowIndex].columns[columnIndex].items.filter((item) => item.id != itemId);
      s.postData.content[rowIndex].columns[columnIndex].items = itemList;
      if (s.editing && s.selected.itemId == itemId) {
        s.editing = false;
        s.selected = null;
      }
      return s;
    });
  }
  function selectEditItem(rowId, columnId, itemId) {
    update((s) => {
      let item = s.postData.content.find((r) => r.id == rowId).columns.find((c) => c.id == columnId).items.find((i) => i.id == itemId);
      s.selected = { rowId, columnId, itemId, item };
      s.editing = true;
      return s;
    });
  }
  function cancelEditItem() {
    update((s) => {
      s.editing = false;
      s.selected = null;
      return s;
    });
  }
  function moveItemUp(rowId, columnId, itemId) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((row) => row.id == rowId);
      const columnIndex = s.postData.content[rowIndex].columns.findIndex((col) => col.id == columnId);
      let columnItems = s.postData.content[rowIndex].columns[columnIndex].items;
      const currentIndex = columnItems.findIndex((item) => item.id == itemId);
      if (currentIndex <= 0) {
        return s;
      }
      const currentItem = columnItems[currentIndex];
      const previousItem = columnItems[currentIndex - 1];
      columnItems[currentIndex] = previousItem;
      columnItems[currentIndex - 1] = currentItem;
      s.postData.content[rowIndex].columns[columnIndex].items = columnItems;
      return s;
    });
  }
  function moveItemDown(rowId, columnId, itemId) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((row) => row.id == rowId);
      const columnIndex = s.postData.content[rowIndex].columns.findIndex((col) => col.id == columnId);
      let columnItems = s.postData.content[rowIndex].columns[columnIndex].items;
      const currentIndex = columnItems.findIndex((item) => item.id == itemId);
      if (currentIndex >= columnItems.length - 1) {
        return s;
      }
      const currentItem = columnItems[currentIndex];
      const nextItem = columnItems[currentIndex + 1];
      columnItems[currentIndex] = nextItem;
      columnItems[currentIndex + 1] = currentItem;
      s.postData.content[rowIndex].columns[columnIndex].items = columnItems;
      return s;
    });
  }
  function updateItemPayload(rowId, columnId, itemId, payload) {
    update((s) => {
      const rowIndex = s.postData.content.findIndex((r) => r.id == rowId);
      const colIndex = s.postData.content[rowIndex].columns.findIndex((c) => c.id == columnId);
      const itemIndex = s.postData.content[rowIndex].columns[colIndex].items.findIndex((i) => i.id == itemId);
      s.postData.content[rowIndex].columns[colIndex].items[itemIndex].payload = payload;
      s.editing = false;
      s.selected = null;
      return s;
    });
  }
  return {
    set,
    subscribe: subscribe2,
    initStore: initStore2,
    addRow,
    deleteRow,
    moveRowUp,
    moveRowDown,
    addColumn,
    deleteColumn,
    moveColumnLeft,
    moveColumnRight,
    addItem,
    selectEditItem,
    cancelEditItem,
    moveItemUp,
    moveItemDown,
    updateItemPayload,
    deleteItem
  };
}
const editorStore = initStore();
var itemControls_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-19murli{padding:5px;background-color:white;border:thin solid var(--teal)}svg.svelte-19murli{display:inline-block;vertical-align:middle;fill:var(--teal)}.close-button.svelte-19murli{align-self:stretch;color:var(--teal);font-weight:400}",
  map: null
};
const Item_controls = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let { rowId } = $$props;
  let { columnId } = $$props;
  let { itemId } = $$props;
  if ($$props.rowId === void 0 && $$bindings.rowId && rowId !== void 0)
    $$bindings.rowId(rowId);
  if ($$props.columnId === void 0 && $$bindings.columnId && columnId !== void 0)
    $$bindings.columnId(columnId);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  $$result.css.add(css$4);
  return `



<button title="${"Delete Item"}" class="${"svelte-19murli"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-trash svelte-19murli"}" viewBox="${"0 0 16 16"}"><path d="${"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}"></path><path fill-rule="${"evenodd"}" d="${"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}"></path></svg></button>

<button title="${"Move Item Up"}" class="${"svelte-19murli"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-up-short svelte-19murli"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"}"></path></svg></button>

<button title="${"Move Item Down"}" class="${"svelte-19murli"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-down-short svelte-19murli"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"}"></path></svg></button>



<button title="${"Close Editor"}" class="${"close-button svelte-19murli"}">Close
</button>`;
});
var itemConfig_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".editor.svelte-zma1lo{border-top:thin solid var(--teal);padding:1rem;display:flex;flex-flow:column nowrap;gap:.5rem;box-shadow:0 0 5px rgba(0, 0, 0, 0.25)}.row.svelte-zma1lo{display:flex;flex-flow:row wrap;gap:1rem;align-items:center}.title.svelte-zma1lo{margin-right:auto}",
  map: null
};
const Item_config = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let component;
  let $editorStore, $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => $editorStore = value);
  $$result.css.add(css$3);
  component = itemLibrary.find((o) => o.title == $editorStore.selected.item.type).configComponent;
  $$unsubscribe_editorStore();
  return `<div class="${"editor svelte-zma1lo"}"><div class="${"row svelte-zma1lo"}"><h3 class="${"title svelte-zma1lo"}">Item Config</h3>
        ${(0, import_index_8e09b0bf.v)(Item_controls, "ItemControls").$$render($$result, {
    rowId: $editorStore.selected.rowId,
    columnId: $editorStore.selected.columnId,
    itemId: $editorStore.selected.itemId
  }, {}, {})}</div>

    ${(0, import_index_8e09b0bf.v)(component || import_index_8e09b0bf.m, "svelte:component").$$render($$result, {}, {}, {})}

</div>`;
});
var itemTypeList_svelte_svelte_type_style_lang = "";
var itemEdit_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".item.svelte-12mvby{position:relative;cursor:pointer}.item.svelte-12mvby:hover{background-color:rgb(237, 237, 237)}",
  map: null
};
const Item_edit = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let component;
  let { rowId } = $$props;
  let { columnId } = $$props;
  let { item } = $$props;
  let config;
  if ($$props.rowId === void 0 && $$bindings.rowId && rowId !== void 0)
    $$bindings.rowId(rowId);
  if ($$props.columnId === void 0 && $$bindings.columnId && columnId !== void 0)
    $$bindings.columnId(columnId);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    component = itemLibrary.find((o) => o.title == item.type).previewComponent;
    $$rendered = `<div class="${"item svelte-12mvby"}">${(0, import_index_8e09b0bf.v)(component || import_index_8e09b0bf.m, "svelte:component").$$render($$result, { payload: item.payload, this: config }, {
      this: ($$value) => {
        config = $$value;
        $$settled = false;
      }
    }, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var columnEdit_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".column.svelte-jwzxud.svelte-jwzxud{flex:1;position:relative;min-height:3rem;;}.column.svelte-jwzxud.svelte-jwzxud:hover{background-color:rgb(250, 250, 250)}.column-content.svelte-jwzxud.svelte-jwzxud{display:flex;flex-flow:column nowrap;gap:1rem}.col-title.svelte-jwzxud.svelte-jwzxud{color:white}.empty-column.svelte-jwzxud.svelte-jwzxud{width:100%;border:none;background-color:transparent;color:var(--grey);font-weight:400}.column-options.svelte-jwzxud.svelte-jwzxud{position:absolute;left:.5rem;bottom:.5rem;padding:.25rem;background-color:var(--purple);border-radius:3px;display:none;box-shadow:0 0 2px rgba(28, 28, 28, 0.6);flex-flow:column nowrap;align-items:center;gap:.5rem}.column.svelte-jwzxud:hover .column-options.svelte-jwzxud{display:flex}.column-controls.svelte-jwzxud.svelte-jwzxud{display:flex;flex-flow:row nowrap;gap:.5rem}.column-option.svelte-jwzxud.svelte-jwzxud{padding:0}",
  map: null
};
const Column_edit = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $editorStore, $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => $editorStore = value);
  let { rowId } = $$props;
  let rowIndex = $editorStore.postData.content.findIndex((row) => row.id == rowId);
  let { columnId } = $$props;
  let { column } = $$props;
  $editorStore.postData.content[rowIndex].columns.findIndex((col) => col.id === columnId);
  if ($$props.rowId === void 0 && $$bindings.rowId && rowId !== void 0)
    $$bindings.rowId(rowId);
  if ($$props.columnId === void 0 && $$bindings.columnId && columnId !== void 0)
    $$bindings.columnId(columnId);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  $$result.css.add(css$1);
  $$unsubscribe_editorStore();
  return `<div class="${"column svelte-jwzxud"}"><div class="${"column-content svelte-jwzxud"}">${column.items.length ? `${(0, import_index_8e09b0bf.b)(column.items, (item, ii) => `${(0, import_index_8e09b0bf.v)(Item_edit, "ItemEdit").$$render($$result, { item, rowId, columnId }, {}, {})}`)}` : `${`<button class="${"empty-column svelte-jwzxud"}">Add Item</button>`}`}

        ${``}</div>

    
    <div class="${"column-options svelte-jwzxud"}"><div class="${"column-controls svelte-jwzxud"}"><span class="${"col-title svelte-jwzxud"}">Column:</span>
            
            <button class="${"column-option svelte-jwzxud"}" title="${"Add Item"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-plus"}" viewBox="${"0 0 16 16"}"><path d="${"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}"></path></svg></button>
            
            <button class="${"column-option svelte-jwzxud"}" title="${"Add Paragraph"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-text-paragraph"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"}"></path></svg></button>
            
            <button class="${"column-option svelte-jwzxud"}" title="${"Delete Column"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x"}" viewBox="${"0 0 16 16"}"><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg></button>
            
            <button class="${"column-option svelte-jwzxud"}" title="${"Move Column Left"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-left-short"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"}"></path></svg></button>
            
            <button class="${"column-option svelte-jwzxud"}" title="${"Move Column Right"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-right-short"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"}"></path></svg></button></div></div>

</div>`;
});
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1wigjxr.svelte-1wigjxr{display:grid;height:100%;grid-template-columns:1fr;grid-template-rows:auto 1fr auto}.journal-heading.svelte-1wigjxr.svelte-1wigjxr{box-shadow:0 5px 5px -5px rgba(0, 0, 0, 0.356)}.heading-list.svelte-1wigjxr.svelte-1wigjxr{margin:0;padding:.5rem;display:flex;flex-flow:row wrap;gap:1rem;list-style-type:none}.heading-list-item.svelte-1wigjxr.svelte-1wigjxr{display:flex;flex-direction:row;gap:.5rem;align-items:center}.post-editor.svelte-1wigjxr.svelte-1wigjxr{display:flex;flex-flow:column nowrap;gap:1rem;overflow:auto;padding-bottom:2rem}.rows.svelte-1wigjxr.svelte-1wigjxr{display:flex;flex-flow:column nowrap;gap:1rem;padding:1rem 0;width:100%;max-width:1000px;align-self:center}.row.svelte-1wigjxr.svelte-1wigjxr{position:relative;min-height:3rem}.row.svelte-1wigjxr.svelte-1wigjxr:hover{box-shadow:0 0 2px rgba(0, 0, 0, 0.174)}.row-content.svelte-1wigjxr.svelte-1wigjxr{display:flex;flex-flow:row wrap;gap:1rem}.row-title.svelte-1wigjxr.svelte-1wigjxr{color:white}.row-options.svelte-1wigjxr.svelte-1wigjxr{position:absolute;right:.5rem;top:.5rem;padding:.25rem;background-color:var(--grey);border-radius:3px;display:none;box-shadow:0 0 2px rgba(28, 28, 28, 0.6);flex-flow:row nowrap;align-items:center;gap:.5rem}.row.svelte-1wigjxr:hover .row-options.svelte-1wigjxr{display:flex}.row-option.svelte-1wigjxr.svelte-1wigjxr{padding:0}svg.svelte-1wigjxr.svelte-1wigjxr{display:inline-block;vertical-align:middle}.add-row.svelte-1wigjxr.svelte-1wigjxr{color:white;background-color:var(--teal);border:none;padding:.5rem;width:fit-content;align-self:center}.pdf-upload.svelte-1wigjxr.svelte-1wigjxr{visibility:hidden}.pdf-upload-label.svelte-1wigjxr.svelte-1wigjxr{cursor:pointer}",
  map: null
};
async function load({ params, fetch: fetch2 }) {
  let post;
  const postId = params.id;
  if (postId == "new") {
    post = getDefaultPost();
  } else {
    const res = await fetch2(`/api/journals/${postId}`);
    post = await res.json();
    console.log(post);
  }
  return { props: { postData: post } };
}
const ssr = false;
const U5Bidu5D = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $editorStore, $$unsubscribe_editorStore;
  $$unsubscribe_editorStore = (0, import_index_8e09b0bf.a)(editorStore, (value) => $editorStore = value);
  let { postData } = $$props;
  editorStore.initStore(postData);
  if ($$props.postData === void 0 && $$bindings.postData && postData !== void 0)
    $$bindings.postData(postData);
  $$result.css.add(css);
  $$unsubscribe_editorStore();
  return `<div class="${"grid svelte-1wigjxr"}"><div class="${"journal-heading svelte-1wigjxr"}"><ul class="${"heading-list svelte-1wigjxr"}"><li class="${"heading-list-item svelte-1wigjxr"}"><input type="${"text"}" placeholder="${"Post Title"}"${(0, import_index_8e09b0bf.d)("value", postData.title, 0)}></li>
            <li class="${"heading-list-item svelte-1wigjxr"}"><button>Save</button></li>
            <li class="${"heading-list-item svelte-1wigjxr"}"><button>${postData.published ? `Revoke` : `Publish`}</button></li>

            
            ${`<li class="${"heading-list-item svelte-1wigjxr"}"><button>Delete
                </button></li>`}


            <li class="${"heading-list-item svelte-1wigjxr"}"><p>PDF:</p>
                ${postData.pdfUrl ? `<button>Remove</button>` : `${`${`<label for="${"pdf-upload"}" class="${"pdf-upload-label svelte-1wigjxr"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-file-earmark-plus svelte-1wigjxr"}" viewBox="${"0 0 16 16"}"><path d="${"M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"}"></path><path d="${"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"}"></path></svg>
                    <input type="${"file"}" id="${"pdf-upload"}" class="${"pdf-upload svelte-1wigjxr"}"></label>`}`}`}</li></ul></div>

    <div class="${"post-editor svelte-1wigjxr"}">${$editorStore.postData.content ? `<div class="${"rows svelte-1wigjxr"}">
            ${(0, import_index_8e09b0bf.b)($editorStore.postData.content, (row, ri) => `<div class="${"row svelte-1wigjxr"}"><div class="${"row-content svelte-1wigjxr"}">
                        ${(0, import_index_8e09b0bf.b)(row.columns, (column, ci) => `${(0, import_index_8e09b0bf.v)(Column_edit, "ColumnEdit").$$render($$result, {
    rowId: row.id,
    columnId: column.id,
    column
  }, {}, {})}`)}</div>

                    
                    <div class="${"row-options svelte-1wigjxr"}"><span class="${"row-title svelte-1wigjxr"}">Row</span>
                        
                        <button class="${"row-option svelte-1wigjxr"}" title="${"Add Columnt to Row"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-plus svelte-1wigjxr"}" viewBox="${"0 0 16 16"}"><path d="${"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}"></path></svg></button>
                        
                        <button class="${"row-option svelte-1wigjxr"}" title="${"Move Row Up"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-up-short svelte-1wigjxr"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"}"></path></svg></button>
                        
                        <button class="${"row-option svelte-1wigjxr"}" title="${"Move Row Down"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-down-short svelte-1wigjxr"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"}"></path></svg></button>
                        
                        <button class="${"row-option svelte-1wigjxr"}" title="${"Delete Row"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-x svelte-1wigjxr"}" viewBox="${"0 0 16 16"}"><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg>
                        </button></div>

                </div>`)}</div>` : ``}

        <button class="${"add-row svelte-1wigjxr"}">Add Row</button>

        </div>

    ${$editorStore.editing ? `${(0, import_index_8e09b0bf.v)(Item_config, "ItemConfig").$$render($$result, {}, {}, {})}` : ``}

</div>`;
});
