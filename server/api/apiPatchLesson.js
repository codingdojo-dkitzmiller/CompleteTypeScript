"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var onError_1 = require("./onError");
var updateLesson_1 = require("../queries/updateLesson");
var _ = require("lodash");
function apiPatchLesson(req, res) {
    var id = req.params.id;
    updateLesson_1.updateLesson(id, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.dabaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, 'Could not create lesson'));
}
exports.apiPatchLesson = apiPatchLesson;
//# sourceMappingURL=apiPatchLesson.js.map