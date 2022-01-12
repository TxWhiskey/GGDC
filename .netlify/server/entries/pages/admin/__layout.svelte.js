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
  default: () => _layout,
  load: () => load
});
var import_index_8e09b0bf = __toModule(require("../../../chunks/index-8e09b0bf.js"));
var import_firebase_6875ed47 = __toModule(require("../../../chunks/firebase-6875ed47.js"));
var import_auth = __toModule(require("@firebase/auth"));
var import_app = __toModule(require("@firebase/app"));
function authGuard(path, session2) {
  switch (path) {
    case "/admin":
      if (session2.user) {
        return {
          status: 302,
          redirect: "/admin/portal"
        };
      } else {
        return {
          status: 302,
          redirect: "admin/login"
        };
      }
    case "/admin/login":
      if (session2.user) {
        return {
          status: 302,
          redirect: "/admin/portal"
        };
      } else {
        return {};
      }
  }
  if (session2.user) {
    return {};
  } else {
    return {
      status: 302,
      redirect: "/admin/login"
    };
  }
}
async function load({ session, url }) {
  return authGuard(url.pathname, session);
}
const _layout = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
