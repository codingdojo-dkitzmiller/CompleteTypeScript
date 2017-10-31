import {Response} from 'express';

export function onError(res: Response, msg: string,  err: any) {
    console.error('onError: ', msg, err);
    res.status(500).send();
}
