import {Response} from 'express';
import {json} from 'sequelize';

export function onSuccess(res: Response, data: any) {
    console.error(`onSuccess called:`);
    res.status(200).json({payload: data});
}
