
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




function PgLogin() {
 

  return (
    <div className={styles.global}>
      <div className={styles['left-container']}>
        <div className={styles['grid-3x1-forma']}> 
            <img src={FormaAzul} alt="" className={styles['FormaAzul']}/>
        </div>
        <div className={styles['grid-3x2-logo']}>
          <img
            className={styles['img-LogoRosTeam']}
            src={LogoRosTeam}
            alt="ROSTeam Logo"
          />
        </div>
        <div className={styles['grid-3x3-line']}>
            <img 
                src={LinhaLaranja} 
                alt="" 
                className={styles['LinhaLaranja']} />
                
        </div>
      </div>

      <div className={styles['center-container']}>
        <div className={styles['center-container-high-dots']}>
          <img 
            src={PontosLaranja} 
            alt="" />
        </div>

        <div className={styles['center-container-low-dots']}>
          <img 
            src={PontosLaranja} 
            alt="" />
        </div>
      </div>

      <div className={styles['right-container']}>
        <div className={styles['grid-3x1-linha-Az']}> 
            <img src={LinhaAzul} alt="" className={styles['LinhaAzul']}/>
        </div>
        <div className={styles['grid-3x2-forms']}>
             <EscolheForm>
              <Formlogin selecionarFormulario={() => {}} />
              <FormCadastro selecionarFormulario={() => {}} />
              <FormRecuperarSenha selecionarFormulario={() => {}}/>
              {/* <FormTrocaSenha selecionarFormulario={() => {}}/> */}
            </EscolheForm>
        </div>
        <div className={styles['grid-3x3-forma-Lj']}>
            <img 
                src={FormaLaranja} 
                alt=""
                className={styles['FormaLaranja']} />
                
        </div>
      </div>
    </div>
  );
}

export default PgLogin;