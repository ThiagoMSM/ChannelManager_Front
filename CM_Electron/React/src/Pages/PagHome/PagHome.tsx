import React from 'react';
import styles from './Styles/PagHome.module.css';

import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { notificar } from '../../Components/Toasts/Toast';
import { useAuth } from '../../Context/UserContext';
import Sidebar from './Components/sidebar';

const PagHome = () => {
    const { usuario,setusuario } = useAuth();
  

  const navigator = useNavigate();
    const handleclick = async () =>{
        notificar({mensagem:"Deslogando...", status:600, opts:{delay:1000}})
        await new Promise(resolve => setTimeout(resolve, 2000));
        setusuario(null)
        navigator('/'); // Redireciona para a página inicial
    }
    return (
       <div className={styles.global}>
           <Sidebar />
        </div>
    
    );
};

export default PagHome;