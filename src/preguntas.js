const preguntas = [
    {
        titulo: "¿Color del sol?",
        opciones:[
            { textoRespuesta: "amarillo", isCorrect: true},
            { textoRespuesta: "azul", isCorrect: false},
            { textoRespuesta: "verde", isCorrect: false},
            { textoRespuesta: "rojo", isCorrect: false},
        ],
    },

    {
        titulo: "¿Color del mar?",
        opciones:[
            { textoRespuesta: "violeta", isCorrect: false},
            { textoRespuesta: "azul", isCorrect: true},
            { textoRespuesta: "rojo", isCorrect: false},
            { textoRespuesta: "verde", isCorrect: false},
        ],
    },

    {
        titulo: "¿Cúal es el número pi?",
        opciones:[
            { textoRespuesta: "3.1415", isCorrect: true},
            { textoRespuesta: "2", isCorrect: false},
            { textoRespuesta: "3.16", isCorrect: false},
            { textoRespuesta: "3", isCorrect: false},
        ],
    },
];

export default preguntas;