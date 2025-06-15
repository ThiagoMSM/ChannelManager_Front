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
      {/* <div style={{ display: "flex", gap: "10px", marginBottom: "1rem", border: "1px solid #000"}}>
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelecionar(index)}
            style={{
              padding: "8px 12px",
              backgroundColor: indexSelecionado === index ? "#007bff" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Formulário {index + 1}
          </button>
        ))}
      </div> */}

      <div>{children[indexSelecionado]}</div>
    </div>
  );
};

export default EscolheForm;
