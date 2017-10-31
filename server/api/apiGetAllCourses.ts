import {Request, Response} from 'express';
import {findAllCourses} from '../queries/finadAllCourses';
import * as _ from 'lodash';
import {onError} from './onError';
import {onSuccess} from './onSuccess';

export function apiGetAllCourses(req: Request, res: Response) {
    // throw new Error("Error Occurred");
    findAllCourses()
        .then( _.partial(onSuccess, res))
        .catch(_.partial(onError, res, 'findAllCourses error'));
}

