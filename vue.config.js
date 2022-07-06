const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.plugins.push(
      ...[
        AutoImport({
          resolvers: [VantResolver()],
          dts: path.resolve(process.cwd(), "auto-imports.d.ts")
        }),
        Components({
          resolvers: [VantResolver()],
          dts: path.resolve(process.cwd(), "components.d.ts")
        })
      ]
    );
  }
});
