import { Request, Response, response } from 'express'
import { CreateCollaboratorService } from '../../services/collaborator/CreateCollaboratorService'

class CreateCollaboratorControl {
    async handle(req: Request, res: Response) {
        const { type, name, password } = req.body

        const createCollaboratorService = new CreateCollaboratorService()
        const collaborator = await createCollaboratorService.execute({ type, name, password })

        return res.json(collaborator)
    }
}

export { CreateCollaboratorControl }