"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var finadAllCourses_1 = require("../queries/finadAllCourses");
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
function apiGetAllCourses(req, res) {
    // throw new Error("Error Occurred");
    finadAllCourses_1.findAllCourses()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, 'findAllCourses error'));
}
exports.apiGetAllCourses = apiGetAllCourses;
//# sourceMappingURL=apiGetAllCourses.js.map