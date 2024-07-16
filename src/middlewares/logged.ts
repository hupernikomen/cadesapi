import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}

export async function Logged(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const bearertoken = req.headers.authorization

    if (!bearertoken) {
        return res.status(401).end()
    }

    const [, token] = bearertoken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.JWT_secret
        ) as Payload

        req.user_id = sub

        return next()


    } catch (error) {
        return res.status(401).end()
    }
}