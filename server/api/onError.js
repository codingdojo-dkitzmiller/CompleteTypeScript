"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onError(res, msg, err) {
    console.error('onError: ', msg, err);
    res.status(500).send();
}
exports.onError = onError;
//# sourceMappingURL=onError.js.map