const modules = [
  {
    id: "civil",
    title: "Concepto y contenido del Derecho Civil",
    source: "Concepto y contenido del Derecho Civil-1-14.pdf",
    image: "assets/concepto-cover.png",
    priority: "alta",
    time: "70 min",
    summary:
      "Base para todo lo demas: sentidos de la palabra Derecho, caracteres de la norma juridica y lugar del Derecho Civil dentro del Derecho privado.",
    essentials: [
      "Derecho objetivo: conjunto/sistema de normas que hace posible la coexistencia social.",
      "Derecho subjetivo: facultad que la norma reconoce para ejercer cierta libertad.",
      "Derecho como ciencia: estudio del Derecho objetivo y subjetivo.",
      "Norma juridica: precepto mas sancion; bilateral, general, imperativa, coercible y heteronoma.",
      "Derecho Civil: derecho privado comun u originario; rige ante silencio o insuficiencia de derechos especiales.",
      "Contenido clasico: persona, familia, proteccion de incapaces y derecho patrimonial sobre bienes."
    ],
    examTargets: [
      "Definir Derecho objetivo sin olvidar autoridad, obligatoriedad, coercibilidad y coexistencia social.",
      "Distinguir Derecho publico y privado por interes, autonomia de la voluntad, accion y sujetos.",
      "Explicar por que el Derecho Civil funciona como derecho comun."
    ],
    traps: [
      "No reducir Derecho Civil solo a familia: tambien incluye persona, bienes y reglas comunes.",
      "No confundir derecho subjetivo con Derecho como disciplina."
    ]
  },
  {
    id: "fuentes",
    title: "Fuentes del Derecho",
    source: "FUENTES del DERECHO.pptx",
    image: "assets/fuentes-cover.jpeg",
    priority: "alta",
    time: "80 min",
    summary:
      "Aca conviene memorizar clasificaciones y proceso de formacion de la ley. Es material muy preguntable porque ordena todo el sistema.",
    essentials: [
      "Fuentes historicas: documentos, obras, tratados y testimonios que muestran como se organizaron comunidades y normas.",
      "Fuentes materiales: factores sociales, principios y datos que influyen en el contenido de la norma.",
      "Fuentes formales: formas obligadas de expresion del Derecho; segun el material, en Uruguay la fuente formal es la legislacion.",
      "Legislacion es el genero; ley es una especie. Tambien hay decretos departamentales y reglamentos del Poder Ejecutivo.",
      "Constitucion: norma fundamental y de mayor jerarquia; organiza poderes y reconoce derechos/deberes.",
      "Proceso de ley comun: iniciativa, discusion, sancion, promulgacion y publicacion."
    ],
    examTargets: [
      "Comparar fuentes historicas, materiales y formales con ejemplos.",
      "Explicar ley en sentido formal y ley en sentido material.",
      "Ordenar las etapas de formacion de la ley y ubicar veto, promulgacion y publicacion."
    ],
    traps: [
      "No decir que ley y legislacion son sinonimos: la ley es una forma de legislacion.",
      "No saltear la publicacion: importa para conocimiento y vigencia."
    ]
  },
  {
    id: "tiempo",
    title: "Eficacia de la ley en el tiempo",
    source: "EFICACIA DE LA LEY EN EL TIEMPO.pptx",
    image: "assets/eficacia-cover.jpeg",
    priority: "alta",
    time: "95 min",
    summary:
      "El nucleo es saber cuando empieza y termina la vigencia, como opera la derogacion y como distinguir retroactividad, efecto inmediato y ultraactividad.",
    essentials: [
      "Art. 1 CCU: si la ley no fija fecha, entra en vigencia 10 dias despues de su publicacion en el Diario Oficial.",
      "Derogacion: cese definitivo de vigencia por otra ley; puede ser expresa, tacita o mixta.",
      "Derogacion tacita: exige igualdad de materia e incompatibilidad; la ley especial prevalece sobre la general.",
      "Art. 7 CCU: principio de irretroactividad; la retroactividad no se presume y se interpreta restrictivamente.",
      "Materia penal: se separa del art. 7 CCU; rige retroactividad de la ley penal mas benigna.",
      "Roubier: si la nueva ley toca hechos consumados hay retroactividad; si regula efectos posteriores de situaciones en curso hay efecto inmediato; si sobrevive la ley vieja hay ultraactividad."
    ],
    examTargets: [
      "Resolver casos separando hechos pasados, situaciones en curso y hechos futuros.",
      "Explicar derecho adquirido frente a mera expectativa.",
      "Distinguir fase dinamica y fase estatica en situaciones juridicas pendientes."
    ],
    traps: [
      "No llamar retroactividad a todo cambio que afecta una situacion en curso.",
      "No olvidar leyes interpretativas, retroactividad expresa y ley penal mas benigna."
    ]
  },
  {
    id: "interpretacion",
    title: "Interpretacion e integracion",
    source: "LA INTERPRETACION GRUPO Guia 7.pptx",
    image: "assets/interpretacion-cover.jpeg",
    priority: "alta",
    time: "90 min",
    summary:
      "Tema puente entre teoria y casos: atribucion de sentido, problemas interpretativos, escuelas, metodo del CCU e integracion por lagunas.",
    essentials: [
      "Interpretar es atribuir sentido a enunciados juridicos; puede verse como actividad o como resultado.",
      "Modelos: objetivista/cognoscitivista, subjetivista y posicion intermedia de Hart con discrecionalidad en zona de penumbra.",
      "Problemas: linguisticos (ambiguedad, vaguedad), sistemicos (redundancia, antinomias) y funcionales/valorativos.",
      "Tipos: literal o declarativa, correctora restrictiva, correctora extensiva, funcional/teleologica y sistematica.",
      "Metodo del CCU: art. 17 a 20 combinan tenor literal, historia fidedigna, intencion/espiritu y conexion sistematica.",
      "Integracion: art. 15 impide dejar de fallar; art. 16 admite lagunas y medios como analogia, principios generales y doctrinas mas recibidas."
    ],
    examTargets: [
      "Comparar escuela clasica, Geny, Savigny, Saleilles, Derecho libre y logico-sistematica.",
      "Explicar analogia con presupuestos: caso no previsto, semejanza esencial e igual ratio legis.",
      "Definir principios generales como limites y fuente subsidiaria."
    ],
    traps: [
      "No tratar interpretacion e integracion como mundos aislados: el material marca diferencias de grado.",
      "No aplicar integracion en materia penal ni constitucional segun el alcance del art. 16."
    ]
  },
  {
    id: "riggs",
    title: "Riggs contra Palmer",
    source: "RIGGS contra PALMER- EL CASO ELMER.pdf",
    image: "assets/riggs-cover.png",
    priority: "media",
    time: "45 min",
    summary:
      "Caso clasico para mostrar choque entre lectura literal de reglas sucesorias y principios juridicos: nadie puede beneficiarse de su propio crimen.",
    essentials: [
      "Hecho central: Elmer Palmer asesina a su abuelo para impedir que revoque el testamento y cobrar antes la herencia.",
      "Problema: la ley testamentaria literal parecia otorgarle la propiedad; el caso no estaba previsto expresamente.",
      "Mayoria de Earl: interpreta conforme finalidad, equidad, orden publico y principios generales del common law.",
      "Maxima clave: nadie debe beneficiarse de su propio fraude, error, iniquidad o crimen.",
      "Disidencia de Gray: el tribunal no puede rehacer un testamento ni agregar una pena si el legislador guardo silencio.",
      "Uso teorico: ejemplo de desacuerdo entre reglas y principios, muy asociado al debate Hart-Dworkin."
    ],
    examTargets: [
      "Reconstruir hechos, cuestion juridica, decision y fundamentos de mayoria y disidencia.",
      "Relacionar el caso con interpretacion teleologica, principios generales e integracion.",
      "Usarlo como ejemplo de limites de la literalidad."
    ],
    traps: [
      "No decir que la mayoria castiga de nuevo a Elmer: sostiene que no adquiere por su crimen.",
      "No convertir la disidencia en defensa moral de Elmer: defiende competencia legislativa y seguridad juridica."
    ]
  }
];

const dayPlan = [
  {
    id: "mapa",
    time: "00:00 - 00:25",
    title: "Mapa general y articulos",
    detail: "Lee la nube de articulos y mira como se conectan los cinco temas.",
    tag: "Todos"
  },
  {
    id: "civil",
    time: "00:25 - 01:35",
    title: "Concepto, norma juridica y Derecho Civil",
    detail: "Saca definiciones cortas y practica la distincion publico/privado.",
    tag: "Base"
  },
  {
    id: "fuentes",
    time: "01:35 - 02:55",
    title: "Fuentes y formacion de la ley",
    detail: "Memoriza clasificaciones, jerarquia constitucional y etapas de la ley comun.",
    tag: "Alta"
  },
  {
    id: "descanso",
    time: "02:55 - 03:10",
    title: "Pausa breve",
    detail: "Corta el bloque antes de entrar a retroactividad.",
    tag: "Pausa"
  },
  {
    id: "tiempo",
    time: "03:10 - 04:45",
    title: "Vigencia, derogacion y retroactividad",
    detail: "Arma una tabla: retroactivo, inmediato y ultraactivo con ejemplos.",
    tag: "Alta"
  },
  {
    id: "interpretacion",
    time: "04:45 - 06:15",
    title: "Interpretacion e integracion",
    detail: "Estudia escuelas, metodos del CCU, analogia y principios generales.",
    tag: "Alta"
  },
  {
    id: "riggs",
    time: "06:15 - 06:55",
    title: "Riggs contra Palmer",
    detail: "Prepara una respuesta comparando mayoria y disidencia.",
    tag: "Caso"
  },
  {
    id: "fichas",
    time: "06:55 - 07:35",
    title: "Fichas sin mirar apuntes",
    detail: "Pasa todas las fichas y repite las que falles.",
    tag: "Recuerdo"
  },
  {
    id: "simulacro",
    time: "07:35 - 08:15",
    title: "Simulacro escrito",
    detail: "Responde 3 preguntas largas y revisa con la guia.",
    tag: "Cierre"
  }
];

