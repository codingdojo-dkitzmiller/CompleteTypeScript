"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export function createCourseDetail(dbModel: any) : CourseDetail {
function createCourseDetail(_a) {
    var id = _a.id, url = _a.url, description = _a.description, iconUrl = _a.iconUrl, courseListIcon = _a.courseListIcon, seqNo = _a.seqNo, longDescription = _a.longDescription, comingSoon = _a.comingSoon, isNew = _a.isNew, isOngoing = _a.isOngoing, Lessons = _a.Lessons;
    return {
        id: id,
        url: url,
        description: description,
        iconUrl: iconUrl,
        courseListIcon: courseListIcon,
        seqNo: seqNo,
        longDescription: longDescription,
        comingSoon: comingSoon,
        isNew: isNew,
        isOngoing: isOngoing,
        lessons: Lessons.map(createLessonFromDbModel)
    };
}
exports.createCourseDetail = createCourseDetail;
function createLessonFromDbModel(_a) {
    var id = _a.id, url = _a.url, description = _a.description, duration = _a.duration, seqNo = _a.seqNo, courseId = _a.courseId, pro = _a.pro, tags = _a.tags;
    return {
        id: id,
        url: url,
        description: description,
        duration: duration,
        seqNo: seqNo,
        courseId: courseId,
        pro: pro,
        tags: tags
    };
}
//# sourceMappingURL=createCourseDetail.js.map