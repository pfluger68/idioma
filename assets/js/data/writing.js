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
}
];
IDIOMA.writingById = id => IDIOMA.writing.find(x => x.id === id);
