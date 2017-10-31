
import {Sequelize} from 'sequelize';
import * as ORM from 'sequelize';

export function initLessonModel(sequelize: Sequelize) {
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

