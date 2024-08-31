import { HashLink as Link } from 'react-router-hash-link';
import styles from '../../styles/login.module.css'
import "../../styles/global.module.css"

export default function Register(){
    return(
        <div className={styles.corpo}>
            <section className={styles.main}>
                <header>Registrar</header>
            <form action="">
                <input type="text" name="" id="" placeholder="Nome Completo" required/>
                <input type="text" name="" id="" placeholder="CEP" required/>
                <input type="tel" name="" id="" placeholder="Telefone" required/>
                <input type="email" name="" id="" placeholder="Email" required/>
                <input type="password" name="" id="" placeholder="Senha" required/>
                <Link smooth to='/'><input type="submit" value="Registrar" className={styles.registrar}/></Link>
            </form>
            <Link smooth to='/login'><p>Você já possui uma conta? <span>Entrar</span></p></Link>
        </section>
        </div>
        
    )
}