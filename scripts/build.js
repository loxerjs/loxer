var version = require("../package.json").version;
var author = require("../package.json").author;
var license = require("../package.json").license;

const time = Date.now();

require("esbuild")
  .build({
    entryPoints: ["./src/browser.js"],
    bundle: false,
    banner: {
      js: `/* * v${version} * Copyright (c) 2022 ${author} * Licensed under the ${license} license */`,
    },
    minify: true,
    outfile: `./dist/loxer-${version}.bundle.js`,
  })

  .then(() => {
    console.log(`Build completed in ${Date.now() - time}ms`);
  })
  .catch(() => process.exit(1));
