
import styles from '../Styles/FormLogin.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import handleSelecionar from '../Components/EscolheForm'

import { useState } from 'react';


interface PgLoginProps {
  selecionarFormulario: (index: number) => void;
}

function PgLogin({ selecionarFormulario }: PgLoginProps) {

  const [TypePassword, setTypePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
   
            <form className={shared["form"]} /* onClick={handleSubmit} */>
                <p className={shared["welcome-message"]}>Bem Vindo de Volta!</p>
                <span className={shared['SimpleText']}>Ainda não possuí uma conta? <a onClick={() => selecionarFormulario(1)} className={styles['link_register']}>Fazer Cadastro!</a></span>
                <div className={shared["input-wrapper"]}>''
                    <span className={shared["icon"]}>
                        <img src={icon_email} alt="Ícone de e-mail" />
                    </span>
                    <input type="email" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className={shared["input-wrapper"]}>
                    <span className={shared["icon"]}>
                        <img src={cadeado} alt="Ícone de senha" />
                    </span>
                    <input type={TypePassword ? "text" : "password"} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className={shared["toggle-password"]}>
                        <img src={TypePassword ? olho_fechado : olho} alt="Mostrar senha" onClick={() => setTypePassword(!TypePassword)}/>
                    </span>
                    </div>
                <button className={email && password ? shared["btn-wrapper-active"] : shared["btn-wrapper"]}>Login</button>
                <div className={styles["forgot-password-div"]}> <a onClick={() => selecionarFormulario(3)} className={shared["link"]}>Esqueci Senha</a> </div>
            </form>
        
  );
}

export default PgLogin;