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

/* ======================= C1 (continuación) ======================= */
"c1-02": {
  level: "c1", title: "Cleft sentences", minutes: 30,
  intro: "Las oraciones hendidas dividen una frase en dos partes para destacar un elemento. Son el equivalente a «Lo que necesito es…» o «Fue Ana quien…» y aportan énfasis y naturalidad tanto al hablar como al escribir.",
  content: [
    { h: "It-cleft: It + be + elemento destacado + that/who" },
    { p: "Destaca el sujeto, el objeto o un complemento de tiempo o lugar. Se usa mucho para corregir o contrastar." },
    { examples: [
      ["It was Sarah who broke the vase, not Tom.", "Fue Sarah quien rompió el jarrón, no Tom."],
      ["It's the price that worries me.", "Lo que me preocupa es el precio."],
      ["It was in 2010 that we first met.", "Fue en 2010 cuando nos conocimos."]
    ]},
    { h: "Wh-cleft: What … + be + elemento destacado" },
    { p: "La cláusula con <strong>what</strong> presenta información conocida y lo importante va al final, donde cae el foco." },
    { examples: [
      ["What I need is a long holiday.", "Lo que necesito son unas largas vacaciones."],
      ["What surprised me was how calm she was.", "Lo que me sorprendió fue lo tranquila que estaba."],
      ["What happened was that the server crashed.", "Lo que pasó fue que el servidor se cayó."],
      ["What you should do is talk to her.", "Lo que deberías hacer es hablar con ella."]
    ]},
    { h: "Otras estructuras frecuentes" },
    { table: { head: ["Estructura", "Ejemplo"], rows: [
      ["All (that) … is/was", "All I want is a bit of peace and quiet."],
      ["The reason (why) … is that", "The reason why I left is that I was bored."],
      ["The thing (that) … is", "The thing that annoys me is his attitude."],
      ["The place / time where/when …", "The place where we met was a tiny café."],
      ["Cleft invertida", "A long holiday is what I need."]
    ]}},
    { callout: "<strong>Con verbos:</strong> cuando lo que destacas es una acción, usa <em>do</em> + infinitivo sin <em>to</em>: <em>What she did was <strong>resign</strong></em>. <em>All I did was <strong>ask</strong> a question.</em>" },
    { callout: "<strong>Concordancia:</strong> el verbo <em>be</em> concuerda normalmente con la cláusula de <em>what</em> (singular): <em>What we need <strong>is</strong> more volunteers.</em>" }
  ],
  exercises: [
    { type: "gap", prompt: "___ I love about London is its parks.", answers: ["what"], explain: "Wh-cleft: What + cláusula + is…" },
    { type: "mc", prompt: "It was in 2010 ___ we first met.", options: ["that", "what", "which"], answer: 0, explain: "It-cleft con complemento de tiempo: It was in 2010 that…" },
    { type: "mc", prompt: "What she did ___ resign on the spot.", options: ["was", "did", "has"], answer: 0, explain: "What + sujeto + did + was + infinitivo sin to: What she did was resign." },
    { type: "transform", first: "I need a long holiday.", keyword: "WHAT", before: "", after: "a long holiday.", answers: ["what i need is"], explain: "What I need is…" },
    { type: "transform", first: "Sarah broke the vase, not Tom.", keyword: "WAS", before: "It", after: "the vase, not Tom.", answers: ["was sarah who broke", "was sarah that broke"], explain: "It was + sujeto destacado + who/that + verbo." },
    { type: "transform", first: "I only want you to listen to me.", keyword: "ALL", before: "", after: "to listen to me.", answers: ["all i want is for you", "all i want is you", "all that i want is for you"], explain: "All I want is (for) you to…" },
    { type: "transform", first: "He left the company because he was bored.", keyword: "WHY", before: "The reason", after: "the company was that he was bored.", answers: ["why he left"], explain: "The reason why + cláusula + was that…" }
  ]
},

