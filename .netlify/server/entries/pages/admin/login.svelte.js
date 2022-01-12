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
  default: () => Login
});
var import_index_8e09b0bf = __toModule(require("../../../chunks/index-8e09b0bf.js"));
var import_firebase_6875ed47 = __toModule(require("../../../chunks/firebase-6875ed47.js"));
var import_auth = __toModule(require("@firebase/auth"));
var import_stores_a7d20288 = __toModule(require("../../../chunks/stores-a7d20288.js"));
var import_app = __toModule(require("@firebase/app"));
const Login = (0, import_index_8e09b0bf.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_8e09b0bf.a)(import_stores_a7d20288.s, (value) => $session = value);
  let email = "cameronryansims@gmail.com";
  let password = "Notime2die@";
  $$unsubscribe_session();
  return `<h1>Admin</h1>
<h2>Login</h2>
${$session.user ? `<button>Logout</button>` : `<input type="${"text"}" placeholder="${"Email"}"${(0, import_index_8e09b0bf.d)("value", email, 0)}>
    <input type="${"password"}" placeholder="${"Password"}"${(0, import_index_8e09b0bf.d)("value", password, 0)}>
    <button>Login</button>`}
<a href="${"/admin/portal"}">Portal</a>`;
});
