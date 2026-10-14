/* Currículo A1–C2 alineado con el Marco Común Europeo de Referencia (MCER/CEFR).
   Las horas son horas guiadas acumuladas aproximadas (referencia: Cambridge English). */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.levels = [
  {
    id: "a1", code: "A1", name: "Acceso", stage: "Usuario básico",
    hours: "90–100 h", exam: "Pre A1–A1 Movers/Flyers (Cambridge)",
    summary: "Te presentas, hablas de ti y de tu entorno inmediato con frases sencillas.",
    canDo: [
      "Presentarte y presentar a otros; dar datos personales.",
      "Entender y usar expresiones cotidianas muy frecuentes.",
      "Hacer y responder preguntas sencillas sobre dónde vives, la gente que conoces o lo que tienes.",
      "Rellenar formularios básicos (nombre, nacionalidad, dirección)."
    ],
    grammar: ["Verbo to be", "Pronombres personales y posesivos", "Present simple", "There is / there are", "Artículos a/an/the", "Plurales", "Can / can't", "Preposiciones de lugar y tiempo"],
    vocab: ["Números, fechas y horas", "Familia", "Países y nacionalidades", "La casa", "Rutinas diarias", "Comida y bebida"],
    units: [
      { title: "Unidad 1 · Primeros pasos", lessons: [
        { id: "a1-01", title: "El verbo to be" },
        { id: "a1-02", title: "Pronombres y adjetivos posesivos" },
        { id: "a1-03", title: "Números, el alfabeto y deletrear" }
      ]},
      { title: "Unidad 2 · Mi día a día", lessons: [
        { id: "a1-04", title: "Present simple: afirmativa" },
        { id: "a1-05", title: "Present simple: negativa y preguntas" },
        { id: "a1-06", title: "Adverbios de frecuencia" }
      ]},
      { title: "Unidad 3 · Mi entorno", lessons: [
        { id: "a1-07", title: "There is / there are" },
        { id: "a1-08", title: "Preposiciones de lugar" },
        { id: "a1-09", title: "Can para habilidad y permiso" }
      ]}
    ]
  },
  {
    id: "a2", code: "A2", name: "Plataforma", stage: "Usuario básico",
    hours: "180–200 h", exam: "A2 Key (KET)",
    summary: "Te desenvuelves en situaciones cotidianas: compras, viajes, trabajo sencillo.",
    canDo: [
      "Comprender frases relacionadas con áreas de prioridad inmediata (compras, empleo, entorno).",
      "Comunicarte en tareas simples que requieren intercambio directo de información.",
      "Describir tu pasado y tu entorno en términos sencillos.",
      "Escribir notas y mensajes breves."
    ],
    grammar: ["Past simple (regulares e irregulares)", "Past continuous", "Comparativos y superlativos", "Going to y will", "Present continuous para el futuro", "Contables e incontables: much/many/some/any", "Have to / must", "Adverbios de modo"],
    vocab: ["Viajes y transporte", "Compras y dinero", "Salud y cuerpo", "Tiempo libre", "Trabajo y estudios", "El tiempo atmosférico"],
    units: [
      { title: "Unidad 1 · Contar el pasado", lessons: [
        { id: "a2-01", title: "Past simple de to be" },
        { id: "a2-02", title: "Past simple: verbos regulares e irregulares" },
        { id: "a2-03", title: "Past continuous vs past simple" }
      ]},
      { title: "Unidad 2 · Comparar y elegir", lessons: [
        { id: "a2-04", title: "Comparativos" },
        { id: "a2-05", title: "Superlativos" },
        { id: "a2-06", title: "Much, many, a lot of" }
      ]},
      { title: "Unidad 3 · Planes", lessons: [
        { id: "a2-07", title: "Going to para planes" },
        { id: "a2-08", title: "Will para predicciones y decisiones" },
        { id: "a2-09", title: "Present continuous con valor de futuro" }
      ]}
    ]
  },
  {
    id: "b1", code: "B1", name: "Umbral", stage: "Usuario independiente",
    hours: "350–400 h", exam: "B1 Preliminary (PET)",
    summary: "Mantienes conversaciones sobre temas conocidos y das opiniones con razones.",
    canDo: [
      "Comprender las ideas principales de textos claros sobre temas conocidos.",
      "Desenvolverte en la mayoría de situaciones durante un viaje.",
      "Producir textos sencillos y coherentes sobre temas de interés personal.",
      "Describir experiencias, sueños y ambiciones, y justificar opiniones brevemente."
    ],
    grammar: ["Present perfect (ever, never, just, already, yet)", "Present perfect vs past simple", "First y second conditional", "Voz pasiva (presente y pasado)", "Estilo indirecto básico", "Oraciones de relativo", "Used to", "Gerundio e infinitivo"],
    vocab: ["Medios de comunicación", "Medio ambiente", "Relaciones personales", "Tecnología", "Phrasal verbs frecuentes", "Educación"],
    units: [
      { title: "Unidad 1 · Experiencias", lessons: [
        { id: "b1-01", title: "Present perfect: experiencias" },
        { id: "b1-02", title: "Present perfect vs past simple" },
        { id: "b1-03", title: "For, since, just, already, yet" }
      ]},
      { title: "Unidad 2 · Hipótesis", lessons: [
        { id: "b1-04", title: "First conditional" },
        { id: "b1-05", title: "Second conditional" },
        { id: "b1-06", title: "Unless, as long as, provided that" }
      ]},
      { title: "Unidad 3 · Información", lessons: [
        { id: "b1-07", title: "Voz pasiva" },
        { id: "b1-08", title: "Estilo indirecto" },
        { id: "b1-09", title: "Oraciones de relativo" }
      ]}
    ]
  },
  {
    id: "b2", code: "B2", name: "Avanzado", stage: "Usuario independiente",
    hours: "500–600 h", exam: "B2 First (FCE)",
    summary: "Interactúas con fluidez y espontaneidad con nativos; argumentas con claridad.",
    canDo: [
      "Entender las ideas principales de textos complejos, incluidos debates técnicos de tu especialidad.",
      "Relacionarte con nativos con fluidez y naturalidad, sin esfuerzo para ninguna de las partes.",
      "Escribir textos claros y detallados y defender un punto de vista con ventajas e inconvenientes.",
      "Seguir conferencias y argumentos complejos sobre temas razonablemente conocidos."
    ],
    grammar: ["Third conditional y condicionales mixtos", "Wish / If only", "Verbos modales de deducción (must have, can't have)", "Past perfect simple y continuous", "Passive avanzada (it is said that…)", "Be used to / get used to", "Causative have/get something done", "Future continuous y future perfect"],
    vocab: ["Collocations", "Phrasal verbs avanzados", "Formación de palabras (prefijos y sufijos)", "Conectores de contraste y causa", "Lenguaje para argumentar", "Ciencia y sociedad"],
    units: [
      { title: "Unidad 1 · Arrepentimientos e hipótesis", lessons: [
        { id: "b2-01", title: "Third conditional" },
        { id: "b2-02", title: "Condicionales mixtos" },
        { id: "b2-03", title: "Wish e if only" }
      ]},
      { title: "Unidad 2 · Deducción y especulación", lessons: [
        { id: "b2-04", title: "Modales de deducción en presente" },
        { id: "b2-05", title: "Modales de deducción en pasado" },
        { id: "b2-06", title: "Past perfect simple y continuous" }
      ]},
      { title: "Unidad 3 · Preparación B2 First", lessons: [
        { id: "b2-07", title: "Word formation: sufijos" },
        { id: "b2-08", title: "Key word transformations" },
        { id: "b2-09", title: "Writing: el essay de opinión" }
      ]}
    ]
  },
  {
    id: "c1", code: "C1", name: "Dominio operativo eficaz", stage: "Usuario competente",
    hours: "700–800 h", exam: "C1 Advanced (CAE) · IELTS 7.0–8.0",
    summary: "Usas el idioma de forma flexible y eficaz en contextos sociales, académicos y profesionales.",
    canDo: [
      "Comprender una amplia variedad de textos extensos y exigentes, y reconocer sentidos implícitos.",
      "Expresarte de forma fluida y espontánea sin buscar de forma muy evidente las expresiones.",
      "Usar el idioma con flexibilidad para fines sociales, académicos y profesionales.",
      "Producir textos claros, bien estructurados y detallados sobre temas complejos."
    ],
    grammar: ["Inversión enfática", "Oraciones hendidas (cleft sentences)", "Condicionales sin if (were it not for, should you…)", "Participle clauses", "Subjuntivo y estructuras formales", "Elipsis y sustitución", "Énfasis con do/does/did", "Modales avanzados y matices"],
    vocab: ["Collocations de nivel avanzado", "Expresiones idiomáticas frecuentes", "Registro formal vs informal", "Hedging (lenguaje atenuador)", "Vocabulario académico (AWL)", "Dependent prepositions"],
    units: [
      { title: "Unidad 1 · Énfasis y estilo", lessons: [
        { id: "c1-01", title: "Inversión enfática" },
        { id: "c1-02", title: "Cleft sentences" },
        { id: "c1-03", title: "Condicionales formales sin if" }
      ]},
      { title: "Unidad 2 · Precisión y registro", lessons: [
        { id: "c1-04", title: "Participle clauses" },
        { id: "c1-05", title: "Hedging: hablar con cautela" },
        { id: "c1-06", title: "Registro formal e informal" }
      ]},
      { title: "Unidad 3 · Preparación C1 Advanced", lessons: [
        { id: "c1-07", title: "Reading & Use of English: estrategias" },
        { id: "c1-08", title: "Writing: essay, report y proposal" },
        { id: "c1-09", title: "Speaking: parte 3 y 4 (discusión)" }
      ]}
    ]
  },
  {
    id: "c2", code: "C2", name: "Maestría", stage: "Usuario competente",
    hours: "1.000–1.200 h", exam: "C2 Proficiency (CPE) · IELTS 8.5–9.0",
    summary: "Comprendes prácticamente todo y te expresas con precisión, matiz y naturalidad casi nativa.",
    canDo: [
      "Comprender con facilidad prácticamente todo lo que oyes o lees.",
      "Resumir información de fuentes diversas reconstruyendo argumentos de forma coherente.",
      "Expresarte espontáneamente, con gran fluidez y precisión, distinguiendo matices finos de significado.",
      "Dominar expresiones idiomáticas y coloquiales, y cambiar de registro con naturalidad."
    ],
    grammar: ["Estructuras de énfasis complejas", "Nominalización", "Inversión tras so/such y as/though", "Uso estilístico de tiempos verbales", "Distanciamiento (it would appear that…)", "Elipsis avanzada"],
    vocab: ["Formación de palabras avanzada", "Idioms y expresiones fijas", "Collocations de baja frecuencia", "Matices entre sinónimos", "Lenguaje figurado", "Variantes regionales (UK/US) y registro"],
    units: [
      { title: "Unidad 1 · Léxico de precisión", lessons: [
        { id: "c2-01", title: "Formación de palabras avanzada" },
        { id: "c2-02", title: "Idioms en contexto" },
        { id: "c2-03", title: "Matices entre sinónimos" }
      ]},
      { title: "Unidad 2 · Sintaxis expresiva", lessons: [
        { id: "c2-04", title: "Nominalización y estilo académico" },
        { id: "c2-05", title: "Inversión con so, such, as y though" },
        { id: "c2-06", title: "Distanciamiento y objetividad" }
      ]},
      { title: "Unidad 3 · Preparación C2 Proficiency", lessons: [
        { id: "c2-07", title: "Reading & Use of English: open cloze" },
        { id: "c2-08", title: "Writing: el summary essay (Parte 1)" },
        { id: "c2-09", title: "Listening: inferencia y actitud" }
      ]}
    ]
  }
];
IDIOMA.levelById = id => IDIOMA.levels.find(l => l.id === id);
