module.exports = {
    proxy: "http://localhost:4000", // Your Express app URL
    files: ["views/**/*.ejs", "public/**/*.*"], // Files to watch for changes
    port: 3000, // Port for Browsersync
    open: true // Prevent Browsersync from automatically opening a browser window
  };