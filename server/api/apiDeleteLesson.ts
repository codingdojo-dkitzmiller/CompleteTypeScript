import {Request, Response} from 'express';
import {onSuccess} from './onSuccess';
import {databaseErrorHandler} from './databaseErrorHandler';
import {onError} from './onError';
import * as _ from 'lodash';
import {deleteLesson} from '../queries/deleteLesson';

export function apiDeleteLesson(req: Request, res: Response) {
    const id = req.params.id;
    deleteLesson(id)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, 'Could not delete lesson'));
}