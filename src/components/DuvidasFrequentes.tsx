    import styles from "../styles/duvidasFrequentes.module.css"
    import "../styles/global.module.css"
    import arrow  from '../assets/arrow-down.svg'


    export default function DuvidasFrequentes(){
        const duvidasFrequentes = [
            {
                pergunta: "Como a IA determina quais problemas meu veículo pode estar apresentando?",
                resposta: "A IA utiliza informações fornecidas pelo usuário sobre os sintomas e consequências do problema no veículo, analisando esses dados com um banco de dados de problemas comuns e suas causas. Ela usa algoritmos avançados para comparar os sintomas reportados com padrões de falhas conhecidos, gerando uma estimativa sobre o que pode estar causando o problema."
            },
            {
                pergunta: "Quão preciso é o custo estimado para peças e serviços fornecido pela IA?",
                resposta: "A precisão da estimativa de custo depende da qualidade e atualização das informações que a IA usa. A IA baseia suas estimativas em dados de mercado atualizados e informações sobre o custo de peças e mão de obra em sua região. No entanto, o custo final pode variar devido a fatores como disponibilidade de peças e políticas de preços das oficinas."
            },
            {
                pergunta: "A IA pode substituir o diagnóstico feito por um mecânico qualificado?",
                resposta: "A IA é uma ferramenta para auxiliar no diagnóstico, não um substituto completo para a experiência de um mecânico qualificado. Ela pode fornecer uma análise inicial e estimativas úteis, mas recomenda-se que um profissional examine o veículo para uma confirmação final e para realizar reparos complexos"
            },
            {
                pergunta: "Como a IA lida com problemas que não estão bem documentados ou são menos comuns?",
                resposta: "A IA é projetada para aprender e se adaptar com o tempo. Para problemas menos comuns ou não bem documentados, ela usa dados históricos e feedback contínuo para melhorar suas previsões. Se um problema não for identificado com precisão, o sistema pode solicitar uma avaliação adicional por parte de um mecânico."
            },
            {
                pergunta: "Quanto tempo leva para a IA fornecer uma estimativa completa para o reparo?",
                resposta: "O tempo necessário para gerar uma estimativa varia de acordo com a complexidade do problema e a quantidade de informações fornecidas. Em geral, a IA pode fornecer uma estimativa inicial em poucos minutos, mas para uma avaliação mais detalhada e precisa, pode ser necessário um pouco mais de tempo, especialmente se o problema for complexo."
            }
        ]

        const aparecerResposta = (index: number) => {
            const texto = document.querySelectorAll(`.${styles.resposta}`)[index];
            const imagem = document.querySelectorAll('button img')[index];

            texto.classList.toggle(styles.none);
            if (imagem.classList.contains(styles.rotate)){
                imagem.classList.toggle(styles.rotate); 
            } else{
                imagem.classList.add(styles.rotate);
            }
            
        };

        return(
            <section id="ajuda" className={styles.ajuda}>
            <header>Dúvidas Frequentes</header>
            {duvidasFrequentes.map((i, index) => (
                <div className={styles.duvidasFrequentes} key={index}>
                    <div className={styles.duvidaPergunta}>
                        <h1>{i.pergunta}</h1>
                        <button onClick={() => aparecerResposta(index)}>
                            <figure>
                                <img src={arrow} alt="" />
                            </figure>
                        </button>
                    </div>
                    <h1 className={`${styles.none} ${styles.resposta}`}>{i.resposta}</h1>
                </div>
            ))}
        </section>
        )
    }