const articles = [
  ["Art. 1 CCU", "vigencia a los 10 dias si la ley guarda silencio"],
  ["Art. 7 CCU", "principio de irretroactividad civil"],
  ["Art. 8 CCU", "nulidad frente a leyes imperativas y prohibitivas"],
  ["Arts. 9-11 CCU", "derogacion y fin de vigencia"],
  ["Arts. 12-14 CCU", "interpretacion autentica y judicial"],
  ["Arts. 15-16 CCU", "deber de fallar e integracion por lagunas"],
  ["Arts. 17-20 CCU", "tenor literal, historia, espiritu y sistema"],
  ["Art. 13 CCU", "leyes interpretativas"],
  ["Art. 15 Codigo Penal", "ley penal mas benigna"],
  ["Arts. 133-246 Const.", "formacion de la ley comun"],
  ["Art. 258 Const.", "inconstitucionalidad ante conflicto ley/Constitucion"],
  ["Art. 138 Const.", "veto suspensivo"],
  ["Arts. 136 y 168.4 Const.", "publicacion de la ley por el Poder Ejecutivo"]
];

const flashcards = [
  ["civil", "Tres acepciones de la palabra Derecho.", "Objetivo: normas de coexistencia. Subjetivo: facultad reconocida por la norma. Ciencia: disciplina que estudia esos fenomenos."],
  ["civil", "Caracteres de la norma juridica.", "Bilateralidad, generalidad, imperatividad, coercibilidad y heteronomia. La estructura basica es precepto mas sancion."],
  ["civil", "Por que el Derecho Civil es derecho comun.", "Porque aporta reglas generales y rige cuando otros derechos especiales guardan silencio o son insuficientes."],
  ["civil", "Criterios para distinguir Derecho publico y privado.", "Interes protegido, autonomia de la voluntad, tipo de accion, cualidad de los sujetos y relacion de supremacia o coordinacion."],
  ["fuentes", "Diferencia entre fuente historica y fuente material.", "La historica muestra antecedentes o testimonios; la material explica factores y condiciones que influyen en el contenido normativo."],
  ["fuentes", "Que es una fuente formal.", "La forma obligada en que el Derecho positivo se expresa para imponerse coercitivamente."],
  ["fuentes", "Legislacion y ley: relacion.", "Legislacion es el genero. Ley es una especie de legislacion junto con reglamentos y decretos competentes."],
  ["fuentes", "Ley en sentido formal.", "Norma dictada por el Poder Legislativo siguiendo el procedimiento constitucional."],
  ["fuentes", "Ley en sentido material.", "Norma juridica general, abstracta y obligatoria, mas alla del organo o forma concreta."],
  ["fuentes", "Etapas de formacion de la ley comun.", "Iniciativa, discusion, sancion, promulgacion y publicacion."],
  ["fuentes", "Que pasa si hay conflicto entre ley y Constitucion.", "Puede plantearse la declaracion de inconstitucionalidad ante la Suprema Corte de Justicia."],
  ["fuentes", "Leyes imperativas, permisivas y prohibitivas.", "Imperativas ordenan; permisivas toleran o reconocen facultades; prohibitivas impiden hacer algo."],
  ["tiempo", "Regla del art. 1 CCU cuando la ley no fija vigencia.", "Entra en vigor 10 dias despues de su publicacion en el Diario Oficial."],
  ["tiempo", "Tipos de derogacion por la forma.", "Expresa, tacita y mixta."],
  ["tiempo", "Requisitos de la derogacion tacita.", "Igualdad de materia e incompatibilidad o contradiccion entre disposiciones. La especial prevalece sobre la general."],
  ["tiempo", "Alcance del art. 7 CCU.", "Las leyes no tienen efecto retroactivo como regla; la retroactividad debe ser expresa y se interpreta restrictivamente."],
  ["tiempo", "Excepcion penal importante.", "La ley penal mas benigna se aplica retroactivamente segun las reglas penales."],
  ["tiempo", "Derecho adquirido vs mera expectativa.", "El derecho adquirido ya ingreso definitivamente al patrimonio o esfera del titular; la expectativa aun no se consolido."],
  ["tiempo", "Roubier: efecto retroactivo.", "La nueva ley afecta situaciones o partes ya consumadas antes de su vigencia."],
  ["tiempo", "Roubier: efecto inmediato.", "La nueva ley regula hacia adelante efectos posteriores de situaciones en curso."],
  ["tiempo", "Ultraactividad.", "La ley vieja sigue regulando ciertos efectos pese a haber sido derogada, por disposicion o razon juridica."],
  ["interpretacion", "Que es interpretar juridicamente.", "Atribuir sentido o significado a enunciados juridicos."],
  ["interpretacion", "Problemas linguisticos de interpretacion.", "Ambiguedad semantica o sintactica y vaguedad con nucleo de certeza y zona de penumbra."],
  ["interpretacion", "Interpretacion literal.", "Determina el sentido atendiendo al significado de las palabras usadas por la ley."],
  ["interpretacion", "Interpretacion teleologica.", "Busca la razon de ser, finalidad, espiritu y vinculacion de la norma con el ordenamiento."],
  ["interpretacion", "Metodo interpretativo del CCU segun el material.", "Primero la ley misma en conexion sistematica; si hay oscuridad, intencion o espiritu manifestados en la ley o historia fidedigna."],
  ["interpretacion", "Art. 15 CCU.", "Los jueces no pueden dejar de fallar por silencio, oscuridad o insuficiencia de la ley."],
  ["interpretacion", "Art. 16 CCU.", "Admite integracion ante lagunas mediante leyes analogas, principios generales y doctrinas mas recibidas."],
  ["interpretacion", "Presupuestos de la analogia.", "Caso no previsto, semejanza esencial con uno previsto e igual ratio legis."],
  ["riggs", "Hecho central de Riggs contra Palmer.", "Elmer asesina a su abuelo para cobrar la herencia y evitar una posible revocacion del testamento."],
  ["riggs", "Argumento de la mayoria.", "La literalidad no puede permitir que alguien se beneficie de su propio crimen; se usan finalidad, equidad, orden publico y principios."],
  ["riggs", "Argumento de la disidencia.", "Si la ley testamentaria regula como alterar o revocar testamentos, el juez no debe crear una excepcion ni una pena adicional."],
  ["riggs", "Por que Riggs sirve para interpretar.", "Muestra tension entre reglas literales, principios juridicos y discrecionalidad judicial en casos dificiles."]
].map(([module, question, answer], index) => ({ id: `card-${index}`, module, question, answer }));

