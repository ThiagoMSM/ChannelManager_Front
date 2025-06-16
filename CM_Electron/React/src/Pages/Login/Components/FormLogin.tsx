import '../Styles/FormLogin.css';
import BannerLogin from './../../../Assets/BannerLogin.svg' 
import { useNavigate } from 'react-router';
import ButtonLogin from './../../../Components/Button/ButtonLogin';
import { useState } from 'react';



function FormLogin() {
  const navigate = useNavigate();



function ButtonCarregar({carregando, texto}:props) {
    return (
        <button className={carregando ? "loading-button" : ""}>
            {carregando && <div className="loading-circle"></div>}
            {carregando ? "Conectando" : texto}
        </button>
    )
}
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault(); 
  const form = event.currentTarget;
  const formData = new FormData(form);  
  setCarregando(true);
  setTimeout(() => {
    setCarregando(false);
    navigate('/PagFormPrincipal');
  }, 1000);

}

const [carregando, setCarregando] = useState(false);

  return (
    <div className='FormLogin'>
      <div className="Banner">
      <img className='BannerLogin' src={BannerLogin} alt="Banner Login" />

      </div>
      <div className='FormLoginContainer'>
        <div className='BemVindo'>
          <p className='BemVindoH1'>Bem vindo de volta!</p>
          <p className='TextoSimples'>Novo usuário? <a onClick={() => {navigate('/PagFormCadastro')}} className='PCadastrar'>Crie uma conta</a> </p> 
        </div>
        
        <form className='Form' method="POST" onSubmit={handleSubmit}>
          <div className='InputContainer'>
          <label className="email">E-mail</label>
          <input 
          type="email" 
          className='Input'
          id="email" 
          name="email" 
          required
          placeholder='Digite seu e-mail' 

          />
          </div>

          <div className='InputContainer'>
          <input 
          type="password" 
          className='Input' 
          id="password" 
          name="password" 
          required 
          placeholder='Senha'
          />
          </div>
         
          <div className='CabecalhoForms'>

          <a onClick={() => {navigate('/PagFormRecuperarSenha')}} className='EsqueceuSenha'>Esqueceu a senha?</a>

   
          {/* <button type="submit" className='BtnConecte'>Conecte-se</button> */}

          <ButtonLogin carregando={carregando} FnType={'submit'} texto="Conectar-se" />
          </div>

          <hr className='Divisoria'/>

          <div className="checkboxContainer">
          <input
          type="checkbox"
          id="Termos"
          name="Termos"
          />
          <label htmlFor="Termos" className='TermosLabel'>Concordo com os <a href="/Termos" className='TermosLink'>Termos de Uso</a> e <a href="/Privacidade" className='TermosLink'>Política de Privacidade</a></label>
          </div>

        </form>
          


      </div>
    </div>
  )
}

export default FormLogin