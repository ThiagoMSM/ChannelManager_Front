import logoComNome from '../../Assets/logoComNome.svg';

function HeaderLogin() {
  return (
    <header style={styles.header}>

      <img src={logoComNome} alt="Logo" style={styles.logo} />
      
    </header>
  );
}


const styles = {
    header: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: '1px solid rgba(255, 255, 5, 1)',
      width: '100vw',
      height: '10vh',
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
    },
    logo: {
        width: 'auto',
        height: '80%',
          border: '1px solid rgba(255, 255, 5, 1)',
    },
  
};

export default HeaderLogin;