const quiz = [
  {
    module: "civil",
    question: "1. Cual es la mejor descripcion de Derecho objetivo?",
    options: [
      "Una facultad individual para ejercer una libertad",
      "Un sistema de normas obligatorias que hace posible la coexistencia social",
      "La opinion doctrinaria mayoritaria",
      "Una rama autonoma del Derecho privado economico"
    ],
    answer: 1,
    why: "El Derecho objetivo se define como sistema de normas de conducta obligatorias y coercibles."
  },
  {
    module: "civil",
    question: "2. Que expresa el Derecho subjetivo?",
    options: [
      "La facultad reconocida por una norma a una persona",
      "El conjunto de tratados historicos",
      "La etapa final de formacion de la ley",
      "La sancion penal mas benigna"
    ],
    answer: 0,
    why: "El Derecho subjetivo es la facultad que la norma reconoce para actuar o ejercer una libertad."
  },
  {
    module: "civil",
    question: "3. Cual es la estructura basica de la norma juridica segun el material?",
    options: [
      "Costumbre y jurisprudencia",
      "Precepto y sancion",
      "Iniciativa y promulgacion",
      "Analogias y doctrinas"
    ],
    answer: 1,
    why: "La estructura original de la norma juridica se presenta como precepto mas sancion."
  },
  {
    module: "civil",
    question: "4. Cual de estos es un caracter de la norma juridica?",
    options: [
      "Voluntariedad pura",
      "Heteronomia",
      "Retroactividad necesaria",
      "Inaplicabilidad judicial"
    ],
    answer: 1,
    why: "Los caracteres mencionados son bilateralidad, generalidad, imperatividad, coercibilidad y heteronomia."
  },
  {
    module: "civil",
    question: "5. Por que el Derecho Civil se considera derecho comun?",
    options: [
      "Porque solo regula relaciones con el Estado",
      "Porque dota de reglas generales y rige ante silencio de derechos especiales",
      "Porque excluye a la familia y a los bienes",
      "Porque no admite interpretacion"
    ],
    answer: 1,
    why: "El material lo presenta como derecho originario y subsidiario frente al silencio o insuficiencia de otras ramas."
  },
  {
    module: "civil",
    question: "6. Cual es un criterio para distinguir Derecho publico y privado?",
    options: [
      "La extension del expediente",
      "La cualidad de los sujetos y si hay supremacia-subordinacion",
      "El numero de articulos de la ley",
      "La fecha de publicacion del Diario Oficial"
    ],
    answer: 1,
    why: "Entre los criterios se menciona la cualidad de los sujetos intervinientes y el tipo de relacion."
  },
  {
    module: "fuentes",
    question: "7. Segun el material, cual es la fuente formal del Derecho en Uruguay?",
    options: ["La costumbre", "La jurisprudencia", "La legislacion", "La doctrina"],
    answer: 2,
    why: "La presentacion afirma que en Uruguay la fuente formal es la legislacion."
  },
  {
    module: "fuentes",
    question: "8. Que caracteriza a las fuentes materiales?",
    options: [
      "Son factores y condiciones que influyen en el contenido de las normas",
      "Son solo los codigos ya derogados",
      "Son sentencias obligatorias para todos los casos",
      "Son el acto de publicacion de la ley"
    ],
    answer: 0,
    why: "Las fuentes materiales son hechos, principios, datos, necesidades o factores que determinan el contenido normativo."
  },
  {
    module: "fuentes",
    question: "9. Que relacion hay entre legislacion y ley?",
    options: [
      "Son exactamente sinonimos",
      "La ley es el genero y la legislacion la especie",
      "La legislacion es el genero y la ley una especie",
      "La ley no integra la legislacion"
    ],
    answer: 2,
    why: "El material distingue legislacion como genero y ley como una forma o especie."
  },
  {
    module: "fuentes",
    question: "10. Que es la Constitucion como fuente del Derecho?",
    options: [
      "Una norma de menor jerarquia que la ley",
      "La norma fundamental y de mayor jerarquia del Estado",
      "Una doctrina recibida por la mayoria",
      "Un reglamento del Poder Ejecutivo"
    ],
    answer: 1,
    why: "Se presenta como norma fundamental, de mayor jerarquia, organizadora del Estado y sus derechos."
  },
  {
    module: "fuentes",
    question: "11. Que es ley en sentido formal?",
    options: [
      "Toda norma general dictada por cualquier organo",
      "Norma dictada por el Poder Legislativo siguiendo el procedimiento constitucional",
      "Toda opinion doctrinaria aceptada",
      "Una costumbre reiterada"
    ],
    answer: 1,
    why: "El sentido formal atiende al organo y al procedimiento de formacion constitucional."
  },
  {
    module: "fuentes",
    question: "12. Cual es el orden correcto de formacion de la ley comun?",
    options: [
      "Promulgacion, iniciativa, publicacion, sancion, discusion",
      "Iniciativa, discusion, sancion, promulgacion, publicacion",
      "Discusion, publicacion, sancion, iniciativa, promulgacion",
      "Iniciativa, promulgacion, veto, derogacion, retroactividad"
    ],
    answer: 1,
    why: "La presentacion enumera esas cinco etapas en ese orden."
  },
  {
    module: "fuentes",
    question: "13. Que etapa da fuerza obligatoria a la ley?",
    options: ["Iniciativa", "Discusion", "Promulgacion", "Publicacion"],
    answer: 2,
    why: "La promulgacion es el acto por el cual el Poder Ejecutivo ordena cumplir la ley."
  },
  {
    module: "fuentes",
    question: "14. Para que sirve la publicacion de la ley?",
    options: [
      "Para su conocimiento y divulgacion en el Diario Oficial",
      "Para que el juez pueda dejar de fallar",
      "Para volverla siempre retroactiva",
      "Para eliminar la promulgacion"
    ],
    answer: 0,
    why: "La publicacion se realiza en el Diario Oficial a efectos de conocimiento y divulgacion."
  },
  {
    module: "tiempo",
    question: "15. Si una ley guarda silencio sobre su entrada en vigencia, que regla se aplica?",
    options: [
      "Rige al dia siguiente de la sancion",
      "Rige 10 dias despues de su publicacion en el Diario Oficial",
      "Rige solo tras la promulgacion y sin plazo",
      "Rige cuando la SCJ la declare constitucional"
    ],
    answer: 1,
    why: "El art. 1 CCU fija la vacatio legis uniforme de 10 dias."
  },
  {
    module: "tiempo",
    question: "16. Que es la derogacion?",
    options: [
      "El comienzo simultaneo de vigencia de la ley",
      "La cesacion definitiva de la vigencia de una ley por causas externas",
      "La interpretacion privada de una norma",
      "La publicacion de un proyecto"
    ],
    answer: 1,
    why: "La derogacion es la cesacion definitiva de vigencia producida por otra ley."
  },
  {
    module: "tiempo",
    question: "17. Cuando hay derogacion tacita?",
    options: [
      "Cuando la nueva ley enumera las normas derogadas",
      "Cuando dos leyes tratan cualquier materia distinta",
      "Cuando hay igualdad de materia e incompatibilidad entre disposiciones",
      "Cuando la ley vieja pierde interes social"
    ],
    answer: 2,
    why: "La tacita exige igualdad de materia y contradiccion o incompatibilidad."
  },
  {
    module: "tiempo",
    question: "18. Que establece como regla el art. 7 CCU?",
    options: [
      "Las leyes siempre son retroactivas",
      "Las leyes no tienen efecto retroactivo",
      "La ley civil se aplica igual que la ley penal",
      "El juez puede no fallar si la ley es oscura"
    ],
    answer: 1,
    why: "El art. 7 CCU sienta el principio de irretroactividad de la ley."
  },
  {
    module: "tiempo",
    question: "19. Que debe pasar para que se admita retroactividad como regla civil?",
    options: [
      "Debe presumirse por el juez",
      "Debe surgir de disposicion expresa",
      "Debe pedirla cualquier particular",
      "Debe existir una mera expectativa"
    ],
    answer: 1,
    why: "La retroactividad no se presume y requiere disposicion expresa."
  },
  {
    module: "tiempo",
    question: "20. Cual es la regla especial en materia penal mencionada en el material?",
    options: [
      "La ley penal nunca puede ser retroactiva",
      "La ley penal mas benigna puede aplicarse retroactivamente",
      "El art. 7 CCU se aplica sin excepciones al Derecho penal",
      "Toda ley penal derogada sigue vigente para siempre"
    ],
    answer: 1,
    why: "En materia penal rige la retroactividad de la ley mas benigna segun sus propias reglas."
  },
  {
    module: "tiempo",
    question: "21. Segun Roubier, la aplicacion de la nueva ley a efectos futuros de una situacion en curso es...",
    options: ["Retroactividad", "Efecto inmediato", "Ultraactividad", "Derogacion expresa"],
    answer: 1,
    why: "El efecto inmediato regula hacia el futuro sin anular lo ya consumado."
  },
  {
    module: "tiempo",
    question: "22. Que es ultraactividad?",
    options: [
      "La aplicacion de la ley nueva a hechos consumados",
      "La sobrevivencia de la ley antigua despues de su derogacion",
      "La sancion del proyecto por ambas camaras",
      "La anulacion de toda norma interpretativa"
    ],
    answer: 1,
    why: "La ultraactividad reconoce que la ley antigua sigue produciendo efectos luego de ser derogada."
  },
  {
    module: "tiempo",
    question: "23. Que es la fase dinamica de una situacion juridica?",
    options: [
      "Los efectos sucesivos ya derivados de una situacion creada",
      "Los hechos o actos que crean, modifican o extinguen la situacion juridica",
      "La publicacion final de la ley",
      "La opinion de la doctrina mayoritaria"
    ],
    answer: 1,
    why: "La fase dinamica se vincula con hechos o actos constitutivos, modificativos o extintivos."
  },
  {
    module: "interpretacion",
    question: "24. Que es interpretar juridicamente?",
    options: [
      "Atribuir sentido a enunciados juridicos",
      "Derogar una ley por otra",
      "Publicar una norma en el Diario Oficial",
      "Crear una fuente historica"
    ],
    answer: 0,
    why: "La interpretacion juridica consiste en atribuir sentido o significado a enunciados juridicos."
  },
  {
    module: "interpretacion",
    question: "25. Que problema corresponde al contexto linguistico?",
    options: ["Antinomia", "Veto suspensivo", "Ambiguedad", "Inconstitucionalidad"],
    answer: 2,
    why: "Ambiguedad y vaguedad son problemas linguisticos."
  },
  {
    module: "interpretacion",
    question: "26. Que articulos del CCU concentran las reglas generales de interpretacion legal?",
    options: ["1 a 7", "9 a 11", "17 a 20", "133 a 246"],
    answer: 2,
    why: "El material ubica tenor literal, historia, espiritu y sistema en los arts. 17 a 20 CCU."
  },
  {
    module: "interpretacion",
    question: "27. Que impone el art. 15 CCU?",
    options: [
      "Que los jueces no puedan dejar de fallar por silencio, oscuridad o insuficiencia legal",
      "Que toda ley tenga efecto retroactivo",
      "Que la Constitucion sea fuente material",
      "Que la derogacion tacita no exista"
    ],
    answer: 0,
    why: "El art. 15 CCU es clave para la integracion: el juez debe resolver aunque haya silencio u oscuridad."
  },
  {
    module: "interpretacion",
    question: "28. Que exige la analogia?",
    options: [
      "Caso no previsto, semejanza esencial e igual razon",
      "Unicamente una sentencia anterior obligatoria",
      "Siempre una norma penal",
      "La voluntad psicologica del legislador"
    ],
    answer: 0,
    why: "Esos son los presupuestos que enumera la presentacion."
  },
  {
    module: "riggs",
    question: "29. Cual fue la maxima central de la mayoria en Riggs?",
    options: [
      "La ley posterior deroga siempre a la anterior",
      "Nadie puede beneficiarse de su propio crimen",
      "La costumbre deroga la ley escrita",
      "Todo testamento es irrevocable"
    ],
    answer: 1,
    why: "La mayoria usa ese principio para impedir que Elmer herede."
  },
  {
    module: "riggs",
    question: "30. Que preocupa especialmente al juez Gray en disidencia?",
    options: [
      "Que Elmer no haya cometido delito",
      "Que el tribunal altere el testamento o agregue pena sin base legal",
      "Que no exista Derecho de sucesiones",
      "Que la Constitucion prohiba heredar"
    ],
    answer: 1,
    why: "Gray insiste en la regulacion legislativa de testamentos y en no crear castigos judiciales."
  }
];

