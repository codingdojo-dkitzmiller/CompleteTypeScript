import {Request,Response} from 'express';
import {onSuccess} from './onSuccess';
import {onError} from './onError';
import {getCourseDetail} from '../queries/getCourseDetail';
import * as _ from 'lodash';

export function apiGetCourseDetail(req: Request, res: Response) {
    const courseId = parseInt(req.params.id);
    getCourseDetail(courseId)
        .then( _.partial(onSuccess, res))
        .catch(_.partial(onError, res, 'getCourseDetail error'));
}