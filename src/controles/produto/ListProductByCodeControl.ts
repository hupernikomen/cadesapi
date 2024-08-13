// import { Request, Response } from 'express'
// import { ListProductByCodeService } from '../../servicos/produto/ListProductByCodeService'


// class ListProductByCodeControl {
//     async handle(req: Request, res: Response) {
//         const codigoDeBarras = req.query.codigoDeBarras as string

//         const listProductByCodeService = new ListProductByCodeService()

//         const product = await listProductByCodeService.execute({
//             codigoDeBarras,
//         })
//         return res.json(product)

//     }
// }

// export { ListProductByCodeControl }