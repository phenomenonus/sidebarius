import type { RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const input = 'src/index.ts';
const name = 'Sidebarius'; // Global name (for browsers)
const tsPlugin = typescript({ tsconfig: './tsconfig.json' });

interface ConfigOptions {
  format: 'cjs' | 'esm' | 'iife';
  file: string;
  minify: boolean;
}

function createConfig({ format, file, minify }: ConfigOptions): RollupOptions {
  const plugins = [resolve(), commonjs(), tsPlugin];
  if (minify) plugins.push(terser());

  return {
    input,
    output: {
      file,
      format,
      name: format === 'iife' ? name : undefined,
      sourcemap: true,
    },
    plugins,
    external: [],
  };
}

const configs: RollupOptions[] = [
  // Node CJS
  createConfig({ format: 'cjs', file: 'dist/sidebarius.cjs.js', minify: false }),
  createConfig({ format: 'cjs', file: 'dist/sidebarius.cjs.min.js', minify: true }),

  // ESM
  createConfig({ format: 'esm', file: 'dist/sidebarius.esm.js', minify: false }),
  createConfig({ format: 'esm', file: 'dist/sidebarius.esm.min.js', minify: true }),

  // Browser IIFE
  createConfig({ format: 'iife', file: 'dist/sidebarius.iife.js', minify: false }),
  createConfig({ format: 'iife', file: 'dist/sidebarius.iife.min.js', minify: true }),

  // TypeScript declarations
  {
    input,
    output: {
      file: 'dist/sidebarius.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];

export default configs;
