import styles from '../Styles/FormCadastro.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useState } from 'react';

interface PgCadastroProps {
  selecionarFormulario: (formType: number) => void;
}

function FormCadastro({ selecionarFormulario }: PgCadastroProps) {
  const [TypePassword, setTypePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    
            <form className={shared["form"]} /* onClick={handleSubmit} */>
                <p className={styles["welcome-message-bold"]}>Olá!</p>
                <p className={styles['welcome-message']}>Cadastre-se para começar</p>
                <span className={shared['SimpleText']}>Já tem uma conta? <a onClick={() => selecionarFormulario(0)} className={styles['link_login']}>Fazer login!</a></span>
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
                <button className={email && password ? shared["btn-wrapper-active"] : shared["btn-wrapper"]}>Cadastrar</button>
                <div className={styles["forgot-login-div"]}> <a onClick={() => selecionarFormulario(3)} className={shared["link"]}>Esqueci Senha</a> </div>
            </form>
  )
}

export default FormCadastro