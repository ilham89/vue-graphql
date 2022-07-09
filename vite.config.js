import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import graphql from "@rollup/plugin-graphql"; // ADD

export default defineConfig({
  plugins: [
    vue(),
    graphql(), // ADD
  ],
});
