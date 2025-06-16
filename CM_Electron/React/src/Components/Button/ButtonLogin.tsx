import './Styles/ButtonLogin.css'; // idealmente seria com um css próprio, mas mais idealmente ainda seria com tailwind, ou seja, oh well pra que mudar?
type props = {
    carregando: boolean;
    texto: string;
    FnType?: "button" | "submit" | "reset";
}

function ButtonCarregar({carregando, texto, FnType}:props) {
    return (
        <button type={FnType} className={carregando ? "loading-button" : "BtnConecte"}>
            {carregando && <div className="loading-circle"></div>}
            {carregando ? "Conectando" : texto}
        </button>
    )
}

export default ButtonCarregar