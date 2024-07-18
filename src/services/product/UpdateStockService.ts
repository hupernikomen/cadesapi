import prismaclient from "../../prisma";

interface StockRequest {
    salesformID: string;
}

class UpdateStockService {
    async execute({ salesformID}: StockRequest) {

        const _salesform = await prismaclient.salesForm.findFirst({ where: { id: salesformID } })

        switch (_salesform.state) {
            case "Created":
                await prismaclient.salesForm.updateMany({ where: { id: salesformID },
                    data: { state: "Reserved" }
                })
                break;

            case "Reserved":
                await prismaclient.salesForm.updateMany({ where: { id: salesformID },
                    data: { state: "Concluded" }
                })

                const _budget = await prismaclient.budget.findMany({ where: { salesformID: salesformID } })

                _budget.map(async (item) => {
                    const _product = await prismaclient.product.findFirst({  where: { id: item.productID } })
    
                    await prismaclient.product.updateMany({ where: { id: _product.id },
                        data: {
                            out: _product.out + item.amount,
                            reserved: _product.reserved - item.amount
                        }
                    })
                })
    
                break;

            case "Open":


                const _budget2 = await prismaclient.budget.findMany({ where: { salesformID: salesformID } })

                await prismaclient.salesForm.updateMany({ where: { id: salesformID },
                    data: { state: "Created", paidOut: _budget2.reduce((acc, current) => acc + current.total, 0)}
                })
                
    
                _budget2.map(async (item) => {
                    const _product = await prismaclient.product.findFirst({ where: { id: item.productID } })
    
                    await prismaclient.product.updateMany({ where: { id: _product.id },
                        data: {
                            reserved: _product.reserved + item.amount,
                        }
                    })
                })
    
                break;
        
            default:
                break;
        }
    }
}

export { UpdateStockService }