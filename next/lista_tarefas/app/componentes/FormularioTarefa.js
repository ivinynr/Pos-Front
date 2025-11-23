"use client";
import { useState } from "react";

export default function FormularioTarefa({ onAdicionar }) {
  const [texto, setTexto] = useState("");

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    onAdicionar(texto);
    setTexto("");
  };

  return (
    <form onSubmit={adicionarTarefa} style={estilos.form}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={estilos.input}
      />
      <button type="submit" style={estilos.botao}>Adicionar</button>
    </form>
  );
}

const estilos = {
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    width: "250px",
  },
  botao: {
    padding: "8px 16px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
