"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apiErrorHandler(err, req, res, next) {
    console.log("Error handler: " + err);
    res.status(500).json({ errorCode: '0001', message: 'Internal Error' });
}
exports.apiErrorHandler = apiErrorHandler;
//# sourceMappingURL=apiErrorHandler.js.map