quiz.forEach((item, index) => {
  item.id = `quiz-${index}`;
});

const examPrompts = [
  {
    title: "Defina Derecho Civil y explique su funcion como derecho comun.",
    bullets: [
      "Ubicarlo dentro del Derecho privado.",
      "Mencionar que es originario y subsidiario ante silencio o insuficiencia de derechos especiales.",
      "Incluir contenido: persona, familia, incapaces, bienes y relaciones patrimoniales."
    ]
  },
  {
    title: "Compare fuentes historicas, materiales y formales del Derecho.",
    bullets: [
      "Historicas: testimonios y documentos sobre organizacion juridica.",
      "Materiales: factores sociales, principios y necesidades que influyen en el contenido.",
      "Formales: cauces obligados de expresion del Derecho positivo."
    ]
  },
  {
    title: "Explique el proceso de formacion de la ley comun.",
    bullets: [
      "Iniciativa, discusion, sancion, promulgacion y publicacion.",
      "Ubicar el veto dentro de la sancion y el posible levantamiento por Asamblea General.",
      "Conectar publicacion con vigencia del art. 1 CCU."
    ]
  },
  {
    title: "Desarrolle el principio de irretroactividad y sus excepciones.",
    bullets: [
      "Art. 7 CCU como regla: legislar para el futuro.",
      "La retroactividad no se presume y se interpreta restrictivamente.",
      "Excepciones: retroactividad expresa, ley interpretativa y ley penal mas benigna."
    ]
  },
  {
    title: "Diferencie retroactividad, efecto inmediato y ultraactividad.",
    bullets: [
      "Retroactividad: la nueva ley toca hechos o partes ya consumadas.",
      "Efecto inmediato: regula hacia adelante efectos de situaciones en curso.",
      "Ultraactividad: la ley anterior sobrevive para ciertos actos o efectos."
    ]
  },
  {
    title: "Explique los problemas interpretativos y los metodos del CCU.",
    bullets: [
      "Linguisticos: ambiguedad y vaguedad.",
      "Sistemicos: redundancia y antinomias.",
      "Funcionales: valoracion, finalidad y consecuencias.",
      "Arts. 17 a 20: literalidad, historia, espiritu e interpretacion logico-sistematica."
    ]
  },
  {
    title: "Desarrolle la integracion del Derecho segun los arts. 15 y 16 CCU.",
    bullets: [
      "El juez no puede dejar de fallar.",
      "Lagunas o imprevision legislativa.",
      "Medios: analogia, principios generales y doctrinas mas recibidas.",
      "Limites: materia constitucional y penal segun el material."
    ]
  },
  {
    title: "Analice Riggs contra Palmer desde mayoria y disidencia.",
    bullets: [
      "Hechos: Elmer asesina al testador para cobrar la herencia.",
      "Mayoria: finalidad de la ley, interpretacion equitativa, orden publico y principio de no beneficiarse del propio crimen.",
      "Disidencia: respeto a reglas testamentarias, competencia legislativa y prohibicion de sumar penas judiciales.",
      "Cierre: caso dificil para discutir reglas y principios."
    ]
  }
];

const comparisonCoverage = [
  {
    label: "Coincide fuerte",
    title: "Derecho, moral y caracteres de la norma",
    detail: "Tus diapositivas de concepto cubren derecho objetivo/subjetivo y caracteres; las pruebas publicas preguntan diferencias con moral y usos sociales."
  },
  {
    label: "Coincide fuerte",
    title: "Fuentes, legislacion y formacion de la ley",
    detail: "Tus PPT de fuentes cubren clasificacion, ley formal/material, iniciativa, sancion, promulgacion y publicacion."
  },
  {
    label: "Coincide fuerte",
    title: "Interpretacion e integracion",
    detail: "Las pruebas preguntan interpretacion autentica, judicial y doctrinaria, analogia, principios generales y art. 15/16 CCU."
  },
  {
    label: "Coincide fuerte",
    title: "Eficacia temporal",
    detail: "Aparecen vigencia, derogacion, irretroactividad y doctrinas subjetivas; tu PPT de eficacia temporal es clave para eso."
  },
  {
    label: "Atencion",
    title: "Posibles huecos",
    detail: "En el programa oficial tambien entra sujeto/persona, persona fisica y juridica, nombre y comienzo de la personalidad. No estan completos en los archivos que recibiste."
  }
];

