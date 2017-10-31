"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require('human-readable-ids').hri;
function databaseErrorHandler(res, err) {
    var id = hri.random();
    console.error('Database error occurred: ', id, err);
    res.status(500).json({ code: 'ERR-002', message: "Database error, err code: " + id });
}
exports.databaseErrorHandler = databaseErrorHandler;
//# sourceMappingURL=databaseErrorHandler.js.map