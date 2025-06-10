//import logoComNome from '../../Assets/LogoComNome.svg'

function HeaderLogin() {
    return (
        <>
            teste
        </>
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