"c1-03": {
  level: "c1", title: "Condicionales formales sin if", minutes: 30,
  intro: "En inglés formal es frecuente omitir if invirtiendo el sujeto y el auxiliar. Además, existen alternativas como provided that, but for o otherwise. Son estructuras clave en las key word transformations de C1 y C2.",
  content: [
    { h: "Condicionales con inversión" },
    { table: { head: ["Con if", "Inversión (formal)"], rows: [
      ["If you need any help, …", "<strong>Should you</strong> need any help, …"],
      ["If I were in your position, …", "<strong>Were I</strong> in your position, …"],
      ["If the government raised taxes, …", "<strong>Were the government to</strong> raise taxes, …"],
      ["If I had known, …", "<strong>Had I</strong> known, …"],
      ["If it weren't for your help, …", "<strong>Were it not for</strong> your help, …"],
      ["If it hadn't been for your help, …", "<strong>Had it not been for</strong> your help, …"]
    ]}},
    { callout: "<strong>Negativa:</strong> en la inversión no se contrae: <em>Had I <strong>not</strong> seen it…</em> ✓ / <em>Hadn't I seen it…</em> ✗." },
    { examples: [
      ["Should you have any questions, please contact us.", "Si tiene alguna pregunta, no dude en contactarnos."],
      ["Had I known about the problem, I would have helped.", "De haber sabido lo del problema, habría ayudado."],
      ["Were it not for the rain, we would go out.", "Si no fuera por la lluvia, saldríamos."]
    ]},
    { h: "Otras formas de expresar condición" },
    { table: { head: ["Expresión", "Ejemplo"], rows: [
      ["Provided / providing (that), as long as", "You can borrow it provided that you return it tomorrow."],
      ["On condition that", "He agreed on condition that his name was kept secret."],
      ["Unless (= if not)", "We'll go unless it rains."],
      ["But for + sustantivo", "But for your help, we would have failed."],
      ["Otherwise", "Leave now; otherwise you'll miss the bus."],
      ["Supposing / Suppose", "Supposing you lost your job, what would you do?"],
      ["In case (por si acaso)", "Take an umbrella in case it rains."]
    ]}},
    { callout: "<strong>In case ≠ if:</strong> <em>in case</em> expresa precaución, no condición. <em>Take an umbrella in case it rains</em> significa que lo llevas ahora, llueva o no." }
  ],
  exercises: [
    { type: "mc", prompt: "___ the government to raise taxes, there would be protests.", options: ["Should", "Were", "Had"], answer: 1, explain: "Were + sujeto + to + infinitivo: hipótesis futura formal." },
    { type: "mc", prompt: "But ___ the referee's mistake, we would have won.", options: ["of", "for", "with"], answer: 1, explain: "But for + sustantivo = si no hubiera sido por." },
    { type: "gap", prompt: "Hurry up; ___ we'll miss the beginning of the film.", answers: ["otherwise", "or else", "or"], explain: "Otherwise = si no, de lo contrario." },
    { type: "mc", prompt: "Take some cash ___ the card machine isn't working.", options: ["in case", "if", "provided"], answer: 0, explain: "Precaución → in case." },
    { type: "transform", first: "If you need any further information, please call us.", keyword: "SHOULD", before: "", after: "any further information, please call us.", answers: ["should you need", "should you require"], explain: "Should + sujeto + infinitivo." },
    { type: "transform", first: "If I had known about the delay, I would have taken a later train.", keyword: "HAD", before: "", after: "about the delay, I would have taken a later train.", answers: ["had i known"], explain: "Had + sujeto + participio." },
    { type: "transform", first: "We wouldn't have finished on time without your support.", keyword: "BEEN", before: "", after: "your support, we wouldn't have finished on time.", answers: ["had it not been for", "if it hadn't been for", "if it had not been for"], explain: "Had it not been for + sustantivo = sin…" },
    { type: "transform", first: "You can use my car, but you must fill the tank.", keyword: "PROVIDED", before: "You can use my car", after: "the tank.", answers: ["provided you fill", "provided that you fill", "provided you refill", "provided that you refill"], explain: "Provided (that) + presente simple." }
  ]
},

