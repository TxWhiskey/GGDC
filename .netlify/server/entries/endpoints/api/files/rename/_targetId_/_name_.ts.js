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
  patch: () => patch
});
var import_firebase_admin = __toModule(require("firebase-admin"));
var import_firebase_admin_5494a02e = __toModule(require("../../../../../../chunks/firebase-admin-5494a02e.js"));
var import_app = __toModule(require("firebase-admin/app"));
var import_firestore = __toModule(require("firebase-admin/firestore"));
async function patch(req) {
  const targetId = req.params.targetId;
  const name = req.params.name;
  if (!targetId || !name) {
    return {
      status: 400,
      body: {
        message: "Must contain a ID and name."
      }
    };
  }
  const filesRef = import_firebase_admin_5494a02e.d.collection("Files");
  const fileExists = (await filesRef.doc(targetId).get()).exists;
  const foldersRef = import_firebase_admin_5494a02e.d.collection("Folders");
  const folderExists = (await foldersRef.doc(targetId).get()).exists;
  if (!fileExists && !folderExists) {
    return {
      status: 400,
      body: {
        message: "No file or folder of that ID exists."
      }
    };
  }
  if (fileExists) {
    const fileRef = filesRef.doc(targetId);
    await fileRef.update({ title: name });
    return {
      status: 200,
      body: {
        type: "File",
        targetId,
        title: name
      }
    };
  }
  const folderRef = foldersRef.doc(targetId);
  await folderRef.update({ title: name });
  return {
    status: 200,
    body: {
      type: "Folder",
      targetId,
      title: name
    }
  };
}