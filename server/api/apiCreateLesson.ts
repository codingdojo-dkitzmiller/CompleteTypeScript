import {Request, Response} from 'express';
import * as _ from 'lodash';
import {onSuccess} from './onSuccess';
import {onError} from './onError';
import {createLesson} from '../queries/createLesson';
import {dabaseErrorHandler} from './databaseErrorHandler';
const hri = require('human-readable-ids').hri;

export function apiCreateLesson(req: Request, res: Response) {
    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(dabaseErrorHandler, res))
        .catch(_.partial(onError, res, 'Could not create lesson'));
}
