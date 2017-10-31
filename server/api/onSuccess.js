"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onSuccess(res, data) {
    console.error("onSuccess called:");
    res.status(200).json({ payload: data });
}
exports.onSuccess = onSuccess;
//# sourceMappingURL=onSuccess.js.map