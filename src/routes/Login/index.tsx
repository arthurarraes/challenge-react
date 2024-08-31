import { HashLink as Link } from 'react-router-hash-link';
import styles from '../../styles/login.module.css'
import "../../styles/global.module.css"

export default function Login(){
    return(
        <main className={styles.corpo}>
            <section className={styles.main}>
            <header>Login</header>
            <form action="">
                <input type="email" name="" id="" placeholder="Email" required/>
                <input type="password" name="" id="" placeholder="Senha" required/>
                <Link smooth to='/'><input type="submit" value="Login" className={styles.registrar}/></Link>
            </form>
            <Link smooth to='/register'><p>Você não possui uma conta? <span>Registrar</span></p></Link>
        </section>
        </main>
        
    )
}