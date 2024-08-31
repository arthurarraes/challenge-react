import styles from "../styles/header.module.css"
import "../styles/global.module.css"
import { HashLink as Link } from 'react-router-hash-link';

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
                    <a href=""><Link smooth to='/.ajuda'>Ajuda</Link></a>
                </ul>
            </nav>
            <div>
                <button className={`${styles.registrar} ${styles.botoes}`}><a href=""><Link to='/register'>Registrar</Link></a></button>
                <button className={`${styles.login} ${styles.botoes}`}><a href=""><Link to='/login'>Login</Link></a></button>
            </div>
        </header>
    )
}