"c1-04": {
  level: "c1", title: "Participle clauses", minutes: 30,
  intro: "Las cláusulas de participio condensan información y dan un estilo más elaborado y conciso. Sustituyen a oraciones con because, when, after, which o who.",
  content: [
    { h: "Los tres tipos" },
    { table: { head: ["Tipo", "Significado", "Ejemplo"], rows: [
      ["Presente (-ing)", "Activo, simultáneo o causa", "<em>Walking</em> down the street, I saw an old friend."],
      ["Pasado (-ed / 3ª forma)", "Pasivo", "<em>Built</em> in 1890, the bridge is still in use."],
      ["Perfecto (having + participio)", "Acción anterior a la principal", "<em>Having finished</em> the report, she went home."]
    ]}},
    { examples: [
      ["Not knowing what to say, I kept quiet.", "Como no sabía qué decir, me quedé callado."],
      ["Having lived in Spain for years, he speaks fluent Spanish.", "Como ha vivido años en España, habla español con fluidez."],
      ["Written in simple language, the book is ideal for beginners.", "Al estar escrito en lenguaje sencillo, el libro es ideal para principiantes."]
    ]},
    { h: "Relativas reducidas" },
    { p: "Puedes eliminar <em>who/which + be</em> o sustituir el verbo por su participio:" },
    { examples: [
      ["The man sitting by the window is my boss.", "El hombre (que está) sentado junto a la ventana es mi jefe."],
      ["Most of the goods made in this factory are exported.", "La mayoría de los productos fabricados en esta fábrica se exportan."]
    ]},
    { callout: "<strong>Error grave: el participio colgante</strong> (<em>dangling participle</em>). El sujeto implícito del participio debe ser el mismo que el de la oración principal. <em>Walking into the room, the lights went off</em> ✗ (¡las luces no entraron!). <em>Walking into the room, I noticed the lights were off</em> ✓." },
    { callout: "<strong>Negativa:</strong> <em>not</em> va delante del participio: <em>Not having</em> read the instructions, …" }
  ],
  exercises: [
    { type: "mc", prompt: "___ the report, she sent it to her manager.", options: ["Having finished", "Finished", "Being finish"], answer: 0, explain: "Acción anterior y activa → having + participio." },
    { type: "mc", prompt: "___ in 1890, the bridge is still in use today.", options: ["Building", "Built", "Having built"], answer: 1, explain: "Sentido pasivo (el puente fue construido) → participio pasado." },
    { type: "mc", prompt: "¿Qué frase es correcta?", options: ["Arriving at the station, the train had already left.", "Arriving at the station, we found that the train had already left.", "Arrived at the station, the train had left."], answer: 1, explain: "El sujeto de arriving debe ser el de la principal (we). La primera es un participio colgante." },
    { type: "gap", prompt: "The people ___ (live) next door are extremely noisy.", answers: ["living"], explain: "Relativa reducida activa: who live → living." },
    { type: "gap", prompt: "Most of the cars ___ (produce) here are sold abroad.", answers: ["produced"], explain: "Relativa reducida pasiva: which are produced → produced." },
    { type: "transform", first: "Because I didn't know the way, I asked a police officer.", keyword: "KNOWING", before: "", after: "the way, I asked a police officer.", answers: ["not knowing"], explain: "Causa negativa → Not + -ing." },
    { type: "transform", first: "After she had read the letter, she burst into tears.", keyword: "HAVING", before: "", after: "the letter, she burst into tears.", answers: ["having read"], explain: "Acción anterior → Having + participio." }
  ]
},

