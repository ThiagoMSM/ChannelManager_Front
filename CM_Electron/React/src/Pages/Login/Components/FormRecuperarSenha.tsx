import styles from '../Styles/FormRecuperarForms.module.css';
import shared from '../Styles/Forms.module.css';
import icon_email from '../../../Assets/icon email.svg';
import { useState } from 'react';
import emailjs from 'emailjs-com';

interface PgRecuperarSenhaProps {
  selecionarFormulario: (formType: number) => void;
  setCodigo: (codigo: string) => void;  // adiciona aqui
  codigo?: string;  
}

function FormRecuperarSenha({ selecionarFormulario, setCodigo }: PgRecuperarSenhaProps) {
  const [email, setEmail] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault(); // evita o reload da página


    // Gera um código aleatório de 4 dígitos
  const codigo = Math.floor(1000 + Math.random() * 9000); 
  setCodigo(codigo.toString()); 
 
    

    const serviceID = 'service_7qfi7vx';
    const templateID = 'template_luijo9y';
    const userID = 'MmCQhj63MJQTumW3_';

    const templateParams = {
      email: email,
      codigo: codigo,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      alert('E-mail enviado com sucesso!');
      selecionarFormulario(3);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar e-mail');
    }
  };

  return (
    <form className={styles["form"]} onSubmit={handleSendEmail}>
      <p className={styles["welcome-message-bold"]}>Esqueceu sua Senha?</p>
      <span className={styles['SimpleText-RecuperarSenha']}>
        Não se preocupe! Basta digitar seu e-mail e enviaremos um link para redefinir sua senha.
      </span>
      

      <div className={styles["main-container"]}>
        <div className={shared["input-wrapper-div"]}>
          <div className={shared["input-wrapper"]}>
            <span className={shared["icon"]}>
              <img src={icon_email} alt="Ícone de e-mail" />
            </span>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className={email ? styles["btn-wrapper-active"] : styles["btn-wrapper"]}
          type="submit"
        >
          Enviar e-mail de recuperação
        </button>

        <button
          className={styles["btn-wrapper-white"]}
          type="button"
          onClick={() => selecionarFormulario(0)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormRecuperarSenha;
