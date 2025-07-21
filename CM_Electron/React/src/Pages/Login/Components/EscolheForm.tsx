import React, { useState, ReactElement, cloneElement } from "react";

interface FormularioProps {
  selecionarFormulario: (novoIndex: number) => void;
}

interface EscolheFormProps {
  children: ReactElement<FormularioProps>[];
}

const EscolheForm: React.FC<EscolheFormProps> = ({ children }) => {
  const [indexSelecionado, setIndexSelecionado] = useState(0);

  const filhosComProps = children.map((child, index) =>
    cloneElement(child, {
      selecionarFormulario: (novoIndex: number) => setIndexSelecionado(novoIndex),
      key: index
    })
  );

  return (
    <div className="EscolheForm">
      <div>{filhosComProps[indexSelecionado]}</div>
    </div>
  );
};

export default EscolheForm;