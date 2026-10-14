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

"a1-02": {
  level: "a1", title: "Pronombres y adjetivos posesivos", minutes: 20,
  intro: "En inglés hay formas distintas para el sujeto (I), el objeto (me), el posesivo delante de un sustantivo (my) y el posesivo que va solo (mine). Dominar esta tabla evita muchos errores básicos.",
  content: [
    { h: "La tabla completa" },
    { table: { head: ["Sujeto", "Objeto", "Adjetivo posesivo", "Pronombre posesivo"], rows: [
      ["I", "me", "my", "mine"],
      ["you", "you", "your", "yours"],
      ["he", "him", "his", "his"],
      ["she", "her", "her", "hers"],
      ["it", "it", "its", "—"],
      ["we", "us", "our", "ours"],
      ["they", "them", "their", "theirs"]
    ]}},
    { examples: [
      ["She loves him.", "Ella lo quiere."],
      ["This is my car.", "Este es mi coche."],
      ["This car is mine.", "Este coche es mío."],
      ["Their house is bigger than ours.", "Su casa es más grande que la nuestra."]
    ]},
    { callout: "<strong>His / her:</strong> en español «su» sirve para todo, pero en inglés depende del <em>poseedor</em>, no de la cosa poseída. <em>Ana and her brother</em> (el hermano de Ana) · <em>Tom and his sister</em> (la hermana de Tom)." },
    { callout: "<strong>Its ≠ it's:</strong> <em>its</em> es posesivo (<em>The dog wagged its tail</em>); <em>it's</em> es la contracción de <em>it is</em>." },
    { h: "El genitivo sajón: 's" },
    { p: "Para decir de quién es algo con un nombre propio o un sustantivo: <strong>poseedor + 's + cosa</strong>. Con plurales terminados en -s, solo apóstrofo." },
    { examples: [
      ["This is Maria's book.", "Este es el libro de María."],
      ["My parents' house is in Lima.", "La casa de mis padres está en Lima."]
    ]}
  ],
  exercises: [
    { type: "mc", prompt: "Ana is talking to ___ brother.", options: ["his", "her", "she"], answer: 1, explain: "La poseedora es Ana (mujer) → her." },
    { type: "mc", prompt: "Can you help ___, please?", options: ["I", "my", "me"], answer: 2, explain: "Después de un verbo va el pronombre objeto: me." },
    { type: "gap", prompt: "This bag isn't mine. It's ___. (de ella)", answers: ["hers"], explain: "Pronombre posesivo de she: hers (sin apóstrofo)." },
    { type: "gap", prompt: "We love ___ new flat. (nuestro)", answers: ["our"], explain: "Adjetivo posesivo de we: our." },
    { type: "mc", prompt: "The company changed ___ logo.", options: ["it's", "its", "his"], answer: 1, explain: "Posesivo de it: its (sin apóstrofo)." },
    { type: "gap", prompt: "I don't know those people. Do you know ___?", answers: ["them"], explain: "Objeto de they: them." },
    { type: "mc", prompt: "«El coche de Pedro»:", options: ["the car of Pedro", "Pedro's car", "Pedros car"], answer: 1, explain: "Genitivo sajón: Pedro's car." }
  ]
},

"a1-03": {
  level: "a1", title: "Números, el alfabeto y deletrear", minutes: 25,
  intro: "Deletrear tu nombre, dar tu teléfono o entender un precio son tareas que harás desde el primer día. Las letras inglesas suenan muy distinto a las españolas: escúchalas con atención.",
  content: [
    { h: "Las letras que más confunden" },
    { table: { head: ["Letra", "Suena aproximadamente", "Cuidado con"], rows: [
      ["A", "/eɪ/ «ei»", "no es «a»"],
      ["E", "/iː/ «ii»", "se confunde con la I española"],
      ["I", "/aɪ/ «ai»", "no es «i»"],
      ["G", "/dʒiː/ «yi»", "se confunde con J"],
      ["J", "/dʒeɪ/ «yei»", "se confunde con G"],
      ["H", "/eɪtʃ/ «eich»", ""],
      ["R", "/ɑː/ «aa» (UK)", ""],
      ["W", "«double u»", "dos «u»"],
      ["Y", "/waɪ/ «uai»", ""],
      ["Z", "/zed/ (UK) · /ziː/ (US)", ""]
    ]}},
    { examples: [
      ["A, E, I, O, U", "Las vocales"],
      ["G, J", "Las dos que más se confunden"],
      ["How do you spell your surname? — G-A-R-C-I-A.", "¿Cómo se escribe tu apellido? — G-A-R-C-I-A."]
    ]},
    { callout: "<strong>Letras dobles:</strong> se dice <em>double</em>: «Hello» → <em>H-E-double L-O</em>." },
    { h: "Números: el acento importa" },
    { p: "Los números -teen llevan el acento al final; las decenas, al principio. Es la causa de muchos malentendidos." },
    { examples: [
      ["thirteen — thirty", "13 — 30"],
      ["fifteen — fifty", "15 — 50"],
      ["eighteen — eighty", "18 — 80"],
      ["one hundred and twenty-five", "125 (en inglés británico se dice «and»)"]
    ]},
    { h: "Teléfonos, precios y fechas" },
    { examples: [
      ["My number is oh-seven-seven, double four, five-two-nine.", "Mi número es 077 44 529."],
      ["It costs nine ninety-nine.", "Cuesta 9,99."],
      ["My birthday is on the third of May.", "Mi cumpleaños es el 3 de mayo."]
    ]},
    { callout: "<strong>Ordinales para fechas:</strong> first, second, third, fourth, fifth… twentieth, twenty-first. En inglés las fechas se dicen con ordinal: <em>the 3rd of May</em>, no «the three of May»." }
  ],
  exercises: [
    { type: "mc", prompt: "¿Qué letra suena /iː/ («ii»)?", options: ["I", "E", "Y"], answer: 1, explain: "La E inglesa suena /iː/." },
    { type: "mc", prompt: "¿Qué letra suena /aɪ/ («ai»)?", options: ["I", "E", "A"], answer: 0, explain: "La I inglesa suena /aɪ/." },
    { type: "mc", prompt: "¿Cómo se deletrea «Anna»?", options: ["A-double N-A", "A-N-A", "A-two N-A"], answer: 0, explain: "Letras repetidas: double + letra." },
    { type: "gap", prompt: "Escribe en letras el número 30:", answers: ["thirty"], explain: "30 = thirty (acento al principio: THIR-ty)." },
    { type: "gap", prompt: "Escribe en letras el número 15:", answers: ["fifteen"], explain: "15 = fifteen (acento al final: fif-TEEN)." },
    { type: "gap", prompt: "Ordinal de «three» (para fechas):", answers: ["third", "3rd"], explain: "One → first, two → second, three → third." },
    { type: "mc", prompt: "El 0 en un número de teléfono británico se suele decir:", options: ["zero o «oh»", "nothing", "none"], answer: 0, explain: "En teléfonos es muy común «oh»." }
  ]
},

"a1-04": {
  level: "a1", title: "Present simple: afirmativa", minutes: 25,
  intro: "El present simple expresa hábitos, rutinas, gustos y hechos generales. Su única dificultad en afirmativa es la -s de la tercera persona del singular (he, she, it).",
  content: [
    { h: "Forma" },
    { table: { head: ["Persona", "Verbo", "Ejemplo"], rows: [
      ["I / you / we / they", "infinitivo", "I work in an office."],
      ["he / she / it", "infinitivo + -s", "She works in a hospital."]
    ]}},
    { h: "Reglas ortográficas de la -s" },
    { table: { head: ["Regla", "Ejemplos"], rows: [
      ["La mayoría: + -s", "play → plays, read → reads"],
      ["Terminados en -s, -sh, -ch, -x, -o: + -es", "watch → watches, go → goes, do → does"],
      ["Consonante + y: -y → -ies", "study → studies, fly → flies"],
      ["Irregular", "have → has"]
    ]}},
    { examples: [
      ["I get up at seven every day.", "Me levanto a las siete todos los días."],
      ["He watches TV after dinner.", "Él ve la tele después de cenar."],
      ["My sister studies law.", "Mi hermana estudia derecho."],
      ["Water boils at 100 degrees.", "El agua hierve a 100 grados."]
    ]},
    { callout: "<strong>Pronunciación de la -s:</strong> /s/ tras sonidos sordos (<em>works</em>), /z/ tras sonoros (<em>plays</em>) y /ɪz/ tras s, sh, ch, x (<em>watches</em>, <em>finishes</em>)." },
    { callout: "<strong>Error muy frecuente:</strong> olvidar la -s. «She work here» ✗ → <em>She works here</em> ✓. Repasa siempre he/she/it." }
  ],
  exercises: [
    { type: "gap", prompt: "My brother ___ (live) in Madrid.", answers: ["lives"], explain: "Tercera persona: live → lives." },
    { type: "gap", prompt: "She ___ (watch) a film every Friday.", answers: ["watches"], explain: "Termina en -ch → -es." },
    { type: "gap", prompt: "He ___ (study) English at university.", answers: ["studies"], explain: "Consonante + y → -ies." },
    { type: "gap", prompt: "Laura ___ (have) two cats.", answers: ["has"], explain: "Have es irregular: has." },
    { type: "mc", prompt: "We ___ to the gym on Mondays.", options: ["goes", "go", "going"], answer: 1, explain: "We → infinitivo sin -s." },
    { type: "gap", prompt: "The shop ___ (close) at 8 pm.", answers: ["closes"], explain: "The shop = it → closes." },
    { type: "mc", prompt: "¿Cómo se pronuncia la -s de «watches»?", options: ["/s/", "/z/", "/ɪz/"], answer: 2, explain: "Tras ch se añade una sílaba: /ɪz/." }
  ]
},

"a1-05": {
  level: "a1", title: "Present simple: negativa y preguntas", minutes: 25,
  intro: "Para negar y preguntar en present simple se usa el auxiliar do / does. Es una estructura que no existe en español y conviene automatizarla cuanto antes.",
  content: [
    { h: "Negativa" },
    { table: { head: ["Persona", "Forma", "Ejemplo"], rows: [
      ["I / you / we / they", "don't (do not) + infinitivo", "I don't like coffee."],
      ["he / she / it", "doesn't (does not) + infinitivo", "She doesn't eat meat."]
    ]}},
    { callout: "<strong>La -s se va al auxiliar:</strong> con <em>doesn't</em> el verbo principal pierde la -s. «She doesn't works» ✗ → <em>She doesn't work</em> ✓." },
    { h: "Preguntas y respuestas cortas" },
    { examples: [
      ["Do you speak English? — Yes, I do.", "¿Hablas inglés? — Sí."],
      ["Does he work here? — No, he doesn't.", "¿Trabaja aquí? — No."],
      ["Where do you live?", "¿Dónde vives?"],
      ["What time does the film start?", "¿A qué hora empieza la película?"]
    ]},
    { h: "Orden de la pregunta" },
    { table: { head: ["Palabra interrogativa", "Auxiliar", "Sujeto", "Verbo", "Resto"], rows: [
      ["—", "Do", "you", "like", "pizza?"],
      ["Where", "does", "she", "work?", ""],
      ["How often", "do", "they", "travel?", ""]
    ]}},
    { callout: "<strong>Recuerda:</strong> con el verbo <em>to be</em> no se usa do: <em>Are you tired?</em>, no «Do you are tired?»." }
  ],
  exercises: [
    { type: "gap", prompt: "I ___ (not / like) horror films.", answers: ["don't like", "do not like"], explain: "I → don't + infinitivo." },
    { type: "gap", prompt: "He ___ (not / drive) to work.", answers: ["doesn't drive", "does not drive"], explain: "He → doesn't + infinitivo sin -s." },
    { type: "mc", prompt: "___ your mother speak French?", options: ["Do", "Does", "Is"], answer: 1, explain: "Your mother = she → Does." },
    { type: "mc", prompt: "Where ___ you work?", options: ["do", "does", "are"], answer: 0, explain: "You → do." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["She doesn't likes tea.", "She don't like tea.", "She doesn't like tea."], answer: 2, explain: "Doesn't + infinitivo sin -s." },
    { type: "mc", prompt: "«Do they live in Bogotá?» — «Yes, ___»", options: ["they do", "they live", "they are"], answer: 0, explain: "Respuesta corta con el auxiliar: Yes, they do." },
    { type: "gap", prompt: "What time ___ the train leave?", answers: ["does"], explain: "The train = it → does." }
  ]
},

"a1-06": {
  level: "a1", title: "Adverbios de frecuencia", minutes: 20,
  intro: "Always, usually, sometimes, never… indican con qué frecuencia haces algo. Lo importante es su posición en la frase, que no siempre coincide con el español.",
  content: [
    { h: "De más a menos frecuente" },
    { table: { head: ["Adverbio", "Frecuencia aproximada", "Español"], rows: [
      ["always", "100 %", "siempre"],
      ["usually", "80 %", "normalmente"],
      ["often", "60 %", "a menudo"],
      ["sometimes", "40 %", "a veces"],
      ["rarely / hardly ever", "10 %", "casi nunca"],
      ["never", "0 %", "nunca"]
    ]}},
    { h: "Posición" },
    { p: "Van <strong>delante del verbo principal</strong>, pero <strong>detrás del verbo to be</strong>." },
    { examples: [
      ["I always have breakfast at home.", "Siempre desayuno en casa."],
      ["She is never late.", "Ella nunca llega tarde."],
      ["We sometimes go to the beach.", "A veces vamos a la playa."],
      ["Do you often eat out?", "¿Comes fuera a menudo?"]
    ]},
    { callout: "<strong>Never ya es negativo:</strong> «I don't never smoke» ✗ → <em>I never smoke</em> ✓. En inglés no se usa doble negación." },
    { h: "Expresiones de frecuencia" },
    { p: "Para expresiones más concretas, colócalas al final: <em>once a week</em> (una vez a la semana), <em>twice a month</em> (dos veces al mes), <em>three times a year</em>, <em>every day</em>. Pregunta con <strong>How often…?</strong>" },
    { examples: [
      ["How often do you go to the gym? — Twice a week.", "¿Con qué frecuencia vas al gimnasio? — Dos veces por semana."]
    ]}
  ],
  exercises: [
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I go always to work by bus.", "I always go to work by bus.", "Always I go to work by bus."], answer: 1, explain: "Delante del verbo principal." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["He is usually tired.", "He usually is tired.", "Usually he tired is."], answer: 0, explain: "Detrás del verbo to be." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I don't never eat meat.", "I never eat meat.", "I eat never meat."], answer: 1, explain: "Never ya es negativo y va delante del verbo." },
    { type: "gap", prompt: "___ often do you visit your parents?", answers: ["how"], explain: "How often…? pregunta por la frecuencia." },
    { type: "gap", prompt: "I play tennis ___ a week. (dos veces)", answers: ["twice", "two times"], explain: "Dos veces = twice." },
    { type: "gap", prompt: "We go to the cinema ___ a month. (una vez)", answers: ["once", "one time"], explain: "Una vez = once." },
    { type: "mc", prompt: "«Casi nunca»:", options: ["usually", "often", "hardly ever"], answer: 2, explain: "Hardly ever = rarely = casi nunca." }
  ]
},

