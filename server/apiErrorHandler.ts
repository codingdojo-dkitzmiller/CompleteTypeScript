import {NextFunction, Request, Response, RequestHandler, ErrorRequestHandler} from 'express';

export function apiErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(`Error handler: ${err}`);
    res.status(500).json({ errorCode: '0001', message: 'Internal Error'});
}