import { useState } from 'react';
import styles from '../Styles/FormLogin.module.css';
import shared from '../Styles/Forms.module.css';

import cadeado from '../../../Assets/icon cadeado.svg';
import icon_email from '../../../Assets/icon email.svg';
import olho from '../../../Assets/icon olho.svg';
import olho_fechado from '../../../Assets/icon olho_fechado.svg';
import { useNavigate } from 'react-router-dom';
import { notificar } from '../../../Components/Toasts/Toast';
import { User } from './EscolheForm';

interface PgLoginProps {
  selecionarFormulario: (index: number) => void;
  users: User[];
}



function PgLogin({ selecionarFormulario,users }: PgLoginProps) {

  const navigator = useNavigate();

  const [typePassword, setTypePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const login = (email: string, password: string): boolean => {
    for (const user of users) {
      if (user.Email === email && user.data.Password === password) {
        console.log("Login bem-sucedido!");
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);

    if (login(email, password)) {

      notificar({ mensagem: "Usuário autenticado com sucesso!", status: 200 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Usuário autenticado com sucesso!");
      navigator('/PagHome'); // Redireciona para a página inicial
    } else {
      await new Promise(resolve => setTimeout(resolve, 2000));
      notificar({ mensagem: "Falha na autenticação. Verifique suas credenciais.", status: 400 });
      console.log("Falha na autenticação. Verifique suas credenciais.");
    }
  };

  return (
    <form className={shared["form"]} onSubmit={handleSubmit}>
      <p className={shared["welcome-message"]}>Bem Vindo de Volta</p>
      <span className={shared['SimpleText']}>
        Ainda não possui uma conta?{' '}
        <a onClick={() => selecionarFormulario(1)} className={styles['link_register']}>Fazer Cadastro!</a>
      </span>
      {mensagemErro && <p className={shared["error-message"]}>{mensagemErro}</p>}
      <div className={shared["main-container"]}>
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

        <div className={shared["input-wrapper-div"]}>
          <div className={shared["input-wrapper"]}>
            <span className={shared["icon"]}>
              <img src={cadeado} alt="Ícone de senha" />
            </span>
            <input
              type={typePassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={shared["toggle-password"]}>
              <img
                src={typePassword ? olho_fechado : olho}
                alt="Mostrar senha"
                onClick={() => setTypePassword(!typePassword)}
              />
            </span>
          </div>
        </div>

        <div className={shared["btn-wrapper-div"]}>
          <button
            type="submit"
            className={email && password ? shared["btn-wrapper-active"] : shared["btn-wrapper"]}
          >
            Login
          </button>
        </div>

        <div className={shared["forgot-password-div"]}>
          <a onClick={() => selecionarFormulario(2)} className={shared["link"]}>
            Esqueci Senha
          </a>
        </div>
      </div>
      <button onClick={() => selecionarFormulario(4)}>Tela RecriarSenha</button>
    </form>
  );
}

export default PgLogin;
