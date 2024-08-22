import prismaclient from "../../prisma";

interface DadosDaCor {
    corNome: string;
}

class ExcluiCorServico {
    async execute({ corNome }: DadosDaCor) {

        const corEncontrada = await prismaclient.cor.findFirst({
            where: {
                nome: corNome
            }
        })

        console.log(corEncontrada);
        

        if (corEncontrada) {
            await prismaclient.cor.delete({
                where: {
                    id: corEncontrada.id
                }
            })
        }
    }
}

export { ExcluiCorServico }