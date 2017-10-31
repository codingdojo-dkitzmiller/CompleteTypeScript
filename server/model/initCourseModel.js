"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
function initCourseModel(sequelize) {
    return sequelize.define('Course', {
        description: ORM.STRING,
        url: ORM.STRING,
        longDescription: ORM.TEXT,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN
    });
}
exports.initCourseModel = initCourseModel;
//# sourceMappingURL=initCourseModel.js.map