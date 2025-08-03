import React, { useState, useEffect } from 'react';
import styles from '../Styles/Sidebar.module.css';
import Rodrigo from '../Assets/rodrigo.png'; 
import Icon_exit from '../Assets/icon-exit.svg';
import LogoEros from '../Assets/LogoEros.svg'
import IconEmail from '../Assets/IconEmailWhite.svg'
import IconHouse from '../../../Assets/IconHouse.svg'
import IconCalendario from '../../../Assets/IconCalendario.svg'
import IconAbrir from '../../../Assets/IconFlechaBaixo.svg'

import { notificar } from '../../../Components/Toasts/Toast';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = async () => {
    notificar({ mensagem: "Deslogando...", status: 600, opts: { delay: 1000 } });
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate('/'); // Redireciona para a página inicial
  };

  
  

  return (
    <div className={styles.global}>
      <div className={styles["sidebar-div"]}>
            <div className={styles["header-grid-sidebar-div"]}>
                <img src={LogoEros} className={styles["LogoEros"]} />
                    <div className={styles["header-container"]}>
                      <div className={styles["header-container-multi-option"]}> 
                          <img src={IconEmail} alt="A" />
                          <p>Caixa de entrada</p>
                          <img src={IconAbrir} alt="" />
                      </div>
                      <div className={styles["header-container-multi-option"]}> 
                         <img src={IconHouse} alt="" />
                          <p>Propriedade</p>
                          <img src={IconAbrir} alt="" />
                      </div>
                      <div className={styles["header-container-option"]}> 
                          <img src={IconCalendario} alt="" />
                          <p>Calendário</p>
                           <img src='' alt="" />
                      </div>

                    </div>
            </div> 
        <div className={styles["footer-grid-sidebar-div"]}>
          <hr className={styles["footer-line"]} /> {/* Linha branca */}
          <div className={styles["footer-container"]}>
            <img src={Rodrigo} className={styles["user-img"]} alt="User" />
            {windowWidth >= 1500 ? (
              <>
              <div className={styles["user-text-div"]}>
              <p className={styles["user-text-name"]}>user.data.Username</p>
              <p className={styles["user-text-email"]}>user.Email</p>
            </div>
          
            <img src={Icon_exit} className={styles["icon-exit"]} onClick={handleClick} />
              </>
            ) : (null)}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
