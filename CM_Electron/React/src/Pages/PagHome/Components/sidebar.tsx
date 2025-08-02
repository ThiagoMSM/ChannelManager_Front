import React from 'react';
import styles from '../Styles/Sidebar.module.css';
import Rodrigo from '../Assets/rodrigo.png'; 
import Icon_exit from '../Assets/icon-exit.svg';
import { useState, useEffect } from 'react';

const sidebar: React.FC = () => {
//     const { user, setUser } = useContext(UserContext);
  

//   const navigator = useNavigate();
    const handleclick = async () =>{
        // notificar({mensagem:"Deslogando...", status:600, opts:{delay:1000}})
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // setUser(null)
        // navigator('/'); // Redireciona para a página inicial
    }

// const Sidebar = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

    return (
       <div className={styles.global}>
            <div className={styles["sidebar-div"]}>
                <div className={styles["footer-grid-sidebar-div"]}>
                    <hr className={styles["footer-line"]}/> {/*  Linha branca */}
                    <div className={styles["footer-container"]}>
                            <img src={Rodrigo} className={styles["user-img"]} alt=""></img>
                    
                        <div className={styles["user-text-div"]}>
                            <p className={styles["user-text-name"]}>user.data.Username</p>
                            <p className={styles["user-text-email"]}>user.Email</p>
                        </div>
                        
                        <img src={Icon_exit} className={styles["icon-exit"]} onClick={handleclick} />
                    </div>
                    </div>
                </div>

    </div>
    
    );
};

export default sidebar;