const comparisonQuestions = [
  {
    source: "Tema repetido en prueba",
    module: "civil",
    question: "Que rasgo permite diferenciar con mas claridad al Derecho frente a la moral?",
    options: ["La coercibilidad", "La ausencia de sancion", "La subjetividad pura", "La falta de obligatoriedad"],
    answer: 0,
    why: "El Derecho se presenta como sistema de normas coercibles; la moral no se impone por la fuerza estatal."
  },
  {
    source: "Tema repetido en prueba",
    module: "civil",
    question: "Que expresa el Derecho subjetivo?",
    options: ["Una facultad o interes juridicamente protegido", "Una fuente historica del Derecho", "Una etapa de la ley", "Una sancion penal"],
    answer: 0,
    why: "El Derecho subjetivo es la facultad o interes protegido que una norma reconoce a una persona."
  },
  {
    source: "Tus materiales + prueba",
    module: "civil",
    question: "Cual de estos caracteres pertenece a la norma juridica?",
    options: ["Coercibilidad", "Espontaneidad", "Interioridad exclusiva", "Inexistencia de sancion"],
    answer: 0,
    why: "La norma juridica es coercible: puede imponerse por medios previstos por el ordenamiento."
  },
  {
    source: "Tus materiales + prueba",
    module: "civil",
    question: "Cual es una disciplina propia del Derecho privado?",
    options: ["Derecho Comercial", "Derecho Penal", "Derecho Constitucional", "Derecho Administrativo"],
    answer: 0,
    why: "Derecho Comercial integra el ambito privado; penal, constitucional y administrativo se ubican en el Derecho publico."
  },
  {
    source: "Tus materiales + prueba",
    module: "civil",
    question: "Por que se dice que el Derecho Civil es derecho comun?",
    options: ["Porque aporta reglas generales ante silencio de ramas especiales", "Porque deroga la Constitucion", "Porque no requiere interpretacion", "Porque solo regula delitos"],
    answer: 0,
    why: "El Derecho Civil funciona como base comun del Derecho privado y suple insuficiencias de regimenes especiales."
  },
  {
    source: "Prueba publica",
    module: "civil",
    question: "Que tema aparece en pruebas y conviene agregar si tu docente lo dio?",
    options: ["Estructura del Codigo Civil", "Derecho espacial comparado", "Derecho maritimo internacional", "Proceso penal"],
    answer: 0,
    why: "En el ejemplo publico aparece una pregunta sobre la estructura del Codigo Civil; no esta desarrollada en tus archivos."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Cual es la fuente formal por excelencia en el Derecho uruguayo segun el material?",
    options: ["Legislacion", "Equidad", "Opinion publica", "Jurisprudencia obligatoria general"],
    answer: 0,
    why: "La legislacion es la forma principal por la que el Derecho positivo se expresa con validez general."
  },
  {
    source: "Comparacion fina",
    module: "fuentes",
    question: "Que matiz aparece en pruebas sobre la costumbre?",
    options: ["Puede ser relevante cuando la ley se remite a ella", "Siempre deroga a la ley", "Es obligatoria aunque la ley la rechace", "Sustituye a la Constitucion"],
    answer: 0,
    why: "El ejemplo publico considera la costumbre cuando la ley se remite a ella; es un punto fino para no contestar de memoria."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Que diferencia correctamente legislacion y ley?",
    options: ["La legislacion es el genero y la ley una especie", "La ley es el genero y la legislacion una especie", "Son sinonimos exactos", "La ley no es legislacion"],
    answer: 0,
    why: "La ley es una de las formas posibles de legislacion; tambien existen otros actos normativos competentes."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Que es ley en sentido formal?",
    options: ["Norma dictada por el Poder Legislativo siguiendo el procedimiento constitucional", "Toda regla moral", "Toda sentencia judicial", "Todo uso social reiterado"],
    answer: 0,
    why: "El sentido formal atiende al organo y al procedimiento constitucional de formacion."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Cual es el orden de formacion de la ley comun?",
    options: ["Iniciativa, discusion, sancion, promulgacion y publicacion", "Publicacion, sancion, iniciativa, discusion y promulgacion", "Promulgacion, iniciativa, discusion, publicacion y sancion", "Derogacion, iniciativa, sancion, interpretacion y publicacion"],
    answer: 0,
    why: "Ese es el orden cronologico que surge del material de fuentes."
  },
  {
    source: "Prueba publica",
    module: "fuentes",
    question: "Quien cuenta con iniciativa para proponer leyes nacionales?",
    options: ["El Poder Ejecutivo", "Cualquier edil individualmente para leyes nacionales", "La Suprema Corte de Justicia en todos los casos", "Un juez de paz"],
    answer: 0,
    why: "El Poder Ejecutivo tiene iniciativa; tambien la tienen legisladores, pero esta pregunta fuerza a reconocer una opcion correcta."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Que etapa ordena cumplir la ley y le da fuerza obligatoria?",
    options: ["Promulgacion", "Iniciativa", "Discusion", "Busqueda doctrinaria"],
    answer: 0,
    why: "La promulgacion es el acto del Poder Ejecutivo que ordena cumplir la ley."
  },
  {
    source: "Tus materiales + prueba",
    module: "fuentes",
    question: "Para que sirve la publicacion de la ley?",
    options: ["Para conocimiento y divulgacion", "Para eliminar la promulgacion", "Para volver toda ley retroactiva", "Para crear una sentencia"],
    answer: 0,
    why: "La publicacion en el Diario Oficial permite conocimiento y divulgacion de la norma."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Que efecto tiene la interpretacion legislativa de una ley?",
    options: ["Es autentica y obligatoria", "No obliga nunca", "Solo vale como doctrina", "Solo se aplica a contratos privados"],
    answer: 0,
    why: "Cuando emana del legislador, la interpretacion tiene fuerza obligatoria general."
  },
  {
    source: "Prueba publica",
    module: "interpretacion",
    question: "Cual es el alcance de la interpretacion doctrinaria?",
    options: ["No tiene alcance obligatorio", "Obliga a todos los jueces", "Deroga la ley interpretada", "Tiene fuerza de Constitucion"],
    answer: 0,
    why: "La doctrina orienta, pero no obliga como norma general."
  },
  {
    source: "Prueba publica",
    module: "interpretacion",
    question: "Cual es el alcance de la interpretacion judicial?",
    options: ["Obliga solo respecto de la causa o partes del juicio", "Tiene alcance general", "Obliga a todo juez futuro", "Sustituye al legislador"],
    answer: 0,
    why: "La sentencia tiene fuerza obligatoria en la causa concreta, no como regla general para todos."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Cuando una interpretacion es autentica?",
    options: ["Cuando la realiza el mismo organo que dicto la norma", "Cuando la realiza cualquier particular", "Cuando la hace un estudiante", "Cuando la dicta un juez sobre cualquier ley con alcance general"],
    answer: 0,
    why: "La interpretacion autentica proviene del mismo organo autor de la norma interpretada."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Que articulos del CCU concentran reglas de interpretacion legal?",
    options: ["Arts. 17 a 20", "Arts. 1 a 3", "Arts. 133 a 146 de la Constitucion", "Art. 258 de la Constitucion"],
    answer: 0,
    why: "Los arts. 17 a 20 CCU tratan tenor literal, historia, espiritu y criterio sistematico."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Cuando procede la integracion del Derecho?",
    options: ["Cuando no hay norma especifica para resolver el caso", "Cuando la ley es perfectamente clara", "Cuando se quiere evitar fallar", "Cuando se deroga la Constitucion"],
    answer: 0,
    why: "La integracion opera frente a lagunas o insuficiencia legal; el juez no puede dejar de fallar."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Que implica el razonamiento analogico?",
    options: ["Aplicar la solucion de un caso previsto a otro similar no previsto", "Aplicar siempre la ley penal", "Anular una ley por ser antigua", "Reemplazar la ley por una opinion personal"],
    answer: 0,
    why: "La analogia colma lagunas usando una ley prevista para una situacion semejante con igual razon."
  },
  {
    source: "Tus materiales + prueba",
    module: "interpretacion",
    question: "Que lugar ocupan los principios generales del Derecho?",
    options: ["Medio de integracion y limite a la actividad judicial", "Fuente de derogacion automatica", "Metodo exclusivo de publicacion", "Regla penal de tipicidad"],
    answer: 0,
    why: "El art. 16 los ubica como medio subsidiario de integracion; tambien orientan y limitan al juez."
  },
  {
    source: "Tus materiales + prueba",
    module: "tiempo",
    question: "Que implica el principio de irretroactividad?",
    options: ["La ley se aplica hacia el futuro", "La ley nunca puede derogarse", "Toda ley se aplica al pasado", "La ley solo rige para extranjeros"],
    answer: 0,
    why: "La irretroactividad supone que la ley no afecta hechos anteriores salvo excepcion expresa."
  },
  {
    source: "Tus materiales + prueba",
    module: "tiempo",
    question: "Si la ley guarda silencio sobre su entrada en vigencia, cuando rige?",
    options: ["10 dias despues de su publicacion", "El dia de la sancion parlamentaria", "Un ano despues de promulgada", "Solo cuando un juez la aplique"],
    answer: 0,
    why: "El art. 1 CCU establece una vacatio legis uniforme de 10 dias tras la publicacion."
  },
  {
    source: "Prueba publica + tu PPT",
    module: "tiempo",
    question: "Que sostienen las doctrinas subjetivas sobre retroactividad?",
    options: ["Hay retroactividad si se afecta un derecho adquirido", "Nunca existe retroactividad", "Solo importa la publicacion", "La retroactividad depende de la moral individual"],
    answer: 0,
    why: "Las doctrinas subjetivas atienden a si la ley nueva lesiona derechos adquiridos."
  },
  {
    source: "Tus materiales",
    module: "tiempo",
    question: "Cuando hay derogacion tacita?",
    options: ["Cuando hay igualdad de materia e incompatibilidad", "Cuando una norma es antigua", "Cuando lo pide la doctrina", "Cuando una sentencia cambia de criterio"],
    answer: 0,
    why: "La derogacion tacita exige contradiccion o incompatibilidad entre normas sobre la misma materia."
  },
  {
    source: "Tema trampa",
    module: "tiempo",
    question: "Si una clausula dice 'quedan derogadas las normas que se opongan', como conviene estudiarla?",
    options: ["Como formula generica vinculada a derogacion mixta/tacita", "Como derogacion constitucional", "Como publicacion de la ley", "Como interpretacion doctrinaria"],
    answer: 0,
    why: "Es una formula de derogacion generica: en clase puede aparecer como mixta por forma expresa y efecto tacito."
  },
  {
    source: "Tus materiales",
    module: "tiempo",
    question: "Segun Roubier, que es el efecto inmediato?",
    options: ["Aplicacion de la ley nueva a efectos futuros de situaciones en curso", "Aplicacion al pasado consumado", "Supervivencia eterna de la ley derogada", "Derogacion expresa"],
    answer: 0,
    why: "El efecto inmediato mira hacia adelante sin destruir la parte ya consumada de la situacion."
  },
  {
    source: "Programa oficial",
    module: "civil",
    question: "Que bloque del programa oficial no esta completo en los archivos locales?",
    options: ["Persona fisica, persona juridica y atributos", "Fuentes del Derecho", "Eficacia temporal de la ley", "Interpretacion e integracion"],
    answer: 0,
    why: "El programa oficial incluye sujeto/persona, nombre, personalidad y persona juridica; tus archivos actuales se concentran en introduccion."
  },
  {
    source: "Tus materiales",
    module: "riggs",
    question: "Por que Riggs contra Palmer puede servir aunque no aparezca en el ejemplo publico?",
    options: ["Porque entrena reglas, principios e interpretacion frente a casos dificiles", "Porque reemplaza todo el tema de fuentes", "Porque prueba la vigencia de 10 dias", "Porque trata iniciativa legislativa"],
    answer: 0,
    why: "Riggs es util para entender interpretacion, principios generales y limites de la literalidad."
  }
];

