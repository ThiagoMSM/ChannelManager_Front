import React from 'react';
import styles from './Styles/PagHome.module.css';
import Icon_exit from './Assets/icon-exit.svg';


const PagHome: React.FC = () => {
    
    return (
       <div className={styles.global}>
            <div className={styles["sidebar-div"]}>




                <div className={styles["footer-grid-sidebar-div"]}>
                    <hr className={styles["footer-line"]}/> {/*  Linha branca */}

                    <div className={styles["footer-caontaner"]}>
                        <img src="" className={styles["user-img"]} alt="" />
                        <div className={styles["user-text-div"]}>
                            <p className={styles["user-text-name"]}>Username</p>
                            <p className={styles["user-text-email"]}>Email@gmail.com</p>
                        </div>
                        
                        <img src={Icon_exit} className={styles["icon-exit"]} />
                    </div>


                </div>
            </div>
       </div>
    );
};

export default PagHome;