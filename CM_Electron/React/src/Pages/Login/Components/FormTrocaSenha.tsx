import styles from '../Styles/FormTrocaSenha.module.css';
import shared from '../Styles/Forms.module.css';
import cadeado from '../../../Assets/icon cadeado.svg';


import { useState } from 'react';


interface FormTrocaSenhaProps {
  selecionarFormulario: (formType: number) => void;
}



function FormTrocaSenha({ selecionarFormulario }: FormTrocaSenhaProps) {

  const [codigo, setCodigo] = useState('');  
  return (
     <form className={shared["form"]} /* onClick={handleSubmit} */>
                <p className={shared["welcome-message-bold"]}>Recuperar senha</p>
                <span className={styles['SimpleText-RecuperarSenha']}>Digite o código que chegou por e-mail</span>
              
              <div className={styles["input-wrapper"]}>
                    <span className={shared["icon"]}>
                        <img src={cadeado} alt="Ícone de senha" />
                    </span>
                    <input type={"number"} placeholder="Digite o código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    
                    </div>

                
                
                  
                   

                   <div className={shared["div-btn-wrapper"]}>
                      <button className={codigo ? styles["btn-wrapper-white-active"] : styles["btn-wrapper-white"]} onClick={() => selecionarFormulario(0)}>Cancelar</button>
                   </div>
                
            </form>
  )
  
}

export default FormTrocaSenha