"c1-05": {
  level: "c1", title: "Hedging: hablar con cautela", minutes: 25,
  intro: "El hedging consiste en matizar las afirmaciones para no sonar categórico. Es imprescindible en el inglés académico y profesional, y los examinadores de C1 lo valoran como signo de madurez en Writing y Speaking.",
  content: [
    { h: "Por qué importa" },
    { p: "Una afirmación absoluta (<em>Social media destroys relationships</em>) es fácil de rebatir. Una matizada (<em>Social media <strong>may</strong> have a negative impact on <strong>some</strong> relationships</em>) es más precisa, más creíble y más propia de C1." },
    { h: "Recursos principales" },
    { table: { head: ["Recurso", "Ejemplos"], rows: [
      ["Modales", "may, might, could, would"],
      ["Verbos", "seem, appear, tend to, suggest, indicate"],
      ["Adverbios", "arguably, possibly, presumably, largely, to some extent, in some cases"],
      ["Adjetivos", "likely, unlikely, possible, probable"],
      ["Cuantificadores", "some, many, most (en lugar de all, everyone)"],
      ["Expresiones impersonales", "It would appear that…, It could be argued that…, There is some evidence that…"]
    ]}},
    { examples: [
      ["It could be argued that remote work increases productivity.", "Se podría argumentar que el teletrabajo aumenta la productividad."],
      ["The results seem to suggest a link between diet and mood.", "Los resultados parecen indicar una relación entre dieta y estado de ánimo."],
      ["Young people tend to spend more time online.", "Los jóvenes suelen pasar más tiempo en internet."],
      ["This is arguably the most important factor.", "Este es posiblemente el factor más importante."]
    ]},
    { callout: "<strong>Sin pasarse:</strong> demasiado hedging resta claridad. <em>It might possibly perhaps be the case that…</em> ✗. Usa uno o dos recursos por afirmación y mantén firmes tus conclusiones principales." }
  ],
  exercises: [
    { type: "mc", prompt: "¿Cuál es la versión más adecuada para un essay de C1?", options: ["Video games make children violent.", "There is some evidence that violent video games may increase aggression in certain children.", "Video games are totally bad for every child."], answer: 1, explain: "Combina evidencia, modal (may) y cuantificador (certain)." },
    { type: "gap", prompt: "The data ___ to suggest that the policy has been effective. (verbo)", answers: ["seem", "seems", "appear", "appears", "tend", "tends"], explain: "Data puede ir en plural o singular: seem(s) / appear(s) to suggest." },
    { type: "gap", prompt: "It ___ appear that the original estimate was too optimistic. (modal)", answers: ["would", "might", "could", "may"], explain: "It would appear that… es una fórmula muy frecuente." },
    { type: "gap", prompt: "Older employees ___ to be more loyal to their companies.", answers: ["tend"], explain: "Tend to = soler, generalización matizada." },
    { type: "mc", prompt: "This is ___ the most significant discovery of the decade.", options: ["arguably", "argue", "arguing"], answer: 0, explain: "Arguably = posiblemente, se podría decir que." },
    { type: "mc", prompt: "¿Qué palabra suaviza «All students prefer online classes»?", options: ["Every", "Many", "The"], answer: 1, explain: "Many students prefer… evita la generalización absoluta." },
    { type: "transform", first: "Perhaps the company will relocate its headquarters.", keyword: "LIKELY", before: "The company is", after: "its headquarters.", answers: ["likely to relocate", "likely to move"], explain: "Be likely to + infinitivo." }
  ]
},