"a1-07": {
  level: "a1", title: "There is / there are", minutes: 20,
  intro: "There is / there are equivale a «hay». Se usa para decir que algo existe o está en un lugar, y concuerda con lo que viene después.",
  content: [
    { h: "Forma" },
    { table: { head: ["", "Singular", "Plural"], rows: [
      ["Afirmativa", "There is (There's) a bank.", "There are some shops."],
      ["Negativa", "There isn't a bank.", "There aren't any shops."],
      ["Pregunta", "Is there a bank?", "Are there any shops?"],
      ["Respuesta corta", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."]
    ]}},
    { examples: [
      ["There's a supermarket near my house.", "Hay un supermercado cerca de mi casa."],
      ["There are three bedrooms in the flat.", "Hay tres dormitorios en el piso."],
      ["Is there a pharmacy around here?", "¿Hay una farmacia por aquí?"],
      ["How many students are there in your class?", "¿Cuántos estudiantes hay en tu clase?"]
    ]},
    { h: "Some y any" },
    { p: "<strong>Some</strong> en afirmativas con plurales e incontables; <strong>any</strong> en negativas y preguntas." },
    { examples: [
      ["There's some milk in the fridge.", "Hay leche en la nevera."],
      ["There isn't any bread.", "No hay pan."]
    ]},
    { callout: "<strong>Error típico:</strong> traducir «hay» como «it has» o «have». «In my city have many parks» ✗ → <em>There are many parks in my city</em> ✓." }
  ],
  exercises: [
    { type: "mc", prompt: "___ two parks in my town.", options: ["There is", "There are", "It has"], answer: 1, explain: "Plural → there are." },
    { type: "mc", prompt: "___ a cash machine near here?", options: ["Is there", "Are there", "There is"], answer: 0, explain: "Pregunta singular: Is there…?" },
    { type: "gap", prompt: "There ___ any eggs in the fridge. (negativa)", answers: ["aren't", "are not"], explain: "Plural negativo: there aren't any." },
    { type: "mc", prompt: "There is ___ cheese on the table.", options: ["any", "a", "some"], answer: 2, explain: "Incontable en afirmativa → some." },
    { type: "mc", prompt: "Are there ___ hotels in the village?", options: ["some", "any", "a"], answer: 1, explain: "Pregunta → any." },
    { type: "gap", prompt: "How many people ___ there in your family?", answers: ["are"], explain: "How many + plural → are there." },
    { type: "mc", prompt: "«Hay mucho tráfico en Madrid»:", options: ["Madrid has a lot of traffic there.", "There is a lot of traffic in Madrid.", "Is a lot of traffic in Madrid."], answer: 1, explain: "Traffic es incontable → there is." }
  ]
},

"a1-08": {
  level: "a1", title: "Preposiciones de lugar", minutes: 20,
  intro: "Las preposiciones de lugar indican dónde está algo. Las tres básicas (in, on, at) no tienen una equivalencia exacta con «en», así que conviene aprenderlas con ejemplos.",
  content: [
    { h: "In, on, at" },
    { table: { head: ["Preposición", "Uso", "Ejemplos"], rows: [
      ["in", "dentro de un espacio", "in the box, in the kitchen, in Spain, in a car"],
      ["on", "sobre una superficie", "on the table, on the wall, on the floor, on a bus"],
      ["at", "un punto o lugar concreto", "at the door, at the bus stop, at home, at work, at school"]
    ]}},
    { callout: "<strong>Para memorizar:</strong> <em>at home, at work, at school, at university</em> (sin artículo). <em>In a car / in a taxi</em>, pero <em>on a bus / on a train / on a plane</em>." },
    { h: "Otras preposiciones" },
    { table: { head: ["Inglés", "Español"], rows: [
      ["under", "debajo de"],
      ["next to / beside", "al lado de"],
      ["between", "entre (dos cosas)"],
      ["behind", "detrás de"],
      ["in front of", "delante de"],
      ["opposite", "enfrente de"],
      ["near", "cerca de"]
    ]}},
    { examples: [
      ["The keys are on the table.", "Las llaves están en la mesa."],
      ["The cat is under the bed.", "El gato está debajo de la cama."],
      ["The bank is between the café and the pharmacy.", "El banco está entre la cafetería y la farmacia."],
      ["There's a park opposite my house.", "Hay un parque enfrente de mi casa."]
    ]},
    { callout: "<strong>Falso amigo:</strong> <em>in front of</em> es «delante de». «Enfrente de» (al otro lado) es <em>opposite</em>." }
  ],
  exercises: [
    { type: "mc", prompt: "There's a picture ___ the wall.", options: ["in", "on", "at"], answer: 1, explain: "Superficie → on the wall." },
    { type: "mc", prompt: "I'm ___ home tonight.", options: ["in", "on", "at"], answer: 2, explain: "Expresión fija: at home." },
    { type: "mc", prompt: "The milk is ___ the fridge.", options: ["in", "on", "at"], answer: 0, explain: "Dentro → in." },
    { type: "mc", prompt: "We met ___ the bus.", options: ["in", "on", "at"], answer: 1, explain: "Transporte público → on the bus." },
    { type: "gap", prompt: "The shoes are ___ the bed. (debajo de)", answers: ["under", "underneath", "beneath"], explain: "Debajo de = under." },
    { type: "gap", prompt: "The bank is ___ the post office. (enfrente de, al otro lado de la calle)", answers: ["opposite", "across from"], explain: "Enfrente de = opposite (UK) / across from (US)." },
    { type: "gap", prompt: "Sit ___ me, here. (al lado de; escribe dos palabras)", answers: ["next to", "beside"], explain: "Al lado de = next to / beside." }
  ]
},

"a1-09": {
  level: "a1", title: "Can para habilidad y permiso", minutes: 20,
  intro: "Can es un verbo modal: expresa lo que sabes o puedes hacer, pide permiso y hace peticiones. Es muy sencillo porque no cambia nunca de forma.",
  content: [
    { h: "Forma" },
    { table: { head: ["", "Forma", "Ejemplo"], rows: [
      ["Afirmativa", "sujeto + can + infinitivo", "She can swim."],
      ["Negativa", "can't (cannot) + infinitivo", "I can't drive."],
      ["Pregunta", "Can + sujeto + infinitivo?", "Can you cook?"],
      ["Respuesta corta", "Yes, I can. / No, I can't.", ""]
    ]}},
    { callout: "<strong>Sin to y sin -s:</strong> «He cans swim» ✗ · «I can to swim» ✗ → <em>He can swim</em> ✓." },
    { h: "Usos" },
    { examples: [
      ["I can speak three languages.", "Sé hablar tres idiomas. (habilidad)"],
      ["Can I open the window?", "¿Puedo abrir la ventana? (permiso)"],
      ["Can you help me, please?", "¿Me puedes ayudar, por favor? (petición)"],
      ["You can't park here.", "No puedes aparcar aquí. (prohibición)"]
    ]},
    { callout: "<strong>Más cortés:</strong> <em>Could you…?</em> es más educado que <em>Can you…?</em> para pedir algo a un desconocido: <em>Could you tell me the time, please?</em>" },
    { callout: "<strong>Pronunciación:</strong> en afirmativa <em>can</em> suele sonar débil /kən/; <em>can't</em> se pronuncia fuerte: /kɑːnt/ en inglés británico y /kænt/ en americano. La diferencia está más en el acento que en la t." }
  ],
  exercises: [
    { type: "mc", prompt: "My grandmother ___ use a smartphone.", options: ["cans", "can", "can to"], answer: 1, explain: "Can no cambia: she can." },
    { type: "gap", prompt: "I ___ (not / swim). I never learnt.", answers: ["can't", "cannot", "can not"], explain: "Negativa: can't / cannot." },
    { type: "mc", prompt: "___ I use your phone?", options: ["Can", "Do", "Am"], answer: 0, explain: "Pedir permiso: Can I…?" },
    { type: "mc", prompt: "«Can you play the guitar?» — «No, ___»", options: ["I don't", "I can't", "I not can"], answer: 1, explain: "Respuesta corta con can: No, I can't." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["She can to dance.", "She cans dance.", "She can dance."], answer: 2, explain: "Can + infinitivo sin to." },
    { type: "mc", prompt: "Petición más educada a un desconocido:", options: ["Tell me the time.", "Could you tell me the time, please?", "You can tell me the time?"], answer: 1, explain: "Could you…, please? es la forma más cortés." },
    { type: "gap", prompt: "___ you speak more slowly, please? (petición)", answers: ["can", "could"], explain: "Can / Could you…?" }
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

"a2-01": {
  level: "a2", title: "Past simple de to be", minutes: 20,
  intro: "Was y were son el pasado de to be. Sirven para decir dónde estabas, cómo era algo o cuándo naciste, y son la base para contar cualquier historia.",
  content: [
    { h: "Forma" },
    { table: { head: ["", "I / he / she / it", "you / we / they"], rows: [
      ["Afirmativa", "was", "were"],
      ["Negativa", "wasn't (was not)", "weren't (were not)"],
      ["Pregunta", "Was he…?", "Were you…?"]
    ]}},
    { examples: [
      ["I was at home last night.", "Anoche estaba en casa."],
      ["The film was really boring.", "La película fue muy aburrida."],
      ["We weren't tired.", "No estábamos cansados."],
      ["Were you at the party? — Yes, I was.", "¿Estuviste en la fiesta? — Sí."]
    ]},
    { h: "Expresiones útiles" },
    { examples: [
      ["I was born in 1995.", "Nací en 1995."],
      ["There was a problem with the car.", "Hubo un problema con el coche."],
      ["There were a lot of people.", "Había mucha gente."]
    ]},
    { callout: "<strong>Born:</strong> en inglés «nacer» se expresa con <em>to be born</em>. «I born in Chile» ✗ · «I was born in Chile» ✓." },
    { callout: "<strong>Pronunciación:</strong> en afirmativa <em>was</em> suena débil /wəz/; en respuestas cortas y negativas suena fuerte /wɒz/: <em>Yes, I was</em>." }
  ],
  exercises: [
    { type: "mc", prompt: "My parents ___ in Paris last week.", options: ["was", "were", "are"], answer: 1, explain: "Plural en pasado → were." },
    { type: "mc", prompt: "The hotel ___ very expensive.", options: ["were", "was", "is been"], answer: 1, explain: "Singular → was." },
    { type: "gap", prompt: "I ___ born in 1988.", answers: ["was"], explain: "To be born → I was born." },
    { type: "gap", prompt: "We ___ at work yesterday. It was a holiday. (negativa)", answers: ["weren't", "were not"], explain: "Plural negativo: weren't." },
    { type: "mc", prompt: "___ there many people at the concert?", options: ["Was", "Were", "Did"], answer: 1, explain: "Many people → plural → Were there…?" },
    { type: "mc", prompt: "«Was she angry?» — «No, ___»", options: ["she didn't", "she wasn't", "she weren't"], answer: 1, explain: "Respuesta corta con to be: No, she wasn't." },
    { type: "gap", prompt: "There ___ a strange noise in the night.", answers: ["was"], explain: "Singular → there was." }
  ]
},

"a2-03": {
  level: "a2", title: "Past continuous vs past simple", minutes: 25,
  intro: "El past continuous describe una acción en progreso en un momento del pasado. Combinado con el past simple, permite contar qué estaba pasando cuando ocurrió algo.",
  content: [
    { h: "Forma del past continuous" },
    { p: "<strong>was / were + verbo en -ing.</strong>" },
    { examples: [
      ["At 9 pm I was having dinner.", "A las 9 estaba cenando."],
      ["They were watching TV.", "Estaban viendo la tele."],
      ["What were you doing at midnight?", "¿Qué estabas haciendo a medianoche?"]
    ]},
    { h: "Acción larga interrumpida" },
    { table: { head: ["Past continuous (acción larga)", "Past simple (acción corta)"], rows: [
      ["I was cooking", "when the phone rang."],
      ["While she was driving,", "she saw an accident."],
      ["We were walking home", "when it started to rain."]
    ]}},
    { callout: "<strong>When y while:</strong> <em>when</em> suele ir con la acción corta (past simple) y <em>while</em> con la larga (past continuous)." },
    { h: "Dos acciones simultáneas" },
    { examples: [
      ["While I was studying, my brother was playing video games.", "Mientras yo estudiaba, mi hermano jugaba a videojuegos."]
    ]},
    { callout: "<strong>Verbos de estado:</strong> verbos como <em>know, like, want, believe</em> no suelen ir en forma continua. «I was knowing him» ✗ · «I knew him» ✓." }
  ],
  exercises: [
    { type: "gap", prompt: "I ___ (sleep) when you called me.", answers: ["was sleeping"], explain: "Acción larga interrumpida → past continuous." },
    { type: "gap", prompt: "While we were having lunch, the lights ___ (go) out.", answers: ["went"], explain: "Acción corta → past simple: went." },
    { type: "mc", prompt: "What ___ at 8 o'clock last night?", options: ["did you do", "were you doing", "you were doing"], answer: 1, explain: "Acción en progreso en un momento concreto → past continuous." },
    { type: "mc", prompt: "She broke her leg while she ___.", options: ["skied", "was skiing", "is skiing"], answer: 1, explain: "While + acción larga → was skiing." },
    { type: "mc", prompt: "I ___ him for years before we worked together.", options: ["was knowing", "knew", "was know"], answer: 1, explain: "Know es verbo de estado → past simple." },
    { type: "gap", prompt: "They ___ (not / listen) when the teacher explained it.", answers: ["weren't listening", "were not listening"], explain: "Negativa: weren't + -ing." },
    { type: "mc", prompt: "When I arrived, everybody ___.", options: ["danced", "was dancing", "were dancing"], answer: 1, explain: "Everybody es singular → was dancing." }
  ]
},

"a2-04": {
  level: "a2", title: "Comparativos", minutes: 25,
  intro: "Los comparativos sirven para comparar dos cosas. La forma depende de la longitud del adjetivo, y hay algunos irregulares muy frecuentes.",
  content: [
    { h: "Formación" },
    { table: { head: ["Adjetivo", "Regla", "Ejemplo"], rows: [
      ["Una sílaba", "+ -er", "cheap → cheaper, tall → taller"],
      ["Una sílaba terminada en consonante-vocal-consonante", "doble consonante + -er", "big → bigger, hot → hotter"],
      ["Dos sílabas terminadas en -y", "-y → -ier", "easy → easier, happy → happier"],
      ["Dos o más sílabas", "more + adjetivo", "expensive → more expensive"],
      ["Irregulares", "—", "good → better, bad → worse, far → further/farther"]
    ]}},
    { examples: [
      ["London is bigger than Madrid.", "Londres es más grande que Madrid."],
      ["This exercise is easier than the last one.", "Este ejercicio es más fácil que el anterior."],
      ["Flying is more expensive than taking the train.", "Volar es más caro que ir en tren."],
      ["My English is better than it was last year.", "Mi inglés es mejor que el año pasado."]
    ]},
    { h: "Igualdad: as … as" },
    { examples: [
      ["She is as tall as her mother.", "Es tan alta como su madre."],
      ["The film wasn't as good as the book.", "La película no fue tan buena como el libro."]
    ]},
    { callout: "<strong>Errores típicos:</strong> «more big» ✗ → <em>bigger</em> ✓ · «more better» ✗ → <em>better</em> ✓ · «bigger that» ✗ → <em>bigger than</em> ✓." }
  ],
  exercises: [
    { type: "gap", prompt: "A car is ___ (fast) than a bike.", answers: ["faster"], explain: "Una sílaba: + -er." },
    { type: "gap", prompt: "Today is ___ (hot) than yesterday.", answers: ["hotter"], explain: "Consonante-vocal-consonante → doble t: hotter." },
    { type: "gap", prompt: "Spanish is ___ (easy) than Chinese for me.", answers: ["easier"], explain: "-y → -ier." },
    { type: "gap", prompt: "This hotel is ___ (comfortable) than the other one.", answers: ["more comfortable"], explain: "Adjetivo largo → more + adjetivo." },
    { type: "mc", prompt: "My cold is ___ today than yesterday.", options: ["badder", "worse", "more bad"], answer: 1, explain: "Bad → worse (irregular)." },
    { type: "mc", prompt: "He's not as ___ as his brother.", options: ["tall", "taller", "tallest"], answer: 0, explain: "As + adjetivo base + as." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["She is more older than me.", "She is older that me.", "She is older than me."], answer: 2, explain: "Old → older + than." }
  ]
},

"a2-05": {
  level: "a2", title: "Superlativos", minutes: 20,
  intro: "El superlativo expresa que algo es el que más de un grupo: el más alto, el mejor, el más caro. Siempre lleva the.",
  content: [
    { h: "Formación" },
    { table: { head: ["Adjetivo", "Comparativo", "Superlativo"], rows: [
      ["cheap", "cheaper", "the cheapest"],
      ["big", "bigger", "the biggest"],
      ["happy", "happier", "the happiest"],
      ["beautiful", "more beautiful", "the most beautiful"],
      ["good", "better", "the best"],
      ["bad", "worse", "the worst"],
      ["far", "further", "the furthest"]
    ]}},
    { examples: [
      ["Everest is the highest mountain in the world.", "El Everest es la montaña más alta del mundo."],
      ["This is the most interesting book I've ever read.", "Es el libro más interesante que he leído nunca."],
      ["It was the worst day of my life.", "Fue el peor día de mi vida."]
    ]},
    { callout: "<strong>In / of:</strong> con lugares y grupos se usa <em>in</em> (<em>the best student in the class</em>); con periodos y cantidades, <em>of</em> (<em>the best day of the year</em>, <em>the tallest of the three</em>). «The highest of the world» ✗." },
    { callout: "<strong>El menos:</strong> <em>the least</em> + adjetivo: <em>the least expensive option</em> (la opción menos cara)." }
  ],
  exercises: [
    { type: "gap", prompt: "This is ___ (cheap) restaurant in town.", answers: ["the cheapest"], explain: "The + adjetivo corto + -est." },
    { type: "gap", prompt: "It's ___ (important) decision of my career.", answers: ["the most important"], explain: "Adjetivo largo → the most." },
    { type: "mc", prompt: "She's the ___ singer I know.", options: ["goodest", "best", "better"], answer: 1, explain: "Good → the best." },
    { type: "mc", prompt: "Russia is the biggest country ___ the world.", options: ["of", "in", "on"], answer: 1, explain: "Lugares → in." },
    { type: "mc", prompt: "It was the happiest day ___ my life.", options: ["in", "of", "at"], answer: 1, explain: "Periodos → of my life." },
    { type: "gap", prompt: "That was ___ (bad) film I've ever seen.", answers: ["the worst"], explain: "Bad → the worst." },
    { type: "gap", prompt: "Which is ___ (big) city in your country?", answers: ["the biggest"], explain: "Doble consonante: the biggest." }
  ]
},

"a2-06": {
  level: "a2", title: "Much, many, a lot of", minutes: 20,
  intro: "Para hablar de cantidades en inglés hay que saber si el sustantivo es contable (se puede contar: books) o incontable (no se cuenta: water, money, information).",
  content: [
    { h: "Contables e incontables" },
    { table: { head: ["", "Contables (plural)", "Incontables"], rows: [
      ["Mucho/s (preguntas y negativas)", "many", "much"],
      ["Mucho/s (afirmativas)", "a lot of / lots of", "a lot of / lots of"],
      ["Pocos / poco (cantidad pequeña positiva)", "a few", "a little"],
      ["¿Cuántos? / ¿Cuánto?", "How many…?", "How much…?"],
      ["Demasiado/s", "too many", "too much"]
    ]}},
    { examples: [
      ["How many brothers have you got?", "¿Cuántos hermanos tienes?"],
      ["How much money do you need?", "¿Cuánto dinero necesitas?"],
      ["We don't have much time.", "No tenemos mucho tiempo."],
      ["There are a lot of tourists in summer.", "Hay muchos turistas en verano."],
      ["I have a few friends in London.", "Tengo algunos amigos en Londres."]
    ]},
    { callout: "<strong>Incontables que en español sí se cuentan:</strong> <em>information, advice, news, furniture, luggage, homework, research</em>. Nunca llevan -s ni <em>a</em>: «an advice» ✗ → <em>a piece of advice</em> / <em>some advice</em> ✓." },
    { callout: "<strong>Matiz:</strong> <em>a few / a little</em> = algunos/un poco (positivo). <em>few / little</em> sin «a» = pocos/poco (negativo, casi nada)." }
  ],
  exercises: [
    { type: "mc", prompt: "How ___ people came to the meeting?", options: ["much", "many", "lot"], answer: 1, explain: "People es contable → many." },
    { type: "mc", prompt: "I don't have ___ money this month.", options: ["many", "much", "a few"], answer: 1, explain: "Money es incontable → much." },
    { type: "gap", prompt: "How ___ sugar do you take in your coffee?", answers: ["much"], explain: "Sugar es incontable → how much." },
    { type: "mc", prompt: "Can you give me some ___?", options: ["advices", "advice", "an advice"], answer: 1, explain: "Advice es incontable: sin -s ni a." },
    { type: "mc", prompt: "There's ___ milk left. Enough for a coffee.", options: ["a little", "a few", "many"], answer: 0, explain: "Milk incontable, cantidad pequeña positiva → a little." },
    { type: "mc", prompt: "There were ___ cars on the road, so we arrived late.", options: ["too much", "too many", "much"], answer: 1, explain: "Cars contable → too many." },
    { type: "gap", prompt: "I've got a ___ questions for you. (unas pocas)", answers: ["few"], explain: "Contable → a few." }
  ]
},

"a2-07": {
  level: "a2", title: "Going to para planes", minutes: 20,
  intro: "Be going to + infinitivo expresa planes e intenciones ya decididos y también predicciones basadas en lo que vemos ahora.",
  content: [
    { h: "Forma" },
    { table: { head: ["", "Forma", "Ejemplo"], rows: [
      ["Afirmativa", "am/is/are + going to + infinitivo", "I'm going to study medicine."],
      ["Negativa", "am not / isn't / aren't + going to", "She isn't going to come."],
      ["Pregunta", "Am/Is/Are + sujeto + going to…?", "Are you going to buy it?"]
    ]}},
    { h: "Uso 1: planes e intenciones" },
    { examples: [
      ["We're going to get married next year.", "Nos vamos a casar el año que viene."],
      ["I'm going to start running.", "Voy a empezar a correr."],
      ["What are you going to do this weekend?", "¿Qué vas a hacer este fin de semana?"]
    ]},
    { h: "Uso 2: predicción con evidencia" },
    { examples: [
      ["Look at those clouds! It's going to rain.", "¡Mira esas nubes! Va a llover."],
      ["Be careful! You're going to fall.", "¡Cuidado! Te vas a caer."]
    ]},
    { callout: "<strong>Con go:</strong> se puede decir <em>I'm going to go</em>, pero es más natural <em>I'm going to the cinema tonight</em> (present continuous)." },
    { callout: "<strong>Lengua hablada:</strong> en conversación informal <em>going to</em> suena a menudo /ˈɡʌnə/ («gonna»). Entiéndelo, pero no lo escribas en textos formales." }
  ],
  exercises: [
    { type: "gap", prompt: "I ___ going to visit my aunt on Sunday.", answers: ["am", "'m"], explain: "I → am going to." },
    { type: "gap", prompt: "They ___ going to sell their house. (negativa)", answers: ["aren't", "are not"], explain: "Plural negativo: aren't going to." },
    { type: "mc", prompt: "___ she going to study abroad?", options: ["Does", "Is", "Will"], answer: 1, explain: "Pregunta con be: Is she going to…?" },
    { type: "mc", prompt: "Look at that driver! He ___ crash!", options: ["is going to", "goes to", "going"], answer: 0, explain: "Predicción con evidencia → is going to." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I going to learn Italian.", "I'm going to learn Italian.", "I'm going learn Italian."], answer: 1, explain: "Am + going to + infinitivo." },
    { type: "gap", prompt: "What ___ you going to cook tonight?", answers: ["are"], explain: "You → are." },
    { type: "transform", first: "My plan is to buy a new laptop.", keyword: "GOING", before: "I", after: "a new laptop.", answers: ["am going to buy", "'m going to buy", "am going to get", "'m going to get"], explain: "Plan → am going to + infinitivo." }
  ]
},

"a2-08": {
  level: "a2", title: "Will para predicciones y decisiones", minutes: 20,
  intro: "Will + infinitivo se usa para predicciones basadas en opiniones, decisiones tomadas en el momento de hablar, ofrecimientos y promesas.",
  content: [
    { h: "Forma" },
    { p: "<strong>will ('ll) + infinitivo</strong> para todas las personas. Negativa: <strong>won't</strong> (will not)." },
    { h: "Usos" },
    { table: { head: ["Uso", "Ejemplo"], rows: [
      ["Predicción u opinión", "I think it will be a great match."],
      ["Decisión espontánea", "It's cold. I'll close the window."],
      ["Ofrecimiento", "I'll help you with your bags."],
      ["Promesa", "I won't tell anyone, I promise."],
      ["Petición", "Will you marry me?"]
    ]}},
    { examples: [
      ["I think robots will do most jobs in the future.", "Creo que los robots harán la mayoría de trabajos en el futuro."],
      ["The phone's ringing. — I'll get it!", "Suena el teléfono. — ¡Ya lo cojo yo!"],
      ["Don't worry, I won't be late.", "No te preocupes, no llegaré tarde."]
    ]},
    { callout: "<strong>Will vs going to:</strong> si lo decides <em>ahora</em> → <em>will</em> (<em>I'll have the fish</em>). Si ya lo habías decidido → <em>going to</em> (<em>I'm going to have the fish, I saw it on the menu yesterday</em>)." },
    { callout: "<strong>Opinión en negativo:</strong> lo natural es <em>I don't think it will rain</em>, no «I think it won't rain»." }
  ],
  exercises: [
    { type: "mc", prompt: "«I'm thirsty.» — «___ get you a glass of water.»", options: ["I'm going to", "I'll", "I"], answer: 1, explain: "Ofrecimiento / decisión espontánea → I'll." },
    { type: "mc", prompt: "I promise I ___ forget your birthday again.", options: ["won't", "don't", "am not going"], answer: 0, explain: "Promesa negativa → won't." },
    { type: "gap", prompt: "I think Brazil ___ win the next World Cup.", answers: ["will", "'ll"], explain: "Predicción basada en opinión → will." },
    { type: "mc", prompt: "Mejor forma natural:", options: ["I think it won't rain.", "I don't think it will rain.", "I think it doesn't rain."], answer: 1, explain: "Se niega think: I don't think it will…" },
    { type: "mc", prompt: "We've booked the tickets. We ___ to Rome in May.", options: ["'ll fly", "are going to fly", "fly will"], answer: 1, explain: "Plan ya decidido → going to." },
    { type: "gap", prompt: "___ you help me with this box, please? (petición)", answers: ["will", "could", "can", "would"], explain: "Petición: Will/Could/Can you…?" },
    { type: "gap", prompt: "Don't worry. I ___ (not / be) late.", answers: ["won't be", "will not be"], explain: "Won't + infinitivo." }
  ]
},

"a2-09": {
  level: "a2", title: "Present continuous con valor de futuro", minutes: 20,
  intro: "Para citas y planes fijos con hora o fecha (ya organizados con otras personas), el inglés usa el present continuous, igual que en español decimos «mañana ceno con Ana».",
  content: [
    { h: "Arreglos fijos" },
    { examples: [
      ["I'm meeting Ana for dinner tomorrow.", "Mañana ceno con Ana."],
      ["We're flying to Lisbon on Friday.", "Volamos a Lisboa el viernes."],
      ["What are you doing tonight?", "¿Qué haces esta noche?"],
      ["She isn't coming to the party.", "Ella no viene a la fiesta."]
    ]},
    { callout: "<strong>Clave:</strong> se usa cuando hay algo concreto organizado (billete, reserva, cita). Suele acompañarse de una expresión de tiempo: <em>tonight, tomorrow, next week, on Monday</em>." },
    { h: "Resumen de los futuros de A2" },
    { table: { head: ["Forma", "Uso", "Ejemplo"], rows: [
      ["Present continuous", "Arreglos con fecha/hora", "I'm seeing the dentist at 10."],
      ["Going to", "Intenciones, planes decididos", "I'm going to learn to drive."],
      ["Will", "Decisiones al momento, opiniones, promesas", "I'll call you later."],
      ["Present simple", "Horarios oficiales", "The train leaves at 7.15."]
    ]}},
    { callout: "<strong>Horarios:</strong> para transporte, cines o clases con horario fijo se usa el present simple: <em>The film starts at 8</em>." }
  ],
  exercises: [
    { type: "mc", prompt: "I ___ my grandparents this Saturday. It's all arranged.", options: ["visit", "am visiting", "will visit"], answer: 1, explain: "Arreglo fijo → present continuous." },
    { type: "mc", prompt: "The bus ___ at 6.30 every morning.", options: ["leaves", "is leaving", "will leave"], answer: 0, explain: "Horario oficial → present simple." },
    { type: "gap", prompt: "What ___ you doing tomorrow evening?", answers: ["are"], explain: "Present continuous: are you doing." },
    { type: "gap", prompt: "We ___ (have) a party on Saturday. Do you want to come?", answers: ["are having", "'re having"], explain: "Plan organizado → are having." },
    { type: "mc", prompt: "«The phone is ringing.» — «OK, I ___ answer it.»", options: ["'m answering", "'ll", "answer"], answer: 1, explain: "Decisión espontánea → will." },
    { type: "mc", prompt: "Elige el futuro más adecuado: «Tengo cita con el médico a las 10.»", options: ["I'll see the doctor at 10.", "I'm seeing the doctor at 10.", "I see the doctor at 10 always."], answer: 1, explain: "Cita fija → present continuous." },
    { type: "gap", prompt: "She ___ (not / come) to the wedding. She's working.", answers: ["isn't coming", "is not coming", "'s not coming"], explain: "Negativa: isn't coming." }
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

"b1-01": {
  level: "b1", title: "Present perfect: experiencias", minutes: 25,
  intro: "El present perfect (have/has + participio) se usa para hablar de experiencias vividas en algún momento de tu vida, sin decir cuándo.",
  content: [
    { h: "Forma" },
    { table: { head: ["", "Forma", "Ejemplo"], rows: [
      ["Afirmativa", "have/has + participio", "I've visited Rome."],
      ["Negativa", "haven't/hasn't + participio", "She hasn't seen the film."],
      ["Pregunta", "Have/Has + sujeto + participio?", "Have you ever tried sushi?"]
    ]}},
    { p: "El participio de los verbos regulares termina en -ed (<em>worked</em>); los irregulares hay que aprenderlos: <em>be → been, see → seen, eat → eaten, go → gone, do → done, write → written</em>." },
    { h: "Ever y never" },
    { examples: [
      ["Have you ever been to Ireland?", "¿Has estado alguna vez en Irlanda?"],
      ["I've never eaten octopus.", "Nunca he comido pulpo."],
      ["It's the best book I've ever read.", "Es el mejor libro que he leído nunca."]
    ]},
    { h: "Been vs gone" },
    { table: { head: ["Forma", "Significado"], rows: [
      ["He has <strong>been</strong> to Paris.", "Fue y ya volvió (experiencia)."],
      ["He has <strong>gone</strong> to Paris.", "Se ha ido y todavía está allí."]
    ]}},
    { callout: "<strong>Never + afirmativa:</strong> «I haven't never been» ✗ → <em>I've never been</em> ✓ (o <em>I haven't ever been</em>)." }
  ],
  exercises: [
    { type: "gap", prompt: "Have you ever ___ (eat) Indian food?", answers: ["eaten"], explain: "Participio de eat: eaten." },
    { type: "gap", prompt: "I've never ___ (see) the sea.", answers: ["seen"], explain: "Participio de see: seen." },
    { type: "mc", prompt: "She ___ been to Japan three times.", options: ["have", "has", "is"], answer: 1, explain: "She → has." },
    { type: "mc", prompt: "Tom isn't here. He's ___ to the bank.", options: ["been", "gone", "went"], answer: 1, explain: "Se ha ido y sigue allí → gone." },
    { type: "mc", prompt: "I've ___ to Mexico, and I loved it.", options: ["been", "gone", "go"], answer: 0, explain: "Experiencia (ya volviste) → been." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I haven't never flown.", "I've never flown.", "I never have flew."], answer: 1, explain: "Never con verbo afirmativo." },
    { type: "gap", prompt: "This is the most beautiful place I have ___ (be) to.", answers: ["ever been", "been"], explain: "Superlativo + I've ever been." }
  ]
},

"b1-03": {
  level: "b1", title: "For, since, just, already, yet", minutes: 25,
  intro: "Estas palabras acompañan al present perfect y cada una tiene una posición fija en la frase. Usarlas bien hace que tu inglés suene mucho más natural.",
  content: [
    { h: "Significado y posición" },
    { table: { head: ["Palabra", "Significado", "Posición", "Ejemplo"], rows: [
      ["just", "acabar de", "entre have y participio", "I've just arrived."],
      ["already", "ya (antes de lo esperado)", "entre have y participio", "She's already finished."],
      ["yet", "ya (preguntas) / todavía (negativas)", "al final", "Have you eaten yet? / I haven't eaten yet."],
      ["still", "todavía (sigue igual)", "delante de haven't", "He still hasn't called."],
      ["for", "durante, desde hace (periodo)", "antes del periodo", "for two years"],
      ["since", "desde (punto de inicio)", "antes del inicio", "since 2020, since Monday"]
    ]}},
    { examples: [
      ["I've just had lunch.", "Acabo de comer."],
      ["Have you finished yet? — Yes, I've already finished.", "¿Has terminado ya? — Sí, ya he terminado."],
      ["The bus hasn't come yet.", "El autobús no ha llegado todavía."],
      ["She has worked here for six months.", "Trabaja aquí desde hace seis meses."],
      ["I haven't seen him since Christmas.", "No lo veo desde Navidad."]
    ]},
    { callout: "<strong>For vs since:</strong> si puedes contarlo (<em>three days, a long time</em>) → <strong>for</strong>. Si es un momento en el calendario o un suceso (<em>2015, last week, I was a child</em>) → <strong>since</strong>." }
  ],
  exercises: [
    { type: "mc", prompt: "I've known her ___ ten years.", options: ["since", "for", "from"], answer: 1, explain: "Periodo → for." },
    { type: "mc", prompt: "They've lived here ___ 2018.", options: ["since", "for", "during"], answer: 0, explain: "Punto de inicio → since." },
    { type: "mc", prompt: "Have you done your homework ___?", options: ["already", "just", "yet"], answer: 2, explain: "Pregunta → yet al final." },
    { type: "gap", prompt: "I've ___ seen him. He left a minute ago. (acabar de)", answers: ["just"], explain: "Just = acabar de." },
    { type: "gap", prompt: "The film hasn't started ___.", answers: ["yet"], explain: "Negativa → yet al final." },
    { type: "mc", prompt: "Elige la posición correcta:", options: ["I've finished already the report.", "I've already finished the report.", "Already I've finished the report."], answer: 1, explain: "Already entre have y el participio." },
    { type: "gap", prompt: "We haven't spoken ___ last summer.", answers: ["since"], explain: "Last summer es un punto de inicio → since." }
  ]
},

"b1-04": {
  level: "b1", title: "First conditional", minutes: 25,
  intro: "El primer condicional habla de situaciones reales o probables en el futuro y de sus consecuencias. Es el condicional más usado en la vida diaria.",
  content: [
    { h: "Forma" },
    { p: "<strong>If + present simple, will + infinitivo.</strong> Las dos partes pueden ir en cualquier orden; si empieza con <em>if</em>, se pone coma." },
    { examples: [
      ["If it rains, we'll stay at home.", "Si llueve, nos quedaremos en casa."],
      ["I'll call you if I have time.", "Te llamaré si tengo tiempo."],
      ["If you don't hurry, you'll miss the bus.", "Si no te das prisa, perderás el autobús."]
    ]},
    { callout: "<strong>Error clásico:</strong> poner <em>will</em> después de <em>if</em>. «If it will rain…» ✗ → <em>If it rains…</em> ✓. Igual que en español: «si llueve», no «si lloverá»." },
    { h: "Variantes" },
    { table: { head: ["Variante", "Ejemplo"], rows: [
      ["Imperativo en el resultado", "If you see Tom, tell him to call me."],
      ["Modal en el resultado", "If you finish early, you can go home."],
      ["When (cuando seguro que pasará)", "When I get home, I'll phone you."],
      ["Unless (= if not)", "We'll be late unless we leave now."]
    ]}},
    { callout: "<strong>If vs when:</strong> <em>If I see her</em> = puede que la vea. <em>When I see her</em> = sé que la veré." }
  ],
  exercises: [
    { type: "gap", prompt: "If you ___ (study), you will pass.", answers: ["study"], explain: "If + present simple." },
    { type: "gap", prompt: "If it's sunny tomorrow, we ___ (go) to the beach.", answers: ["will go", "'ll go"], explain: "Resultado → will + infinitivo." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["If I will see him, I'll tell him.", "If I see him, I'll tell him.", "If I see him, I tell him tomorrow."], answer: 1, explain: "No se usa will después de if." },
    { type: "mc", prompt: "___ I get home, I'll send you the photos. (seguro)", options: ["If", "When", "Unless"], answer: 1, explain: "Algo seguro → when." },
    { type: "mc", prompt: "You'll be cold ___ you take a coat.", options: ["if", "unless", "when"], answer: 1, explain: "Unless = if you don't." },
    { type: "gap", prompt: "If you ___ (not / hurry), you'll miss the train.", answers: ["don't hurry", "do not hurry"], explain: "Negativa en present simple." },
    { type: "transform", first: "Leave now or you'll be late.", keyword: "UNLESS", before: "You'll be late", after: "now.", answers: ["unless you leave", "unless you go"], explain: "Unless + present simple." }
  ]
},

"b1-05": {
  level: "b1", title: "Second conditional", minutes: 25,
  intro: "El segundo condicional habla de situaciones imaginarias, improbables o contrarias a la realidad presente. Equivale a «si tuviera…, haría…».",
  content: [
    { h: "Forma" },
    { p: "<strong>If + past simple, would + infinitivo.</strong>" },
    { examples: [
      ["If I had more money, I would travel the world.", "Si tuviera más dinero, viajaría por el mundo."],
      ["If she lived closer, we'd see her more often.", "Si viviera más cerca, la veríamos más a menudo."],
      ["What would you do if you won the lottery?", "¿Qué harías si ganaras la lotería?"]
    ]},
    { callout: "<strong>Aunque use pasado, habla del presente o futuro:</strong> el pasado aquí marca que es <em>imaginario</em>, no que sea pasado." },
    { h: "If I were you" },
    { p: "Para dar consejos se usa <strong>If I were you, I'd…</strong> (Yo que tú…). Con <em>I/he/she/it</em> se prefiere <em>were</em>, sobre todo en inglés escrito." },
    { examples: [
      ["If I were you, I'd talk to your boss.", "Yo que tú, hablaría con tu jefe."]
    ]},
    { h: "First vs second" },
    { table: { head: ["First (probable)", "Second (improbable / imaginario)"], rows: [
      ["If I find a job, I'll move to London.", "If I found a job, I'd move to London."],
      ["(lo estoy buscando, es posible)", "(no lo veo probable)"]
    ]}},
    { callout: "<strong>Nunca would después de if:</strong> «If I would have time…» ✗ → <em>If I had time…</em> ✓." }
  ],
  exercises: [
    { type: "gap", prompt: "If I ___ (know) the answer, I would tell you.", answers: ["knew"], explain: "If + past simple." },
    { type: "gap", prompt: "If we had a garden, we ___ (get) a dog.", answers: ["would get", "'d get"], explain: "Resultado → would + infinitivo." },
    { type: "mc", prompt: "If I ___ you, I'd accept the offer.", options: ["am", "were", "would be"], answer: 1, explain: "If I were you… para consejos." },
    { type: "mc", prompt: "What would you do if you ___ a million euros?", options: ["win", "won", "would win"], answer: 1, explain: "If + past simple: won." },
    { type: "mc", prompt: "Situación improbable: «Si fuera presidente, cambiaría muchas cosas.»", options: ["If I am president, I will change many things.", "If I were president, I would change many things.", "If I would be president, I changed many things."], answer: 1, explain: "Imaginario → second conditional." },
    { type: "gap", prompt: "She ___ (not / work) so hard if she didn't need the money.", answers: ["wouldn't work", "would not work"], explain: "Negativa: wouldn't + infinitivo." },
    { type: "transform", first: "I don't have a car, so I can't drive you home.", keyword: "HAD", before: "If I", after: ", I could drive you home.", answers: ["had a car"], explain: "Realidad contraria en presente → if + past simple." }
  ]
},

"b1-06": {
  level: "b1", title: "Unless, as long as, provided that", minutes: 20,
  intro: "Además de if, el inglés tiene otras conjunciones para expresar condiciones con matices: excepción, requisito o precaución.",
  content: [
    { h: "Las conjunciones" },
    { table: { head: ["Conjunción", "Significado", "Ejemplo"], rows: [
      ["unless", "a menos que (= if not)", "I won't go unless you come with me."],
      ["as long as / so long as", "siempre que, con tal de que", "You can borrow my car as long as you're careful."],
      ["provided (that) / providing", "siempre que (más formal)", "We'll sign the contract provided that the price is right."],
      ["in case", "por si (acaso)", "Take a jacket in case it gets cold."]
    ]}},
    { examples: [
      ["Unless you study, you won't pass.", "Si no estudias, no aprobarás."],
      ["I'll lend you the money as long as you pay me back next week.", "Te prestaré el dinero siempre que me lo devuelvas la semana que viene."],
      ["Write down my number in case you need it.", "Apunta mi número por si lo necesitas."]
    ]},
    { callout: "<strong>Unless ya es negativo:</strong> «unless you don't study» ✗ → <em>unless you study</em> ✓." },
    { callout: "<strong>Tiempos:</strong> igual que con <em>if</em>, después de estas conjunciones se usa presente para hablar del futuro: <em>as long as you <strong>are</strong> careful</em>, no «will be»." }
  ],
  exercises: [
    { type: "mc", prompt: "I won't help you ___ you ask me nicely.", options: ["if", "unless", "in case"], answer: 1, explain: "A menos que → unless." },
    { type: "mc", prompt: "Take an umbrella ___ it rains.", options: ["in case", "unless", "as long as"], answer: 0, explain: "Precaución → in case." },
    { type: "mc", prompt: "You can stay out late ___ you call me.", options: ["unless", "as long as", "in case"], answer: 1, explain: "Requisito → as long as." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["Unless you don't hurry, we'll be late.", "Unless you hurry, we'll be late.", "Unless you will hurry, we'll be late."], answer: 1, explain: "Unless + afirmativa en presente." },
    { type: "gap", prompt: "We'll go to the beach ___ it rains. (a menos que)", answers: ["unless"], explain: "Unless = a menos que." },
    { type: "gap", prompt: "I'll come, ___ that I can leave early. (formal: siempre que)", answers: ["provided", "providing"], explain: "Provided/providing that." },
    { type: "transform", first: "If you don't practise, you won't improve.", keyword: "UNLESS", before: "You won't improve", after: ".", answers: ["unless you practise", "unless you practice"], explain: "If you don't = unless you." }
  ]
},

"b1-07": {
  level: "b1", title: "Voz pasiva", minutes: 30,
  intro: "La pasiva se usa cuando lo importante es la acción o quien la recibe, no quién la hace. Es muy frecuente en noticias, textos académicos e instrucciones.",
  content: [
    { h: "Formación: be + participio" },
    { table: { head: ["Tiempo", "Activa", "Pasiva"], rows: [
      ["Present simple", "They make cars here.", "Cars <strong>are made</strong> here."],
      ["Past simple", "Someone stole my bike.", "My bike <strong>was stolen</strong>."],
      ["Present perfect", "They have opened a new shop.", "A new shop <strong>has been opened</strong>."],
      ["Future (will)", "They will announce the results.", "The results <strong>will be announced</strong>."],
      ["Modal", "You must wear a helmet.", "A helmet <strong>must be worn</strong>."],
      ["Present continuous", "They are repairing the road.", "The road <strong>is being repaired</strong>."]
    ]}},
    { examples: [
      ["English is spoken all over the world.", "El inglés se habla en todo el mundo."],
      ["The Mona Lisa was painted by Leonardo da Vinci.", "La Mona Lisa fue pintada por Leonardo da Vinci."],
      ["The meeting has been cancelled.", "La reunión se ha cancelado."]
    ]},
    { h: "Cuándo mencionar el agente (by)" },
    { p: "Solo si es importante o novedoso. «My bike was stolen <em>by someone</em>» no aporta nada; «Hamlet was written <em>by Shakespeare</em>» sí." },
    { callout: "<strong>El «se» español:</strong> muchas frases con «se» se traducen con pasiva: <em>Se habla inglés</em> → <em>English is spoken</em>; <em>Se construyó en 1900</em> → <em>It was built in 1900</em>." }
  ],
  exercises: [
    { type: "gap", prompt: "This bridge ___ (build) in 1890.", answers: ["was built"], explain: "Pasado → was + participio." },
    { type: "gap", prompt: "Spanish ___ (speak) in more than 20 countries.", answers: ["is spoken"], explain: "Presente → is + participio." },
    { type: "mc", prompt: "The winners ___ next week.", options: ["will announce", "will be announced", "are announce"], answer: 1, explain: "Futuro pasivo: will be + participio." },
    { type: "mc", prompt: "My wallet ___. I can't find it anywhere!", options: ["has stolen", "has been stolen", "is stealing"], answer: 1, explain: "Present perfect pasivo: has been stolen." },
    { type: "mc", prompt: "The road ___ at the moment, so take another route.", options: ["is repaired", "is being repaired", "repairs"], answer: 1, explain: "Acción en curso → is being + participio." },
    { type: "gap", prompt: "Seatbelts must ___ worn at all times.", answers: ["be"], explain: "Modal + be + participio." },
    { type: "transform", first: "Someone cleans the offices every evening.", keyword: "ARE", before: "The offices", after: "every evening.", answers: ["are cleaned"], explain: "Present simple pasivo: are + participio." }
  ]
},

"b1-08": {
  level: "b1", title: "Estilo indirecto", minutes: 30,
  intro: "El estilo indirecto (reported speech) sirve para contar lo que otra persona dijo. Normalmente los tiempos verbales retroceden un paso hacia el pasado.",
  content: [
    { h: "Cambio de tiempos (backshift)" },
    { table: { head: ["Estilo directo", "Estilo indirecto"], rows: [
      ["«I <strong>am</strong> tired.»", "She said (that) she <strong>was</strong> tired."],
      ["«I <strong>work</strong> in a bank.»", "He said he <strong>worked</strong> in a bank."],
      ["«I <strong>saw</strong> the film.»", "She said she <strong>had seen</strong> the film."],
      ["«I <strong>have finished</strong>.»", "He said he <strong>had finished</strong>."],
      ["«I <strong>will</strong> call you.»", "She said she <strong>would</strong> call me."],
      ["«I <strong>can</strong> swim.»", "He said he <strong>could</strong> swim."]
    ]}},
    { h: "Say vs tell" },
    { p: "<strong>Tell</strong> necesita a quién: <em>She told <strong>me</strong> that…</em>. <strong>Say</strong> no: <em>She said that…</em> (o <em>said to me</em>)." },
    { callout: "«She said me that…» ✗ → <em>She told me that…</em> ✓ / <em>She said that…</em> ✓." },
    { h: "Preguntas y órdenes" },
    { examples: [
      ["He asked me where I lived.", "Me preguntó dónde vivía. (sin inversión: «where I lived»)"],
      ["She asked if I was hungry.", "Me preguntó si tenía hambre."],
      ["The doctor told me to rest.", "El médico me dijo que descansara."],
      ["They told us not to worry.", "Nos dijeron que no nos preocupáramos."]
    ]},
    { callout: "<strong>Otros cambios:</strong> <em>today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that</em>." }
  ],
  exercises: [
    { type: "gap", prompt: "«I'm hungry.» → She said she ___ hungry.", answers: ["was"], explain: "Am → was." },
    { type: "gap", prompt: "«I will help you.» → He said he ___ help me.", answers: ["would"], explain: "Will → would." },
    { type: "mc", prompt: "She ___ me that she was leaving.", options: ["said", "told", "asked"], answer: 1, explain: "Con objeto (me) → told." },
    { type: "mc", prompt: "«Where do you live?» → He asked me where ___.", options: ["do I live", "I lived", "did I live"], answer: 1, explain: "Pregunta indirecta: orden afirmativo y backshift." },
    { type: "mc", prompt: "«Are you OK?» → She asked ___ I was OK.", options: ["that", "if", "what"], answer: 1, explain: "Preguntas de sí/no → if / whether." },
    { type: "gap", prompt: "«Don't touch it!» → He told me ___ touch it. (dos palabras)", answers: ["not to"], explain: "Orden negativa → told someone not to + infinitivo." },
    { type: "gap", prompt: "«I have lost my keys.» → She said she ___ lost her keys.", answers: ["had"], explain: "Present perfect → past perfect." }
  ]
},

"b1-09": {
  level: "b1", title: "Oraciones de relativo", minutes: 30,
  intro: "Las oraciones de relativo añaden información sobre un sustantivo con who, which, that, whose o where. Permiten unir frases y escribir con más fluidez.",
  content: [
    { h: "Pronombres relativos" },
    { table: { head: ["Pronombre", "Se refiere a", "Ejemplo"], rows: [
      ["who", "personas", "The woman who lives next door is a doctor."],
      ["which", "cosas, animales", "The book which I bought is great."],
      ["that", "personas o cosas (solo en especificativas)", "The car that I want is expensive."],
      ["whose", "posesión (cuyo)", "That's the man whose dog bit me."],
      ["where", "lugares", "This is the hotel where we stayed."],
      ["when", "momentos", "I remember the day when we met."]
    ]}},
    { h: "Especificativas vs explicativas" },
    { table: { head: ["Especificativas (defining)", "Explicativas (non-defining)"], rows: [
      ["Identifican de quién o qué hablamos.", "Añaden información extra."],
      ["Sin comas.", "Entre comas."],
      ["Se puede usar that.", "No se puede usar that."],
      ["The students who passed got a certificate.", "My brother, who lives in Berlin, is an engineer."]
    ]}},
    { h: "Omitir el relativo" },
    { p: "En las especificativas se puede omitir el relativo cuando es <strong>objeto</strong> del verbo (va seguido de otro sujeto):" },
    { examples: [
      ["The film (that) we saw was brilliant.", "La película que vimos fue genial."],
      ["The man who called you is here.", "El hombre que te llamó está aquí. (who es sujeto: no se omite)"]
    ]},
    { callout: "<strong>Error típico:</strong> repetir el pronombre. «The book which I bought it» ✗ → <em>The book which I bought</em> ✓." }
  ],
  exercises: [
    { type: "mc", prompt: "That's the girl ___ won the competition.", options: ["which", "who", "whose"], answer: 1, explain: "Persona como sujeto → who (o that)." },
    { type: "mc", prompt: "This is the restaurant ___ we had our first date.", options: ["which", "where", "who"], answer: 1, explain: "Lugar → where." },
    { type: "mc", prompt: "I met a woman ___ son plays for Real Madrid.", options: ["who", "whose", "which"], answer: 1, explain: "Posesión → whose." },
    { type: "mc", prompt: "Paris, ___ is the capital of France, is beautiful.", options: ["that", "which", "where"], answer: 1, explain: "Explicativa (entre comas) → which, nunca that." },
    { type: "gap", prompt: "The phone ___ I bought last week has stopped working.", answers: ["which", "that"], explain: "Cosa → which/that (aquí también se podría omitir)." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["The film which I saw it was boring.", "The film I saw was boring.", "The film who I saw was boring."], answer: 1, explain: "Relativo objeto omitido, sin repetir it." },
    { type: "transform", first: "I have a friend. Her father is a famous actor.", keyword: "WHOSE", before: "I have a friend", after: "is a famous actor.", answers: ["whose father"], explain: "Whose + sustantivo = cuyo." }
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

"b2-01": {
  level: "b2", title: "Third conditional", minutes: 25,
  intro: "El tercer condicional imagina un pasado diferente: lo que habría pasado si las cosas hubieran sido de otra manera. Se usa para arrepentimientos, críticas y especulaciones sobre el pasado.",
  content: [
    { h: "Forma" },
    { p: "<strong>If + past perfect, would have + participio.</strong>" },
    { examples: [
      ["If I had left earlier, I wouldn't have missed the train.", "Si hubiera salido antes, no habría perdido el tren."],
      ["If she hadn't helped me, I would have failed.", "Si ella no me hubiera ayudado, habría suspendido."],
      ["What would you have done if you had been there?", "¿Qué habrías hecho si hubieras estado allí?"]
    ]},
    { h: "Variantes con modales" },
    { table: { head: ["Modal", "Significado", "Ejemplo"], rows: [
      ["would have", "resultado seguro", "We would have won."],
      ["could have", "posibilidad / capacidad", "We could have won."],
      ["might have", "posibilidad menos segura", "We might have won."]
    ]}},
    { callout: "<strong>Contracciones al hablar:</strong> <em>'d</em> puede ser <em>had</em> o <em>would</em>: <em>If I'd known (had), I'd have told you (would)</em>. Y <em>would have</em> suena /ˈwʊdəv/ («would've»), nunca «would of»." },
    { callout: "<strong>Error clásico:</strong> «If I would have known…» ✗ → <em>If I had known…</em> ✓. Nunca va <em>would</em> en la parte del <em>if</em>." }
  ],
  exercises: [
    { type: "gap", prompt: "If I ___ (know) about the party, I would have gone.", answers: ["had known", "'d known"], explain: "If + past perfect." },
    { type: "gap", prompt: "If we had taken a taxi, we ___ (arrive) on time.", answers: ["would have arrived", "'d have arrived", "would've arrived"], explain: "Resultado → would have + participio." },
    { type: "mc", prompt: "If she ___ harder, she would have passed.", options: ["studied", "had studied", "would have studied"], answer: 1, explain: "Pasado irreal → past perfect." },
    { type: "mc", prompt: "We ___ the match if our best player hadn't been injured. (posibilidad)", options: ["could have won", "can win", "could win"], answer: 0, explain: "Posibilidad en el pasado → could have + participio." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["If I would have seen you, I'd have said hello.", "If I had seen you, I'd have said hello.", "If I saw you, I'd have say hello."], answer: 1, explain: "If + had + participio." },
    { type: "gap", prompt: "If you ___ (not / remind) me, I would have forgotten.", answers: ["hadn't reminded", "had not reminded"], explain: "Negativa: hadn't + participio." },
    { type: "transform", first: "I didn't have your number, so I didn't call you.", keyword: "HAD", before: "I would have called you if", after: "your number.", answers: ["i had had", "i'd had"], explain: "Had + had (past perfect de have)." }
  ]
},

"b2-03": {
  level: "b2", title: "Wish e if only", minutes: 25,
  intro: "Wish e if only expresan deseos sobre situaciones irreales y arrepentimientos. El tiempo verbal que siguen depende de si hablas del presente, del pasado o de una queja sobre el comportamiento de otro.",
  content: [
    { h: "Las tres estructuras" },
    { table: { head: ["Se refiere a", "Estructura", "Ejemplo"], rows: [
      ["Presente (situación)", "wish + past simple", "I wish I lived by the sea."],
      ["Pasado (arrepentimiento)", "wish + past perfect", "I wish I had studied harder."],
      ["Queja / deseo de cambio de otro", "wish + would + infinitivo", "I wish you would stop interrupting."]
    ]}},
    { examples: [
      ["I wish I knew the answer.", "Ojalá supiera la respuesta."],
      ["She wishes she hadn't sold her flat.", "Se arrepiente de haber vendido su piso."],
      ["I wish it would stop raining.", "Ojalá dejara de llover."],
      ["If only I had more time!", "¡Si al menos tuviera más tiempo!"]
    ]},
    { callout: "<strong>If only</strong> funciona igual que <em>wish</em> pero es más enfático y emocional." },
    { callout: "<strong>No uses would para ti mismo:</strong> «I wish I would be taller» ✗ → <em>I wish I were/was taller</em> ✓. <em>Wish + would</em> es para quejarse de otros o de situaciones externas." },
    { h: "Expresiones relacionadas" },
    { p: "<em>It's (high) time</em> + past simple (ya es hora de que): <em>It's time we left</em>. <em>I'd rather</em> + sujeto + past simple (preferiría que): <em>I'd rather you didn't smoke here</em>." }
  ],
  exercises: [
    { type: "gap", prompt: "I wish I ___ (have) a bigger flat.", answers: ["had"], explain: "Presente → wish + past simple." },
    { type: "gap", prompt: "I wish I ___ (not / eat) so much last night.", answers: ["hadn't eaten", "had not eaten"], explain: "Arrepentimiento pasado → past perfect." },
    { type: "mc", prompt: "I wish my neighbours ___ so much noise.", options: ["didn't make", "wouldn't make", "hadn't made"], answer: 1, explain: "Queja sobre el comportamiento de otros → wouldn't." },
    { type: "mc", prompt: "If only I ___ the truth back then!", options: ["knew", "had known", "would know"], answer: 1, explain: "Pasado → had known." },
    { type: "mc", prompt: "¿Cuál es correcta?", options: ["I wish I would be taller.", "I wish I were taller.", "I wish I am taller."], answer: 1, explain: "Situación presente propia → past simple (were)." },
    { type: "gap", prompt: "It's high time you ___ (get) a job.", answers: ["got"], explain: "It's high time + past simple." },
    { type: "transform", first: "I regret not going to the concert.", keyword: "WISH", before: "I", after: "to the concert.", answers: ["wish i had gone", "wish i'd gone", "wish i had been", "wish i'd been"], explain: "Arrepentimiento → wish + past perfect." }
  ]
},

"b2-04": {
  level: "b2", title: "Modales de deducción en presente", minutes: 25,
  intro: "Los modales de deducción expresan lo seguros que estamos de algo a partir de pruebas. En B2 son imprescindibles en el Speaking (al comparar fotos) y en las key word transformations.",
  content: [
    { h: "Escala de certeza" },
    { table: { head: ["Certeza", "Modal", "Ejemplo"], rows: [
      ["Casi seguro que sí (≈ 95 %)", "must", "She must be tired; she's been working all day."],
      ["Posible (≈ 50 %)", "may / might / could", "He might be at home, I'm not sure."],
      ["Casi seguro que no (≈ 5 %)", "can't / couldn't", "That can't be Tom. He's in Australia."]
    ]}},
    { examples: [
      ["You must be joking!", "¡Debes de estar de broma!"],
      ["The keys could be in the car.", "Las llaves podrían estar en el coche."],
      ["It can't be true.", "No puede ser verdad."],
      ["They must be having a party; the music is so loud.", "Deben de estar de fiesta; la música está altísima."]
    ]},
    { callout: "<strong>Lo contrario de must no es mustn't:</strong> en deducción, lo opuesto de <em>must</em> es <em>can't</em>. «He mustn't be at home» ✗ → <em>He can't be at home</em> ✓." },
    { callout: "<strong>Acción en curso:</strong> modal + <em>be</em> + -ing: <em>She might be sleeping</em>." },
    { h: "En el Speaking (Part 2)" },
    { p: "Al describir fotos, usa la deducción en vez de afirmar: <em>They <strong>might be</strong> colleagues…</em>, <em>She <strong>must be</strong> feeling nervous…</em>, <em>It <strong>can't be</strong> very comfortable…</em>." }
  ],
  exercises: [
    { type: "mc", prompt: "He's been running for two hours. He ___ be exhausted.", options: ["must", "can't", "might not"], answer: 0, explain: "Deducción casi segura → must." },
    { type: "mc", prompt: "That ___ be Laura. She's on holiday in Peru.", options: ["must", "can't", "mustn't"], answer: 1, explain: "Imposible → can't." },
    { type: "mc", prompt: "I'm not sure where she is. She ___ be in the library.", options: ["must", "might", "can't"], answer: 1, explain: "Posibilidad → might." },
    { type: "gap", prompt: "Don't call now. They ___ be having dinner. (posibilidad)", answers: ["might", "may", "could"], explain: "Posibilidad → might/may/could + be + -ing." },
    { type: "mc", prompt: "Lo contrario de «He must be rich» es:", options: ["He mustn't be rich.", "He can't be rich.", "He doesn't must be rich."], answer: 1, explain: "Opuesto de must (deducción) → can't." },
    { type: "gap", prompt: "You've been travelling all day. You ___ be hungry. (casi seguro)", answers: ["must"], explain: "Deducción lógica → must." },
    { type: "transform", first: "I'm sure this isn't the right address.", keyword: "BE", before: "This", after: "the right address.", answers: ["can't be", "cannot be", "couldn't be"], explain: "Seguro de que no → can't be." }
  ]
},

"b2-05": {
  level: "b2", title: "Modales de deducción en pasado", minutes: 25,
  intro: "Para deducir sobre el pasado se usa modal + have + participio. También sirven para criticar o lamentar lo que alguien hizo o no hizo.",
  content: [
    { h: "Deducción" },
    { table: { head: ["Certeza", "Estructura", "Ejemplo"], rows: [
      ["Casi seguro que sí", "must have + participio", "She must have forgotten."],
      ["Posible", "may / might / could have + participio", "They might have missed the bus."],
      ["Casi seguro que no", "can't / couldn't have + participio", "He can't have seen us."]
    ]}},
    { examples: [
      ["The ground is wet. It must have rained.", "El suelo está mojado. Debe de haber llovido."],
      ["She isn't answering. She might have gone out.", "No contesta. Puede que haya salido."],
      ["You can't have finished already!", "¡No puede ser que ya hayas terminado!"]
    ]},
    { h: "Crítica y arrepentimiento" },
    { table: { head: ["Estructura", "Significado", "Ejemplo"], rows: [
      ["should have + participio", "debería haber (y no lo hizo)", "You should have told me."],
      ["shouldn't have + participio", "no debería haber (y lo hizo)", "I shouldn't have eaten so much."],
      ["could have + participio", "podría haber (oportunidad no aprovechada)", "You could have called!"],
      ["needn't have + participio", "no hacía falta (pero lo hizo)", "You needn't have brought a present."]
    ]}},
    { callout: "<strong>Needn't have vs didn't need to:</strong> <em>I needn't have hurried</em> = me di prisa sin necesidad. <em>I didn't need to hurry</em> = no hacía falta (y normalmente no lo hice)." }
  ],
  exercises: [
    { type: "mc", prompt: "The window is broken. Someone ___ it.", options: ["must have broken", "must break", "can't have broken"], answer: 0, explain: "Deducción segura en pasado → must have + participio." },
    { type: "mc", prompt: "He ___ stolen the money; he was with me all day.", options: ["must have", "can't have", "should have"], answer: 1, explain: "Imposible en pasado → can't have." },
    { type: "gap", prompt: "You ___ have told me earlier! Now it's too late. (crítica)", answers: ["should", "could"], explain: "Crítica → should have / could have." },
    { type: "gap", prompt: "I ___ have eaten that last cake. I feel sick. (arrepentimiento)", answers: ["shouldn't", "should not"], explain: "Arrepentimiento → shouldn't have." },
    { type: "mc", prompt: "She's late. She ___ got stuck in traffic.", options: ["might have", "must", "can't"], answer: 0, explain: "Posibilidad en pasado → might have." },
    { type: "mc", prompt: "Llevé paraguas, pero no llovió. «I ___ an umbrella.»", options: ["needn't have taken", "didn't take", "mustn't have taken"], answer: 0, explain: "Hice algo innecesario → needn't have + participio." },
    { type: "transform", first: "I'm sure she forgot about the meeting.", keyword: "MUST", before: "She", after: "about the meeting.", answers: ["must have forgotten", "must've forgotten"], explain: "Seguro en pasado → must have + participio." }
  ]
},

"b2-06": {
  level: "b2", title: "Past perfect simple y continuous", minutes: 25,
  intro: "El past perfect sitúa una acción antes de otra acción pasada: es «el pasado del pasado». La forma continua destaca la duración de esa acción anterior.",
  content: [
    { h: "Past perfect simple: had + participio" },
    { examples: [
      ["When we arrived, the film had already started.", "Cuando llegamos, la película ya había empezado."],
      ["She told me she had lost her job.", "Me dijo que había perdido su trabajo."],
      ["I had never seen snow before I went to Canada.", "Nunca había visto la nieve antes de ir a Canadá."]
    ]},
    { callout: "<strong>Compara:</strong> <em>When I arrived, she <strong>left</strong></em> (se fue al llegar yo) · <em>When I arrived, she <strong>had left</strong></em> (ya se había ido)." },
    { h: "Past perfect continuous: had been + -ing" },
    { p: "Destaca la <strong>duración</strong> de una actividad que continuó hasta un momento del pasado, a menudo con resultados visibles." },
    { examples: [
      ["I had been waiting for an hour when the bus finally came.", "Llevaba una hora esperando cuando por fin llegó el autobús."],
      ["Her eyes were red. She had been crying.", "Tenía los ojos rojos. Había estado llorando."]
    ]},
    { table: { head: ["Simple", "Continuous"], rows: [
      ["Acción completada, resultado", "Duración, actividad en proceso"],
      ["She had written three emails.", "She had been writing emails all morning."],
      ["Con cantidades (how many)", "Con duraciones (how long)"]
    ]}},
    { callout: "<strong>By the time:</strong> expresión muy frecuente con past perfect: <em>By the time the police arrived, the thieves had escaped.</em>" }
  ],
  exercises: [
    { type: "gap", prompt: "When I got to the station, the train ___ (leave).", answers: ["had left", "had already left", "'d left"], explain: "Acción anterior a otra pasada → had + participio." },
    { type: "mc", prompt: "By the time we arrived, they ___ dinner.", options: ["finished", "had finished", "have finished"], answer: 1, explain: "By the time + past perfect." },
    { type: "gap", prompt: "She was tired because she ___ (work) all day.", answers: ["had been working", "'d been working"], explain: "Duración hasta un momento pasado → past perfect continuous." },
    { type: "mc", prompt: "I ___ never flown before that trip.", options: ["have", "had", "was"], answer: 1, explain: "Experiencia anterior a un momento pasado → had never." },
    { type: "mc", prompt: "He ___ for three hours when he finally found the address.", options: ["had been looking", "had looked", "was looked"], answer: 0, explain: "Duración (for three hours) → continuous." },
    { type: "mc", prompt: "By the end of the day, she ___ five reports.", options: ["had been writing", "had written", "wrote"], answer: 1, explain: "Cantidad completada → simple." },
    { type: "transform", first: "I arrived after the meeting started.", keyword: "ALREADY", before: "When I arrived, the meeting", after: ".", answers: ["had already started", "had already begun"], explain: "Already + past perfect." }
  ]
},

"b2-07": {
  level: "b2", title: "Word formation: sufijos", minutes: 30,
  intro: "En la Parte 3 del Reading & Use of English del B2 First debes transformar 8 palabras para completar un texto. Conocer los sufijos más frecuentes es la clave para resolverla.",
  content: [
    { h: "Sufijos para formar sustantivos" },
    { table: { head: ["Sufijo", "Ejemplos"], rows: [
      ["-tion / -sion", "inform → information, decide → decision"],
      ["-ment", "develop → development, govern → government"],
      ["-ness", "happy → happiness, aware → awareness"],
      ["-ity", "possible → possibility, popular → popularity"],
      ["-ance / -ence", "appear → appearance, differ → difference"],
      ["-er / -or / -ist / -ant (personas)", "employ → employer, act → actor, science → scientist, assist → assistant"]
    ]}},
    { h: "Adjetivos, verbos y adverbios" },
    { table: { head: ["Categoría", "Sufijos", "Ejemplos"], rows: [
      ["Adjetivos", "-ful, -less, -able/-ible, -ous, -ive, -al, -ic", "careful, useless, comfortable, famous, creative, national, scientific"],
      ["Verbos", "-en, -ise/-ize, -ify", "widen, modernise, simplify"],
      ["Adverbios", "-ly", "careful → carefully, easy → easily"]
    ]}},
    { h: "Prefijos negativos frecuentes" },
    { p: "<strong>un-</strong> (unhappy, unusual), <strong>in-</strong> (independent), <strong>im-</strong> delante de p/m (impossible, impatient), <strong>il-</strong> delante de l (illegal), <strong>ir-</strong> delante de r (irregular), <strong>dis-</strong> (disagree, dishonest)." },
    { callout: "<strong>Comprueba siempre:</strong> 1) qué categoría pide el hueco (¿hay un artículo delante? → sustantivo; ¿modifica a un verbo? → adverbio), 2) si el sentido es negativo, 3) si necesita plural." }
  ],
  exercises: [
    { type: "gap", prompt: "The ___ of the new hospital took three years. (CONSTRUCT)", answers: ["construction"], explain: "Sustantivo: construct → construction." },
    { type: "gap", prompt: "She showed great ___ during the crisis. (CALM)", answers: ["calmness"], explain: "Sustantivo con -ness: calmness." },
    { type: "gap", prompt: "The film was ___ boring; I fell asleep. (INCREDIBLE)", answers: ["incredibly"], explain: "Modifica a un adjetivo → adverbio: incredibly." },
    { type: "gap", prompt: "It's ___ to park here without a permit. (LEGAL)", answers: ["illegal"], explain: "Sentido negativo: il- + legal." },
    { type: "gap", prompt: "The ___ of the city centre has attracted more tourists. (MODERN)", answers: ["modernisation", "modernization"], explain: "Modern → modernise → modernisation." },
    { type: "gap", prompt: "He's a very ___ person; he never gets angry. (PATIENCE)", answers: ["patient"], explain: "Adjetivo: patience → patient." },
    { type: "gap", prompt: "There is a growing ___ of the dangers of plastic. (AWARE)", answers: ["awareness"], explain: "Sustantivo: aware → awareness." },
    { type: "gap", prompt: "The instructions were completely ___. Nobody understood them. (USE)", answers: ["useless"], explain: "Adjetivo negativo: use → useless." }
  ]
},

"b2-08": {
  level: "b2", title: "Key word transformations", minutes: 35,
  intro: "En la Parte 4 del Reading & Use of English del B2 First hay 6 transformaciones: debes completar una frase con entre 2 y 5 palabras, incluyendo la palabra clave, para que signifique lo mismo que la original. Cada una vale 2 puntos.",
  content: [
    { h: "Qué se evalúa" },
    { p: "Cada transformación combina un punto gramatical y uno léxico. Estos son los más frecuentes en el B2 First:" },
    { table: { head: ["Punto", "Ejemplo"], rows: [
      ["Pasiva", "They built it in 1900. → It <strong>was built</strong> in 1900."],
      ["Estilo indirecto", "«Don't be late», he said. → He <strong>told us not to</strong> be late."],
      ["Comparativos", "She's taller than me. → I'm <strong>not as tall as</strong> her."],
      ["Wish / regret", "I regret selling it. → I <strong>wish I hadn't sold</strong> it."],
      ["Modales de deducción", "I'm sure he's at home. → He <strong>must be</strong> at home."],
      ["Phrasal verbs", "We cancelled the match. → We <strong>called off</strong> the match."],
      ["Too / enough", "It's too cold to swim. → It <strong>isn't warm enough</strong> to swim."],
      ["Present perfect", "I started working here in 2020. → I <strong>have worked here since</strong> 2020."]
    ]}},
    { h: "Método en 4 pasos" },
    { p: "1) Lee las dos frases y localiza qué falta. 2) Identifica la estructura que exige la palabra clave. 3) Escribe la respuesta sin cambiar la palabra clave. 4) Cuenta las palabras (las contracciones cuentan como dos: <em>didn't</em> = <em>did not</em>)." },
    { callout: "<strong>Puntuación parcial:</strong> cada respuesta tiene dos partes que valen un punto cada una. Aunque no estés seguro de todo, escribe siempre algo." }
  ],
  exercises: [
    { type: "transform", first: "They will deliver the parcel tomorrow.", keyword: "BE", before: "The parcel", after: "tomorrow.", answers: ["will be delivered"], explain: "Futuro pasivo: will be + participio." },
    { type: "transform", first: "«Don't touch the paintings», the guide said to us.", keyword: "TOLD", before: "The guide", after: "the paintings.", answers: ["told us not to touch"], explain: "Orden negativa: told + objeto + not to." },
    { type: "transform", first: "My brother is older than me.", keyword: "AS", before: "I am", after: "my brother.", answers: ["not as old as", "isn't as old as"], explain: "Not as + adjetivo + as." },
    { type: "transform", first: "They postponed the meeting until next week.", keyword: "OFF", before: "They", after: "the meeting until next week.", answers: ["put off"], explain: "Postpone = put off." },
    { type: "transform", first: "The water is too cold for swimming.", keyword: "ENOUGH", before: "The water", after: "for swimming.", answers: ["isn't warm enough", "is not warm enough", "isn't hot enough", "is not hot enough"], explain: "Too cold = not warm enough." },
    { type: "transform", first: "I started learning the piano three years ago.", keyword: "BEEN", before: "I", after: "the piano for three years.", answers: ["have been learning", "'ve been learning", "have been playing", "'ve been playing"], explain: "Acción que continúa → present perfect continuous + for." },
    { type: "transform", first: "It was a mistake to lend him money.", keyword: "SHOULDN'T", before: "I", after: "him money.", answers: ["shouldn't have lent"], explain: "Arrepentimiento → shouldn't have + participio." }
  ]
},

"b2-09": {
  level: "b2", title: "Writing: el essay de opinión", minutes: 35,
  intro: "La Parte 1 del Writing del B2 First es siempre un essay obligatorio de 140–190 palabras. Te dan una pregunta, dos ideas que debes tratar y te piden una tercera idea propia.",
  content: [
    { h: "Estructura recomendada" },
    { table: { head: ["Párrafo", "Contenido", "Palabras aprox."], rows: [
      ["1. Introducción", "Presenta el tema; reformula la pregunta.", "25–30"],
      ["2. Idea 1", "Primera nota del enunciado con argumento y ejemplo.", "40–45"],
      ["3. Idea 2", "Segunda nota del enunciado.", "40–45"],
      ["4. Idea propia", "Tu tercera idea (obligatoria).", "35–40"],
      ["5. Conclusión", "Tu opinión clara y resumida.", "25–30"]
    ]}},
    { callout: "<strong>Error que cuesta puntos:</strong> olvidar la tercera idea propia o no responder a la pregunta. Antes de escribir, subraya las dos notas y decide tu idea." },
    { h: "Lenguaje útil" },
    { table: { head: ["Función", "Expresiones"], rows: [
      ["Introducir", "Nowadays… · It is often said that… · Many people believe that…"],
      ["Añadir", "Moreover · Furthermore · In addition · What is more"],
      ["Contrastar", "However · On the other hand · Although · Despite / In spite of"],
      ["Ejemplificar", "For example · For instance · such as"],
      ["Opinar", "In my opinion · I strongly believe that · From my point of view"],
      ["Concluir", "To sum up · In conclusion · All things considered"]
    ]}},
    { examples: [
      ["Nowadays, more and more people choose to work from home.", "Hoy en día, cada vez más gente elige trabajar desde casa."],
      ["On the other hand, working alone can be quite isolating.", "Por otro lado, trabajar solo puede aislar bastante."],
      ["All things considered, I believe the advantages outweigh the disadvantages.", "En conjunto, creo que las ventajas superan a los inconvenientes."]
    ]},
    { callout: "<strong>Registro:</strong> neutro o formal. Evita contracciones, exclamaciones y expresiones coloquiales (<em>stuff, kids, a lot of</em> → <em>things, children, many</em>)." }
  ],
  exercises: [
    { type: "mc", prompt: "¿Cuántas palabras debe tener el essay del B2 First?", options: ["100–120", "140–190", "220–260"], answer: 1, explain: "B2 First: 140–190 palabras (220–260 es C1)." },
    { type: "mc", prompt: "Además de las dos notas del enunciado, debes incluir…", options: ["una conclusión sin opinión", "una idea propia", "un título"], answer: 1, explain: "La tercera idea propia es obligatoria." },
    { type: "mc", prompt: "Conector para contrastar:", options: ["Moreover", "However", "For instance"], answer: 1, explain: "However introduce contraste." },
    { type: "gap", prompt: "All things ___, I believe it is a positive change.", answers: ["considered"], explain: "All things considered = en conjunto." },
    { type: "gap", prompt: "___ the high cost, many families choose private schools. (a pesar de; una palabra)", answers: ["despite"], explain: "Despite + sustantivo." },
    { type: "mc", prompt: "Frase más adecuada para el essay:", options: ["Kids spend loads of time on their phones!", "Children spend a great deal of time on their phones.", "Kids are always on their phones, lol."], answer: 1, explain: "Registro neutro-formal, sin coloquialismos." },
    { type: "gap", prompt: "Public transport is cheap. ___, it reduces pollution. (además, formal)", answers: ["moreover", "furthermore", "in addition", "what is more", "what's more"], explain: "Conectores de adición formales." }
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
},
"c2-02": {
  level: "c2", title: "Idioms en contexto", minutes: 30,
  intro: "En C2 se espera que entiendas y uses expresiones idiomáticas con naturalidad y en el registro adecuado. La clave no es memorizar listas, sino saber cuándo suena natural cada una.",
  content: [
    { h: "Idioms frecuentes en registro neutro o formal" },
    { table: { head: ["Expresión", "Significado", "Ejemplo"], rows: [
      ["a far cry from", "muy distinto de", "The final version was a far cry from the original draft."],
      ["the tip of the iceberg", "solo una pequeña parte del problema", "These complaints are just the tip of the iceberg."],
      ["a blessing in disguise", "algo malo que resulta beneficioso", "Losing that job was a blessing in disguise."],
      ["the elephant in the room", "un problema evidente que nadie menciona", "Funding was the elephant in the room."],
      ["back to the drawing board", "volver a empezar desde cero", "The tests failed, so it's back to the drawing board."],
      ["cut corners", "hacer algo mal para ahorrar tiempo o dinero", "The builders clearly cut corners."],
      ["get to grips with", "empezar a dominar algo difícil", "It took me months to get to grips with the software."],
      ["come to a head", "llegar a un punto crítico", "Tensions came to a head at the annual meeting."],
      ["sit on the fence", "no posicionarse", "You can't sit on the fence on this issue."],
      ["bite off more than you can chew", "abarcar más de lo que se puede", "He bit off more than he could chew with three jobs."]
    ]}},
    { examples: [
      ["The new policy is a far cry from what was promised.", "La nueva política dista mucho de lo prometido."],
      ["Let's not beat around the bush: the project is over budget.", "No nos andemos con rodeos: el proyecto supera el presupuesto."],
      ["In the long run, the investment will pay off.", "A largo plazo, la inversión dará sus frutos."]
    ]},
    { callout: "<strong>Usa los idioms con moderación:</strong> uno o dos bien colocados en un texto C2 muestran dominio; muchos seguidos suenan artificiales. Evita los muy coloquiales (<em>it's raining cats and dogs</em>) en textos formales." },
    { callout: "<strong>Son fijos:</strong> no se puede cambiar ni una palabra. «The point of the iceberg» ✗ · «the tip of the iceberg» ✓." }
  ],
  exercises: [
    { type: "mc", prompt: "The reported cases are only the ___ of the iceberg.", options: ["top", "tip", "peak"], answer: 1, explain: "Expresión fija: the tip of the iceberg." },
    { type: "mc", prompt: "Missing that flight turned out to be a blessing in ___.", options: ["disguise", "hiding", "secret"], answer: 0, explain: "A blessing in disguise." },
    { type: "gap", prompt: "The prototype failed every test, so it's back to the drawing ___.", answers: ["board"], explain: "Back to the drawing board." },
    { type: "gap", prompt: "Nobody mentioned the budget cuts; they were the ___ in the room.", answers: ["elephant"], explain: "The elephant in the room." },
    { type: "mc", prompt: "Cheap materials? The contractor must have cut ___.", options: ["edges", "corners", "angles"], answer: 1, explain: "Cut corners = hacer algo deficiente para ahorrar." },
    { type: "gap", prompt: "The dispute finally came to a ___ when the workers went on strike.", answers: ["head"], explain: "Come to a head = llegar a un punto crítico." },
    { type: "mc", prompt: "His latest novel is a far ___ from his early work.", options: ["cry", "shout", "call"], answer: 0, explain: "A far cry from = muy diferente de." },
    { type: "gap", prompt: "It took her a while to get to ___ with the new legislation.", answers: ["grips"], explain: "Get to grips with = llegar a dominar." }
  ]
},

"c2-03": {
  level: "c2", title: "Matices entre sinónimos", minutes: 30,
  intro: "En C2 la precisión léxica es decisiva: muchas palabras parecen equivalentes, pero difieren en significado, registro o colocación. Estas parejas aparecen con frecuencia en el Use of English.",
  content: [
    { h: "Parejas que se confunden" },
    { table: { head: ["Palabras", "Diferencia", "Ejemplo"], rows: [
      ["historic / historical", "trascendental / relativo a la historia", "a historic victory · historical documents"],
      ["economic / economical", "de la economía / que ahorra", "economic growth · an economical car"],
      ["continual / continuous", "repetido con interrupciones / sin interrupción", "continual complaints · continuous noise"],
      ["imply / infer", "insinuar (emisor) / deducir (receptor)", "Are you implying I lied? · I inferred from his tone that…"],
      ["disinterested / uninterested", "imparcial / sin interés", "a disinterested judge · uninterested in politics"],
      ["classic / classical", "típico o de gran calidad / de la Antigüedad o música culta", "a classic mistake · classical music"],
      ["affect / effect", "afectar (verbo) / efecto (sustantivo)", "It affected me · It had an effect on me"],
      ["raise / rise / arise", "levantar (transitivo) / subir / surgir", "raise prices · prices rise · problems arise"]
    ]}},
    { h: "Verbos para introducir opiniones" },
    { p: "Cambiar <em>say</em> por un verbo preciso eleva el nivel: <strong>claim</strong> (afirmar, con duda), <strong>contend</strong> (sostener en un debate), <strong>maintain</strong> (seguir afirmando), <strong>concede</strong> (admitir a regañadientes), <strong>allege</strong> (acusar sin pruebas), <strong>assert</strong> (afirmar con firmeza)." },
    { examples: [
      ["The author contends that the reforms were premature.", "El autor sostiene que las reformas fueron prematuras."],
      ["She conceded that the data were incomplete.", "Admitió que los datos estaban incompletos."]
    ]},
    { h: "Defectos y desventajas" },
    { p: "<strong>drawback</strong> (inconveniente de un plan), <strong>flaw</strong> (fallo en un argumento o carácter), <strong>defect</strong> (fallo de fabricación), <strong>shortcoming</strong> (carencia, normalmente en plural)." }
  ],
  exercises: [
    { type: "mc", prompt: "The signing of the treaty was a ___ moment.", options: ["historic", "historical"], answer: 0, explain: "Trascendental → historic." },
    { type: "mc", prompt: "This boiler is very ___; our bills have gone down.", options: ["economic", "economical"], answer: 1, explain: "Que ahorra → economical." },
    { type: "mc", prompt: "We need a ___ referee who has no stake in the outcome.", options: ["disinterested", "uninterested"], answer: 0, explain: "Imparcial → disinterested." },
    { type: "mc", prompt: "From her silence, I ___ that she disagreed.", options: ["implied", "inferred"], answer: 1, explain: "Deducir (quien recibe) → infer." },
    { type: "mc", prompt: "The main ___ of the argument is that it ignores cost.", options: ["defect", "flaw", "drawback"], answer: 1, explain: "Fallo en un argumento → flaw." },
    { type: "mc", prompt: "A serious problem has ___ with the supplier.", options: ["arisen", "risen", "raised"], answer: 0, explain: "Surgir → arise / arisen." },
    { type: "gap", prompt: "He finally ___ that he had made a mistake. (admitir a regañadientes)", answers: ["conceded", "admitted", "acknowledged"], explain: "Concede = admitir, a menudo en un debate." },
    { type: "mc", prompt: "The ___ interruptions made it impossible to concentrate. (repetidas)", options: ["continual", "continuous"], answer: 0, explain: "Repetidas con pausas → continual." }
  ]
},

"c2-04": {
  level: "c2", title: "Nominalización y estilo académico", minutes: 30,
  intro: "La nominalización convierte verbos y adjetivos en sustantivos. Es el rasgo más característico del inglés académico y formal: condensa información y da un tono objetivo.",
  content: [
    { h: "Del estilo verbal al nominal" },
    { table: { head: ["Estilo verbal (menos formal)", "Estilo nominal (académico)"], rows: [
      ["The government decided to raise taxes, which angered people.", "The government's decision to raise taxes caused widespread anger."],
      ["Because prices increased sharply, …", "Owing to the sharp increase in prices, …"],
      ["When the company expanded into Asia, …", "Following the company's expansion into Asia, …"],
      ["If we analyse the data carefully, we see…", "Careful analysis of the data reveals…"],
      ["People are not aware of the risks.", "There is a lack of awareness of the risks."]
    ]}},
    { h: "Cómo se construye" },
    { p: "1) Convierte el verbo en sustantivo (<em>decide → decision, fail → failure, reduce → reduction</em>). 2) El sujeto pasa a genitivo o a <em>of</em> (<em>the government's decision, the failure of the plan</em>). 3) Los adverbios se convierten en adjetivos (<em>sharply → sharp</em>). 4) Une con un verbo neutro: <em>lead to, result in, cause, reveal</em>." },
    { examples: [
      ["The introduction of the new law led to a reduction in crime.", "La introducción de la nueva ley conllevó una reducción de la delincuencia."],
      ["There has been a significant improvement in air quality.", "Se ha producido una mejora significativa de la calidad del aire."]
    ]},
    { callout: "<strong>Sin excesos:</strong> una cadena de sustantivos («the implementation of the reduction of the consumption of…») es ilegible. Combina estilo nominal y verbal." }
  ],
  exercises: [
    { type: "gap", prompt: "The ___ of the factory led to hundreds of job losses. (CLOSE)", answers: ["closure"], explain: "Close → closure." },
    { type: "gap", prompt: "There has been a dramatic ___ in unemployment. (REDUCE)", answers: ["reduction"], explain: "Reduce → reduction." },
    { type: "gap", prompt: "Their ___ to act quickly made matters worse. (FAIL)", answers: ["failure"], explain: "Fail → failure." },
    { type: "mc", prompt: "Versión nominal de «Because the population grew rapidly, …»:", options: ["Due to the rapid growth of the population, …", "Due to the population grew rapidly, …", "Because of rapidly growing the population, …"], answer: 0, explain: "Grew rapidly → rapid growth (adverbio → adjetivo)." },
    { type: "mc", prompt: "«People don't know enough about the disease» en estilo académico:", options: ["People know nothing about the disease.", "There is a lack of knowledge about the disease.", "The disease is not known by people enough."], answer: 1, explain: "Lack of + sustantivo." },
    { type: "transform", first: "The company expanded rapidly, and this caused a number of problems.", keyword: "EXPANSION", before: "The company's", after: "caused a number of problems.", answers: ["rapid expansion"], explain: "Rapidly expanded → rapid expansion." },
    { type: "transform", first: "If you analyse the results carefully, you will see a clear pattern.", keyword: "ANALYSIS", before: "Careful", after: "reveals a clear pattern.", answers: ["analysis of the results"], explain: "Analyse carefully → careful analysis of." }
  ]
},

"c2-05": {
  level: "c2", title: "Inversión con so, such, as y though", minutes: 35,
  intro: "Más allá de la inversión negativa de C1, el inglés culto usa inversiones con so, such y estructuras concesivas con as/though. Son típicas de las key word transformations del C2 Proficiency.",
  content: [
    { h: "So + adjetivo + verbo + sujeto + that" },
    { examples: [
      ["So severe was the storm that the airport closed.", "Tan fuerte fue la tormenta que el aeropuerto cerró."],
      ["So quickly did she speak that nobody understood.", "Habló tan rápido que nadie la entendió."]
    ]},
    { h: "Such + be + sustantivo + that" },
    { examples: [
      ["Such was the demand that tickets sold out in minutes.", "Tal fue la demanda que las entradas se agotaron en minutos."],
      ["Such was her anger that she couldn't speak.", "Tal era su enfado que no podía hablar."]
    ]},
    { callout: "<strong>Such was…:</strong> el sujeto (<em>the demand</em>) va <em>después</em> de <em>was</em>, y <em>such</em> funciona como «tal / tan grande»." },
    { h: "Concesivas: adjetivo/adverbio + as/though + sujeto + verbo" },
    { table: { head: ["Estructura", "Equivale a", "Ejemplo"], rows: [
      ["Adj + as/though", "Although + sujeto + be + adj", "Tired as she was, she kept working."],
      ["Much as", "Although … very much", "Much as I admire him, I can't agree."],
      ["Try as + sujeto + might", "However hard … tried", "Try as I might, I couldn't open it."],
      ["Strange as it may seem", "Although it may seem strange", "Strange as it may seem, it's true."]
    ]}},
    { callout: "<strong>Sin artículo ni «very»:</strong> «As tired as she was» es comparativo, no concesivo. En la estructura concesiva el adjetivo va solo al principio: <em>Tired as she was…</em>" }
  ],
  exercises: [
    { type: "mc", prompt: "___ was the noise that we couldn't sleep.", options: ["So", "Such", "Very"], answer: 1, explain: "Such + was + sustantivo." },
    { type: "mc", prompt: "So ___ that she won the award.", options: ["her performance was impressive", "impressive was her performance", "impressive her performance was"], answer: 1, explain: "So + adj + verbo + sujeto." },
    { type: "gap", prompt: "___ as I might, I couldn't persuade him.", answers: ["try"], explain: "Try as I might = por mucho que lo intentara." },
    { type: "gap", prompt: "___ as I like her, I don't trust her judgement.", answers: ["much"], explain: "Much as = aunque me guste mucho." },
    { type: "transform", first: "Although he was exhausted, he finished the race.", keyword: "AS", before: "", after: ", he finished the race.", answers: ["exhausted as he was", "exhausted as he was,"], explain: "Adj + as + sujeto + verbo." },
    { type: "transform", first: "The demand was so great that the shop ran out of stock.", keyword: "SUCH", before: "", after: "that the shop ran out of stock.", answers: ["such was the demand"], explain: "Such + was + sujeto." },
    { type: "transform", first: "The film was so moving that many people cried.", keyword: "SO", before: "", after: "that many people cried.", answers: ["so moving was the film"], explain: "So + adj + was + sujeto." },
    { type: "transform", first: "It may seem strange, but the theory is correct.", keyword: "AS", before: "", after: ", the theory is correct.", answers: ["strange as it may seem", "strange as it might seem", "strange though it may seem"], explain: "Strange as it may seem." }
  ]
},

"c2-06": {
  level: "c2", title: "Distanciamiento y objetividad", minutes: 30,
  intro: "Las estructuras de distanciamiento permiten transmitir información sin hacerte responsable de su veracidad. Son esenciales en prensa, informes y textos académicos, y aparecen siempre en el C2 Proficiency.",
  content: [
    { h: "Pasiva de verbos de opinión" },
    { table: { head: ["Estructura", "Ejemplo"], rows: [
      ["It is said / believed / thought that…", "It is believed that the painting is a forgery."],
      ["Sujeto + is said to + infinitivo (presente)", "The painting is believed to be a forgery."],
      ["Sujeto + is said to have + participio (pasado)", "He is said to have left the country."],
      ["Sujeto + is said to be + -ing (en curso)", "The minister is thought to be considering resigning."],
      ["There is thought to be…", "There are thought to be over 100 survivors."]
    ]}},
    { h: "Otros recursos" },
    { table: { head: ["Recurso", "Ejemplo"], rows: [
      ["seem / appear + to (have)", "The suspect appears to have fled."],
      ["Adverbios", "allegedly, reportedly, supposedly, apparently, ostensibly"],
      ["According to / In the view of", "According to official figures, …"],
      ["Condicional periodístico", "The deal would appear to benefit both sides."]
    ]}},
    { examples: [
      ["The company is reported to have lost millions.", "Se informa de que la empresa ha perdido millones."],
      ["The president allegedly accepted bribes.", "El presidente presuntamente aceptó sobornos."],
      ["There appears to have been a misunderstanding.", "Parece que ha habido un malentendido."]
    ]},
    { callout: "<strong>Elige bien el infinitivo:</strong> si la acción es anterior al momento de la opinión → <em>to have + participio</em>. «He is said to leave the country yesterday» ✗ → <em>to have left</em> ✓." }
  ],
  exercises: [
    { type: "mc", prompt: "The suspect is believed ___ the country last week.", options: ["to leave", "to have left", "leaving"], answer: 1, explain: "Acción anterior → to have + participio." },
    { type: "mc", prompt: "The minister is thought ___ resigning. (en curso)", options: ["to consider", "to be considering", "considering"], answer: 1, explain: "Acción en curso → to be + -ing." },
    { type: "gap", prompt: "The singer ___ earned over ten million last year. (presuntamente, adverbio)", answers: ["allegedly", "reportedly", "supposedly"], explain: "Adverbios de distanciamiento." },
    { type: "gap", prompt: "There ___ thought to be several hundred people trapped.", answers: ["are"], explain: "There are thought to be + plural." },
    { type: "transform", first: "People say that the castle is haunted.", keyword: "SAID", before: "The castle", after: "haunted.", answers: ["is said to be"], explain: "Sujeto + is said to be." },
    { type: "transform", first: "It is reported that the company has lost millions.", keyword: "REPORTED", before: "The company", after: "millions.", answers: ["is reported to have lost"], explain: "Pasado → is reported to have + participio." },
    { type: "transform", first: "It seems that there has been a mistake.", keyword: "APPEARS", before: "There", after: "a mistake.", answers: ["appears to have been"], explain: "There appears to have been…" }
  ]
},

"c2-07": {
  level: "c2", title: "Reading & Use of English: open cloze", minutes: 35,
  intro: "En la Parte 2 del C2 Proficiency completas 8 huecos de un texto con una sola palabra, sin opciones. Se evalúan expresiones fijas, conectores, preposiciones y estructuras gramaticales poco frecuentes.",
  content: [
    { h: "El formato completo de Reading & Use of English (C2)" },
    { table: { head: ["Parte", "Tarea", "Preguntas"], rows: [
      ["1", "Multiple-choice cloze", "8"],
      ["2", "Open cloze", "8"],
      ["3", "Word formation", "8"],
      ["4", "Key word transformations (3–8 palabras)", "6"],
      ["5", "Multiple choice", "6"],
      ["6", "Gapped text", "7"],
      ["7", "Multiple matching", "10"]
    ]}},
    { h: "Expresiones que suelen aparecer en el open cloze" },
    { table: { head: ["Expresión", "Significado", "Ejemplo"], rows: [
      ["let alone", "y mucho menos", "He can't boil an egg, let alone cook a meal."],
      ["for all", "a pesar de", "For all his money, he was lonely."],
      ["as it were", "por así decirlo", "She was, as it were, the glue of the team."],
      ["nothing if not", "muy, sumamente", "He is nothing if not persistent."],
      ["be that as it may", "sea como fuere", "Be that as it may, we must decide today."],
      ["to say nothing of", "por no hablar de", "It's expensive, to say nothing of the risks."],
      ["no sooner … than", "en cuanto", "No sooner had I sat down than the phone rang."],
      ["there is no point in", "no tiene sentido", "There's no point in arguing."]
    ]}},
    { callout: "<strong>Método:</strong> lee todo el texto antes de rellenar. Para cada hueco, pregúntate qué categoría falta (preposición, auxiliar, artículo, pronombre, conector) y mira las palabras de ambos lados: muchas veces forman parte de una expresión fija." }
  ],
  exercises: [
    { type: "gap", prompt: "She can barely afford the rent, ___ alone a holiday abroad.", answers: ["let"], explain: "Let alone = y mucho menos." },
    { type: "gap", prompt: "___ all his talent, he never achieved real success.", answers: ["for"], explain: "For all = a pesar de." },
    { type: "gap", prompt: "The new director is nothing ___ ambitious.", answers: ["if"], explain: "Nothing if not = sumamente." },
    { type: "gap", prompt: "Be that as it ___, the decision has already been made.", answers: ["may"], explain: "Be that as it may = sea como fuere." },
    { type: "gap", prompt: "The trip was exhausting, to say ___ of the cost.", answers: ["nothing"], explain: "To say nothing of = por no hablar de." },
    { type: "gap", prompt: "There's no point ___ complaining now; it's too late.", answers: ["in"], explain: "There's no point in + -ing." },
    { type: "gap", prompt: "No ___ had the meeting begun than the fire alarm went off.", answers: ["sooner"], explain: "No sooner … than." },
    { type: "gap", prompt: "He was, as it ___, a stranger in his own home.", answers: ["were"], explain: "As it were = por así decirlo." }
  ]
},

"c2-08": {
  level: "c2", title: "Writing: el summary essay (Parte 1)", minutes: 40,
  intro: "La Parte 1 del Writing del C2 Proficiency es obligatoria: lees dos textos breves sobre un mismo tema y escribes un essay de 240–280 palabras que resuma y evalúe sus ideas principales, añadiendo tu propia opinión.",
  content: [
    { h: "Qué se exige" },
    { p: "Debes <strong>resumir</strong> los puntos clave de ambos textos, <strong>evaluarlos</strong> (¿son convincentes?, ¿qué omiten?) y dar <strong>tu opinión</strong>. Todo con tus propias palabras: copiar frases del texto penaliza." },
    { h: "Estructura recomendada" },
    { table: { head: ["Párrafo", "Contenido"], rows: [
      ["Introducción", "Presenta el tema común de los dos textos."],
      ["Texto 1", "Resume sus dos ideas principales y evalúalas."],
      ["Texto 2", "Resume sus dos ideas principales, compáralas con el texto 1 y evalúalas."],
      ["Conclusión", "Tu postura razonada sobre el tema."]
    ]}},
    { h: "Lenguaje para resumir y evaluar" },
    { examples: [
      ["The first writer contends that tourism inevitably damages local culture.", "El primer autor sostiene que el turismo daña inevitablemente la cultura local."],
      ["By contrast, the second text maintains that tourism can help preserve traditions.", "En cambio, el segundo texto sostiene que el turismo puede ayudar a preservar las tradiciones."],
      ["While this argument has some merit, it overlooks the economic benefits.", "Aunque este argumento tiene cierto mérito, pasa por alto los beneficios económicos."],
      ["Both writers acknowledge, albeit for different reasons, that regulation is needed.", "Ambos autores reconocen, aunque por motivos distintos, que hace falta regulación."]
    ]},
    { callout: "<strong>Paráfrasis:</strong> transforma la estructura, no solo las palabras. «Tourism destroys local culture» → <em>The writer argues that the influx of visitors erodes traditional ways of life</em>." },
    { callout: "<strong>Parte 2:</strong> eliges entre artículo, carta, informe o reseña (280–320 palabras). Cada tarea vale lo mismo; dedica unos 45 minutos a cada una." }
  ],
  exercises: [
    { type: "mc", prompt: "¿Cuántas palabras tiene el essay de la Parte 1 del C2 Proficiency?", options: ["140–190", "220–260", "240–280"], answer: 2, explain: "C2 Proficiency Parte 1: 240–280 palabras." },
    { type: "mc", prompt: "¿Qué tienes que hacer en la Parte 1?", options: ["Solo resumir los dos textos.", "Resumir y evaluar las ideas de ambos textos y dar tu opinión.", "Elegir el texto que prefieras y comentarlo."], answer: 1, explain: "Resumen + evaluación + opinión propia." },
    { type: "mc", prompt: "Mejor forma de reflejar «The writer says that cities are too expensive»:", options: ["The writer says cities are too expensive.", "The writer contends that the cost of urban living has become prohibitive.", "The writer tells cities are very much expensive."], answer: 1, explain: "Verbo preciso y paráfrasis estructural." },
    { type: "gap", prompt: "While this argument has some ___, it overlooks several key factors.", answers: ["merit", "validity"], explain: "Has some merit = tiene cierto mérito." },
    { type: "gap", prompt: "Both writers agree, ___ for different reasons, that change is necessary. (aunque, formal)", answers: ["albeit", "though", "although"], explain: "Albeit = aunque (formal, sin verbo)." },
    { type: "mc", prompt: "Conector para contrastar los dos textos:", options: ["By contrast", "Furthermore", "Consequently"], answer: 0, explain: "By contrast introduce la postura opuesta." },
    { type: "gap", prompt: "The second writer fails to take ___ account the long-term costs.", answers: ["into"], explain: "Take into account = tener en cuenta." }
  ]
},

"c2-09": {
  level: "c2", title: "Listening: inferencia y actitud", minutes: 30,
  intro: "En el Listening del C2 Proficiency las respuestas casi nunca se dicen de forma literal: debes inferir opiniones, actitudes y propósitos a partir del tono, el vocabulario y lo que no se dice.",
  content: [
    { h: "Formato" },
    { table: { head: ["Parte", "Tarea", "Preguntas"], rows: [
      ["1", "Tres extractos cortos, opción múltiple", "6"],
      ["2", "Monólogo, completar frases", "9"],
      ["3", "Entrevista o conversación, opción múltiple", "5"],
      ["4", "Cinco hablantes, emparejamiento múltiple (dos tareas)", "10"]
    ]}},
    { p: "Cada grabación se escucha <strong>dos veces</strong>. La prueba dura unos 40 minutos." },
    { h: "Vocabulario de actitud" },
    { table: { head: ["Adjetivo", "Significado"], rows: [
      ["sceptical", "escéptico, duda que algo funcione"],
      ["ambivalent", "con sentimientos encontrados"],
      ["dismissive", "despectivo, no le da importancia"],
      ["grudging", "a regañadientes"],
      ["wistful", "nostálgico, con añoranza"],
      ["indignant", "indignado por una injusticia"],
      ["resigned", "resignado, acepta lo inevitable"],
      ["sardonic", "burlón, con ironía mordaz"]
    ]}},
    { h: "Pistas para inferir" },
    { examples: [
      ["Well, I suppose it could work… in theory.", "Escepticismo: «en teoría» insinúa que en la práctica no."],
      ["I have to admit, he did a decent job.", "Reconocimiento a regañadientes (grudging)."],
      ["Those were the days, when you could just wander around without a phone.", "Nostalgia (wistful)."],
      ["Oh, brilliant. Another meeting about meetings.", "Ironía / sarcasmo (sardonic)."]
    ]},
    { callout: "<strong>Trampas:</strong> las opciones incorrectas suelen repetir palabras exactas de la grabación. Desconfía de la coincidencia literal y escucha el <em>but</em>, el <em>actually</em> o el <em>mind you</em>: suelen introducir la verdadera opinión." }
  ],
  exercises: [
    { type: "mc", prompt: "«Well, I suppose it could work… in theory.» El hablante está:", options: ["enthusiastic", "sceptical", "indignant"], answer: 1, explain: "«In theory» implica dudas sobre la práctica." },
    { type: "mc", prompt: "«I have to admit, she handled it rather well.» La actitud es:", options: ["grudging admiration", "open hostility", "complete indifference"], answer: 0, explain: "«I have to admit» = reconocimiento a regañadientes." },
    { type: "mc", prompt: "«Ah, the summers we spent there… you don't get that anymore.» El hablante suena:", options: ["wistful", "dismissive", "sardonic"], answer: 0, explain: "Nostalgia del pasado → wistful." },
    { type: "mc", prompt: "«Oh, wonderful. The train's cancelled again.» El tono es:", options: ["sincere", "sardonic", "ambivalent"], answer: 1, explain: "Ironía: dice «wonderful» queriendo decir lo contrario." },
    { type: "mc", prompt: "«Part of me wants to move abroad, but part of me can't imagine leaving.» El hablante está:", options: ["resigned", "ambivalent", "indignant"], answer: 1, explain: "Sentimientos encontrados → ambivalent." },
    { type: "mc", prompt: "«It's outrageous that they can just raise the rent like that!» La actitud es:", options: ["indignant", "wistful", "resigned"], answer: 0, explain: "Indignación ante algo injusto." },
    { type: "mc", prompt: "«Oh, that? It's nothing. Not worth discussing.» El hablante se muestra:", options: ["dismissive", "sceptical", "grudging"], answer: 0, explain: "Le quita importancia → dismissive." },
    { type: "mc", prompt: "«Well, there's nothing we can do about it now, is there?» El hablante está:", options: ["indignant", "resigned", "enthusiastic"], answer: 1, explain: "Acepta lo inevitable → resigned." }
  ]
}
};
