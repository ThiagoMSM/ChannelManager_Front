import styles from '../Styles/FormTrocaSenha.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';
import { useState } from 'react';
import { notificar } from '../../../Components/Toasts/Toast';
import { useNavigate } from 'react-router-dom';
interface FormTrocaSenhaProps {
 
  codigo: string;
}

function FormTrocaSenha() {
 const navigate = useNavigate();
  const [codigoInserido, setCodigoInserido] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault(); // evita o reload da página
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // if (codigoInserido != codigo.split(' ')[0].trim()) {
    //   notificar({mensagem:"Código Inválido!",status:404})
    //   console.log(codigoInserido + ' != ' + codigo.split(' ')[0].trim());
      
    //   return;
    // } else {
    //   notificar({mensagem:"Código verificado com sucesso!",status:200})
    // }
      navigate("/login/recriar"); // Redireciona para o formulário de login
  }

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <p className={styles["welcome-message-bold"]}>Recuperar senha</p>
      <span className={styles['SimpleText-RecuperarSenha']}>Digite o código que chegou por e-mail</span>
      <p className={shared["error-message"]}>{mensagemErro}</p>
      <div className={styles["main-container"]}>

        <div className={shared["input-wrapper-div"]}>
          <div className={shared["input-wrapper"]}>
            <span className={shared["icon"]}>
              <img src={cadeado} alt="Ícone de senha" />
            </span>
            <input type={"number"} placeholder="Digite o código" value={codigoInserido} onChange={(e) => setCodigoInserido(e.target.value)} />

          </div>
        </div>
        <button className={codigoInserido ? styles["btn-wrapper-active"] : styles["btn-wrapper"]} type="submit">Verificar codigo</button>
        <button className={styles["btn-wrapper-white"]} onClick={() =>  navigate("/login/")}>Cancelar</button>
        <button className={styles["btn-wrapper-white"]} onClick={() =>  navigate("/login/recriar")}>Cancelar</button>
     

      </div>
    </form>
  )

}

export default FormTrocaSenha