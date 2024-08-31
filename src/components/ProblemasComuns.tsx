import styles from "../styles/problemasComuns.module.css"
import "../styles/global.module.css"


export default function ProblemasComuns(){
    const problemas = [
        {
            problema: "Alinhamento",
            link: "https://blog.portoseguro.com.br/alinhamento-e-balanceamento-evite-dores-de-cabeca-com-a-manutencao"
        },
        {
            problema: "Ar-Condicionado",
            link: "https://blog.portoseguro.com.br/4-cuidados-importantes-com-o-ar-condicionado-do-seu-carro"
        },
        {
            problema: "Arrefecimento",
            link: "https://blog.portoseguro.com.br/cuidados-com-o-carro-que-voce-deve-ter-todo-mes"
        },
        {
            problema: "Balanceamento e Geometria",
            link: "https://blog.portoseguro.com.br/alinhamento-e-balanceamento-evite-dores-de-cabeca-com-a-manutencao"
        },
        {
            problema: "Correias",
            link: "https://blog.portoseguro.com.br/cuidados-com-o-carro-que-voce-deve-ter-todo-mes"
        },
        {
            problema: "Discos e Pastilhas de Freio",
            link: "https://mobilidade.estadao.com.br/entender/oito-sintomas-de-que-a-embreagem-esta-com-problemas/"
        },
        {
            problema: "Embreagens",
            link: "https://mobilidade.estadao.com.br/entender/oito-sintomas-de-que-a-embreagem-esta-com-problemas/"
        },
        {
            problema: "Filtros e Velas de Ignição",
            link: "https://blog.portoseguro.com.br/carro-falhando-entenda-5-dos-principais-motivos"
        }
    ]

    return(
            <section className={styles.problemasComuns}>
                <header>Problemas Comuns</header>

                <div className={styles.problemasContainer}>
                    {problemas.map((e) => (
                        <div className={styles.problemasBox}>
                            <h1>{e.problema}</h1>
                            <button className={`${styles.consulteProblemas} ${styles.botoes}`}><a href={e.link} target="_blank">Saiba Mais</a></button>
                        </div>
                    ))}
                </div>
            </section>
    )
}