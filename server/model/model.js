"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var initCourseModel_1 = require("./initCourseModel");
var initLessonModel_1 = require("./initLessonModel");
var dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';
var options = { benchmark: true, logging: console.log };
var sequelize = new ORM(dbUrl, options);
exports.CourseModel = initCourseModel_1.initCourseModel(sequelize);
exports.LessonModel = initLessonModel_1.initLessonModel(sequelize);
exports.CourseModel.hasMany(exports.LessonModel, { foreignKey: 'courseId' });
exports.LessonModel.belongsTo(exports.CourseModel, { foreignKey: 'id' });
//# sourceMappingURL=model.js.map