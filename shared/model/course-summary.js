"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourseSummary(_a) {
    var id = _a.id, url = _a.url, description = _a.description, iconUrl = _a.iconUrl, courseListIcon = _a.courseListIcon, seqNo = _a.seqNo;
    return {
        id: id, url: url, description: description, iconUrl: iconUrl, courseListIcon: courseListIcon, seqNo: seqNo
    };
}
exports.createCourseSummary = createCourseSummary;
function createCourseSummaries(data) {
    return data.map(createCourseSummary);
}
exports.createCourseSummaries = createCourseSummaries;
//# sourceMappingURL=course-summary.js.map