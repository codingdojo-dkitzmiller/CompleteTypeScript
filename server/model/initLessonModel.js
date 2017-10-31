"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
function initLessonModel(sequelize) {
    return sequelize.define('Lesson', {
        url: ORM.STRING,
        description: ORM.STRING,
        duration: ORM.STRING,
        seqNo: ORM.INTEGER,
        courseId: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING
    });
}
exports.initLessonModel = initLessonModel;
//# sourceMappingURL=initLessonModel.js.map