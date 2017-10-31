"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var onError_1 = require("./onError");
var _ = require("lodash");
var deleteLesson_1 = require("../queries/deleteLesson");
function apiDeleteLesson(req, res) {
    var id = req.params.id;
    deleteLesson_1.deleteLesson(id)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, 'Could not delete lesson'));
}
exports.apiDeleteLesson = apiDeleteLesson;
//# sourceMappingURL=apiDeleteLesson.js.map