const { get } = require("./request");

(async () => {
  console.log(await get());
})();
