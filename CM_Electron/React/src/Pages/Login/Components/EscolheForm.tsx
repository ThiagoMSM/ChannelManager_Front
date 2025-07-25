import React, { useState, ReactElement, cloneElement } from "react";
import styles from '../Styles/Forms.module.css';
interface FormularioProps {
  selecionarFormulario: (novoIndex: number) => void;
   setCodigo: (codigo: string) => void;  // adiciona aqui
    codigo?: string;  
}

interface EscolheFormProps {
  children: ReactElement<FormularioProps>[];
}

const EscolheForm: React.FC<EscolheFormProps> = ({ children }) => {
  const [indexSelecionado, setIndexSelecionado] = useState(0);
  const [codigo, setCodigo] = useState(''); // Código de recuperação de senha

  const filhosComProps = children.map((child, index) =>
    cloneElement(child, {
      selecionarFormulario: (novoIndex: number) => setIndexSelecionado(novoIndex),
      setCodigo, // passa função para setar o código no pai
      codigo,    // passa o código atual para o filho (opcional)
      key: index,
    })
  );

  return (
    <div className={styles["body"]}>
      <div className={styles["body"]}>{filhosComProps[indexSelecionado]}</div>
    </div>
  );
};

export default EscolheForm;