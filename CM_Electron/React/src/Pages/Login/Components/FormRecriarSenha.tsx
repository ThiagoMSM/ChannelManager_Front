import { useState } from 'react';
import styles from '../Styles/FormRecriarSenha.module.css';
import shared from '../Styles/Forms.module.css';

import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useNavigate } from 'react-router-dom';
interface PgRecriarSenhaProsps {
  selecionarFormulario: (index: number) => void;
}



function PgRecriarSenha({ selecionarFormulario }: PgRecriarSenhaProsps) {
 
 const navigator = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
  };

  return (
    <form className={shared["form"]} onSubmit={handleSubmit}>
      <p className={shared["welcome-message"]}>Criar nova senha</p>
      <span className={shared['SimpleText']}>
        É novo por aqui? {' '}
        <a onClick={() => selecionarFormulario(1)} className={styles['link_register']}>Crie uma nova conta</a>
      </span>
      {mensagemErro && <p className={shared["error-message"]}>{mensagemErro}</p>}

      <div className={shared["main-container"]}>

        

        <div className={shared["input-wrapper-div"]}>
          <div className={shared["input-wrapper"]}>
            <span className={shared["icon"]}>
              <img src={cadeado} alt="Ícone de senha" />
            </span>
            <input
              type={ShowPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={shared["toggle-password"]}>
              <img
                src={ShowPassword ? olho_fechado : olho}
                alt="Mostrar senha"
                onClick={() => setShowPassword(!ShowPassword)}
              />
            </span>
          </div>
        </div>

         <div className={shared["input-wrapper-div"]}>
          <div className={shared["input-wrapper"]}>
            <span className={shared["icon"]}>
              <img src={cadeado} alt="Ícone de senha" />
            </span>
            <input
              type={ShowConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className={shared["toggle-password"]}>
              <img
                src={ShowConfirmPassword ? olho_fechado : olho}
                alt="Mostrar senha"
                onClick={() => setShowConfirmPassword(!ShowConfirmPassword)}
              />
            </span>
          </div>
        </div>

        <div className={styles["btn-wrapper-div"]}>
          <button
            type="submit"
            className={confirmPassword && password ? shared["btn-wrapper-active"] : shared["btn-wrapper"]}
          >
            Login
          </button>
          <button
            type="button"
            className={styles["btn-wrapper-white"]}
            onClick={() => selecionarFormulario(0)}
          >
            Cancelar
          </button>
        </div>

        
      </div>
    </form>
  );
}

export default PgRecriarSenha;