"c1-06": {
  level: "c1", title: "Registro formal e informal", minutes: 30,
  intro: "En C1 se evalúa si adaptas el registro al lector: un email a un amigo, una carta a una empresa o un informe para tu jefe. En inglés el registro formal se apoya en vocabulario de origen latino y evita phrasal verbs y contracciones.",
  content: [
    { h: "Vocabulario: neutro → formal" },
    { table: { head: ["Informal / neutro", "Formal", "Informal / neutro", "Formal"], rows: [
      ["get", "obtain / receive", "ask for", "request"],
      ["find out", "discover / ascertain", "help", "assist"],
      ["start", "commence", "need", "require"],
      ["enough", "sufficient", "buy", "purchase"],
      ["tell", "inform", "about (cifras)", "approximately"],
      ["put off", "postpone", "look into", "investigate"],
      ["go up", "increase / rise", "get in touch", "contact"]
    ]}},
    { h: "Rasgos del registro formal" },
    { p: "Sin contracciones (<em>I would</em>, no <em>I'd</em>), más voz pasiva (<em>It has been decided…</em>), estructuras impersonales, frases completas y sin coloquialismos ni signos de exclamación." },
    { h: "Saludos y despedidas" },
    { table: { head: ["Situación", "Saludo", "Despedida"], rows: [
      ["No sabes el nombre (muy formal)", "Dear Sir or Madam,", "Yours faithfully,"],
      ["Sabes el nombre (formal)", "Dear Mr / Ms Smith,", "Yours sincerely,"],
      ["Semi-formal / profesional", "Dear Anna,", "Kind regards, / Best regards,"],
      ["Informal", "Hi Tom, / Hello Tom,", "Best wishes, / Cheers, / Love,"]
    ]}},
    { examples: [
      ["I am writing to enquire about the position advertised on your website.", "Le escribo para informarme sobre el puesto anunciado en su web."],
      ["I would be grateful if you could send me further details.", "Le agradecería que me enviara más información."],
      ["I look forward to hearing from you.", "Quedo a la espera de su respuesta."]
    ]},
    { callout: "<strong>Error típico:</strong> mezclar registros. <em>Dear Sir or Madam, … Anyway, hope to hear from you soon! Cheers</em> ✗. Mantén la coherencia de principio a fin." }
  ],
  exercises: [
    { type: "gap", prompt: "Formal de «find out»: We need to ___ the cause of the error.", answers: ["ascertain", "discover", "determine", "establish"], explain: "Ascertain / discover / determine son equivalentes formales." },
    { type: "gap", prompt: "Formal de «put off»: The meeting has been ___ until next week.", answers: ["postponed"], explain: "Put off → postpone." },
    { type: "gap", prompt: "Formal de «enough»: We do not have ___ funds to continue.", answers: ["sufficient", "adequate"], explain: "Enough → sufficient." },
    { type: "mc", prompt: "Empiezas con «Dear Sir or Madam». ¿Cómo terminas?", options: ["Yours sincerely,", "Yours faithfully,", "Best wishes,"], answer: 1, explain: "Destinatario desconocido → Yours faithfully (inglés británico)." },
    { type: "mc", prompt: "¿Cuál es la frase más adecuada para una carta formal?", options: ["Can you send me more info?", "I would be grateful if you could send me further information.", "Send me more info ASAP, please!"], answer: 1, explain: "Fórmula indirecta, sin abreviaturas ni exclamaciones." },
    { type: "mc", prompt: "Formal de «look into the matter»:", options: ["investigate the matter", "check out the matter", "go over the matter"], answer: 0, explain: "Look into → investigate." },
    { type: "transform", first: "Could you tell me when the course starts?", keyword: "INFORM", before: "I would be grateful if you could", after: "of the start date of the course.", answers: ["inform me"], explain: "Tell → inform somebody of something." }
  ]
},

