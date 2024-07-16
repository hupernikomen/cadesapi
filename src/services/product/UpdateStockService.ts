import prismaclient from "../../prisma";

interface StockRequest {
    salesformID: string;
}

// Movimentação para retirada definitiva do estoque
class UpdateStockService {
    async execute({ salesformID }: StockRequest) {

        // BUSCA PEDIDO INFORMADO
        const _salesform = await prismaclient.salesForm.findFirst({
            where: {
                id: salesformID
            }
        })

        if (_salesform.state === "Created") {

            // ALTERA O STATUS DO PEDIDO PARA "ENTREGUE"
            await prismaclient.salesForm.updateMany({
                where: {
                    id: salesformID
                },
                data: {
                    state: "Reserved"
                }
            })
        } else if (_salesform.state === "Reserved") {

            // ALTERA O STATUS DO PEDIDO PARA "ENTREGUE"
            await prismaclient.salesForm.updateMany({
                where: {
                    id: salesformID
                },
                data: {
                    state: "Concluded"
                }
            })

            // BUSCA O ORÇAMENTO DO PEDIDO INFORMADO
            const _budget = await prismaclient.budget.findMany({
                where: {
                    salesformID: salesformID
                }
            })

            // VARRE TODO O ORÇAMENTO EM BUSCA DOS ITENS DESTE PEDIDO E ALTERA O ESTOQUE 
            _budget.map(async (item) => {
                const _product = await prismaclient.product.findFirst({
                    where: {
                        id: item.productID
                    }
                })

                await prismaclient.product.updateMany({
                    where: {
                        id: _product.id
                    },
                    data: {
                        out: _product.out + item.amount,
                        reserved: _product.reserved - item.amount
                    }
                })
            })
        } else if (_salesform.state === "Open") {
            await prismaclient.salesForm.updateMany({
                where: {
                    id: salesformID
                },
                data: {
                    state: "Created"
                }
            })

            // BUSCA O ORÇAMENTO DO PEDIDO INFORMADO
            const _budget = await prismaclient.budget.findMany({
                where: {
                    salesformID: salesformID
                }
            })

            // VARRE TODO O ORÇAMENTO EM BUSCA DOS ITENS DESTE PEDIDO E ALTERA O ESTOQUE 
            _budget.map(async (item) => {
                const _product = await prismaclient.product.findFirst({
                    where: {
                        id: item.productID
                    }
                })

                await prismaclient.product.updateMany({
                    where: {
                        id: _product.id
                    },
                    data: {
                        reserved: _product.reserved + item.amount,
                    }
                })
            })
        }
    }
}

export { UpdateStockService }