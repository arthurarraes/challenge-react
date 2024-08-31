import styles from "../../styles/home.module.css"
import "../../styles/global.module.css"
import banner from "../../assets/banner.svg"
import ProblemasComuns from "../../components/ProblemasComuns"

export default function Home(){
    return(
        <main>
            <section className={styles.banner}>
                <section className={styles.texto}>
                    <header>Djdkakdahdjkahro.</header>
                    <p>Com a nova IA você descobrirá em qualquer lugar, o defeito do seu veículo.</p>
                    <button className={`${styles.consulte} ${styles.botoes}`}>Consulte Agora</button>
                </section>
                <figure>
                    <img src={banner} alt=""/>
                </figure>
            </section>

            <ProblemasComuns/>
        </main>
    )
}