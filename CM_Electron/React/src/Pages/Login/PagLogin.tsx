import HeaderLogin from "../../Components/Headers/HeaderLogin";
import EscolheForm from "./Components/EscolheForm";
import FormCadastro from "./Components/FormCadastro";
import Formlogin from "./Components/FormLogin";
import FormRecuperarSenha from "./Components/FormRecuperarSenha";
import FormTrocaSenha from "./Components/FormTrocaSenha"; 

import './Styles/PagLogin.css';
function PagLogin() {
  return (
    <div className="PagLogin">
       <HeaderLogin />     {/*10vh*/}

      <div className="forms">  {/*90vh*/}
        <EscolheForm>
          <Formlogin />
          <FormRecuperarSenha />
          <FormTrocaSenha />
        </EscolheForm>
      </div>
      
    </div>
  );
}



export default PagLogin;
