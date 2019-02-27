const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const builtin = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')
const json = require('rollup-plugin-json')

module.exports = {
    input: 'index.js',
    output: {
        file: 'out.js',
        format: 'es'
    },
    plugins: [
        json(),
        nodeResolve(),
        builtin(),
        commonjs(),
        //globals()
        
    ]
};