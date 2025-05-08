// vite.config.mjs
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/Work/Tonakodi/PageBuilderJS/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Work/Tonakodi/PageBuilderJS/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import stringPlugin from "file:///E:/Work/Tonakodi/PageBuilderJS/node_modules/vite-plugin-string/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/Work/Tonakodi/PageBuilderJS/vite.config.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify("production")
    },
    css: {
      postcss: "./postcss.config.js"
    },
    plugins: [
      vue(),
      ...mode === "production" ? [
        stringPlugin({
          include: "**/*.css"
        })
      ] : []
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      lib: {
        entry: "index.js",
        name: "BlockBuilder",
        formats: ["umd", "es", "cjs"],
        fileName: "block-builder"
      }
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcV29ya1xcXFxUb25ha29kaVxcXFxQYWdlQnVpbGRlckpTXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxXb3JrXFxcXFRvbmFrb2RpXFxcXFBhZ2VCdWlsZGVySlNcXFxcdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Xb3JrL1RvbmFrb2RpL1BhZ2VCdWlsZGVySlMvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBzdHJpbmdQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXN0cmluZ1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICByZXR1cm4ge1xuICBkZWZpbmU6IHtcbiAgICBcInByb2Nlc3MuZW52Lk5PREVfRU5WXCI6IEpTT04uc3RyaW5naWZ5KFwicHJvZHVjdGlvblwiKSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczogXCIuL3Bvc3Rjc3MuY29uZmlnLmpzXCIsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAuLi4obW9kZSA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gW1xuICAgICAgICAgIHN0cmluZ1BsdWdpbih7XG4gICAgICAgICAgICBpbmNsdWRlOiBcIioqLyouY3NzXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcImluZGV4LmpzXCIsXG4gICAgICBuYW1lOiBcIkJsb2NrQnVpbGRlclwiLFxuICAgICAgZm9ybWF0czogW1widW1kXCIsIFwiZXNcIiwgXCJjanNcIl0sXG4gICAgICBmaWxlTmFtZTogXCJibG9jay1idWlsZGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgcm9sbHVwT3B0aW9uczoge1xuICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgb3V0cHV0OiB7XG4gICAgICBnbG9iYWxzOiB7XG4gICAgICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNSLFNBQVMsZUFBZSxXQUFXO0FBRXpULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGtCQUFrQjtBQUptSixJQUFNLDJDQUEyQztBQU83TixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxTQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTix3QkFBd0IsS0FBSyxVQUFVLFlBQVk7QUFBQSxJQUNyRDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLEdBQUksU0FBUyxlQUNUO0FBQUEsUUFDRSxhQUFhO0FBQUEsVUFDWCxTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQUEsTUFDSCxJQUNBLENBQUM7QUFBQSxJQUNUO0FBQUEsSUFDRSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUyxDQUFDLE9BQU8sTUFBTSxLQUFLO0FBQUEsUUFDNUIsVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
