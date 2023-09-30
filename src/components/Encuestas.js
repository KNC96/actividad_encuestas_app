import React from "react";
import "./Encuestas.css";

function Encuestas({ encuesta }) {

  return (
    <div className="container">
      <h3>{encuesta.pregunta}</h3>
      {encuesta.opciones.map((opcion, index) => (
        <label className="item" key={index}>
          <input type="radio" name={encuesta.id} value={opcion} />
          {opcion}
        </label>
      ))}
    </div>
  );
}
export default Encuestas;
