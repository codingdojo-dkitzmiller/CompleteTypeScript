"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var createLesson_1 = require("../queries/createLesson");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var hri = require('human-readable-ids').hri;
function apiCreateLesson(req, res) {
    createLesson_1.createLesson(req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.dabaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, 'Could not create lesson'));
}
exports.apiCreateLesson = apiCreateLesson;
//# sourceMappingURL=apiCreateLesson.js.map