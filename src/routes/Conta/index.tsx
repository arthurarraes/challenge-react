import styles from '../../styles/conta.module.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function Conta() {
  // Função para adicionar um novo carro
  function adicionarCarro() {
    const marcaElement = document.getElementById('Marca') as HTMLInputElement;
    const modeloElement = document.getElementById('Modelo') as HTMLInputElement;
    const placaElement = document.getElementById('Placa') as HTMLInputElement;
    const anoElement = document.getElementById('Ano') as HTMLInputElement;
    const erroElement = document.getElementById('erro') as HTMLDivElement;

    // Reseta erros e estilos
    marcaElement.classList.remove(styles.erro);
    modeloElement.classList.remove(styles.erro);
    placaElement.classList.remove(styles.erro);
    anoElement.classList.remove(styles.erro);
    erroElement.textContent = '';

    // Verifica se todos os campos estão preenchidos
    if (marcaElement.value && modeloElement.value && placaElement.value && anoElement.value) {
      const novoFormulario = document.createElement('form');
      novoFormulario.className = styles.form;
      novoFormulario.innerHTML = `
        <label>Marca</label>
        <input type="text" value="${marcaElement.value}" readonly />
        <label>Modelo</label>
        <input type="text" value="${modeloElement.value}" readonly />
        <label>Placa</label>
        <input type="text" value="${placaElement.value}" readonly />
        <label>Ano</label>
        <input type="text" value="${anoElement.value}" readonly />
        <button type="button" class="${styles.botao}">Remover</button>
      `;
      
      // Adiciona o evento de clique para o botão "Remover"
      novoFormulario.querySelector('button')?.addEventListener('click', () => {
        novoFormulario.remove();
      });

      document.getElementById('carro')?.appendChild(novoFormulario);

      // Limpa os campos
      marcaElement.value = '';
      modeloElement.value = '';
      placaElement.value = '';
      anoElement.value = '';
    } else {
      // Exibe mensagem de erro e destaca campos vazios
      erroElement.textContent = 'Todos os campos devem ser preenchidos.';
      if (!marcaElement.value) marcaElement.classList.add(styles.erro);
      if (!modeloElement.value) modeloElement.classList.add(styles.erro);
      if (!placaElement.value) placaElement.classList.add(styles.erro);
      if (!anoElement.value) anoElement.classList.add(styles.erro);
    }
  }
  function sair(){
    localStorage.setItem('Logado', 'False')
    window.location.reload();
    window.location.href = '/';

    }

  return (
    <section className={styles.box}>
      <section className={styles.container}>
        <header>Perfil</header>
        <form className={styles.form}>
          <label>Nome Completo</label>
          <input type="text" placeholder="João Silva" />
          <label>Cep</label>
          <input type="text" placeholder="01234-560" />
          <label>Telefone</label>
          <input type="tel" placeholder="11 99999-9999" />
          <label>Email</label>
          <input type="email" placeholder="teste@email.com" />
          <label>Senha</label>
          <input type="password" placeholder="******" />
          <Link to='/'><button className={styles.botao} onClick={sair}>Sair</button></Link>
        </form>
      </section>

      <section className={styles.container}>
        <header>Carro</header>
        <form className={styles.form}>
        <div id="erro" className={styles.erroMensagem}></div>
          <input type="text" id="Marca" placeholder="Marca" />
          <input type="text" id="Modelo" placeholder="Modelo" />
          <input type="text" id="Placa" placeholder="Placa" />
          <input type="text" id="Ano" placeholder="Ano" />
          <input type="button" value="Adicionar" onClick={adicionarCarro} className={styles.adicionar} />
        </form>
        <div id="carro">
          <form className={styles.form}>
            <label>Marca</label>
            <input type="text" value="Honda" />
            <label>Modelo</label>
            <input type="text" value="Civic" />
            <label>Placa</label>
            <input type="text" value="ABC-1234" />
            <label>Ano</label>
            <input type="text" value="2018" />
            <button type="button" className={styles.botao} onClick={(e) => (e.currentTarget.closest('form')?.remove())}>Remover</button>
          </form>
        </div>
      </section>
    </section>
  );
}
