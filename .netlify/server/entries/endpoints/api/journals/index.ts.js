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
  get: () => get,
  post: () => post
});
var import_firebase_admin_5494a02e = __toModule(require("../../../../chunks/firebase-admin-5494a02e.js"));
var import_app = __toModule(require("firebase-admin/app"));
var import_firestore = __toModule(require("firebase-admin/firestore"));
async function get() {
  const journalsRef = import_firebase_admin_5494a02e.d.collection("Journals");
  const journals = await journalsRef.get().then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => doc.data());
  });
  return {
    headers: {
      "content-type": "application/json"
    },
    body: [
      ...journals
    ]
  };
}
async function post(request) {
  const post2 = request.body;
  await import_firebase_admin_5494a02e.d.collection("Journal Data").doc(post2.id).set({
    postId: post2.id,
    content: post2.content
  });
  delete post2.content;
  const newPost = await import_firebase_admin_5494a02e.d.collection("Journals").doc(post2.id).set(__spreadValues({}, post2));
  return {
    status: 200,
    body: newPost
  };
}
