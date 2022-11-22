import { useState, useEffect } from "react";
import preguntas from "./preguntas";



function App() {
  const [preguntaActual,setPreguntaActual] = useState(0);
  const [puntuacion ,setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante ,setTiempoRestante] = useState(10);  
  const [isDisabled, setIsDisabled] = useState(false);


  function handleAnswerSubmit(isCorrect , e){
    // añadir puntuación
    if(isCorrect) setPuntuacion (puntuacion + 1);
    // añadir estilos a la pregunta 
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    //cambiar a la siguiente preguntas
    
    setTimeout(()=>{      
      if (preguntaActual === preguntas.length -1){
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual+1); 
      }
    },1500);
  }

  useEffect(()=>{
    const intervalo = setInterval(()=>{
      if(tiempoRestante>0) setTiempoRestante((prev)=>prev-1);
      if(tiempoRestante==0) setIsDisabled(true);
    },1000);
  
    return()=>clearInterval(intervalo);
  },[tiempoRestante]);


  if (isFinished)
  return(
    <main className="app">
      <div className="juego-terminado">
        <span>
          {" "}
          Obtuviste { puntuacion} de {preguntas.length}{" "}
        </span>
        <button onClick={()=>(window.location.hfer="/")}>
          {" "} Volver a Jugar
        </button>
      </div>
    </main>
  );


  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="número-pregunta">
          <span> Pregunta {preguntaActual + 1} de {preguntas.length}</span>
        </div>
        <div className="título-pregunta">
          {preguntas[preguntaActual].titulo}</div>
        <div>
          <span className="tiempo-restante">
            Tiempo restante: {tiempoRestante}{" "}
          </span>
        </div>
      </div>
       
      <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta)=>(
          <button key={respuesta.textoRespuesta}  onClick = {(e) => handleAnswerSubmit(respuesta.isCorrect, e)} >{respuesta.textoRespuesta} </button>
        ))}
      </div>
    </main>
  );
}

export default App;
