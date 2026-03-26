try {
  console.log("path", require("path").sep);
  console.log("styled-jsx", require.resolve("styled-jsx/package.json"));
  console.log("style", require.resolve("styled-jsx/style"));
} catch (error) {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
