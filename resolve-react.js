try {
  console.log(require.resolve("react"));
} catch (error) {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