"c1-07": {
  level: "c1", title: "Reading & Use of English: estrategias", minutes: 40,
  intro: "Es la prueba más larga del C1 Advanced: 90 minutos, 8 partes y 56 preguntas, y vale el 40 % de la nota (20 % Reading y 20 % Use of English). Una buena gestión del tiempo marca la diferencia.",
  content: [
    { h: "Las 8 partes de un vistazo" },
    { table: { head: ["Parte", "Tarea", "Preguntas", "Tiempo orientativo"], rows: [
      ["1", "Multiple-choice cloze (vocabulario, collocations)", "8", "6 min"],
      ["2", "Open cloze (gramática: preposiciones, auxiliares, conectores)", "8", "7 min"],
      ["3", "Word formation", "8", "7 min"],
      ["4", "Key word transformations", "6", "10 min"],
      ["5", "Multiple choice sobre texto largo", "6", "15 min"],
      ["6", "Cross-text multiple matching (4 textos)", "4", "12 min"],
      ["7", "Gapped text (párrafos eliminados)", "6", "15 min"],
      ["8", "Multiple matching (secciones de un texto)", "10", "13 min"]
    ]}},
    { callout: "<strong>Puntuación:</strong> en la Parte 4 cada pregunta vale hasta 2 puntos, así que puedes obtener puntuación parcial aunque no la tengas perfecta. Nunca dejes un hueco en blanco: los errores no restan." },
    { h: "Estrategias por parte" },
    { p: "<strong>Parte 1:</strong> lee la frase completa; la clave suele ser una collocation (<em>pay attention</em>, <em>draw a conclusion</em>) o la preposición que sigue al hueco." },
    { p: "<strong>Parte 2:</strong> las respuestas son palabras gramaticales cortas. Revisa las expresiones fijas (<em>as far as</em>, <em>in spite of</em>, <em>no matter how</em>)." },
    { p: "<strong>Parte 3:</strong> decide primero la categoría de palabra y si el sentido es negativo o plural." },
    { p: "<strong>Parte 4:</strong> no cambies la palabra clave, cuenta entre 3 y 6 palabras (contracciones cuentan como dos) y conserva el significado exacto." },
    { p: "<strong>Partes 5–8:</strong> lee primero las preguntas, localiza la sección y busca paráfrasis, no palabras idénticas: las coincidencias literales suelen ser trampas." },
    { callout: "<strong>Orden recomendado:</strong> muchos candidatos empiezan por las Partes 5–8, que puntúan más por pregunta respecto al tiempo invertido de lectura, y dejan el Use of English para el final. Pruébalo en tus simulacros y elige lo que te dé mejor resultado." }
  ],
  exercises: [
    { type: "mc", prompt: "Parte 1 · The new evidence ___ doubt on the official version of events.", options: ["casts", "throws out", "makes", "puts"], answer: 0, explain: "Collocation: cast doubt on something." },
    { type: "mc", prompt: "Parte 1 · Several factors ___ to the success of the campaign.", options: ["resulted", "contributed", "caused", "produced"], answer: 1, explain: "Contribute to something. Resulted iría con in, y caused/produced no llevan to." },
    { type: "mc", prompt: "Parte 1 · She was determined to ___ her ambition of becoming a surgeon.", options: ["reach", "fulfil", "arrive", "get"], answer: 1, explain: "Collocation: fulfil an ambition." },
    { type: "gap", prompt: "Parte 2 · ___ matter how hard I try, I can't remember his name.", answers: ["no"], explain: "No matter how + adjetivo/adverbio." },
    { type: "gap", prompt: "Parte 2 · ___ far as I know, the shop closes at eight.", answers: ["as", "so"], explain: "As far as I know (so far as I know también existe)." },
    { type: "gap", prompt: "Parte 2 · The concert went ahead in ___ of the heavy rain.", answers: ["spite"], explain: "In spite of = a pesar de." },
    { type: "gap", prompt: "Parte 3 · The ___ of the new manager was announced yesterday. (APPOINT)", answers: ["appointment"], explain: "Sustantivo: appoint → appointment." },
    { type: "gap", prompt: "Parte 3 · His comments were completely ___ to the discussion. (RELEVANT)", answers: ["irrelevant"], explain: "Sentido negativo: ir- + relevant." },
    { type: "transform", first: "It's a pity I didn't take the job.", keyword: "WISH", before: "I", after: "the job.", answers: ["wish i had taken", "wish i'd taken", "wish i had accepted", "wish i'd accepted"], explain: "Arrepentimiento pasado: wish + past perfect." }
  ]
},

