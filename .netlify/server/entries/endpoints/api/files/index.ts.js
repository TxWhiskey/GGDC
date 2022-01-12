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
  post: () => post
});
var import_firebase_admin = __toModule(require("firebase-admin"));
var import_firebase_admin_5494a02e = __toModule(require("../../../../chunks/firebase-admin-5494a02e.js"));
var import_app = __toModule(require("firebase-admin/app"));
var import_firestore = __toModule(require("firebase-admin/firestore"));
async function post(request) {
  const requestedPath = request.body.path;
  if (!requestedPath || !Array.isArray(requestedPath)) {
    return {
      status: 400,
      body: {
        message: "Must contain a path array."
      }
    };
  }
  requestedPath.splice(0, 0, "Media Library");
  let folderContents = {
    path: [],
    folders: [],
    files: []
  };
  const foldersRef = import_firebase_admin_5494a02e.d.collection("Folders");
  folderContents.path = await Promise.all(requestedPath.map(async (folderId) => {
    const docData = (await foldersRef.doc(folderId).get()).data();
    return __spreadValues({
      id: folderId
    }, docData);
  }));
  folderContents.path.splice(0, 1);
  const folderSnapshot = await foldersRef.where("folderPath", "==", requestedPath).get();
  if (!folderSnapshot.empty) {
    folderSnapshot.forEach((docSnap) => folderContents.folders.push({
      id: docSnap.id,
      title: docSnap.data().title
    }));
  }
  const filesRef = import_firebase_admin_5494a02e.d.collection("Files");
  const fileSnapshot = await filesRef.where("folderPath", "==", requestedPath).get();
  if (!fileSnapshot.empty) {
    fileSnapshot.forEach((docSnap) => folderContents.files.push(__spreadValues({
      id: docSnap.id
    }, docSnap.data())));
  }
  return {
    status: 200,
    body: folderContents
  };
}
