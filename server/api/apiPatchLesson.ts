import {Request, Response} from 'express';
import {onSuccess} from './onSuccess';
import {dabaseErrorHandler} from './databaseErrorHandler';
import {onError} from './onError';
import {updateLesson} from '../queries/updateLesson';
import * as _ from 'lodash';

export function apiPatchLesson(req: Request, res: Response) {
    const id = req.params.id;

    updateLesson(id, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(dabaseErrorHandler, res))
        .catch(_.partial(onError, res, 'Could not create lesson'));

}