"c1-08": {
  level: "c1", title: "Writing: essay, report y proposal", minutes: 40,
  intro: "La prueba de Writing dura 90 minutos y tiene dos tareas de 220–260 palabras. La Parte 1 es siempre un essay; en la Parte 2 eliges entre email/carta, proposal, report o review.",
  content: [
    { h: "Cómo te evalúan" },
    { table: { head: ["Criterio", "Qué se valora"], rows: [
      ["Content", "Que respondas a todos los puntos de la tarea con información relevante."],
      ["Communicative Achievement", "Registro, tono y formato adecuados al tipo de texto y al lector."],
      ["Organisation", "Párrafos claros y conectores variados que guíen al lector."],
      ["Language", "Rango y precisión de gramática y vocabulario."]
    ]}},
    { p: "Cada criterio se puntúa de 0 a 5, con un máximo de 20 puntos por tarea." },
    { h: "Essay (Parte 1)" },
    { p: "Recibes un tema, unas notas con <strong>tres</strong> aspectos y debes desarrollar <strong>dos</strong>, explicando cuál es más importante y por qué. Estructura recomendada:" },
    { table: { head: ["Párrafo", "Contenido"], rows: [
      ["Introducción", "Contextualiza el tema y anuncia los dos aspectos."],
      ["Desarrollo 1", "Primer aspecto con argumentos y ejemplos."],
      ["Desarrollo 2", "Segundo aspecto con argumentos y ejemplos."],
      ["Conclusión", "Indica cuál es más importante y justifícalo (¡no lo olvides!)."]
    ]}},
    { h: "Report vs proposal" },
    { table: { head: ["", "Report", "Proposal"], rows: [
      ["Enfoque", "Analiza una situación pasada o presente", "Propone acciones para el futuro"],
      ["Lector", "Superior, organismo, comité", "Superior, organismo, comité"],
      ["Formato", "Título y encabezados por sección", "Título y encabezados por sección"],
      ["Lenguaje típico", "It was found that… / The majority of…", "I would recommend… / It is proposed that…"],
      ["Cierre", "Conclusión y recomendaciones", "Beneficios esperados de la propuesta"]
    ]}},
    { h: "Lenguaje que suma puntos" },
    { examples: [
      ["It is widely believed that technology has transformed education.", "Se cree ampliamente que la tecnología ha transformado la educación."],
      ["Not only does this save money, but it also reduces waste.", "Esto no solo ahorra dinero, sino que también reduce residuos."],
      ["On balance, I would argue that funding is the more pressing issue.", "En conjunto, yo diría que la financiación es el problema más urgente."],
      ["It is therefore recommended that the scheme be extended.", "Por tanto, se recomienda ampliar el programa."]
    ]},
    { callout: "<strong>Gestión del tiempo:</strong> unos 45 minutos por tarea: 5–10 para planificar, 30 para escribir y 5 para revisar errores de concordancia, tiempos verbales y ortografía." }
  ],
  exercises: [
    { type: "mc", prompt: "En el essay de la Parte 1, ¿cuántos de los tres aspectos debes desarrollar?", options: ["Uno", "Dos", "Los tres"], answer: 1, explain: "Dos de los tres, indicando cuál es más importante." },
    { type: "mc", prompt: "¿Qué texto requiere encabezados y hace recomendaciones sobre el futuro?", options: ["Review", "Essay", "Proposal"], answer: 2, explain: "La proposal tiene encabezados y se orienta a acciones futuras." },
    { type: "mc", prompt: "¿Qué criterio evalúa el registro y el formato adecuados?", options: ["Content", "Communicative Achievement", "Language"], answer: 1, explain: "Communicative Achievement: adecuación al tipo de texto y al lector." },
    { type: "gap", prompt: "On ___, I would argue that education is the more important factor. (expresión de conclusión)", answers: ["balance"], explain: "On balance = sopesándolo todo." },
    { type: "gap", prompt: "It is therefore recommended that the scheme ___ extended. (subjuntivo)", answers: ["be"], explain: "Subjuntivo formal tras recommend that: be extended." },
    { type: "mc", prompt: "¿Qué conector introduce una idea contraria de forma formal?", options: ["Anyway", "Nevertheless", "Plus"], answer: 1, explain: "Nevertheless es formal; anyway y plus son coloquiales." },
    { type: "mc", prompt: "Frase adecuada para un report:", options: ["Loads of people said the canteen is rubbish.", "The majority of respondents expressed dissatisfaction with the canteen.", "Everybody hates the canteen!!"], answer: 1, explain: "Registro formal, impersonal y preciso." }
  ]
},

