/* Contenido de las lecciones.
   Bloques de contenido: {h}, {p}, {callout}, {examples: [[en, es], …]}, {table: {head, rows}}
   Ejercicios:
     mc        → {prompt, options, answer (índice), explain}
     gap       → {prompt (con ___), answers: [aceptadas], hint?, explain}
     transform → {first, keyword, before, after, answers, explain}  (estilo Cambridge "key word transformation")
*/
window.IDIOMA = window.IDIOMA || {};
IDIOMA.lessons = {

/* =========================== A1 =========================== */
"a1-01": {
  level: "a1", title: "El verbo to be", minutes: 20,
  intro: "Es el verbo más importante del inglés: sirve para decir quién eres, cómo estás, de dónde eres y dónde está algo. Equivale a «ser» y «estar» a la vez.",
  content: [
    { h: "Forma afirmativa" },
    { table: { head: ["Forma completa", "Contracción", "Español"], rows: [
      ["I am", "I'm", "yo soy / estoy"],
      ["you are", "you're", "tú eres / estás"],
      ["he / she / it is", "he's / she's / it's", "él / ella / ello es / está"],
      ["we are", "we're", "nosotros somos / estamos"],
      ["they are", "they're", "ellos son / están"]
    ]}},
    { callout: "<strong>Importante:</strong> en inglés el sujeto es obligatorio. «Es tarde» se dice <em>It's late</em>, nunca <em>Is late</em>." },
    { examples: [
      ["I'm a teacher.", "Soy profesor/a."],
      ["She's from Mexico.", "Ella es de México."],
      ["We're tired.", "Estamos cansados."],
      ["It's cold today.", "Hoy hace frío."]
    ]},
    { h: "Negativa" },
    { p: "Añade <strong>not</strong> después del verbo. Las contracciones son muy habituales en la lengua hablada: <em>isn't</em>, <em>aren't</em>. Con <em>I</em> solo existe <em>I'm not</em>." },
    { examples: [
      ["I'm not hungry.", "No tengo hambre."],
      ["He isn't at home.", "Él no está en casa."],
      ["They aren't students.", "Ellos no son estudiantes."]
    ]},
    { h: "Preguntas y respuestas cortas" },
    { p: "Para preguntar, <strong>invierte</strong> el sujeto y el verbo. Responde con una respuesta corta, sin contracción en la afirmativa." },
    { examples: [
      ["Are you ready? — Yes, I am.", "¿Estás listo? — Sí."],
      ["Is she your sister? — No, she isn't.", "¿Es tu hermana? — No."],
      ["Where are you from?", "¿De dónde eres?"]
    ]},
    { callout: "<strong>Errores típicos de hispanohablantes:</strong> «I have 25 years» ✗ → <em>I'm 25 (years old)</em> ✓. «I have cold» ✗ → <em>I'm cold</em> ✓. Para edad, frío, calor, hambre o sed se usa <em>to be</em>." }
  ],
  exercises: [
    { type: "mc", prompt: "My parents ___ from Argentina.", options: ["is", "are", "am"], answer: 1, explain: "Sujeto plural (my parents = they) → are." },
    { type: "mc", prompt: "___ your brother a doctor?", options: ["Are", "Am", "Is"], answer: 2, explain: "Your brother = he → Is." },
    { type: "gap", prompt: "I ___ 30 years old.", answers: ["am", "'m"], explain: "La edad se expresa con to be: I am / I'm 30." },
    { type: "gap", prompt: "It ___ very hot today.", answers: ["is", "'s"], explain: "Para el tiempo atmosférico se usa it + is." },
    { type: "gap", prompt: "They ___ at school today. They're at home. (negativa)", answers: ["aren't", "are not"], explain: "Negativa plural: are not / aren't." },
    { type: "mc", prompt: "«Are you tired?» — «Yes, ___»", options: ["I'm", "I am", "I'm tired yes"], answer: 1, explain: "En respuestas cortas afirmativas no se contrae: Yes, I am." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I have hungry.", "I am hungry.", "I hungry."], answer: 1, explain: "Hambre, sed, frío y calor van con to be: I am hungry." }
  ]
},

/* =========================== A2 =========================== */
"a2-02": {
  level: "a2", title: "Past simple: verbos regulares e irregulares", minutes: 25,
  intro: "El past simple expresa acciones terminadas en un momento concreto del pasado. Es el tiempo principal para contar historias.",
  content: [
    { h: "Verbos regulares: -ed" },
    { table: { head: ["Regla", "Ejemplo"], rows: [
      ["La mayoría: + -ed", "work → worked, play → played"],
      ["Terminados en -e: + -d", "live → lived, like → liked"],
      ["Consonante + y: -y → -ied", "study → studied, try → tried"],
      ["Consonante-vocal-consonante (sílaba tónica): doble consonante", "stop → stopped, plan → planned"]
    ]}},
    { callout: "<strong>Pronunciación de -ed:</strong> /t/ tras sonidos sordos (<em>worked</em>), /d/ tras sonoros (<em>played</em>) y /ɪd/ solo tras /t/ o /d/ (<em>wanted, needed</em>). Nunca digas «work-ed»." },
    { h: "Verbos irregulares frecuentes" },
    { table: { head: ["Infinitivo", "Pasado", "Infinitivo", "Pasado"], rows: [
      ["go", "went", "have", "had"],
      ["see", "saw", "make", "made"],
      ["buy", "bought", "think", "thought"],
      ["take", "took", "get", "got"],
      ["come", "came", "eat", "ate"]
    ]}},
    { examples: [
      ["We went to London last summer.", "Fuimos a Londres el verano pasado."],
      ["She studied medicine in Madrid.", "Estudió medicina en Madrid."],
      ["I bought a new phone yesterday.", "Ayer me compré un móvil nuevo."]
    ]},
    { h: "Negativas y preguntas: did" },
    { p: "Usa <strong>did / didn't + infinitivo</strong> para todos los verbos (excepto <em>to be</em>). El verbo principal vuelve a su forma base." },
    { examples: [
      ["I didn't see the film.", "No vi la película."],
      ["Did you call her? — Yes, I did.", "¿La llamaste? — Sí."],
      ["Where did they go?", "¿Adónde fueron?"]
    ]},
    { callout: "<strong>Error clásico:</strong> «Did you went?» ✗ → <em>Did you go?</em> ✓. El pasado ya está marcado en <em>did</em>." }
  ],
  exercises: [
    { type: "gap", prompt: "Last year we ___ (travel) to Peru.", answers: ["travelled", "traveled"], explain: "Regular: travel → travelled (UK) / traveled (US)." },
    { type: "gap", prompt: "She ___ (buy) a new car last month.", answers: ["bought"], explain: "Irregular: buy → bought." },
    { type: "gap", prompt: "I ___ (not / see) him at the party.", answers: ["didn't see", "did not see"], explain: "Negativa: didn't + infinitivo." },
    { type: "mc", prompt: "___ you enjoy the concert?", options: ["Do", "Did", "Were"], answer: 1, explain: "Pregunta en pasado con verbo principal (enjoy) → Did." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["Where did you went?", "Where you went?", "Where did you go?"], answer: 2, explain: "Did + infinitivo: Where did you go?" },
    { type: "gap", prompt: "The train ___ (stop) in every station.", answers: ["stopped"], explain: "Consonante-vocal-consonante → se duplica la p: stopped." },
    { type: "mc", prompt: "¿Cómo se pronuncia la terminación de «wanted»?", options: ["/t/", "/d/", "/ɪd/"], answer: 2, explain: "Tras /t/ o /d/ se pronuncia /ɪd/: want-id." }
  ]
},

/* =========================== B1 =========================== */
"b1-02": {
  level: "b1", title: "Present perfect vs past simple", minutes: 30,
  intro: "Ambos hablan del pasado, pero el present perfect conecta el pasado con el presente, mientras que el past simple sitúa la acción en un momento terminado.",
  content: [
    { h: "La regla esencial" },
    { table: { head: ["Present perfect (have + participio)", "Past simple"], rows: [
      ["Tiempo no especificado o no terminado", "Tiempo terminado y concreto"],
      ["I've been to Japan. (alguna vez en mi vida)", "I went to Japan in 2019."],
      ["She's lost her keys. (ahora no las tiene)", "She lost her keys yesterday."],
      ["Con: ever, never, just, already, yet, so far, this week", "Con: yesterday, last…, …ago, in 2010, when…"]
    ]}},
    { callout: "<strong>Atención:</strong> en España se usa «he comido» de forma parecida al inglés, pero en Latinoamérica se prefiere «comí». En inglés la regla es estricta: si dices <em>cuándo</em> (yesterday, last week, ago), <strong>siempre</strong> past simple." },
    { examples: [
      ["Have you ever eaten sushi?", "¿Has comido sushi alguna vez?"],
      ["I've just finished my report.", "Acabo de terminar mi informe."],
      ["I finished my report two hours ago.", "Terminé mi informe hace dos horas."],
      ["He hasn't called yet.", "Todavía no ha llamado."]
    ]},
    { h: "For y since: duración hasta hoy" },
    { p: "Para expresar que algo empezó en el pasado y <strong>continúa</strong>, el inglés usa present perfect (el español usa presente: «vivo aquí desde 2015»). <strong>For</strong> + periodo; <strong>since</strong> + punto de inicio." },
    { examples: [
      ["I've lived here since 2015.", "Vivo aquí desde 2015."],
      ["We've known each other for ten years.", "Nos conocemos desde hace diez años."]
    ]},
    { callout: "<strong>Error muy común:</strong> «I live here since 2015» ✗ → <em>I've lived here since 2015</em> ✓." },
    { h: "La conversación típica" },
    { p: "Se abre un tema con present perfect y, al dar detalles concretos, se pasa al past simple:" },
    { examples: [
      ["Have you ever been to Scotland? — Yes, I have. I went there last year.", "¿Has estado en Escocia? — Sí. Fui el año pasado."],
      ["What did you think of it? — It was amazing.", "¿Qué te pareció? — Fue increíble."]
    ]}
  ],
  exercises: [
    { type: "mc", prompt: "I ___ that film three times.", options: ["saw", "have seen", "see"], answer: 1, explain: "Experiencia sin momento concreto → present perfect." },
    { type: "mc", prompt: "I ___ that film last night.", options: ["saw", "have seen", "had see"], answer: 0, explain: "«Last night» es tiempo terminado → past simple." },
    { type: "gap", prompt: "She ___ (work) here since 2018.", answers: ["has worked", "'s worked", "has been working", "'s been working"], explain: "Acción que empezó en 2018 y continúa → present perfect (o present perfect continuous)." },
    { type: "mc", prompt: "We've been friends ___ we were children.", options: ["for", "since", "from"], answer: 1, explain: "Punto de inicio («we were children») → since." },
    { type: "mc", prompt: "When ___ to London?", options: ["have you moved", "did you move", "you moved"], answer: 1, explain: "«When» pregunta por un momento concreto → past simple." },
    { type: "mc", prompt: "Has the parcel arrived ___?", options: ["already", "yet", "just"], answer: 1, explain: "En preguntas y negativas se usa yet al final." },
    { type: "transform", first: "I started learning English five years ago.", keyword: "BEEN", before: "I", after: "English for five years.", answers: ["have been learning", "'ve been learning"], explain: "Acción que empezó hace 5 años y continúa: have been learning … for five years." }
  ]
},

/* =========================== B2 =========================== */
"b2-02": {
  level: "b2", title: "Condicionales mixtos", minutes: 30,
  intro: "Los condicionales mixtos combinan tiempos distintos en la condición y el resultado. Permiten hablar de cómo el pasado afecta al presente (y viceversa) de forma hipotética.",
  content: [
    { h: "Repaso rápido" },
    { table: { head: ["Tipo", "Condición (if…)", "Resultado", "Uso"], rows: [
      ["Second", "if + past simple", "would + infinitivo", "Hipótesis en presente/futuro"],
      ["Third", "if + past perfect", "would have + participio", "Hipótesis en pasado"]
    ]}},
    { h: "Mixto 1: pasado → presente" },
    { p: "<strong>If + past perfect, would + infinitivo.</strong> Una condición irreal en el pasado con una consecuencia en el presente." },
    { examples: [
      ["If I had taken the job, I would be living in Toronto now.", "Si hubiera aceptado el trabajo, ahora estaría viviendo en Toronto."],
      ["If she hadn't missed the flight, she would be here.", "Si no hubiera perdido el vuelo, estaría aquí."]
    ]},
    { h: "Mixto 2: presente → pasado" },
    { p: "<strong>If + past simple, would have + participio.</strong> Una característica permanente (irreal) que habría cambiado algo del pasado." },
    { examples: [
      ["If I were more organised, I wouldn't have forgotten the meeting.", "Si fuera más organizado, no habría olvidado la reunión."],
      ["If he spoke French, he would have got the job.", "Si hablara francés, habría conseguido el trabajo."]
    ]},
    { callout: "<strong>Truco:</strong> pregúntate en qué momento está cada mitad. Si la condición es pasada y el resultado actual (<em>now, today</em>), es mixto 1. Si la condición es un rasgo permanente y el resultado ya ocurrió, es mixto 2." },
    { callout: "<strong>Registro:</strong> en inglés formal y en exámenes se prefiere <em>If I were</em> para todas las personas. <em>If I was</em> es frecuente en la lengua hablada." }
  ],
  exercises: [
    { type: "mc", prompt: "If I had studied medicine, I ___ a doctor now.", options: ["would have been", "would be", "will be"], answer: 1, explain: "Condición pasada → resultado presente («now»): would be." },
    { type: "mc", prompt: "If she ___ so shy, she would have spoken at the meeting.", options: ["wasn't / weren't", "hadn't been", "isn't"], answer: 0, explain: "Rasgo permanente (es tímida) → past simple; resultado pasado → would have spoken." },
    { type: "gap", prompt: "If we ___ (not / miss) the train, we would be at home now.", answers: ["hadn't missed", "had not missed"], explain: "Condición pasada irreal → past perfect." },
    { type: "gap", prompt: "If I were taller, I ___ (join) the basketball team last year.", answers: ["would have joined", "'d have joined", "could have joined"], explain: "Resultado en el pasado (last year) → would have + participio." },
    { type: "mc", prompt: "Elige la frase correcta:", options: ["If I would have known, I would tell you.", "If I had known, I would have told you.", "If I knew, I would have told you yesterday about it before."], answer: 1, explain: "Nunca se usa would en la cláusula con if. Tercer condicional clásico." },
    { type: "transform", first: "I don't have a car because I didn't save enough money.", keyword: "WOULD", before: "If I had saved enough money,", after: "a car.", answers: ["i would have", "i'd have", "i would own", "i'd own"], explain: "Condición pasada → resultado presente: I would have a car." },
    { type: "transform", first: "He isn't careful, so he made a lot of mistakes in the exam.", keyword: "MORE", before: "If he", after: "careful, he wouldn't have made so many mistakes.", answers: ["were more", "was more"], explain: "Rasgo presente (if + past simple) → resultado pasado." }
  ]
},

/* =========================== C1 =========================== */
"c1-01": {
  level: "c1", title: "Inversión enfática", minutes: 35,
  intro: "Colocar una expresión negativa o restrictiva al principio de la frase obliga a invertir sujeto y auxiliar, como en una pregunta. Es un recurso formal muy valorado en los exámenes C1 y C2, sobre todo en la parte de Writing y en las key word transformations.",
  content: [
    { h: "Estructura" },
    { p: "<strong>Expresión negativa/restrictiva + auxiliar + sujeto + verbo.</strong> Si no hay auxiliar, se usa <em>do/does/did</em>." },
    { examples: [
      ["Never have I seen such a beautiful place.", "Nunca he visto un lugar tan bonito."],
      ["Rarely do we get the chance to travel.", "Rara vez tenemos la ocasión de viajar."]
    ]},
    { h: "Expresiones más frecuentes" },
    { table: { head: ["Expresión", "Ejemplo"], rows: [
      ["Never / Rarely / Seldom", "Seldom does she complain."],
      ["Not only … but also", "Not only did he lie, but he also blamed me."],
      ["Hardly / Scarcely … when", "Hardly had I sat down when the phone rang."],
      ["No sooner … than", "No sooner had we arrived than it started to rain."],
      ["Under no circumstances / On no account", "Under no circumstances should you open this door."],
      ["Only when / Only after / Only then", "Only when I read the letter did I understand."],
      ["Not until", "Not until the next day did they realise the mistake."],
      ["Little", "Little did she know what was waiting for her."],
      ["At no time", "At no time was the public in danger."]
    ]}},
    { callout: "<strong>Ojo con only / not until:</strong> la inversión se produce en la <em>cláusula principal</em>, no en la que acompaña a only. <em>Only when I read the letter</em> (sin inversión) <em>did I understand</em> (con inversión)." },
    { callout: "<strong>Pareja fija:</strong> <em>hardly/scarcely</em> van con <strong>when</strong>; <em>no sooner</em> va con <strong>than</strong>. Mezclarlos es un error que los examinadores detectan siempre." },
    { h: "Cuándo usarla" },
    { p: "La inversión aporta énfasis y un registro formal o literario. Úsala con moderación en essays, reports y proposals (una o dos veces por texto) para mostrar rango gramatical. En una conversación informal suena forzada." }
  ],
  exercises: [
    { type: "mc", prompt: "No sooner had the concert started ___ the lights went out.", options: ["when", "than", "that"], answer: 1, explain: "No sooner … than." },
    { type: "mc", prompt: "Only after the investigation ___ the truth.", options: ["they discovered", "did they discover", "they did discover"], answer: 1, explain: "Only after + complemento → inversión en la principal: did they discover." },
    { type: "gap", prompt: "Under no circumstances ___ you leave the building during the test. (modal)", answers: ["should", "must", "may", "can"], explain: "Under no circumstances + modal + sujeto: should/must you leave." },
    { type: "gap", prompt: "Little ___ he realise that he was being followed.", answers: ["did"], explain: "Little + did + sujeto + infinitivo." },
    { type: "transform", first: "She had just left the house when it started to rain.", keyword: "HARDLY", before: "", after: "the house when it started to rain.", answers: ["hardly had she left"], explain: "Hardly + had + sujeto + participio … when." },
    { type: "transform", first: "He not only forgot my birthday, but he also forgot our anniversary.", keyword: "ONLY", before: "Not", after: "my birthday, but he also forgot our anniversary.", answers: ["only did he forget"], explain: "Not only + did + sujeto + infinitivo." },
    { type: "transform", first: "I didn't realise how serious the problem was until I spoke to the manager.", keyword: "DID", before: "Not until I spoke to the manager", after: "how serious the problem was.", answers: ["did i realise", "did i realize"], explain: "Not until + cláusula → inversión en la principal: did I realise." },
    { type: "transform", first: "The public was never in any danger.", keyword: "TIME", before: "At", after: "in any danger.", answers: ["no time was the public"], explain: "At no time + was + sujeto." }
  ]
},

/* =========================== C2 =========================== */
"c2-01": {
  level: "c2", title: "Formación de palabras avanzada", minutes: 35,
  intro: "En C2 Proficiency (Reading & Use of English, Parte 3) debes transformar una palabra base para que encaje en un texto. La dificultad está en los prefijos negativos, los cambios internos de la raíz y las formas poco frecuentes.",
  content: [
    { h: "Estrategia en tres pasos" },
    { p: "1) Identifica la <strong>categoría</strong> que exige el hueco (sustantivo, adjetivo, adverbio, verbo). 2) Decide el <strong>sentido</strong>: ¿positivo o negativo?, ¿singular o plural? 3) Revisa <strong>cambios de raíz</strong> y ortografía." },
    { h: "Prefijos negativos y de significado" },
    { table: { head: ["Prefijo", "Ejemplos"], rows: [
      ["un- / in- / im- / il- / ir-", "unprecedented, inexplicable, impeccable, illegible, irreversible"],
      ["dis- / mis-", "disproportionate, misconception, misinterpretation"],
      ["over- / under-", "overestimate, underestimate, understatement"],
      ["counter- / out-", "counterproductive, outnumber, outweigh"]
    ]}},
    { h: "Cambios de raíz que hay que conocer" },
    { table: { head: ["Base", "Formas"], rows: [
      ["DEEP", "depth, deepen"],
      ["PERSUADE", "persuasion, persuasive, persuasiveness"],
      ["COMPREHEND", "comprehension, comprehensive, incomprehensible"],
      ["DECIDE", "decision, decisive, indecisive, indecision"],
      ["PRONOUNCE", "pronunciation (¡sin -nounce!), pronouncement"],
      ["MAINTAIN", "maintenance"],
      ["SUSTAIN", "sustenance, sustainable, sustainability"]
    ]}},
    { callout: "<strong>Trampa típica:</strong> el texto puede exigir dos cambios a la vez (prefijo + sufijo), p. ej. <em>RELY → unreliability</em> o <em>EXPECT → unexpectedly</em>. Lee la frase completa antes de escribir." },
    { examples: [
      ["The scale of the disaster was unprecedented.", "La magnitud del desastre no tenía precedentes."],
      ["Calling it 'a minor setback' is an understatement.", "Llamarlo «un pequeño revés» es quedarse corto."],
      ["Her argument was utterly persuasive.", "Su argumento era totalmente convincente."]
    ]}
  ],
  exercises: [
    { type: "gap", prompt: "The committee's decision was met with widespread ___. (APPROVE)", answers: ["disapproval"], explain: "Sentido negativo + sustantivo: disapproval." },
    { type: "gap", prompt: "The handwriting on the old manuscript was almost ___. (LEGIBLE)", answers: ["illegible"], explain: "Prefijo il- delante de l: illegible." },
    { type: "gap", prompt: "The sheer ___ of the ocean at that point astonished the researchers. (DEEP)", answers: ["depth"], explain: "Sustantivo con cambio de raíz: deep → depth." },
    { type: "gap", prompt: "Critics argued that the new measures would prove ___. (PRODUCT)", answers: ["counterproductive"], explain: "Prefijo counter- + adjetivo: counterproductive." },
    { type: "gap", prompt: "The ___ of the bridge has been neglected for years. (MAINTAIN)", answers: ["maintenance"], explain: "Cambio de raíz: maintain → maintenance." },
    { type: "gap", prompt: "The success of the plan depends on the ___ of the data. (RELY)", answers: ["reliability"], explain: "Sustantivo: rely → reliable → reliability." },
    { type: "gap", prompt: "Somewhat ___, the underdog team went on to win the championship. (EXPECT)", answers: ["unexpectedly"], explain: "Adverbio negativo: un- + expected + -ly." },
    { type: "mc", prompt: "Elige la forma correcta: Her ___ of English is flawless.", options: ["pronounciation", "pronunciation", "pronouncement"], answer: 1, explain: "Pronunciation: la raíz cambia (-nunc-). Pronouncement significa «declaración oficial»." }
  ]
}
};
