import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prismaclient from "../prisma";

interface Payload {
    sub: string
}

export async function Gerente(
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

        const usuarioEncontrado = await prismaclient.usuario.findFirst({
            where:{
                id: sub
            }
        })

        if (usuarioEncontrado.cargo === 'Gerente' || usuarioEncontrado.cargo === 'Socio') {
            return next()
        } else {
            return res.status(401).end()
        }

    } catch (error) {
        return res.status(401).end()
    }
}