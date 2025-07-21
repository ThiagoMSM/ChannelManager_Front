import React, { useState } from "react";
import './../Styles/EscolheForm.css';
interface EscolheFormProps {
  children: React.ReactNode[];
}

const EscolheForm: React.FC<EscolheFormProps> = ({ children }) => {
  const [indexSelecionado, setIndexSelecionado] = useState(0);

  const handleSelecionar = (index: number) => {
    console.log("Selecionando formulário:", index);
    setIndexSelecionado(index);
  };


  return (
    <div className="EscolheForm">
      

      <div>{children[indexSelecionado]}</div>
    </div>
  );
};

export default EscolheForm;
