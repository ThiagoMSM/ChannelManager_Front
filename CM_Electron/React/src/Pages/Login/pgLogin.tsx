
import LogoRosTeam from '../../Assets/LogoRosTeam.png';
import FormaAzul from '../../Assets/Forma Azul.svg';
import FormaLaranja from '../../Assets/Forma Laranja.svg';
import LinhaAzul from '../../Assets/Linha Azul.svg';
import LinhaLaranja from '../../Assets/Linha Laranja.svg';
import PontosLaranja from '../../Assets/Pontinhos Laranja.svg';
import styles from './Styles/PgLogin.module.css';
import EscolheForm from './Components/EscolheForm';
import Formlogin from './Components/FormLogin';
import FormRecuperarSenha from './Components/FormRecuperarSenha';
import FormTrocaSenha from './Components/FormTrocaSenha';
import FormCadastro from './Components/FormCadastro';
import Background from '../../Assets/BackgroundLogin.svg';



function PgLogin() {
 

  return (
    <div className={styles.global}>

      <div>
          <img src={Background} className={styles['background']} alt="" />
      </div>

        <div className={styles['global-container']}>

                    <div className={styles['left-container']}>
       
                    </div>

                   <div className={styles['right-container']}>
                         <div className={styles['grid-3x2-forms']}>
                              <EscolheForm>
                               <Formlogin selecionarFormulario={() => {}} />
                               <FormCadastro selecionarFormulario={() => {}} />
                               <FormRecuperarSenha selecionarFormulario={() => {}} setCodigo={() => {}}/>
                               <FormTrocaSenha selecionarFormulario={() => { } } codigo={''} />
                             </EscolheForm>
                         </div>
                    </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default PgLogin;