import { Request, Response, NextFunction } from 'express';
import { ApiError } from './CustomizerException';

export const errorHandler = (
    err: Error | ApiError,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';
    const code =
        err instanceof ApiError && err.code ? err.code : 'INTERNAL_ERROR';
    const timestamp =
        err instanceof ApiError ? err.timestamp : new Date().toISOString();

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        code,
        timestamp,
    });
};
