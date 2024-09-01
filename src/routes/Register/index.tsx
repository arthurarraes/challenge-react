import { HashLink as Link } from 'react-router-hash-link';
import styles from '../../styles/login.module.css';
import '../../styles/global.module.css';

export default function Register() {
    function login(event: Event) {
        event.preventDefault(); // Evita o envio do formulário

        const campos = ['nome', 'cep', 'telefone', 'email', 'senha'];
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
        <div className={styles.corpo}>
            <section className={styles.bloco}>
                <header>Registrar</header>
                <form className={styles.login} onSubmit={(e) => login(e.nativeEvent)}>
                <div id="erro" className={styles.erroMensagem}></div>
                    <input type="text" id="nome" placeholder="Nome Completo" />
                    <input type="text" id="cep" placeholder="CEP" />
                    <input type="tel" id="telefone" placeholder="Telefone" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="senha" placeholder="Senha" />
                    <input type="submit" value="Registrar" className={styles.registrar} />
                </form>
                <Link smooth to='/login'>
                    <p>Você já possui uma conta? <span>Entrar</span></p>
                </Link>
            </section>
        </div>
    );
}
