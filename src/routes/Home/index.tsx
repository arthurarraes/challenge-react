import styles from "../../styles/home.module.css"
import banner from "../../assets/banner.svg"
import ProblemasComuns from "../../components/ProblemasComuns"
import DuvidasFrequentes from "../../components/DuvidasFrequentes"

export default function Home(){
    const handleChatButtonClick = () => {
        const chatInstance = (window as any).watsonChatInstance;
        if (chatInstance) {
          chatInstance.openWindow();
        }
      };
    return(
        <main>
            <section className={styles.banner}>
                <section className={styles.texto}>
                    <header>Descubra em poucos passos, o problema do seu carro.</header>
                    <p>Com a nova IA você descobrirá em qualquer lugar, o defeito do seu veículo.</p>
                    <button className={`${styles.consulte} ${styles.botoes}`}onClick={handleChatButtonClick}>Consulte Agora</button>
                </section>
                <figure>
                    <img src={banner} alt=""/>
                </figure>
            </section>

            <ProblemasComuns/>
            <DuvidasFrequentes/>
        </main>
    )
}
