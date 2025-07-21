
import LogoRosTeam from '../../Assets/LogoRosTeam.png';
import FormaAzul from '../../Assets/Forma Azul.svg';
import FormaLaranja from '../../Assets/FormaLaranja.png';
import LinhaAzul from '../../Assets/Linha Azul.svg';
import LinhaLaranja from '../../Assets/Linha Laranja.svg';
import PontosLaranja from '../../Assets/Pontinhos Laranja.svg';
import styles from './Styles/PgLogin.module.css';

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
            <div className={styles["form"]}>
                <h1>Bem Vindo de Volta!</h1>
                <span>Ainda não possuí uma conta? <a href="http://www.google.com">Fazer Cadastro</a></span>
                <div className={styles["input-wrapper"]}>
                    <span className={styles["icon"]}>
                        <img src="icone-email.svg" alt="Ícone de e-mail" />
                    </span>
                    <input type="email" placeholder="Endereço de e-mail" />
                    </div>

                    <div className={styles["input-wrapper"]}>
                    <span className={styles["icon"]}>
                        <img src="icone-cadeado.svg" alt="Ícone de senha" />
                    </span>
                    <input type="password" placeholder="Digite sua senha" />
                    <span className={styles["toggle-password"]}>
                        <img src="icone-visivel.svg" alt="Mostrar senha" />
                    </span>
                    </div>
                <button className={styles["btn-wrapper"]}>Login</button>
                <a href="">Esqueci Senha</a>
            </div>
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