const state = {
  section: "inicio",
  filter: "todos",
  cardFilter: "todos",
  cardIndex: 0,
  flipped: false,
  quizMode: localStorage.getItem("quizMode") || "practice",
  practiceOnlyMistakes: false,
  practiceOptionOrders: JSON.parse(localStorage.getItem("practiceOptionOrders") || "{}"),
  quizIndex: 0,
  quizAnswers: JSON.parse(localStorage.getItem("quizAnswers30") || "{}"),
  mistakeIds: JSON.parse(localStorage.getItem("mistakeIds") || "[]"),
  examOrder: JSON.parse(localStorage.getItem("examOrder") || "[]"),
  examOptionOrders: JSON.parse(localStorage.getItem("examOptionOrders") || "{}"),
  examAnswers: JSON.parse(localStorage.getItem("examAnswers") || "{}"),
  examStartedAt: Number(localStorage.getItem("examStartedAt") || "0"),
  examSubmitted: localStorage.getItem("examSubmitted") === "true",
  comparisonAnswers: JSON.parse(localStorage.getItem("comparisonAnswers") || "{}"),
  planDone: JSON.parse(localStorage.getItem("planDone") || "{}"),
  moduleDone: JSON.parse(localStorage.getItem("moduleDone") || "{}")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function saveState() {
  localStorage.setItem("planDone", JSON.stringify(state.planDone));
  localStorage.setItem("moduleDone", JSON.stringify(state.moduleDone));
  localStorage.setItem("quizMode", state.quizMode);
  localStorage.setItem("practiceOptionOrders", JSON.stringify(state.practiceOptionOrders));
  localStorage.setItem("quizAnswers30", JSON.stringify(state.quizAnswers));
  localStorage.setItem("mistakeIds", JSON.stringify(state.mistakeIds));
  localStorage.setItem("examOrder", JSON.stringify(state.examOrder));
  localStorage.setItem("examOptionOrders", JSON.stringify(state.examOptionOrders));
  localStorage.setItem("examAnswers", JSON.stringify(state.examAnswers));
  localStorage.setItem("examStartedAt", String(state.examStartedAt));
  localStorage.setItem("examSubmitted", String(state.examSubmitted));
  localStorage.setItem("comparisonAnswers", JSON.stringify(state.comparisonAnswers));
}

function moduleName(id) {
  return modules.find((module) => module.id === id)?.title || "Todos";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function highlight(text, query) {
  const escapedText = escapeHtml(text);
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!safeQuery) return escapedText;
  return escapedText.replace(new RegExp(`(${safeQuery})`, "gi"), '<span class="search-hit">$1</span>');
}

function firstMatch(fields, normalizedQuery) {
  const flatFields = fields.flat().filter(Boolean).map(String);
  return flatFields.find((field) => normalizeText(field).includes(normalizedQuery)) || flatFields[0] || "";
}

function shuffledIndexes(length) {
  const values = Array.from({ length }, (_, index) => index);
  for (let i = values.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

function questionNumberText(question) {
  return question.replace(/^\d+\.\s*/, "");
}

function markMistake(questionIndex, isCorrect) {
  const id = quiz[questionIndex].id;
  const next = new Set(state.mistakeIds);
  if (isCorrect) {
    next.delete(id);
  } else {
    next.add(id);
  }
  state.mistakeIds = Array.from(next);
}

function practicePoolIndices() {
  if (!state.practiceOnlyMistakes) return quiz.map((_, index) => index);
  const mistakeSet = new Set(state.mistakeIds);
  return quiz.map((item, index) => (mistakeSet.has(item.id) ? index : -1)).filter((index) => index >= 0);
}

function ensurePracticeIndex() {
  const pool = practicePoolIndices();
  if (!pool.length) {
    state.quizIndex = 0;
    return pool;
  }
  if (!pool.includes(state.quizIndex)) {
    state.quizIndex = pool[0];
  }
  return pool;
}

function optionOrderFor(questionIndex) {
  const key = String(questionIndex);
  if (!state.practiceOptionOrders[key]) {
    state.practiceOptionOrders[key] = shuffledIndexes(quiz[questionIndex].options.length);
    saveState();
  }
  return state.practiceOptionOrders[key];
}

function startNewExam() {
  state.examOrder = shuffledIndexes(quiz.length).slice(0, 30);
  state.examOptionOrders = {};
  state.examOrder.forEach((questionIndex) => {
    state.examOptionOrders[questionIndex] = shuffledIndexes(quiz[questionIndex].options.length);
  });
  state.examAnswers = {};
  state.examStartedAt = Date.now();
  state.examSubmitted = false;
  state.quizIndex = 0;
  saveState();
}

function ensureExam() {
  if (state.examOrder.length !== 30 || state.examOrder.some((index) => !quiz[index])) {
    startNewExam();
  }
}

function examRemainingSeconds() {
  if (!state.examStartedAt || state.examSubmitted) return 0;
  const elapsed = Math.floor((Date.now() - state.examStartedAt) / 1000);
  return Math.max(0, 45 * 60 - elapsed);
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function submitExam() {
  ensureExam();
  state.examSubmitted = true;
  state.examOrder.forEach((questionIndex) => {
    const selected = state.examAnswers[questionIndex];
    if (selected !== undefined) {
      markMistake(questionIndex, selected === quiz[questionIndex].answer);
    } else {
      markMistake(questionIndex, false);
    }
  });
  saveState();
}

function quizResultEntries(answers, questionIndices) {
  return questionIndices.map((questionIndex) => ({
    questionIndex,
    selected: answers[questionIndex],
    correct: answers[questionIndex] === quiz[questionIndex].answer
  }));
}

function scoreByModule(entries) {
  return entries.reduce((acc, entry) => {
    const module = quiz[entry.questionIndex].module;
    if (!acc[module]) acc[module] = { total: 0, correct: 0 };
    acc[module].total += 1;
    if (entry.correct) acc[module].correct += 1;
    return acc;
  }, {});
}

function performanceLabel(score, total) {
  const pct = total ? score / total : 0;
  if (pct >= 0.8) return "Muy buen margen";
  if (pct >= 0.6) return "Aprobado probable";
  if (pct >= 0.47) return "Zona de riesgo";
  return "Repasar urgente";
}

function buildSearchResults(query) {
  const normalizedQuery = normalizeText(query.trim());
  if (!normalizedQuery) return [];

  const results = [];

  modules.forEach((module) => {
    const fields = [
      module.title,
      module.source,
      module.summary,
      module.essentials,
      module.examTargets,
      module.traps
    ];
    if (normalizeText(fields.flat().join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Tema",
        title: module.title,
        snippet: firstMatch(fields, normalizedQuery),
        section: "temas",
        action: "Ver tema"
      });
    }
  });

  articles.forEach(([name, detail]) => {
    const fields = [name, detail];
    if (normalizeText(fields.join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Articulo",
        title: name,
        snippet: detail,
        section: "inicio",
        action: "Ver articulos"
      });
    }
  });

  flashcards.forEach((card) => {
    const fields = [card.question, card.answer, moduleName(card.module)];
    if (normalizeText(fields.join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Ficha",
        title: card.question,
        snippet: firstMatch(fields, normalizedQuery),
        section: "fichas",
        action: "Abrir ficha",
        cardId: card.id,
        cardModule: card.module
      });
    }
  });

  quiz.forEach((item, index) => {
    const fields = [item.question, item.options, item.why, moduleName(item.module)];
    if (normalizeText(fields.flat().join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Parcial",
        title: item.question,
        snippet: firstMatch(fields, normalizedQuery),
        section: "quiz",
        action: "Ir a pregunta",
        quizIndex: index
      });
    }
  });

  examPrompts.forEach((item) => {
    const fields = [item.title, item.bullets];
    if (normalizeText(fields.flat().join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Simulacro",
        title: item.title,
        snippet: firstMatch(fields, normalizedQuery),
        section: "simulacro",
        action: "Ver simulacro"
      });
    }
  });

  comparisonQuestions.forEach((item, index) => {
    const fields = [item.question, item.options, item.why, item.source, moduleName(item.module)];
    if (normalizeText(fields.flat().join(" ")).includes(normalizedQuery)) {
      results.push({
        type: "Comparada",
        title: item.question,
        snippet: firstMatch(fields, normalizedQuery),
        section: "comparadas",
        action: "Ver pregunta",
        comparisonIndex: index
      });
    }
  });

  return results.slice(0, 14);
}

function renderSearchResults() {
  const query = $("#searchInput").value.trim();
  const panel = $("#searchResults");
  if (!query) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  const results = buildSearchResults(query);
  panel.hidden = false;
  panel.innerHTML = `
    <div class="search-results-header">
      <div>
        <strong>Resultados relacionados con "${escapeHtml(query)}"</strong>
        <span>${results.length ? `${results.length} coincidencias principales` : "Sin coincidencias en el material cargado"}</span>
      </div>
      <button type="button" id="clearSearch">Limpiar</button>
    </div>
    ${
      results.length
        ? `<div class="search-results-list">
            ${results
              .map(
                (result) => `
                  <article class="search-result">
                    <div>
                      <span class="tag">${result.type}</span>
                      <h3>${highlight(result.title, query)}</h3>
                      <p>${highlight(result.snippet, query)}</p>
                    </div>
                    <button
                      type="button"
                      data-result-section="${result.section}"
                      ${result.cardId ? `data-card-id="${result.cardId}" data-card-module="${result.cardModule}"` : ""}
                      ${Number.isInteger(result.quizIndex) ? `data-quiz-index="${result.quizIndex}"` : ""}
                      ${Number.isInteger(result.comparisonIndex) ? `data-comparison-jump="${result.comparisonIndex}"` : ""}
                    >${result.action}</button>
                  </article>
                `
              )
              .join("")}
          </div>`
        : `<div class="empty-state">Proba con palabras como "retroactividad", "art. 7", "analogia", "Riggs", "fuentes" o "Derecho Civil".</div>`
    }
  `;
}

function renderProgress() {
  const planDone = Object.values(state.planDone).filter(Boolean).length;
  const moduleDone = Object.values(state.moduleDone).filter(Boolean).length;
  const total = dayPlan.length + modules.length;
  const done = planDone + moduleDone;
  const pct = Math.round((done / total) * 100);

  $("#progressValue").textContent = `${pct}%`;
  $("#progressBar").style.width = `${pct}%`;
  $("#progressText").textContent = `${done} de ${total} pasos completados`;
}

function renderPlan() {
  $("#planList").innerHTML = dayPlan
    .map(
      (item) => `
        <article class="plan-item">
          <input type="checkbox" data-plan-id="${item.id}" ${state.planDone[item.id] ? "checked" : ""} aria-label="Marcar ${item.title}">
          <span class="plan-time">${item.time}</span>
          <div class="plan-title">
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </div>
          <span class="tag">${item.tag}</span>
        </article>
      `
    )
    .join("");
}

function renderArticles() {
  $("#articleCloud").innerHTML = articles
    .map(([name, detail]) => `<div class="article-chip"><strong>${name}</strong><span>${detail}</span></div>`)
    .join("");
}