"c1-09": {
  level: "c1", title: "Speaking: partes 3 y 4 (discusión)", minutes: 30,
  intro: "El Speaking dura unos 15 minutos y se hace en parejas. Las partes 3 y 4 son las de mayor peso interactivo: debes colaborar con tu compañero, desarrollar ideas y defender opiniones con matices.",
  content: [
    { h: "Formato completo" },
    { table: { head: ["Parte", "Duración", "Tarea"], rows: [
      ["1 · Interview", "2 min", "Preguntas personales al candidato."],
      ["2 · Long turn", "4 min", "Comparas dos de tres fotos durante 1 minuto y comentas brevemente las de tu compañero."],
      ["3 · Collaborative task", "4 min", "Discusión en pareja con un diagrama de opciones (2 min) y una decisión conjunta (1 min)."],
      ["4 · Discussion", "5 min", "Preguntas más abstractas relacionadas con el tema de la Parte 3."]
    ]}},
    { callout: "<strong>Lo que se evalúa:</strong> Grammatical Resource, Lexical Resource, Discourse Management, Pronunciation e Interactive Communication. En la Parte 3 no importa la decisión final, sino cómo llegáis a ella." },
    { h: "Implicar a tu compañero" },
    { examples: [
      ["What's your take on this one?", "¿Qué opinas de esta?"],
      ["Would you agree that this is the most important factor?", "¿Estarías de acuerdo en que este es el factor más importante?"],
      ["Shall we move on to the next one?", "¿Pasamos a la siguiente?"]
    ]},
    { h: "Discrepar con educación" },
    { examples: [
      ["I see your point, but I'm not entirely convinced.", "Entiendo lo que dices, pero no estoy del todo convencido."],
      ["That's a fair point. Having said that, …", "Es un argumento razonable. Dicho esto, …"],
      ["I'd look at it slightly differently.", "Yo lo vería de forma algo distinta."]
    ]},
    { h: "Ganar tiempo y llegar a una decisión" },
    { examples: [
      ["That's an interesting question. Let me think…", "Es una pregunta interesante. Déjame pensar…"],
      ["So, are we agreed that funding should come first?", "Entonces, ¿estamos de acuerdo en que la financiación va primero?"],
      ["Shall we go for this one, then?", "¿Nos quedamos con esta, entonces?"]
    ]},
    { callout: "<strong>Parte 4:</strong> no respondas con una sola frase. Usa la estructura <em>opinión → razón → ejemplo → matiz</em>: <em>I'd say… because… For instance… That said, it depends on…</em>" }
  ],
  exercises: [
    { type: "mc", prompt: "Tu compañero acaba de dar su opinión. ¿Qué es mejor para la interacción?", options: ["Ignorarla y dar la tuya.", "Reaccionar a su idea y añadir la tuya: «That's a good point, and I'd add that…»", "Quedarte en silencio hasta que el examinador pregunte."], answer: 1, explain: "Interactive Communication: reaccionar y desarrollar las ideas del compañero." },
    { type: "mc", prompt: "Forma educada de discrepar:", options: ["You're wrong.", "I see your point, but I'm not entirely convinced.", "No way!"], answer: 1, explain: "Reconoce el argumento antes de discrepar." },
    { type: "mc", prompt: "En la Parte 3, ¿qué valora el examinador?", options: ["Que lleguéis a la decisión correcta.", "Cómo negociáis y llegáis a la decisión.", "Que hables más que tu compañero."], answer: 1, explain: "No hay respuesta correcta: cuenta el proceso de interacción." },
    { type: "gap", prompt: "That's a fair point. Having ___ that, I think cost matters more.", answers: ["said"], explain: "Having said that = dicho esto." },
    { type: "gap", prompt: "What's your ___ on this? (= ¿qué opinas?)", answers: ["take", "view", "opinion"], explain: "What's your take on… es natural y frecuente." },
    { type: "gap", prompt: "So, are we ___ that education should come first?", answers: ["agreed"], explain: "Are we agreed that… para cerrar la decisión." },
    { type: "mc", prompt: "Mejor respuesta en la Parte 4 a «Should university be free?»:", options: ["Yes.", "Yes, because it's good.", "I'd say it should be, mainly because it widens access. In Scandinavia, for instance, … That said, someone has to fund it."], answer: 2, explain: "Opinión, razón, ejemplo y matiz: desarrollo propio de C1." }
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
