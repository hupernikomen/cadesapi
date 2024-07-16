import { Request, Response } from "express";
import { LoginCollaboratorService } from "../../services/collaborator/LoginCollaboratorService";

class LoginCollaboratorControl {
    async handle(req: Request, res: Response) {
        const { name, password } = req.body
        const loginCollaboratorService = new LoginCollaboratorService()

        const login = await loginCollaboratorService.execute({
            name, password
        })

        return res.json(login)
    }
}

export { LoginCollaboratorControl }