"use client";
import Tarefa from "./Tarefa";

export default function ListaTarefas({ tarefas, onConcluir, onRemover }) {
  return (
    <div>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            onConcluir={onConcluir}
            onRemover={onRemover}
          />
        ))
      )}
    </div>
  );
}
