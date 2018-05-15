import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const commonConfig = {
  input: 'index.js',
  plugins: [
    resolve(), // so Rollup can find the 'path-to-regexp' NPM module
    commonjs(), // so Rollup can import 'path-to-regexp' as an ES6 module even though it exports in CommonJS
  ]
};

export default [
  // browser-friendly UMD build with all dependencies bundled-in
  Object.assign({}, commonConfig, {
    output: {
      format: 'umd',
      file: pkg.browser,
      name: 'Vaadin',
      extend: true,
      sourcemap: true,
    }
  })
];
