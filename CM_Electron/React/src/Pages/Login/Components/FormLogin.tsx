import { useState, useContext } from "react";
import styles from "../Styles/FormLogin.module.css";
import shared from "../Styles/Forms.module.css";

import cadeado from "../../../Assets/icon cadeado.svg";
import icon_email from "../../../Assets/icon email.svg";
import olho from "../../../Assets/icon olho.svg";
import olho_fechado from "../../../Assets/icon olho_fechado.svg";
import { useNavigate } from "react-router-dom";
import { notificar } from "../../../Components/Toasts/Toast";
import { FazerLogin } from "../Functions/FnLogin";
import useLocalStorage from "../../../hooks/uselocalStorage";
import { useAuth } from "../../../Context/UserContext"; 

function PgLogin() {
  const navigate = useNavigate();
  const {login} = useAuth();

  const [typePassword, setTypePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InputCss, setInputCss] = useState("input-wrapper");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await FazerLogin({ email: email, senha: password });
      console.log(response);
      login(response.token, response.user)
      notificar({ mensagem: "Usuário autenticado com sucesso!", status: 200 });
    } catch (error) {
      console.log(error);
      notificar({
        mensagem: "Falha na autenticação. Verifique suas credenciais.",
        status: 400,
      });
    }
  };

  return (
    <form className={shared["form"]} onSubmit={handleSubmit}>
      <p className={shared["welcome-message"]}>Bem Vindo de Volta</p>
      <span className={shared["SimpleText"]}>
        Ainda não possui uma conta?{" "}
        <a
          onClick={() => navigate("/login/cadastro")}
          className={styles["link_register"]}
        >
          Fazer Cadastro!
        </a>
      </span>
      <div className={shared["main-container"]}>
        <div className={shared["input-wrapper-div"]}>
          <div className={shared[InputCss]}>
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
          <div className={shared[InputCss]}>
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
            className={
              email && password
                ? shared["btn-wrapper-active"]
                : shared["btn-wrapper"]
            }
          >
            Login
          </button>
        </div>

        <div className={shared["forgot-password-div"]}>
          <a
            onClick={() => navigate("/login/recuperar")}
            className={shared["link"]}
          >
            Esqueci Senha
          </a>
        </div>
      </div>
    </form>
  );
}

export default PgLogin;
