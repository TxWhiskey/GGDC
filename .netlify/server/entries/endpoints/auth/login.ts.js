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
var cookie = __toModule(require("cookie"));
var admin = __toModule(require("firebase-admin"));
var import_firebase_6875ed47 = __toModule(require("../../../chunks/firebase-6875ed47.js"));
var import_auth = __toModule(require("firebase/auth"));
var import_app = __toModule(require("@firebase/app"));
var import_auth2 = __toModule(require("@firebase/auth"));
async function post(request) {
  const body = request.body;
  const email = body.email;
  const password = body.password;
  try {
    var userCredential = await (0, import_auth.signInWithEmailAndPassword)((0, import_auth.getAuth)(), email, password);
  } catch (err) {
    return {
      status: 403,
      body: err
    };
  }
  const idToken = await userCredential.user.getIdToken();
  const expiresIn = 60 * 60 * 25 * 10 * 1e3;
  return await admin.auth().createSessionCookie(idToken, { expiresIn }).then((sessionCookie) => {
    const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: "/" };
    return {
      status: 200,
      body: {
        message: "Login Successful"
      },
      headers: {
        "set-cookie": [
          cookie.serialize("session", sessionCookie, options)
        ]
      }
    };
  }).catch((error) => {
    console.log("[Get Cookie]", error.message);
    return {
      status: 401,
      error: error.message
    };
  });
}
