var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  get: () => get,
  post: () => post
});
async function get(request) {
  console.log(request);
  return {
    body: {
      message: "ok"
    }
  };
}
const post = (request) => {
  console.log(request);
  JSON.parse(request.body);
  return {
    body: {
      message: "Thank you for your submission. We will reach out to you shortly. If you would like to get in contact with us sooner, please feel free to call me at 713.248.2987."
    }
  };
};
