var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
  del: () => del,
  get: () => get
});
var import_firebase_admin_5494a02e = __toModule(require("../../../../chunks/firebase-admin-5494a02e.js"));
var import_app = __toModule(require("firebase-admin/app"));
var import_firestore = __toModule(require("firebase-admin/firestore"));
async function get(request) {
  const id = request.params.id;
  const journalRef = import_firebase_admin_5494a02e.d.collection("Journals").doc(id);
  const doc = await journalRef.get();
  if (!doc.exists) {
    return {
      headers: {
        "content-type": "application/json"
      },
      status: 404,
      body: {
        message: "test"
      }
    };
  }
  const dataRef = import_firebase_admin_5494a02e.d.collection("Journal Data").doc(id);
  const data = await dataRef.get();
  console.log(data.data());
  return {
    headers: {
      "content-type": "application/json"
    },
    body: __spreadValues(__spreadValues({}, doc.data()), data.data())
  };
}
async function del(request) {
  const id = request.params.id;
  const journalRef = import_firebase_admin_5494a02e.d.collection("Journals").doc(id);
  await journalRef.delete();
  const dataRef = import_firebase_admin_5494a02e.d.collection("Journal Data").doc(id);
  await dataRef.delete();
  return {
    headers: {
      "content-type": "application/json"
    },
    body: {
      message: "Success"
    }
  };
}
