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
  post: () => post
});
var import_firebase_admin = __toModule(require("firebase-admin"));
var import_firebase_admin_5494a02e = __toModule(require("../../../../chunks/firebase-admin-5494a02e.js"));
var import_app = __toModule(require("firebase-admin/app"));
var import_firestore = __toModule(require("firebase-admin/firestore"));
async function post(request) {
  const path = request.body.path;
  const title = request.body.title;
  if (!path || !Array.isArray(path) && title) {
    return {
      status: 400,
      body: {
        message: "Must contain a path array and title."
      }
    };
  }
  const res = await import_firebase_admin_5494a02e.d.collection("Folders").add({
    title,
    folderPath: path
  });
  return {
    status: 200,
    body: {
      id: res.id,
      title,
      folderPath: path
    }
  };
}
