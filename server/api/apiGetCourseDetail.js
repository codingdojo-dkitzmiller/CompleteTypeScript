"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var getCourseDetail_1 = require("../queries/getCourseDetail");
var _ = require("lodash");
function apiGetCourseDetail(req, res) {
    var courseId = parseInt(req.params.id);
    getCourseDetail_1.getCourseDetail(courseId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, 'getCourseDetail error'));
}
exports.apiGetCourseDetail = apiGetCourseDetail;
//# sourceMappingURL=apiGetCourseDetail.js.map