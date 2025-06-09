import React from 'react';
import LogoComNome from '../../Assets/LogoComNome.svg';

const HeaderLogin: React.FC = () => {
    return (
        <header style={styles.header}>
            <LogoComNome style={styles.logo} />
            <h1 style={styles.title}>Welcome to Channel Manager</h1>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#000', 
        width: '100%',
        height: '60px', 
        position: 'fixed' as 'fixed', 
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    logo: {
        width: '50px',
        height: '50px',
        marginRight: '15px',
    },
    title: {
        color: 'white', 
        fontSize: '24px',
        margin: 0,
    },
};

export default HeaderLogin;
