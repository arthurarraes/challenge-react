import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"
import "../styles/global.module.css"

import logo from "../assets/logo.svg"

export default function Header(){
    return(
        <header className={styles.cabecalho}>
            <figure>
                <img src={logo} alt=""/>
            </figure>
            <nav>
                <ul>
                    <a href=""><Link to='/'>Home</Link></a>
                    <a href=""><Link to='/SobreNos'>Sobre Nós</Link></a>
                    <a href=""><Link to='/#ajuda'>Ajuda</Link></a>
                </ul>
            </nav>
            <div>
                <button className={`${styles.registrar} ${styles.botoes}`}><a href=""><Link to='/register'>Registrar</Link></a></button>
                <button className={`${styles.login} ${styles.botoes}`}><a href=""><Link to='/login'>Login</Link></a></button>
            </div>
        </header>
    )
}