function renderModules() {
  const query = normalizeText($("#searchInput").value.trim());
  const filtered = modules.filter((module) => {
    const priorityMatch = state.filter === "todos" || module.priority === state.filter;
    const haystack = [
      module.title,
      module.source,
      module.summary,
      module.priority,
      module.essentials.join(" "),
      module.examTargets.join(" "),
      module.traps.join(" ")
    ]
      .join(" ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return priorityMatch && (!query || haystack.includes(query));
  });

  $("#moduleGrid").innerHTML = filtered.length
    ? filtered
        .map(
          (module) => `
            <article class="module-card">
              <img src="${module.image}" alt="Miniatura de ${module.source}">
              <div class="module-body">
                <div class="module-meta">
                  <span class="tag priority-${module.priority}">${module.priority === "alta" ? "Alta prioridad" : "Prioridad media"}</span>
                  <span class="tag">${module.time}</span>
                </div>
                <div>
                  <h3>${module.title}</h3>
                  <p>${module.summary}</p>
                  <span class="source-name">${module.source}</span>
                </div>
                <ul>
                  ${module.essentials.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <details>
                  <summary>Posibles preguntas</summary>
                  <ul>${module.examTargets.map((item) => `<li>${item}</li>`).join("")}</ul>
                </details>
                <details>
                  <summary>Errores a evitar</summary>
                  <ul>${module.traps.map((item) => `<li>${item}</li>`).join("")}</ul>
                </details>
                <div class="module-actions">
                  <span class="tag">${moduleName(module.id).split(" ")[0]}</span>
                  <button type="button" class="done-btn ${state.moduleDone[module.id] ? "is-done" : ""}" data-module-id="${module.id}">
                    ${state.moduleDone[module.id] ? "Repasado" : "Marcar repasado"}
                  </button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">No hay temas que coincidan con la busqueda.</div>`;
}

function cardPool() {
  return flashcards.filter((card) => state.cardFilter === "todos" || card.module === state.cardFilter);
}

function renderCardFilter() {
  $("#cardFilter").innerHTML = [
    `<option value="todos">Todas las fichas</option>`,
    ...modules.map((module) => `<option value="${module.id}">${module.title}</option>`)
  ].join("");
  $("#cardFilter").value = state.cardFilter;
}

function renderFlashcard() {
  const pool = cardPool();
  if (!pool.length) return;
  if (state.cardIndex >= pool.length) state.cardIndex = 0;
  const card = pool[state.cardIndex];
  $("#flashcard").innerHTML = `
    <span class="tag topic">${moduleName(card.module)}</span>
    <div class="question">${card.question}</div>
    <div class="answer">${state.flipped ? card.answer : ""}</div>
  `;
  $("#flipCard").textContent = state.flipped ? "Ocultar respuesta" : "Ver respuesta";
  $("#cardCounter").textContent = `${state.cardIndex + 1} / ${pool.length}`;
}

function renderPracticeQuiz() {
  const pool = ensurePracticeIndex();
  $("#submitExam").hidden = true;
  $("#nextQuestion").hidden = false;
  $("#resetQuiz").textContent = "Reiniciar practica";

  const answered = Object.keys(state.quizAnswers).length;
  const correct = Object.entries(state.quizAnswers).filter(([index, value]) => quiz[Number(index)].answer === value).length;

  $("#quizStats").innerHTML = `
    <article class="quiz-stat"><strong>${correct} / ${answered || 0}</strong><span>correctas respondidas</span></article>
    <article class="quiz-stat"><strong>${state.mistakeIds.length}</strong><span>preguntas en banco de errores</span></article>
    <article class="quiz-stat"><strong>${state.practiceOnlyMistakes ? "Incorrectas" : "Todas"}</strong><span>modo de practica</span></article>
  `;

  $("#practiceTools").innerHTML = `
    <button type="button" id="repeatMistakes" ${state.mistakeIds.length ? "" : "disabled"}>${state.practiceOnlyMistakes ? "Ver todas" : "Repetir incorrectas"}</button>
    <button type="button" id="clearMistakes" ${state.mistakeIds.length ? "" : "disabled"}>Vaciar errores</button>
  `;

  if (!pool.length) {
    $("#quizQuestion").innerHTML = `<h3>No hay preguntas incorrectas guardadas.</h3>`;
    $("#quizOptions").innerHTML = "";
    $("#quizFeedback").className = "feedback is-neutral";
    $("#quizFeedback").innerHTML = "<span>Cuando falles una pregunta, va a aparecer aca para repetirla.</span>";
    $("#quizScore").textContent = "Banco de errores vacio";
    return;
  }

  const position = pool.indexOf(state.quizIndex);
  const item = quiz[state.quizIndex];
  const selected = state.quizAnswers[state.quizIndex];
  const hasAnswered = selected !== undefined;
  const isCorrect = selected === item.answer;
  const correctAnswer = item.options[item.answer];
  const selectedAnswer = hasAnswered ? item.options[selected] : "";
  const order = optionOrderFor(state.quizIndex);

  $("#quizQuestion").innerHTML = `
    <span class="tag">Pregunta ${position + 1} de ${pool.length} - 1 punto</span>
    <span class="tag">${moduleName(item.module)}</span>
    <h3>${questionNumberText(item.question)}</h3>
  `;
  $("#quizOptions").innerHTML = order
    .map((optionIndex) => {
      const klass =
        selected === undefined
          ? ""
          : optionIndex === item.answer
            ? "is-correct"
            : selected === optionIndex
              ? "is-wrong"
              : "";
      return `<button type="button" class="${klass}" data-option="${optionIndex}" ${selected !== undefined ? "disabled" : ""}>${item.options[optionIndex]}</button>`;
    })
    .join("");

  $("#quizFeedback").className = `feedback ${hasAnswered ? (isCorrect ? "is-correct" : "is-wrong") : ""}`;
  $("#quizFeedback").innerHTML = hasAnswered
    ? `
        <strong>${isCorrect ? "Correcta." : "Incorrecta."}</strong>
        <span>Tu respuesta: ${selectedAnswer}</span>
        <span>Respuesta correcta: ${correctAnswer}</span>
        <span>Explicacion: ${item.why}</span>
      `
    : "Elegi una opcion para ver la explicacion.";

  $("#quizScore").textContent = `Practica: ${correct} correctas de ${answered} respondidas`;
}

function renderExamResults() {
  const entries = quizResultEntries(state.examAnswers, state.examOrder);
  const correct = entries.filter((entry) => entry.correct).length;
  const byModule = scoreByModule(entries);

  return `
    <div class="result-dashboard">
      <span class="result-pill">${performanceLabel(correct, state.examOrder.length)}</span>
      <div class="result-grid">
        ${Object.entries(byModule)
          .map(
            ([module, score]) => `
              <article class="topic-result">
                <strong>${score.correct} / ${score.total}</strong>
                <span>${moduleName(module)}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderExamQuiz() {
  ensureExam();
  const remaining = examRemainingSeconds();
  if (!state.examSubmitted && remaining === 0) {
    submitExam();
    state.quizIndex = 0;
  }

  $("#submitExam").hidden = state.examSubmitted;
  $("#nextQuestion").hidden = false;
  $("#resetQuiz").textContent = "Nuevo examen";
  $("#practiceTools").innerHTML = "";

  const answered = Object.keys(state.examAnswers).length;
  const entries = quizResultEntries(state.examAnswers, state.examOrder);
  const correct = entries.filter((entry) => entry.correct).length;

  $("#quizStats").innerHTML = `
    <article class="quiz-stat"><strong>${state.examSubmitted ? `${correct} / ${state.examOrder.length}` : `${answered} / ${state.examOrder.length}`}</strong><span>${state.examSubmitted ? "puntaje final" : "respondidas"}</span></article>
    <article class="quiz-stat"><strong>${state.examSubmitted ? "Entregado" : formatDuration(remaining)}</strong><span>${state.examSubmitted ? "explicaciones visibles" : "tiempo restante"}</span></article>
    <article class="quiz-stat"><strong>Opciones aleatorias</strong><span>no memorices la letra</span></article>
  `;

  const questionIndex = state.examOrder[state.quizIndex] ?? state.examOrder[0];
  const item = quiz[questionIndex];
  const selected = state.examAnswers[questionIndex];
  const hasAnswered = selected !== undefined;
  const isCorrect = selected === item.answer;
  const order = state.examOptionOrders[questionIndex] || shuffledIndexes(item.options.length);
  const correctAnswer = item.options[item.answer];
  const selectedAnswer = hasAnswered ? item.options[selected] : "";

  $("#quizQuestion").innerHTML = `
    <span class="tag">Examen ${state.quizIndex + 1} de ${state.examOrder.length} - 1 punto</span>
    <span class="tag">${moduleName(item.module)}</span>
    <h3>${questionNumberText(item.question)}</h3>
  `;
  $("#quizOptions").innerHTML = order
    .map((optionIndex) => {
      const klass =
        !state.examSubmitted
          ? ""
          : optionIndex === item.answer
            ? "is-correct"
            : selected === optionIndex
              ? "is-wrong"
              : "";
      return `<button type="button" class="${klass}" data-exam-option="${optionIndex}" ${state.examSubmitted ? "disabled" : ""}>${item.options[optionIndex]}</button>`;
    })
    .join("");

  if (state.examSubmitted) {
    $("#quizFeedback").className = `feedback ${hasAnswered && isCorrect ? "is-correct" : "is-wrong"}`;
    $("#quizFeedback").innerHTML = `
      <strong>${hasAnswered && isCorrect ? "Correcta." : "Incorrecta."}</strong>
      <span>${hasAnswered ? `Tu respuesta: ${selectedAnswer}` : "No respondiste esta pregunta."}</span>
      <span>Respuesta correcta: ${correctAnswer}</span>
      <span>Explicacion: ${item.why}</span>
      ${state.quizIndex === 0 ? renderExamResults() : ""}
    `;
  } else {
    $("#quizFeedback").className = "feedback is-neutral";
    $("#quizFeedback").innerHTML = "<span>Modo examen: las explicaciones aparecen recien cuando entregues.</span>";
  }

  $("#quizScore").textContent = state.examSubmitted
    ? `Puntaje final: ${correct} / ${state.examOrder.length}`
    : `Examen en curso: ${answered} / ${state.examOrder.length} respondidas`;
}

function renderQuiz() {
  $$(".mode-btn").forEach((button) => button.classList.toggle("is-active", button.dataset.quizMode === state.quizMode));
  if (state.quizMode === "exam") {
    renderExamQuiz();
  } else {
    renderPracticeQuiz();
  }
}

function renderExam() {
  $("#examList").innerHTML = examPrompts
    .map(
      (item, index) => `
        <article class="exam-item">
          <span class="tag">Pregunta ${index + 1}</span>
          <h3>${item.title}</h3>
          <details>
            <summary>Guia de respuesta</summary>
            <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
          </details>
        </article>
      `
    )
    .join("");
}

function renderComparison() {
  const answered = Object.keys(state.comparisonAnswers).length;
  const correct = Object.entries(state.comparisonAnswers).filter(([index, value]) => comparisonQuestions[Number(index)].answer === value).length;

  $("#comparisonSummary").innerHTML = `
    <article class="comparison-lead">
      <span class="eyebrow">Verificacion</span>
      <h3>Cruce entre tus archivos y ejemplos publicos</h3>
      <p>Las preguntas de practica estan redactadas de nuevo para tu formato: 4 opciones, 1 correcta, 1 punto. Las hice sobre los temas que se repiten entre tus materiales, el programa oficial y parciales/cuestionarios publicos.</p>
      <strong>Puntaje comparadas: ${correct} / ${comparisonQuestions.length} · Respondidas: ${answered} / ${comparisonQuestions.length}</strong>
    </article>
    <div class="coverage-grid">
      ${comparisonCoverage
        .map(
          (item) => `
            <article class="coverage-card">
              <span class="tag">${item.label}</span>
              <h3>${item.title}</h3>
              <p>${item.detail}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  $("#comparisonQuestionList").innerHTML = comparisonQuestions
    .map((item, index) => {
      const selected = state.comparisonAnswers[index];
      const hasAnswered = selected !== undefined;
      const isCorrect = selected === item.answer;
      return `
        <article class="comparison-question" id="comparison-${index}">
          <div class="comparison-question-head">
            <span class="tag">Pregunta ${index + 1}</span>
            <span class="tag">${item.source}</span>
            <span class="tag">${moduleName(item.module)}</span>
          </div>
          <h3>${item.question}</h3>
          <div class="quiz-options">
            ${item.options
              .map((option, optionIndex) => {
                const klass =
                  !hasAnswered
                    ? ""
                    : optionIndex === item.answer
                      ? "is-correct"
                      : selected === optionIndex
                        ? "is-wrong"
                        : "";
                return `<button type="button" class="${klass}" data-comparison-option="${optionIndex}" data-comparison-index="${index}" ${hasAnswered ? "disabled" : ""}>${option}</button>`;
              })
              .join("")}
          </div>
          <div class="feedback ${hasAnswered ? (isCorrect ? "is-correct" : "is-wrong") : ""}">
            ${
              hasAnswered
                ? `<strong>${isCorrect ? "Correcta." : "Incorrecta."}</strong>
                   <span>Respuesta correcta: ${item.options[item.answer]}</span>
                   <span>Explicacion: ${item.why}</span>`
                : "<span>Responde para ver la explicacion.</span>"
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function setSection(section) {
  state.section = section;
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.section === section));
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.sectionLink === section));
  window.location.hash = section;
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const sectionButton = event.target.closest("[data-section-link]");
    if (sectionButton) {
      event.preventDefault();
      setSection(sectionButton.dataset.sectionLink);
    }

    if (event.target.closest("#clearSearch")) {
      $("#searchInput").value = "";
      renderSearchResults();
      renderModules();
      return;
    }

    const searchAction = event.target.closest("[data-result-section]");
    if (searchAction) {
      const section = searchAction.dataset.resultSection;
      setSection(section);

      if (searchAction.dataset.cardId) {
        state.cardFilter = searchAction.dataset.cardModule;
        renderCardFilter();
        const pool = cardPool();
        state.cardIndex = Math.max(0, pool.findIndex((card) => card.id === searchAction.dataset.cardId));
        state.flipped = false;
        renderFlashcard();
      }

      if (searchAction.dataset.quizIndex) {
        state.quizMode = "practice";
        state.quizIndex = Number(searchAction.dataset.quizIndex);
        saveState();
        renderQuiz();
      }

      if (searchAction.dataset.comparisonJump) {
        const target = document.getElementById(`comparison-${searchAction.dataset.comparisonJump}`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const filterButton = event.target.closest(".filter-btn");
    if (filterButton) {
      state.filter = filterButton.dataset.filter;
      $$(".filter-btn").forEach((button) => button.classList.toggle("is-active", button === filterButton));
      renderModules();
    }

    const doneButton = event.target.closest("[data-module-id]");
    if (doneButton) {
      const id = doneButton.dataset.moduleId;
      state.moduleDone[id] = !state.moduleDone[id];
      saveState();
      renderModules();
      renderProgress();
    }

    const optionButton = event.target.closest("[data-option]");
    if (optionButton) {
      state.quizAnswers[state.quizIndex] = Number(optionButton.dataset.option);
      markMistake(state.quizIndex, state.quizAnswers[state.quizIndex] === quiz[state.quizIndex].answer);
      saveState();
      renderQuiz();
    }

    const examOptionButton = event.target.closest("[data-exam-option]");
    if (examOptionButton) {
      ensureExam();
      const questionIndex = state.examOrder[state.quizIndex];
      if (!state.examSubmitted && questionIndex !== undefined) {
        state.examAnswers[questionIndex] = Number(examOptionButton.dataset.examOption);
        saveState();
        renderQuiz();
      }
    }

    const comparisonButton = event.target.closest("[data-comparison-option]");
    if (comparisonButton) {
      state.comparisonAnswers[comparisonButton.dataset.comparisonIndex] = Number(comparisonButton.dataset.comparisonOption);
      saveState();
      renderComparison();
      const target = document.getElementById(`comparison-${comparisonButton.dataset.comparisonIndex}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  $("#planList").addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-plan-id]");
    if (!checkbox) return;
    state.planDone[checkbox.dataset.planId] = checkbox.checked;
    saveState();
    renderProgress();
  });

  $("#searchInput").addEventListener("input", () => {
    renderModules();
    renderSearchResults();
  });

  $$(".mode-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.quizMode = button.dataset.quizMode;
      if (state.quizMode === "exam") {
        ensureExam();
        state.quizIndex = Math.min(state.quizIndex, state.examOrder.length - 1);
      } else {
        ensurePracticeIndex();
      }
      saveState();
      renderQuiz();
    });
  });

  $("#practiceTools").addEventListener("click", (event) => {
    if (event.target.closest("#repeatMistakes")) {
      state.practiceOnlyMistakes = !state.practiceOnlyMistakes;
      ensurePracticeIndex();
      saveState();
      renderQuiz();
    }

    if (event.target.closest("#clearMistakes")) {
      state.mistakeIds = [];
      state.practiceOnlyMistakes = false;
      saveState();
      renderQuiz();
    }
  });

  $("#clearProgress").addEventListener("click", () => {
    state.planDone = {};
    state.moduleDone = {};
    saveState();
    renderPlan();
    renderModules();
    renderProgress();
  });

  $("#cardFilter").addEventListener("change", (event) => {
    state.cardFilter = event.target.value;
    state.cardIndex = 0;
    state.flipped = false;
    renderFlashcard();
  });

  $("#flipCard").addEventListener("click", () => {
    state.flipped = !state.flipped;
    renderFlashcard();
  });

  $("#flashcard").addEventListener("click", () => {
    state.flipped = !state.flipped;
    renderFlashcard();
  });

  $("#prevCard").addEventListener("click", () => {
    const pool = cardPool();
    state.cardIndex = (state.cardIndex - 1 + pool.length) % pool.length;
    state.flipped = false;
    renderFlashcard();
  });

  $("#nextCard").addEventListener("click", () => {
    const pool = cardPool();
    state.cardIndex = (state.cardIndex + 1) % pool.length;
    state.flipped = false;
    renderFlashcard();
  });

  $("#nextQuestion").addEventListener("click", () => {
    if (state.quizMode === "exam") {
      ensureExam();
      state.quizIndex = (state.quizIndex + 1) % state.examOrder.length;
    } else {
      const pool = ensurePracticeIndex();
      const current = pool.indexOf(state.quizIndex);
      state.quizIndex = pool.length ? pool[(current + 1) % pool.length] : 0;
    }
    renderQuiz();
  });

  $("#resetQuiz").addEventListener("click", () => {
    if (state.quizMode === "exam") {
      startNewExam();
    } else {
      state.quizAnswers = {};
      state.practiceOptionOrders = {};
      state.practiceOnlyMistakes = false;
      saveState();
    }
    renderQuiz();
  });

  $("#submitExam").addEventListener("click", () => {
    if (state.quizMode === "exam") {
      submitExam();
      state.quizIndex = 0;
      renderQuiz();
    }
  });

  window.addEventListener("focus", () => {
    if (state.quizMode === "exam" && !state.examSubmitted) {
      renderQuiz();
    }
  });

  setInterval(() => {
    if (state.quizMode === "exam" && !state.examSubmitted) {
      renderQuiz();
    }
  }, 1000);

  $("#resetComparison").addEventListener("click", () => {
    state.comparisonAnswers = {};
    saveState();
    renderComparison();
  });
}

