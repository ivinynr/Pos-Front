"use client";

export default function Tarefa({ tarefa, onConcluir, onRemover }) {
  return (
    <div style={estilos.container}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onConcluir(tarefa.id)}
      />
      <span
        style={{
          ...estilos.texto,
          textDecoration: tarefa.concluida ? "line-through" : "none",
        }}
      >
        {tarefa.texto}
      </span>
      <button style={estilos.botaoRemover} onClick={() => onRemover(tarefa.id)}>
        ❌
      </button>
    </div>
  );
}

const estilos = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "8px",
  },
  texto: {
    flex: 1,
    marginLeft: "10px",
  },
  botaoRemover: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
};
