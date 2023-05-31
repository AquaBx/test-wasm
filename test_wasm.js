let imports = {};
let wasm;
/**
* @param {number} n
* @returns {number}
*/
module.exports.fibonacci = function(n) {
    const ret = wasm.fibonacci(n);
    return ret;
};

const path = require('path').join(__dirname, 'test_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

