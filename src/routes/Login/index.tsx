import { HashLink as Link } from 'react-router-hash-link';
import styles from '../../styles/login.module.css';
import '../../styles/global.module.css';

export default function Login() {
    function handleLogin(event: Event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém todos os campos de entrada
        const campos = ['email', 'senha'];
        let valido = true;

        campos.forEach(campoId => {
            const elemento = document.getElementById(campoId) as HTMLInputElement;
            if (!elemento.value.trim()) {
                elemento.classList.add(styles.erro);
                valido = false;
            } else {
                elemento.classList.remove(styles.erro);
            }
        });

        const erroElement = document.getElementById('erro');
        if (!valido) {
            if (erroElement) erroElement.textContent = 'Todos os campos devem ser preenchidos.';
            return;
        }

        localStorage.setItem('Logado', 'True');
        window.location.href = '/';
    }

    return (
        <main className={styles.corpo}>
            <section className={styles.bloco}>
                <header>Login</header>
                <form className={styles.login} onSubmit={(e) => handleLogin(e.nativeEvent)}>
                    <div id="erro" className={styles.erroMensagem}></div>
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="senha" placeholder="Senha" />
                    <input type="submit" value="Login" className={styles.registrar} />
                </form>
                <Link smooth to='/register'>
                    <p>Você não possui uma conta? <span>Registrar</span></p>
                </Link>
            </section>
        </main>
    );
}
