import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Listagem = () =>  {
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    api
      .get("/AgendaContato")
      .then((response) => setContatos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div className="App">
      {contatos?.map((contato) => 
      <>
        <p>{contato.nomeContato}</p>
        <p>{contato.numeroContato}</p>
      </>
      )}
    </div>
  );
}

export interface Contato {
    nomeContato : string,
    numeroContato: string
}

export default Listagem;