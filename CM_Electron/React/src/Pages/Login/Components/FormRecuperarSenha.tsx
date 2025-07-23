import styles from '../Styles/FormRecuperarForms.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useState } from 'react';

interface PgRecuperarSenhaProps {
  selecionarFormulario: (formType: number) => void;
}


function FormRecuperarSenha({ selecionarFormulario }: PgRecuperarSenhaProps) {
  const [TypePassword, setTypePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <form className={styles["form"]} /* onClick={handleSubmit} */>
                <p className={styles["welcome-message-bold"]}>Esqueceu sua Senha?</p>
                <span className={styles['SimpleText-RecuperarSenha']}>Não se preocupe! Basta digitar seu e-mail e enviaremos um link para redefinir sua senha.</span>
                <div className={styles["main-container"]}>

                <div className={shared["input-wrapper-div"]}>
                  <div className={shared["input-wrapper"]}>
                      <span className={shared["icon"]}>
                          <img src={icon_email} alt="Ícone de e-mail" />
                      </span>
                      <input type="email" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

               
                  <button className={email ? styles["btn-wrapper-active"] : styles["btn-wrapper"]} onClick={email ? () => selecionarFormulario(3) : undefined}>Enviar e-mail de recuperação</button>
                  <button className={styles["btn-wrapper-white"]} onClick={() => selecionarFormulario(0)}>Cancelar</button>
             
              </div>
            </form>
  )
}

export default FormRecuperarSenha