const { writeFileSync } = require("fs");
const pkg = require("../../package.json");

const content = `export const PROJECT_VERSION = "${pkg.version}";\n`;
writeFileSync("src/data/version.ts", content);
