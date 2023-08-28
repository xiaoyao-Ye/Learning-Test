export default {
  name: "custom Ghosteye",
  transformMode: "ssr",
  setup(global) {
    console.log(" vitest - env - Ghosteye");
    let obj = {};
    global.localStorage = {
      getItem(key) {
        return obj[key];
      },
      setItem(key, name) {
        obj[key] = name;
      },
    };

    return {
      teardown() {
        // called after all tests with this env have been run
      },
    };
  },
};
