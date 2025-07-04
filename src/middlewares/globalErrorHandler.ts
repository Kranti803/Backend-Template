import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";

const globalErrorhandler: ErrorRequestHandler = (
  err: ErrorHandler, // using ErrorHandler class as a type here!
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default globalErrorhandler;
