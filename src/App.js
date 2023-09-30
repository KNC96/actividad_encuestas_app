import React from "react";
import "./App.css";

// Componentes de las páginas
import Encuestas from "./components/Encuestas";
function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Verde"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Sushi"],
    },
  ];
  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      <h2>Encuestas Disponibles</h2>
      {/* Contenido de las páginas */}
      {encuestas.map((encuesta) => (
        <Encuestas key={encuesta.id} encuesta={encuesta} />
      ))}
    </div>
  );
}

export default App;
