import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMidleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ mesagge: "pleace send token" });
        }
        console.log(token)
        next();
    }
}