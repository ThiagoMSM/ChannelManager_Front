import styles from "./Styles/PgLogin.module.css";
import Formlogin from "./Components/FormLogin";
import FormRecuperarSenha from "./Components/FormRecuperarSenha";
import FormTrocaSenha from "./Components/FormTrocaSenha";
import FormCadastro from "./Components/FormCadastro";
import FormRecriarSenha from "./Components/FormRecriarSenha";
import { Routes, Route, Link } from "react-router-dom";

function PgLogin() {
  return (
    <div className={styles.global}>
      <div className={styles["background"]}></div>

      <div className={styles["global-container"]}>
        <div className={styles["left-container"]}></div>
        <div className={styles["right-container"]}>
          <div className={styles["grid-3x2-forms"]}>
            {/* Somente os forms mudam */}
            <Routes> 
              <Route index element={<Formlogin />} />
              <Route path="cadastro" element={<FormCadastro />} />
              <Route path="recuperar" element={<FormRecuperarSenha />} />
              <Route path="trocar" element={<FormTrocaSenha />} />
              {/* <Route path="recriar" element={<FormRecriarSenha />} /> */}
            </Routes>

          
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default PgLogin;
