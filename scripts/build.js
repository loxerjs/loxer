var version = require("../package.json").version
var user = require("../package.json").author


const time = Date.now()


require("esbuild").build({
    entryPoints: ["./src/browser.js"],
    bundle: false,
    outfile: `./dist/loxer-${version}.bundle.js`,
}).then(() => {
    console.log(`Build completed in ${Date.now() - time}ms`)
}).catch(() => process.exit(1))