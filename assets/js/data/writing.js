/* Tareas de Writing con formato de examen, respuesta modelo comentada y autoevaluación.
   model: [{ h?: encabezado, text, note? }]  ·  checklist: { criterio: [puntos] } */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.writing = [
{
  id: "w-b1-email", level: "b1", exam: "B1 Preliminary", title: "Email a un amigo", part: "Parte 1 · Email", words: [90, 110], minutes: 20,
  task: [
    "Lee este email de tu amigo inglés Sam y las notas que has escrito.",
    "<blockquote><p><strong>From:</strong> Sam</p><p>Hi! Great news: I'm visiting your city in July! I'd love to see you. <em>[Tell Sam]</em></p><p>What's the weather like there in July? <em>[Explain]</em></p><p>Which places should I visit? <em>[Suggest two places]</em></p><p>Could we meet one day? Which day is best for you? <em>[Yes! Say which day and why]</em></p><p>Sam</p></blockquote>",
    "Escribe tu email a Sam usando <strong>todas las notas</strong>. Escribe unas <strong>100 palabras</strong>."
  ],
  tips: ["Responde a las cuatro notas: si falta una, pierdes puntos de Content.", "Usa un tono informal: contracciones, saludo y despedida amistosos.", "Une las ideas con conectores sencillos: because, so, and, but, also."],
  model: [
    { text: "Hi Sam,", note: "Saludo informal adecuado para un amigo." },
    { text: "That's fantastic news! I can't wait to see you.", note: "Nota 1 cubierta: reacciona con entusiasmo." },
    { text: "In July it's usually very hot here, often over thirty degrees, so bring light clothes, sun cream and a hat.", note: "Nota 2: explica el tiempo y añade un consejo práctico con «so»." },
    { text: "You should definitely visit the old town, which has lovely narrow streets and lots of small cafés. The market by the river is also worth seeing, especially on Sunday mornings.", note: "Nota 3: dos lugares, con una relativa (which…) y la expresión «worth seeing»: rango de B1 alto." },
    { text: "Of course we can meet! Saturday would be best for me because I work during the week. We could have lunch together and then go to the beach in the afternoon.", note: "Nota 4: día y motivo (because), más una propuesta con «could»." },
    { text: "Let me know what you think.<br>Best wishes,<br>Alex", note: "Cierre natural e informal." }
  ],
  checklist: {
    "Content": ["Respondo a las cuatro notas del email.", "El lector entiende toda la información sin dudas."],
    "Communicative Achievement": ["El tono es informal y amistoso, adecuado para un amigo.", "Incluyo saludo y despedida apropiados."],
    "Organisation": ["Cada idea va en su propio párrafo o bloque.", "Uso conectores (because, so, and, but, also)."],
    "Language": ["Uso algunos tiempos y estructuras variadas (should, could, will…).", "Los errores no impiden entender el mensaje."]
  }
},
{
  id: "w-b2-essay", level: "b2", exam: "B2 First", title: "Essay: los jóvenes y el móvil", part: "Parte 1 · Essay", words: [140, 190], minutes: 40,
  task: [
    "En tu clase de inglés habéis hablado sobre la tecnología y los jóvenes. Tu profesor te pide un essay.",
    "<blockquote><p><strong>Do young people today spend too much time on their phones?</strong></p><p>Notes. Write about:</p><p>1. social relationships<br>2. studies<br>3. ………… (your own idea)</p></blockquote>",
    "Escribe un essay usando <strong>todas las notas</strong> y dando razones de tu opinión. Escribe entre <strong>140 y 190 palabras</strong>."
  ],
  tips: ["La tercera idea propia es obligatoria: decide cuál será antes de empezar.", "Dedica un párrafo a cada idea y termina con una opinión clara.", "Registro neutro o formal: evita contracciones y expresiones coloquiales."],
  model: [
    { text: "Smartphones have become an essential part of daily life, especially for teenagers. However, many people worry that young people now spend far too much time looking at their screens.", note: "Introducción breve que presenta el tema y reformula la pregunta sin copiarla." },
    { text: "On the one hand, phones allow young people to stay in touch with friends wherever they are. On the other hand, constant messaging can replace real conversation, and it is not unusual to see a group of friends sitting together in silence, each one staring at a screen.", note: "Nota 1 (relaciones sociales) con los dos lados del argumento y un ejemplo visual." },
    { text: "As far as studies are concerned, phones can be a useful tool for research and online learning. Nevertheless, notifications are a constant distraction, which makes it much harder to concentrate on homework.", note: "Nota 2 (estudios). «As far as … are concerned» y «Nevertheless» muestran rango de B2." },
    { text: "Another important point is health. Using a phone late at night can affect the quality of sleep, and spending hours sitting down means that many teenagers do less exercise than they should.", note: "Tercera idea propia (salud), obligatoria en el B2 First." },
    { text: "In conclusion, I believe that phones are not harmful in themselves, but most young people would benefit from using them less. Setting limits, such as switching them off at night, would be a sensible first step.", note: "Conclusión con opinión clara y matizada, más una propuesta concreta." }
  ],
  checklist: {
    "Content": ["Trato las dos notas del enunciado.", "Añado una tercera idea propia.", "Doy mi opinión con razones."],
    "Communicative Achievement": ["El registro es neutro o formal (sin contracciones ni coloquialismos).", "El texto tiene el formato de un essay: introducción, desarrollo y conclusión."],
    "Organisation": ["Cada idea tiene su propio párrafo.", "Uso conectores variados (however, nevertheless, as far as… is concerned, in conclusion)."],
    "Language": ["Uso estructuras de B2 (relativas, pasivas, condicionales, modales).", "Uso vocabulario variado y preciso, sin repetir las mismas palabras.", "Reviso concordancias, tiempos verbales y ortografía."]
  }
},
{
  id: "w-c1-essay", level: "c1", exam: "C1 Advanced", title: "Essay: hábitos saludables", part: "Parte 1 · Essay", words: [220, 260], minutes: 45,
  task: [
    "Tu clase ha asistido a una mesa redonda sobre qué pueden hacer los gobiernos para que la gente lleve una vida más sana. Has tomado estas notas:",
    "<blockquote><p><strong>Methods governments could use to encourage healthier lifestyles</strong></p><p>• advertising campaigns<br>• taxes on unhealthy food<br>• free sports facilities</p><p><em>Some opinions expressed in the discussion:</em><br>“People ignore adverts.”<br>“Taxes punish the poor.”<br>“Facilities are only used by people who already exercise.”</p></blockquote>",
    "Escribe un essay sobre <strong>dos</strong> de los métodos. Explica <strong>cuál es más eficaz</strong> y da razones. Puedes usar las opiniones de la discusión, pero con tus propias palabras. Escribe entre <strong>220 y 260 palabras</strong>."
  ],
  tips: ["Elige solo dos métodos y di explícitamente cuál es más eficaz: es lo que más se olvida.", "Parafrasea las opiniones del enunciado; no las copies.", "Incluye alguna estructura avanzada (inversión, cleft sentence, participle clause) sin forzarla."],
  model: [
    { text: "Rising rates of obesity and related illnesses have put pressure on governments to find ways of encouraging citizens to lead healthier lives. Of the various methods available, advertising campaigns and taxes on unhealthy food are among the most widely debated.", note: "Introducción que contextualiza y anuncia los dos métodos elegidos." },
    { text: "Public health campaigns have the advantage of raising awareness at relatively low cost. Well-designed adverts can inform people about the risks of a poor diet and inactivity, and some, such as anti-smoking campaigns, have had a measurable impact over time. However, information alone rarely changes ingrained habits; most people already know that fast food is unhealthy, yet continue to eat it. Moreover, the effect of even the most memorable campaign tends to fade once it is no longer on air.", note: "Método 1 evaluado con ventajas y límites. Parafrasea «People ignore adverts» sin copiarlo." },
    { text: "Taxes on products high in sugar or fat, by contrast, target behaviour directly. When the price of a product rises, consumption tends to fall, and manufacturers are often prompted to reformulate their products to avoid the tax. Sugar levies introduced in several countries appear to have had precisely this effect. Critics argue that such taxes hit low-income families hardest, but this objection can be addressed by using the revenue to subsidise healthier options.", note: "Método 2. Responde a la objeción del enunciado («Taxes punish the poor») con una solución: argumentación de C1." },
    { text: "On balance, I would argue that taxation is the more effective of the two measures, since it changes the choices people actually make rather than merely what they know. That said, it is likely to work best when combined with campaigns that explain why it has been introduced, so that the public perceives it as fair rather than punitive.", note: "Conclusión que dice cuál es más eficaz y por qué (requisito de la tarea), con un matiz final («That said…»)." }
  ],
  checklist: {
    "Content": ["Desarrollo exactamente dos de los tres métodos.", "Digo claramente cuál es más eficaz y por qué.", "Si uso las opiniones del enunciado, las parafraseo."],
    "Communicative Achievement": ["El registro es formal y el tono objetivo.", "El lector podría entender mi postura sin leer el enunciado."],
    "Organisation": ["Introducción, un párrafo por método y conclusión.", "Uso conectores y referencias variadas (by contrast, that said, such taxes, this objection)."],
    "Language": ["Uso estructuras de C1 (inversión, cleft sentences, participle clauses, hedging).", "Uso collocations precisas (raise awareness, ingrained habits, target behaviour).", "Apenas hay errores, y no afectan a la comunicación."]
  }
},
{
  id: "w-c1-report", level: "c1", exam: "C1 Advanced", title: "Report: instalaciones de la escuela", part: "Parte 2 · Report", words: [220, 260], minutes: 45,
  task: [
    "La directora de tu escuela de idiomas quiere mejorar las instalaciones y ha pedido a los alumnos un informe.",
    "<blockquote><p>Write a report in which you:</p><p>• <strong>evaluate</strong> the school's current facilities<br>• explain which facilities students find <strong>most and least useful</strong><br>• <strong>recommend</strong> improvements.</p></blockquote>",
    "Escribe el <strong>report</strong> en entre <strong>220 y 260 palabras</strong>."
  ],
  tips: ["Usa un título y encabezados para cada sección: es obligatorio en un report.", "Basa el informe en datos (encuestas, entrevistas) y usa un tono impersonal.", "Las recomendaciones pueden ir en viñetas, pero el resto en frases completas."],
  model: [
    { h: "Report on the school's facilities", text: "", note: "Título claro: un report siempre lo lleva." },
    { h: "Introduction", text: "The aim of this report is to assess the facilities currently available at the school and to recommend improvements. It is based on a questionnaire completed by forty students and on informal conversations during breaks.", note: "Propósito y fuente de la información: da credibilidad y tono impersonal." },
    { h: "Classrooms and equipment", text: "The majority of students consider the classrooms comfortable and well equipped. The interactive whiteboards are particularly appreciated, as they allow teachers to use video and online materials. However, several respondents complained that the rooms on the top floor become uncomfortably hot in summer and that the wifi signal is weak in some areas.", note: "Evaluación equilibrada (puntos fuertes y débiles) con lenguaje de informe: the majority of, respondents." },
    { h: "The self-study centre", text: "Opinions on the self-study centre were more divided. While those who use it value the range of graded readers, many students said they were unaware of its opening hours, and the computers were described as slow and outdated.", note: "Uso de la pasiva («were described as») y de while para contrastar." },
    { h: "The student lounge", text: "The lounge was rated as the least useful facility. It is small, has limited seating and is frequently used for staff meetings, which means students are often unable to access it. Several students also mentioned that there is nowhere to make hot drinks.", note: "Responde al punto «least useful» del enunciado de forma explícita." },
    { h: "Recommendations", text: "In light of these findings, I would recommend the following:<br>• installing fans or air conditioning in the top-floor classrooms<br>• replacing the computers in the self-study centre and publicising its opening hours more clearly<br>• reserving the lounge exclusively for students and providing additional seating.<br>Implementing these changes would significantly improve the learning environment and students' overall satisfaction.", note: "Recomendaciones concretas en viñetas con estructura paralela (-ing), y una frase final que resume el beneficio." }
  ],
  checklist: {
    "Content": ["Evalúo las instalaciones actuales.", "Indico cuáles son las más y las menos útiles.", "Hago recomendaciones concretas."],
    "Communicative Achievement": ["El tono es formal e impersonal, adecuado para la dirección.", "Uso título y encabezados."],
    "Organisation": ["Cada sección tiene un propósito claro.", "Las recomendaciones se derivan de lo expuesto antes."],
    "Language": ["Uso lenguaje de informe (the majority of, respondents, it was found that, in light of).", "Uso la pasiva y estructuras impersonales.", "Las viñetas tienen estructura paralela."]
  }
},
{
  id: "w-c2-summary", level: "c2", exam: "C2 Proficiency", title: "Summary essay: el teletrabajo", part: "Parte 1 · Essay", words: [240, 280], minutes: 45,
  task: [
    "Lee los dos textos siguientes.",
    "<blockquote><p><strong>Text 1 · A quiet revolution</strong></p><p>The shift to remote work has given employees something they had long been denied: control over their own time. Freed from the daily commute, many report higher productivity and a better balance between their professional and family lives. Employers, too, have benefited, saving considerable sums on office space and gaining access to talent far beyond their immediate vicinity. To insist on a return to the office is to ignore the evidence.</p></blockquote>",
    "<blockquote><p><strong>Text 2 · The hidden costs of the empty office</strong></p><p>For all its convenience, remote work carries costs that are less immediately visible. Younger employees, in particular, miss out on the informal learning that comes from observing experienced colleagues, and many report feeling isolated. Innovation, too, may suffer: the chance encounters that spark new ideas rarely happen over video calls. Organisations that abandon the office entirely may find that short-term savings come at a long-term price.</p></blockquote>",
    "Escribe un essay que <strong>resuma y evalúe</strong> las ideas clave de ambos textos. Usa tus propias palabras e incluye tu opinión. Escribe entre <strong>240 y 280 palabras</strong>."
  ],
  tips: ["Resume las dos ideas clave de cada texto con tus propias palabras: copiar frases penaliza.", "Evalúa, no solo resumas: ¿es convincente el argumento?, ¿qué pasa por alto?", "Termina con tu postura razonada, que puede integrar ambos textos."],
  model: [
    { text: "The question of whether work should remain largely remote has become one of the defining debates of the post-pandemic workplace, and the two texts approach it from markedly different angles.", note: "Introducción que presenta el tema común sin entrar todavía en detalles." },
    { text: "The first writer presents remote working as an unambiguous gain. Employees, it is argued, have regained control of their time, which translates into greater productivity and a healthier work–life balance, while employers save on premises and can recruit from a much wider pool. This case is persuasive as far as it goes, yet it rests on the assumption that what suits the individual necessarily suits the organisation, and it dismisses opposing views rather too briskly.", note: "Resume el texto 1 con paráfrasis estructural («saving on office space» → «save on premises») y lo evalúa: señala un supuesto implícito." },
    { text: "The second text offers a useful corrective. Its author contends that the benefits of remote work obscure less tangible losses: junior staff are deprived of the opportunity to learn by observing colleagues, isolation is widespread, and the spontaneous exchanges that generate new ideas are difficult to replicate online. These concerns strike me as well founded, although the writer arguably overstates the case by implying that innovation depends on physical proximity alone.", note: "Texto 2 resumido y evaluado. Verbos precisos (contends, obscure) y hedging (arguably) propios de C2." },
    { text: "In my view, neither position is entirely convincing on its own. The first writer is right that flexibility brings real benefits, but the second identifies costs that tend to emerge only over time. A hybrid model, in which teams meet in person regularly for collaboration and mentoring while retaining the freedom to work remotely for focused tasks, seems the most sensible way to reconcile the two. Ultimately, the question is not whether people should work from home, but how organisations can preserve what the office did well without sacrificing what remote work has made possible.", note: "Opinión propia que integra ambos textos y propone una síntesis razonada." }
  ],
  checklist: {
    "Content": ["Resumo las ideas clave de los dos textos.", "Evalúo los argumentos, no solo los resumo.", "Incluyo mi propia opinión razonada."],
    "Communicative Achievement": ["Parafraseo con mis propias palabras, sin copiar frases de los textos.", "El registro es formal y académico."],
    "Organisation": ["La estructura es clara: introducción, texto 1, texto 2, conclusión.", "Las transiciones entre textos y párrafos son fluidas."],
    "Language": ["Uso verbos de opinión precisos (contend, maintain, concede, overlook).", "Uso estructuras de C2 (inversión, nominalización, distanciamiento).", "El texto apenas contiene errores."]
  }
},
{
  id: "w-c1-proposal", level: "c1", exam: "C1 Advanced", title: "Proposal: instalaciones para jóvenes", part: "Parte 2 · Proposal", words: [220, 260], minutes: 45,
  task: [
    "El ayuntamiento de tu ciudad dispone de una partida para mejorar las instalaciones destinadas a los jóvenes y ha pedido propuestas a los vecinos.",
    "<blockquote><p>Write a proposal in which you:</p><p>• <strong>describe</strong> the facilities currently available for young people<br>• <strong>suggest</strong> how the money should be spent<br>• <strong>explain</strong> how your suggestions would benefit the community.</p></blockquote>",
    "Escribe la <strong>proposal</strong> en entre <strong>220 y 260 palabras</strong>."
  ],
  tips: ["Una proposal mira al futuro: el núcleo son tus sugerencias y sus beneficios.", "Usa título y encabezados, como en un report.", "Escribe para persuadir a quien decide: tono formal, propuestas concretas y realistas."],
  model: [
    { h: "Proposal: improving facilities for young people in Northfield", text: "", note: "Título que indica el tipo de texto y el tema." },
    { h: "Introduction", text: "The purpose of this proposal is to recommend how the funding recently made available by the council could best be used to meet the needs of young people in the area. It draws on the views of around fifty local teenagers and parents.", note: "Propósito y fuente de las ideas: da autoridad al texto." },
    { h: "Current situation", text: "At present, provision for young people is extremely limited. Apart from a small skate park, which is in poor condition, there is nowhere for teenagers to meet in the evenings. As a result, many congregate outside shops, which has occasionally led to complaints from residents.", note: "Describe la situación actual con causa y consecuencia («As a result»)." },
    { h: "Recommendations", text: "I would suggest that the money be spent in two main ways. Firstly, the disused community hall on Station Road could be converted into a youth centre offering study space, a café and evening activities such as music and coding workshops. Secondly, the skate park should be renovated and properly lit, so that it can be used safely after dark.", note: "Sugerencias concretas. «Suggest that the money be spent» usa el subjuntivo formal, rasgo de C1." },
    { h: "Expected benefits", text: "These measures would give young people safe, supervised places to spend their free time, which is likely to reduce tensions with residents. A youth centre would also provide valuable support for students who lack a quiet place to study at home, and could offer volunteering opportunities that strengthen links between generations.", note: "Beneficios para la comunidad, con hedging («is likely to») para sonar realista." },
    { h: "", text: "I am confident that, if implemented, these proposals would make a lasting difference to the lives of young people in Northfield.", note: "Cierre persuasivo. «If implemented» es una participle clause reducida." }
  ],
  checklist: {
    "Content": ["Describo las instalaciones actuales.", "Sugiero en qué gastar el dinero, con propuestas concretas.", "Explico los beneficios para la comunidad."],
    "Communicative Achievement": ["El tono es formal y persuasivo, adecuado para el ayuntamiento.", "Uso título y encabezados."],
    "Organisation": ["Cada sección cumple una función clara.", "Las propuestas responden a los problemas descritos."],
    "Language": ["Uso lenguaje de propuesta (I would suggest that…, I would recommend…, if implemented).", "Uso estructuras formales (subjuntivo, pasiva, hedging)."]
  }
},
{
  id: "w-c1-review", level: "c1", exam: "C1 Advanced", title: "Review: un libro que cambió tu forma de ver algo", part: "Parte 2 · Review", words: [220, 260], minutes: 45,
  task: [
    "Una revista internacional invita a sus lectores a enviar reseñas.",
    "<blockquote><p><strong>Reviews wanted!</strong></p><p>Have you read a book or seen a film that changed the way you see something? Send us a review explaining what the book or film is about, <strong>why it changed your perspective</strong>, and <strong>who you would recommend it to</strong>.</p></blockquote>",
    "Escribe tu <strong>review</strong> en entre <strong>220 y 260 palabras</strong>."
  ],
  tips: ["Una review combina descripción, valoración y recomendación: las tres son obligatorias.", "Engancha al lector desde el título y la primera frase.", "Registro semiformal: puedes dirigirte al lector y mostrar entusiasmo, pero con lenguaje preciso."],
  model: [
    { h: "Why the world is better than you think", text: "", note: "Título atractivo, como en una revista." },
    { text: "How many of us would score worse than a chimpanzee in a quiz about the state of the world? According to the late Hans Rosling, the vast majority. His book <em>Factfulness</em>, written with his son and daughter-in-law, sets out to explain why.", note: "Apertura con pregunta retórica para captar al lector, y presentación del libro." },
    { text: "The book opens with a set of multiple-choice questions on topics such as poverty, education and life expectancy. Most readers, including highly educated ones, get the majority wrong, consistently assuming the world to be poorer and more dangerous than it actually is. Rosling then identifies ten 'instincts' that distort our thinking, from our tendency to focus on frightening news to our habit of dividing the world into 'us' and 'them'.", note: "Describe el contenido sin contar todo, con vocabulario preciso." },
    { text: "What struck me most was not the statistics themselves but how confidently wrong I had been. I had always considered myself well informed, yet my picture of the world was decades out of date. Since reading it, I have become far more cautious about drawing conclusions from dramatic headlines.", note: "Explica por qué cambió su perspectiva: el núcleo de la tarea, con un toque personal." },
    { text: "Admittedly, some critics feel the book is overly optimistic and pays too little attention to problems such as climate change. Even so, its central message, that we should base our views on evidence rather than instinct, could hardly be more relevant.", note: "Valoración equilibrada: reconoce críticas antes de defender el libro («Admittedly… Even so»)." },
    { text: "I would recommend <em>Factfulness</em> to anyone who follows the news, and particularly to students and teachers. It is clear, often funny and genuinely eye-opening.", note: "Recomendación explícita con destinatarios concretos, como pide la tarea." }
  ],
  checklist: {
    "Content": ["Explico de qué trata el libro o la película.", "Explico por qué cambió mi forma de ver algo.", "Digo a quién se lo recomendaría."],
    "Communicative Achievement": ["El título y la apertura captan la atención del lector.", "El tono es atractivo pero preciso, propio de una revista."],
    "Organisation": ["Separo descripción, valoración y recomendación en párrafos.", "Uso conectores de contraste y concesión (admittedly, even so, yet)."],
    "Language": ["Uso vocabulario evaluativo variado (eye-opening, overly optimistic, accomplished…).", "Uso estructuras de C1 (cleft sentences, participle clauses, inversión)."]
  }
},
{
  id: "w-c1-letter", level: "c1", exam: "C1 Advanced", title: "Carta formal de reclamación", part: "Parte 2 · Letter", words: [220, 260], minutes: 45,
  task: [
    "El verano pasado hiciste un curso intensivo de inglés de dos semanas en una escuela de verano en el extranjero. La experiencia fue decepcionante.",
    "<blockquote><p>Write a letter to the director of the school in which you:</p><p>• explain <strong>what was disappointing</strong> about the course, compared with what was advertised<br>• <strong>suggest</strong> how the course could be improved for future students.</p></blockquote>",
    "Escribe la <strong>carta</strong> en entre <strong>220 y 260 palabras</strong>. No incluyas direcciones postales."
  ],
  tips: ["Mantén un tono firme pero cortés: una carta agresiva pierde puntos de Communicative Achievement.", "Contrasta lo anunciado con la realidad, con datos concretos.", "Si no conoces el nombre del destinatario: Dear Sir or Madam … Yours faithfully."],
  model: [
    { text: "Dear Sir or Madam,", note: "Saludo formal: destinatario desconocido." },
    { text: "I am writing to express my disappointment with the two-week Intensive English course I attended at your school in July. While I appreciate that summer is a busy period, several aspects of the course fell considerably short of what was advertised.", note: "Motivo de la carta en la primera frase, con un tono firme pero razonable («While I appreciate…»)." },
    { text: "Firstly, your brochure promised classes of no more than eight students. In practice, my group never had fewer than fifteen, which meant that opportunities to speak were extremely limited. Secondly, the course was described as being taught by 'experienced, qualified teachers'. However, we had three different teachers in the space of two weeks, one of whom openly admitted that it was his first teaching job.", note: "Contraste concreto entre lo anunciado y la realidad, ordenado con «Firstly / Secondly»." },
    { text: "I was also disappointed by the social programme. Of the six excursions listed, only two actually took place, and no explanation or refund was offered for those that were cancelled. When I raised the matter with the course coordinator, I was simply told that 'this happens every year'.", note: "Tercer problema, con datos precisos que dan credibilidad a la queja." },
    { text: "I would like to suggest a number of improvements. Above all, class sizes should be capped as advertised, even if this means accepting fewer students. It would also be helpful to ensure continuity of teaching staff and to inform students promptly of any changes to the programme, offering compensation where appropriate.", note: "Sugerencias constructivas, como pide la tarea, con lenguaje cortés (It would be helpful to…)." },
    { text: "I hope that you will take these comments into account and look forward to hearing how you intend to address them.<br>Yours faithfully,<br>Laura Méndez", note: "Cierre formal que pide una respuesta. «Yours faithfully» concuerda con «Dear Sir or Madam»." }
  ],
  checklist: {
    "Content": ["Explico qué fue decepcionante comparado con lo anunciado.", "Sugiero mejoras concretas."],
    "Communicative Achievement": ["El tono es formal, firme y cortés, nunca agresivo.", "Saludo y despedida concuerdan (Dear Sir or Madam → Yours faithfully)."],
    "Organisation": ["Un párrafo por problema y otro para las sugerencias.", "Uso conectores para ordenar (firstly, secondly, also, above all)."],
    "Language": ["Uso lenguaje formal de reclamación (fell short of, express my disappointment).", "No uso contracciones ni expresiones coloquiales."]
  }
},
{
  id: "w-c2-article", level: "c2", exam: "C2 Proficiency", title: "Article: ¿aprender idiomas en la era de la traducción automática?", part: "Parte 2 · Article", words: [280, 320], minutes: 45,
  task: [
    "Una revista cultural internacional ha publicado este anuncio:",
    "<blockquote><p><strong>Lost in translation?</strong></p><p>Translation apps are becoming more accurate every year. Is it still worth spending years learning a foreign language? Write an article giving your views. The best articles will be published in next month's issue.</p></blockquote>",
    "Escribe tu <strong>article</strong> en entre <strong>280 y 320 palabras</strong>."
  ],
  tips: ["Un artículo debe enganchar: título sugerente, apertura viva y voz personal.", "Combina argumentos con ejemplos concretos y alguna anécdota.", "En C2 se valora el estilo: variedad sintáctica, ironía ligera, preguntas retóricas y un cierre memorable."],
  model: [
    { h: "Why I'm still learning Italian", text: "", note: "Título personal y sugerente, en lugar de repetir la pregunta del enunciado." },
    { text: "Last summer, in a small village in Umbria, I watched a tourist hold his phone up to an elderly shopkeeper, who listened politely as a synthetic voice asked for 'two hundred grams of the local cheese, please'. The transaction was a success. The cheese was purchased. And yet something, I couldn't help feeling, had been lost.", note: "Apertura con una anécdota concreta que plantea el tema sin enunciarlo. Frases cortas al final para crear ritmo." },
    { text: "It would be foolish to deny that translation technology has transformed how we travel, work and communicate. For reading a menu, deciphering a contract or navigating a foreign hospital, it is nothing short of a revolution, and those who dismiss it are, I suspect, rarely the ones stranded abroad without a word of the local language.", note: "Concede el argumento contrario con matices antes de rebatirlo: argumentación madura." },
    { text: "But a language is not merely a code to be cracked. It carries a way of seeing the world: the jokes a culture finds funny, the things it considers too obvious to say, the words it has for experiences other languages leave unnamed. No app, however sophisticated, can give you the experience of understanding a joke the moment it is told, or of being trusted because you have made the effort to speak someone's language, however imperfectly.", note: "Argumento central con enumeración y estructuras concesivas («however sophisticated… however imperfectly»)." },
    { text: "There is a cognitive argument, too. Learning a language is one of the most demanding things an adult mind can do, and the effort itself appears to bring benefits, from improved concentration to a greater tolerance of ambiguity. Outsourcing that effort to a machine is convenient; it is not the same as having done it, any more than watching a marathon on television is the same as running one.", note: "Segundo argumento, con hedging («appears to») y un contraste final en paralelo." },
    { text: "So yes, use the app to buy your cheese. But if you want to understand why the shopkeeper smiled when you tried, however clumsily, to ask for it yourself, there is still no substitute for learning the language.", note: "Cierre que retoma la anécdota inicial (estructura circular) y deja una idea memorable." }
  ],
  checklist: {
    "Content": ["Respondo a la pregunta con una opinión clara.", "Apoyo mis argumentos con ejemplos o anécdotas."],
    "Communicative Achievement": ["El título y la apertura enganchan al lector.", "El tono es personal pero sofisticado, propio de una revista cultural."],
    "Organisation": ["El texto tiene una progresión clara y un cierre memorable.", "Las transiciones entre párrafos son naturales y variadas."],
    "Language": ["Uso estructuras de C2 con naturalidad (inversión, cleft sentences, concesivas).", "Varío la longitud y el ritmo de las frases.", "Uso vocabulario preciso e idiomático sin forzarlo."]
  }
},
{
  id: "w-b1-story", level: "b1", exam: "B1 Preliminary", title: "Story: una sorpresa inesperada", part: "Parte 2 · Story", words: [90, 110], minutes: 20,
  task: [
    "Tu profesor de inglés te ha pedido que escribas una historia.",
    "<blockquote><p>Your story must begin with this sentence:</p><p><strong><em>As soon as I opened the door, I knew something was wrong.</em></strong></p></blockquote>",
    "Escribe tu <strong>historia</strong> en unas <strong>100 palabras</strong>."
  ],
  tips: ["Empieza exactamente con la frase dada.", "Usa tiempos pasados variados: past simple, past continuous y past perfect.", "Crea tensión y termina con un final claro: el lector tiene que saber qué pasó."],
  model: [
    { text: "As soon as I opened the door, I knew something was wrong. The living room was completely dark, and I could hear strange noises coming from the kitchen.", note: "Empieza con la frase obligatoria y crea suspense desde el principio." },
    { text: "My heart was beating fast. I picked up an umbrella and walked slowly towards the kitchen. Suddenly, the lights came on and twenty people shouted, 'Surprise!'", note: "Past continuous para el ambiente («was beating») y past simple para las acciones. «Suddenly» marca el giro." },
    { text: "It was my birthday, and my friends had organised a party for me. My best friend, Lucía, was laughing so much that she couldn't stop. I was so relieved that I started laughing too. It was the best birthday I've ever had.", note: "Past perfect («had organised») para lo ocurrido antes, estructura so… that y un final claro y positivo." }
  ],
  checklist: {
    "Content": ["Empiezo con la frase obligatoria.", "La historia tiene un principio, un desarrollo y un final claros."],
    "Communicative Achievement": ["La historia mantiene el interés del lector.", "El tono es adecuado para una historia (descriptivo, con emoción)."],
    "Organisation": ["Uso conectores de tiempo (then, suddenly, after that, finally).", "Separo la historia en párrafos."],
    "Language": ["Uso varios tiempos pasados correctamente.", "Uso algunos adjetivos y adverbios para dar vida a la historia."]
  }
},
{
  id: "w-b1-article", level: "b1", exam: "B1 Preliminary", title: "Article: cómo me relajo", part: "Parte 2 · Article", words: [90, 110], minutes: 20,
  task: [
    "Has visto este anuncio en una revista juvenil en inglés:",
    "<blockquote><p><strong>Articles wanted!</strong></p><p><strong>How do you relax?</strong> What do you do to relax after a busy week? Why does it help you? Write an article answering these questions. The best articles will appear in our magazine.</p></blockquote>",
    "Escribe tu <strong>artículo</strong> en unas <strong>100 palabras</strong>."
  ],
  tips: ["Ponle un título atractivo.", "Responde a las dos preguntas del anuncio: qué haces y por qué te ayuda.", "Habla directamente al lector, por ejemplo con una pregunta al final."],
  model: [
    { h: "My secret to relaxing", text: "", note: "Título breve que despierta curiosidad." },
    { text: "Everybody needs to relax, especially after a busy week. For me, the best way to relax is cooking.", note: "Introducción que responde directamente a la primera pregunta." },
    { text: "On Saturday afternoons, I choose a new recipe, usually from another country, and I spend two or three hours in the kitchen. I listen to music while I'm cooking, and I forget about all my problems. Then I invite my family or friends to try the food. Sometimes it's delicious and sometimes it's a disaster, but we always have fun!", note: "Explica qué hace y por qué le ayuda, con detalles concretos y un toque de humor." },
    { text: "If you want to relax, why don't you try cooking? You don't need to be an expert, just curious.", note: "Cierre que se dirige al lector con una sugerencia: típico de un artículo." }
  ],
  checklist: {
    "Content": ["Explico qué hago para relajarme.", "Explico por qué me ayuda."],
    "Communicative Achievement": ["Tiene un título y un tono cercano, propio de una revista.", "Me dirijo al lector en algún momento."],
    "Organisation": ["Tiene introducción, desarrollo y cierre.", "Uso conectores (because, while, then, but)."],
    "Language": ["Uso vocabulario variado sobre el tema.", "Los errores no impiden entender el texto."]
  }
},
{
  id: "w-b2-email", level: "b2", exam: "B2 First", title: "Email formal: solicitud de empleo", part: "Parte 2 · Email", words: [140, 190], minutes: 40,
  task: [
    "Has visto este anuncio en una web de empleo para estudiantes:",
    "<blockquote><p><strong>Summer camp activity leaders wanted – Ireland</strong></p><p>We are looking for enthusiastic young people to help run activities for children aged 8–14 at our international summer camp in July.</p><p>Write to Ms Kelly, the camp director, telling us <strong>why you would be suitable</strong>, <strong>what relevant experience you have</strong> and <strong>which activities you could help with</strong>.</p></blockquote>",
    "Escribe tu <strong>email</strong> en entre <strong>140 y 190 palabras</strong>."
  ],
  tips: ["Responde a los tres puntos del anuncio, uno por párrafo.", "Registro formal: Dear Ms Kelly … Yours sincerely, sin contracciones.", "Vende tus puntos fuertes con ejemplos concretos, no con adjetivos vacíos."],
  model: [
    { text: "Dear Ms Kelly,", note: "Saludo formal con el apellido: se cierra con «Yours sincerely»." },
    { text: "I am writing to apply for the position of activity leader at your summer camp, which I saw advertised on a student job website.", note: "Propósito del email en la primera línea." },
    { text: "I am a 21-year-old sports science student from Spain, and I believe I would be well suited to the job. I am outgoing and patient, and I genuinely enjoy working with young people. Last summer, I worked as a monitor at a day camp in Madrid, where I was responsible for a group of fifteen children. This experience taught me how to keep children safe and motivated, even when things do not go to plan.", note: "Por qué es adecuado y experiencia, con un ejemplo concreto que demuestra lo que afirma." },
    { text: "As for activities, I could help with a wide range of sports, particularly football and swimming, as I have a lifeguard qualification. I also play the guitar, so I would be happy to organise music sessions in the evenings. Finally, my English is at an upper-intermediate level, and I am keen to improve it further in an international environment.", note: "Tercer punto del anuncio. «As for» introduce un nuevo tema con naturalidad." },
    { text: "I look forward to hearing from you.<br>Yours sincerely,<br>Pablo Ortega", note: "Cierre formal estándar." }
  ],
  checklist: {
    "Content": ["Explico por qué sería adecuado.", "Describo mi experiencia relevante.", "Digo con qué actividades podría ayudar."],
    "Communicative Achievement": ["El registro es formal y cortés, adecuado para una solicitud.", "Saludo y despedida son coherentes (Dear Ms Kelly → Yours sincerely)."],
    "Organisation": ["Un párrafo para cada punto del anuncio.", "Uso conectores variados (as for, particularly, so, where)."],
    "Language": ["Uso estructuras de B2 (relativas, condicionales, would).", "No uso contracciones ni expresiones coloquiales."]
  }
},
{
  id: "w-b2-article", level: "b2", exam: "B2 First", title: "Article: un lugar especial de tu ciudad", part: "Parte 2 · Article", words: [140, 190], minutes: 40,
  task: [
    "Has visto este anuncio en una revista en inglés:",
    "<blockquote><p><strong>The perfect afternoon</strong></p><p>Is there a place in your town where you love spending a free afternoon? Write an article <strong>describing the place</strong> and explaining <strong>what makes it special</strong>. We will publish the best articles next month.</p></blockquote>",
    "Escribe tu <strong>artículo</strong> en entre <strong>140 y 190 palabras</strong>."
  ],
  tips: ["Engancha al lector desde el título y la primera frase.", "Describe con detalles sensoriales y explica por qué el lugar es especial para ti.", "Termina con una recomendación o una frase que el lector recuerde."],
  model: [
    { h: "An afternoon by the river", text: "", note: "Título evocador, no una copia de la pregunta." },
    { text: "If you ever visit my town on a sunny afternoon, there is only one place you should go: the old riverside park.", note: "Apertura directa que se dirige al lector." },
    { text: "At first glance, it might not look particularly special. There are no impressive monuments or fancy cafés, just a long path under the trees, a few wooden benches and a small kiosk selling ice cream. But that is exactly what makes it so charming.", note: "Descripción con un giro: lo sencillo es lo que lo hace especial («that is exactly what makes it…»)." },
    { text: "What I love most is how peaceful it is. You can sit by the water, read a book or simply chat with friends while the world goes by. In spring, the trees are covered in blossom, and in autumn the path turns gold and red. It is also a place where the whole town comes together: grandparents stroll with their grandchildren, and teenagers play football on the grass.", note: "Cleft sentence («What I love most is…») y detalles visuales de las estaciones: rango de B2." },
    { text: "So, next time you need to escape from your screen for a few hours, grab a sandwich and head to the river. I promise you won't regret it!", note: "Cierre con recomendación y tono cercano, propio de una revista." }
  ],
  checklist: {
    "Content": ["Describo el lugar.", "Explico qué lo hace especial."],
    "Communicative Achievement": ["El título y la apertura enganchan al lector.", "El tono es cercano y atractivo, propio de una revista."],
    "Organisation": ["Los párrafos tienen una progresión lógica.", "Termino con una recomendación o un cierre memorable."],
    "Language": ["Uso vocabulario descriptivo variado.", "Incluyo alguna estructura de B2 (cleft sentences, modales de especulación)."]
  }
}

];
IDIOMA.writingById = id => IDIOMA.writing.find(x => x.id === id);
