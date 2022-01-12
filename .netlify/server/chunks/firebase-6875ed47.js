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
  a: () => app
});
var import_app = __toModule(require("@firebase/app"));
var import_auth = __toModule(require("@firebase/auth"));
const firebaseConfig = {
  apiKey: "AIzaSyA-oDVAeegQZnjKSUGAXNcj8s1azKUbvdY",
  authDomain: "georgia-grace-design-collab.firebaseapp.com",
  projectId: "georgia-grace-design-collab",
  storageBucket: "georgia-grace-design-collab.appspot.com",
  messagingSenderId: "368830510902",
  appId: "1:368830510902:web:3d063c9bdac3ae4e9fa597",
  measurementId: "G-7E6317HDFN"
};
console.info("Initializing FB App");
const app = (0, import_app.initializeApp)(firebaseConfig);
(0, import_auth.getAuth)(app);