let timerRemaining = 25 * 60;
let timerInterval = null;

function renderTimer() {
  const minutes = Math.floor(timerRemaining / 60).toString().padStart(2, "0");
  const seconds = (timerRemaining % 60).toString().padStart(2, "0");
  $("#timerDisplay").textContent = `${minutes}:${seconds}`;
}

function attachTimer() {
  $("#timerStart").addEventListener("click", () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      $("#timerStart").textContent = "Iniciar";
      return;
    }
    $("#timerStart").textContent = "Pausar";
    timerInterval = setInterval(() => {
      timerRemaining = Math.max(0, timerRemaining - 1);
      renderTimer();
      if (timerRemaining === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        $("#timerStart").textContent = "Iniciar";
      }
    }, 1000);
  });

  $("#timerReset").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerRemaining = 25 * 60;
    $("#timerStart").textContent = "Iniciar";
    renderTimer();
  });
}

function init() {
  renderPlan();
  renderArticles();
  renderModules();
  renderSearchResults();
  renderCardFilter();
  renderFlashcard();
  renderQuiz();
  renderExam();
  renderComparison();
  renderProgress();
  renderTimer();
  attachEvents();
  attachTimer();

  const initialSection = window.location.hash.replace("#", "");
  if (["inicio", "temas", "fichas", "quiz", "comparadas", "simulacro"].includes(initialSection)) {
    setSection(initialSection);
  }
}

init();
