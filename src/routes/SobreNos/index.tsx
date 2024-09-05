import styles from "../../styles/sobreNos.module.css"

import arthur from "../../assets/arthur.svg"
import willian from "../../assets/willian.svg"
import iago from "../../assets/iago.svg"
import github from "../../assets/github.svg"
import projeto from "../../assets/sobre-projeto.svg"

export default function SobreNos(){
    const participantes = [
        {
            nome: "Arthur Arraes",
            github: "https://github.com/arthurarraes",
            imagem: arthur
        },
        {
            nome: "Willian Moreira",
            github: "https://github.com/WillianMoreiraBFP",
            imagem: willian
        },
        {
            nome: "Iago Victor",
            github: "https://github.com/iagovic",
            imagem: iago
        }
    ]
    return(
        <main>
            <section className={styles.participantes}>
            <header>Participantes</header>
            <a className={styles.repositorio} href="https://github.com/arthurarraes/challenge-react" target="_blank">Repositório</a>
            <div className={styles.participantesContainer}>
            {participantes.map((e) => (
                <div className={styles.participante}>
                <figure><img src={e.imagem} alt=""/></figure>
                <h1>{e.nome}</h1>
                <h1>1TDSPK</h1>
                <a href={e.github} target="_blank">
                    Github 
                    <img src={github} alt=""/>
                </a>
            </div>
                    ))}
            </div>
        </section>
        <section className={styles.sobreProjeto}>
            <header>Sobre o Projeto</header>
            <p>Bem-vindo ao nosso site! Somos um grupo de estudantes universitários apaixonados por tecnologia e inovação, colaborando com a Porto Seguro e a Oxigênio Aceleradora para trazer uma solução revolucionária para os proprietários de veículos.</p>
            <p>Nosso objetivo é simplificar a vida dos motoristas, fornecendo uma plataforma intuitiva e inteligente para diagnóstico e orçamento de peças automotivas. Combinando o poder da inteligência artificial com a expertise da Porto Seguro em seguros automotivos e a inovação da Oxigênio Aceleradora, estamos reinventando a maneira como os problemas dos carros são identificados e resolvidos.</p>
            <figure>
                <img src={projeto} alt=""/>
            </figure>
        </section>
        </main>
    )
}
