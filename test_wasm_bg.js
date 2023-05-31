let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} n
* @returns {number}
*/
export function fibonacci(n) {
    const ret = wasm.fibonacci(n);
    return ret;
}

