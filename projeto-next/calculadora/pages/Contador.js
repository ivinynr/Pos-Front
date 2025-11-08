import { useState } from "react";

export default function Contador() {
  // Estado do contador
  const [contagem, setContagem] = useState(0);

  // Funções para manipular o contador
  const incrementar = () => setContagem(contagem + 1);
  const decrementar = () => setContagem(contagem - 1);

  return (
    <div style={estilos.container}>
      <h1>🧮 Calculadora de Cliques</h1>
      <div style={estilos.contador}>
        <button style={estilos.botao} onClick={decrementar}>-</button>
        <span style={estilos.valor}>{contagem}</span>
        <button style={estilos.botao} onClick={incrementar}>+</button>
      </div>
    </div>
  );
}

const estilos = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial, sans-serif"
  },
  contador: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    fontSize: "2rem"
  },
  botao: {
    padding: "10px 20px",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  valor: {
    minWidth: "60px",
    textAlign: "center"
  }
};
