"use client";
import { useState, CSSProperties } from "react";
import FormularioTarefa from "./componentes/FormularioTarefa";
import ListaTarefas from "./componentes/ListaTarefas";


// Interface para definir o formato de uma tarefa
interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

export default function Page() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (texto: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id: number) => {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  const pendentes = tarefas.filter((t) => !t.concluida).length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <div style={estilos.container}>
      <h1>📝 Lista de Tarefas</h1>

      <FormularioTarefa onAdicionar={adicionarTarefa} />

      <ListaTarefas
        tarefas={tarefas}
        onConcluir={concluirTarefa}
        onRemover={removerTarefa}
      />

      <p style={{ marginTop: "20px" }}>
        Pendentes: {pendentes} | Concluídas: {concluidas}
      </p>
    </div>
  );
}

// Tipando corretamente os estilos com CSSProperties
const estilos: { container: CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};
