"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var course_summary_1 = require("../../shared/model/course-summary");
function findAllCourses() {
    return model_1.CourseModel.findAll({ order: ['seqNo'] })
        .then(function (dbModel) {
        return course_summary_1.createCourseSummaries(dbModel);
    });
}
exports.findAllCourses = findAllCourses;
//# sourceMappingURL=finadAllCourses.js.map