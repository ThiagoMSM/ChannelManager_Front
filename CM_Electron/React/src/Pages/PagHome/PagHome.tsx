import React from 'react';
import styles from './Styles/PagHome.module.css';

import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { notificar } from '../../Components/Toasts/Toast';

import Sidebar from './Components/sidebar';

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
           <Sidebar />

        </div>
    
    );
};

export default PagHome;