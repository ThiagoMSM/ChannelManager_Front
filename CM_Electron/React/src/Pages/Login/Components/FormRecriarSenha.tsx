import { useState } from 'react';
import styles from '../Styles/FormRecriarSenha.module.css';
import shared from '../Styles/Forms.module.css';

import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useNavigate } from 'react-router-dom';
import { notificar } from '../../../Components/Toasts/Toast';
import { User } from './EscolheForm';

interface PgRecriarSenhaProsps {
  selecionarFormulario: (index: number) => void;
  codigo: string;
  users: User[];
}



function PgRecriarSenha({ selecionarFormulario, codigo, users }: PgRecriarSenhaProsps) {

  const navigator = useNavigate();

  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (password !== confirmPassword) {
      notificar({ mensagem: "Senhas não coincidem!", status: 400 })
      return
    }

    if (password.length < 6) {
      notificar({ mensagem: "Senha deve ter no mínimo 6 caracteres!", status: 500 })
      return
    }



    let userAlvo = users.find((u) => u.Email === codigo.split(' ')[1].trim());
    userAlvo.data.Password = password;
    notificar({ mensagem: "Senha alterada com sucesso!", status: 200 })
    await new Promise(resolve => setTimeout(resolve, 1000));
    selecionarFormulario(0);
  };

  return (
    <form className={shared["form"]} onSubmit={handleSubmit}>
      <p className={shared["welcome-message"]}>Criar nova senha</p>
      <span className={shared['SimpleText']}>
        É novo por aqui? {' '}
        <a onClick={() => selecionarFormulario(1)} className={styles['link_register']}>Crie uma nova conta</a>
      </span>

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
            Mudar Senha
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
