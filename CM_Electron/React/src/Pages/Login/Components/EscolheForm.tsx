import React, { useState, ReactElement, cloneElement } from "react";
import styles from '../Styles/Forms.module.css';
interface FormularioProps {
  selecionarFormulario: (novoIndex: number) => void;
  setCodigo: (codigo: string) => void;  // adiciona aqui
  codigo?: string;
  users: any;
}

export interface User {
  Email: string;
  data: {
    Username: string;
    Password: string;
  };
}


let users: User[] = [
  {
    Email: "Rodrigo@gmail.com", data: {
      Username: "Rodrigo",
      Password: "Rodrigo123"
    }
  },
  {
    Email: "Rafael@gmail.com", data: {
      Username: "Rafael",
      Password: "Rafael123"
    }
  },
];

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
      users: users
    })
  );

  return (
    <div className={styles["body"]}>
      <div className={styles["body"]}>{filhosComProps[indexSelecionado]}</div>
    </div>
  );
};

export default EscolheForm;