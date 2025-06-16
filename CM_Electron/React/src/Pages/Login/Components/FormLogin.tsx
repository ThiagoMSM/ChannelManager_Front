import '../Styles/FormLogin.css';
import BannerLogin from './../../../Assets/BannerLogin.svg'
import { useNavigate } from 'react-router';

function FormLogin() {
  const navigate = useNavigate();

  return (
    <div className='FormLogin'>
      <div className="Banner">
        <img className='BannerLogin' src={BannerLogin} alt="Banner Login" />

      </div>
      <div className='FormLoginContainer'>
        <div className='BemVindo'>
          <p className='BemVindoH1'>Bem vindo de volta!</p>
          <p className='TextoSimples'>Novo usuário? <a onClick={() => { navigate('/PagFormCadastro') }} className='PCadastrar'>Crie uma conta</a> </p>
        </div>
        <form className='Form' action="/Login" method="POST">
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
            <a onClick={() => { navigate('/PagFormRecuperarSenha') }} className='EsqueceuSenha'>Esqueceu a senha?</a>
            <button type="submit" className='BtnConecte'>Conecte-se</button>
          </div>

          <div className='Footer'>
            <hr className='Divisoria' />
            <div className="checkboxContainer">
              <input
                type="checkbox"
                id="Termos"
                name="Termos"
              />
              <label htmlFor="Termos" className='TermosLabel'>Concordo com os <a href="/Termos" className='TermosLink'>Termos de Uso</a> e <a href="/Privacidade" className='TermosLink'>Política de Privacidade</a></label>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default FormLogin