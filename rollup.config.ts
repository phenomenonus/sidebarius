import type { RollupOptions } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

const input = "src/index.ts";

const basePlugins = [
  resolve({
    browser: true,
  }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: false,
    declarationMap: false,
  }),
];

const config: RollupOptions[] = [
  // REGULAR BUILD
  {
    input,

    output: [
      {
        file: "dist/sidebarius.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/sidebarius.cjs.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/sidebarius.iife.js",
        format: "iife",
        name: "Sidebarius",
        exports: "named",
        sourcemap: true,
      },
    ],

    plugins: basePlugins,
  },

  // MINIFIED BUILD
  {
    input,

    output: [
      {
        file: "dist/sidebarius.esm.min.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/sidebarius.cjs.min.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/sidebarius.iife.min.js",
        format: "iife",
        name: "Sidebarius",
        exports: "named",
        sourcemap: true,
      },
    ],

    plugins: [...basePlugins, terser()],
  },

  // TYPES ONLY
  {
    input,

    output: [
      {
        file: "dist/sidebarius.d.ts",
        format: "es",
      },
    ],

    plugins: [dts()],
  },
];

export default config;
