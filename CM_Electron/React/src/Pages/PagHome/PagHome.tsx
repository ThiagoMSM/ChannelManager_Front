import React from 'react';
import styles from './Styles/PagHome.module.css';
import Icon_exit from './Assets/icon-exit.svg';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { notificar } from '../../Components/Toasts/Toast';
import Rodrigo from './Assets/rodrigo.png'; 
import rafael from './Assets/Rafael.png'; 

const PagHome: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
  

  const navigator = useNavigate();
    const handleclick = async () =>{
        notificar({mensagem:"Deslogando...", status:600, opts:{delay:1000}})
        await new Promise(resolve => setTimeout(resolve, 2000));
        setUser(null)
        navigator('/'); // Redireciona para a página inicial
    }
    return (
       <div className={styles.global}>
            <div className={styles["sidebar-div"]}>

                <div className={styles["footer-grid-sidebar-div"]}>
                    <hr className={styles["footer-line"]}/> {/*  Linha branca */}

                    <div className={styles["footer-caontaner"]}>
                            <img src={ user.data.Username === "Rodrigo" ? Rodrigo : rafael } className={styles["user-img"]} alt=""></img>
                    
                        <div className={styles["user-text-div"]}>
                            <p className={styles["user-text-name"]}>{user.data.Username}</p>
                            <p className={styles["user-text-email"]}>{user.Email}</p>
                        </div>
                        
                        <img src={Icon_exit} className={styles["icon-exit"]} onClick={handleclick} />
                    </div>

                    </div>

                </div>
            </div>
    
    );
};

export default PagHome;