try {
  require("./node_modules/next/dist/server/require-hook");
  console.log("hook ok");
} catch (error) {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
