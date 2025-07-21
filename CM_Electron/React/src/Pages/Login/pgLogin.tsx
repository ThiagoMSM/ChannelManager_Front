
import LogoRosTeam from '../../Assets/LogoRosTeam.png';
import FormaAzul from '../../Assets/Forma Azul.svg';
import FormaLaranja from '../../Assets/FormaLaranja.png';
import LinhaAzul from '../../Assets/Linha Azul.svg';
import LinhaLaranja from '../../Assets/Linha Laranja.svg';
import PontosLaranja from '../../Assets/Pontinhos Laranja.svg';
import styles from './Styles/PgLogin.module.css';
import cadeado from '../../Assets/icon cadeado.svg';
import email from '../../Assets/icon email.svg';
import olho from '../../Assets/icon olho.svg';

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
                <p className={styles["welcome-message"]}>Bem Vindo de Volta!</p>
                <span className={styles['SimpleText']}>Ainda não possuí uma conta? <a href="http://www.google.com" className={styles['link']}>Fazer Cadastro!</a></span>
                <div className={styles["input-wrapper"]}>
                    <span className={styles["icon"]}>
                        <img src={email} alt="Ícone de e-mail" />
                    </span>
                    <input type="email" placeholder="Endereço de e-mail" />
                    </div>

                    <div className={styles["input-wrapper"]}>
                    <span className={styles["icon"]}>
                        <img src={cadeado} alt="Ícone de senha" />
                    </span>
                    <input type="password" placeholder="Digite sua senha" />
                    <span className={styles["toggle-password"]}>
                        <img src={olho} alt="Mostrar senha" />
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