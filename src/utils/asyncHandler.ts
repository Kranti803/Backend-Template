import { Request, Response, NextFunction, RequestHandler } from "express";

const catchAsyncError =
  (passedFunc: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(passedFunc(req, res, next)).catch((err) => next(err));
  };
export default catchAsyncError;
