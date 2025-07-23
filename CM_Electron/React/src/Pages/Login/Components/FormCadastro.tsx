import styles from '../Styles/FormCadastro.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useState } from 'react';
import { useEffect } from 'react';

interface PgCadastroProps {
  selecionarFormulario: (formType: number) => void;
}


const getPasswordStrength = (password: string): number => {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1; //Letra maiúscula
  if (/[a-z]/.test(password)) score += 1; //Letra minúscula
  if (/\d/.test(password)) score += 1; //Número
  if (/[\W_]/.test(password)) score += 1; //Caractere especial
  return score;
};



const getStrengthLabel = (score: number): string => {
  switch (score) {
    case 0:
    case 1:
      return "Sua senha fraca. Utilize letras maiúsculas, minúsculas, numeros e carácteres especiais.";
    case 2:
      return "Senha fraca ainda está fraca. Tente adicionar mais caracteres e numeros.";
    case 3:
      return "Sua senha é ótima. Bom trabalho!";
    case 4:
      return "Sua senha é ótima. Bom trabalho!";
    case 5:
      return "Sua senha está perfeita. Bom trabalho!";
    default:
      return "";
  }
};



function FormCadastro({ selecionarFormulario }: PgCadastroProps) {
  const [TypePassword, setTypePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);




    
  const getBarColor = (score: number): string => {
    if (score <= 1) return "#f00";
    if (score === 2) return "#f90";
    if (score === 3) return "#0cf";
    if (score === 4) return "#0cf";
    return "#0c0";
  };

    useEffect(() => {
    const score = getPasswordStrength(password);
    setStrength(score);
  }, [password]);




  return (
    
            <form className={shared["form"]} /* onClick={handleSubmit} */>
                <p className={styles["welcome-message-bold"]}>Olá!</p>
                <p className={styles['welcome-message']}>Cadastre-se para começar</p>
                <span className={shared['SimpleText']}>Já tem uma conta? <a onClick={() => selecionarFormulario(0)} className={styles['link_login']}>Fazer login!</a></span>
                <div className={shared["main-container"]}>
<div className={shared["input-wrapper-div"]}>

                <div className={shared["input-wrapper"]}>
                    <span className={shared["icon"]}>
                        <img src={icon_email} alt="Ícone de e-mail" />
                    </span>
                    <input type="email" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
</div>
<div className={shared["input-wrapper-div"]}>


                    <div className={shared["input-wrapper"]}>
                    <span className={shared["icon"]}>
                        <img src={cadeado} alt="Ícone de senha" />
                    </span>
                    <input type={TypePassword ? "text" : "password"} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} 
                        style={{ borderColor: getBarColor(strength) }}
                        />
                    <span className={shared["toggle-password"]}>
                        <img src={TypePassword ? olho_fechado : olho} alt="Mostrar senha" onClick={() => setTypePassword(!TypePassword)}/>
                    </span>
                       </div>

</div>
                        {password && (
                          <>
                           <div className={styles["password-bar-wrapper"]}>
                            <div className={styles["password-bar"]}
                              style={{
                                width: `${(strength / 5) * 100}%`,
                                backgroundColor: getBarColor(strength),
                              }}
                              ></div>
                            </div>

                             <div className={styles["password-hint-div"]}>
                              <p className={styles["password-hint"]}> {getStrengthLabel(strength)} </p>
                              </div>
                              </>
                        )}
                              


<div className={shared["btn-wrapper-div"]}>

                <button className={email && password ? shared["btn-wrapper-active"] : shared["btn-wrapper"]}>Cadastrar</button>
</div>
                <div className={shared["forgot-password-div"]}> <a onClick={() => selecionarFormulario(2)} className={shared["link"]}>Esqueci Senha</a> </div>
{/* ????????????????? Botão de esqueci senha no cadastro não faz sentido, mas fiz mesmo assim */}

                      </div>
            </form>
  )
}

export default FormCadastro