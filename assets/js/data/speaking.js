/* Prácticas de Speaking con formato de examen.
   tasks: [{ prompt (lo lee el examinador), visuals?: [descripciones], seconds, model, dialogue? }] */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.speaking = [
{
  id: "sp-b1-p1", level: "b1", exam: "B1 Preliminary", part: "Parte 1 · Entrevista", title: "Hablar de ti",
  intro: "El examinador te hace preguntas sobre ti, tus gustos y tu vida diaria. Tienes unos 30 segundos por respuesta.",
  tips: ["No respondas con una sola palabra: da una razón y un ejemplo.", "Si no entiendes, pide que repitan: «Sorry, could you repeat that, please?»", "Usa conectores sencillos: because, so, but, also."],
  phrases: [
    { f: "Dar razones y ejemplos", items: ["That's because…", "For example, …", "The thing I like most about it is…"] },
    { f: "Ganar tiempo", items: ["Let me think…", "That's a good question.", "Well, it depends."] }
  ],
  tasks: [
    { prompt: "Where do you live? Tell me something about the area.", seconds: 30, model: "I live in a small town about twenty kilometres from Valencia. It's quite quiet, but there's a lovely old market and a park where I often go running. The best thing is that it's close to the beach, so in summer I go there almost every weekend." },
    { prompt: "What do you usually do at the weekend?", seconds: 30, model: "It depends. On Saturdays I usually meet my friends and we go to the cinema or have dinner together. On Sundays I prefer to relax at home, read a book or visit my grandparents, who live nearby." },
    { prompt: "Tell me about your favourite teacher at school.", seconds: 30, model: "My favourite teacher was my history teacher, Mr García. He made every lesson interesting because he told us stories instead of just giving us dates to learn. He also encouraged me to read more, and I'm still grateful for that." },
    { prompt: "Do you prefer studying alone or with other people? Why?", seconds: 30, model: "I prefer studying alone, because I can concentrate better and go at my own speed. However, before an exam I sometimes meet a classmate so that we can test each other, which is really useful." }
  ]
},
{
  id: "sp-b2-p2", level: "b2", exam: "B2 First", part: "Parte 2 · Comparar fotos", title: "Tiempo libre al aire libre",
  intro: "Recibes dos fotos y debes compararlas durante 1 minuto respondiendo a una pregunta. Después, el examinador te hace una pregunta breve (30 segundos). Aquí las fotos se describen por escrito: imagínalas.",
  tips: ["Compara, no describas: lo importante es relacionar las dos fotos.", "Especula con modales: they might be…, it must be…, it looks as if…", "Responde a la pregunta escrita sobre las fotos: es lo que más se olvida."],
  phrases: [
    { f: "Comparar", items: ["Both photos show…", "In the first photo…, whereas in the second…", "On the other hand, …"] },
    { f: "Especular", items: ["They might be enjoying…", "It looks as if…", "They must be feeling…", "I imagine that…"] },
    { f: "Opinar", items: ["Personally, I'd rather…", "If I had to choose, I'd…"] }
  ],
  tasks: [
    { prompt: "Here are two photographs. They show people spending time outdoors in different ways. Compare the photographs, and say what the people might be enjoying about spending their free time in these ways.",
      visuals: ["Foto A: una familia haciendo un pícnic en un parque urbano lleno de gente, en un día soleado.", "Foto B: dos excursionistas con mochilas pesadas caminando por un sendero de montaña bajo la lluvia."],
      seconds: 60, model: "Both photos show people spending their free time outdoors, but in very different ways. In the first one, a family is having a picnic in what looks like a busy city park. They seem relaxed, and they're probably enjoying the sunshine and the chance to spend time together without having to travel far. The second photo, on the other hand, shows two hikers walking along a mountain path in the rain. It must be quite hard work, but I imagine they're enjoying the sense of adventure and the peace and quiet of the mountains. Personally, I think the hikers are having a more memorable experience, even if it isn't as comfortable." },
    { prompt: "Which of these activities would you prefer to do? Why?", seconds: 30, model: "I'd definitely prefer the picnic, to be honest. I love hiking, but walking in the rain doesn't appeal to me at all! A relaxed afternoon in the park with friends sounds much more like my kind of thing." }
  ]
},
{
  id: "sp-c1-p1", level: "c1", exam: "C1 Advanced", part: "Parte 1 · Entrevista", title: "Preguntas personales",
  intro: "Preguntas sobre ti, tus opiniones y tus planes. En C1 se espera que desarrolles cada respuesta con naturalidad durante unos 30 segundos.",
  tips: ["Amplía con una razón, un ejemplo y, si puedes, un matiz.", "Usa vocabulario preciso y alguna expresión idiomática natural.", "No memorices respuestas: el examinador lo nota y penaliza la falta de espontaneidad."],
  phrases: [
    { f: "Matizar", items: ["To some extent…", "It depends on…", "That said, …"] },
    { f: "Hablar de planes e hipótesis", items: ["I'd love to… if I ever got the chance.", "I can't see myself… in the long run.", "Ideally, I'd…"] }
  ],
  tasks: [
    { prompt: "What do you enjoy most about the place where you live?", seconds: 30, model: "I'd say it's the sense of community. It's not a particularly glamorous neighbourhood, but people genuinely look out for each other. If you're away, a neighbour will water your plants without being asked, and that kind of thing is surprisingly rare in a big city these days." },
    { prompt: "How important is it for you to have a routine in your daily life?", seconds: 30, model: "Fairly important, actually, although I didn't use to think so. When I started working from home, I realised that without a routine my days just blurred together. Now I try to start work at the same time and go for a walk at lunchtime, and I'm far more productive as a result." },
    { prompt: "If you could learn a completely new skill, what would it be and why?", seconds: 30, model: "I've always wanted to learn to play the piano properly. I had a few lessons as a child but gave up far too soon, which I've regretted ever since. I think there's something incredibly rewarding about being able to sit down and play a piece of music from memory." },
    { prompt: "Do you think you'll be living in the same place in ten years' time?", seconds: 30, model: "Honestly, I'm not sure. I'm very attached to my city, but I'd love to spend a few years abroad at some point, ideally somewhere English-speaking. So I can imagine leaving for a while, although I suspect I'll end up coming back eventually." }
  ]
},
{
  id: "sp-c1-p2", level: "c1", exam: "C1 Advanced", part: "Parte 2 · Long turn", title: "Tomar decisiones",
  intro: "Recibes tres fotos y eliges dos para compararlas durante 1 minuto, respondiendo a las dos preguntas del enunciado. Después, una pregunta breve sobre las fotos de tu compañero (30 segundos).",
  tips: ["Elige rápido las dos fotos y responde a las dos preguntas, no solo a una.", "Especula con lenguaje variado de C1: could well be…, I'd imagine…, presumably…", "Organiza: compara primero, especula después y termina con una frase de cierre."],
  phrases: [
    { f: "Especular con rango de C1", items: ["They could well be…", "Presumably, …", "I'd imagine that…", "It's hard to tell, but…"] },
    { f: "Contrastar", items: ["Whereas…", "Unlike the people in…", "The key difference is that…"] }
  ],
  tasks: [
    { prompt: "Here are three pictures. They show people making decisions in different situations. I'd like you to compare two of the pictures, and say what the people might be considering, and how difficult the decision might be for them.",
      visuals: ["Imagen A: una mujer joven en una tienda, con un móvil distinto en cada mano, comparándolos con atención.", "Imagen B: una pareja visitando una casa vacía con un agente inmobiliario.", "Imagen C: un equipo de compañeros alrededor de una mesa, mirando gráficos en una pantalla y hablando con seriedad."],
      seconds: 60, model: "I'll compare the couple viewing the house with the team in the meeting. The couple are presumably thinking about things like the price, the location and whether the house is big enough for them in the long term. It's probably one of the biggest financial decisions they'll ever make, so I'd imagine they're feeling quite anxious about it. The team, on the other hand, could well be discussing a business strategy, perhaps whether to launch a new product. Their decision might be less personal, but it's arguably more complex, since they have to weigh up data and reach an agreement as a group. On balance, I think the couple's decision is harder, simply because the consequences will affect their everyday lives so directly." },
    { prompt: "Which of these decisions do you think would be the quickest to make? Why?", seconds: 30, model: "I'd say choosing the phone, without a doubt. It's a relatively small purchase, and if you make the wrong choice it isn't the end of the world. That said, I know people who spend weeks reading reviews before buying one!" }
  ]
},
{
  id: "sp-c1-p3", level: "c1", exam: "C1 Advanced", part: "Parte 3 · Collaborative task", title: "Dónde vivir",
  intro: "En el examen hablas con otro candidato durante 2 minutos sobre unas ideas y después tenéis 1 minuto para llegar a una decisión. Aquí practicas solo: habla como si respondieras a tu compañero, reaccionando a ideas imaginarias y proponiendo las tuyas. Al final verás un diálogo modelo.",
  tips: ["En el examen, lo importante es la interacción: reacciona, pregunta y desarrolla las ideas del compañero.", "No hace falta comentar todas las opciones: es mejor profundizar en unas pocas.", "En la decisión no importa qué elijáis, sino cómo negociáis."],
  phrases: [
    { f: "Implicar al compañero", items: ["What's your take on this?", "Would you agree that…?", "Shall we move on to…?"] },
    { f: "Discrepar con educación", items: ["I see your point, but…", "That's a fair point. Having said that, …", "I'm not entirely convinced that…"] },
    { f: "Llegar a una decisión", items: ["So, are we agreed that…?", "Shall we go for…, then?", "It seems we both think…"] }
  ],
  tasks: [
    { prompt: "Here are some things that people often consider when choosing where to live. Talk to each other about how important these things might be when people decide where to live.",
      visuals: ["Ideas: el coste de la vida · las oportunidades de trabajo · estar cerca de la familia · el clima · la vida cultural"],
      seconds: 120,
      model: "A: Shall we start with the cost of living? I think that's probably the deciding factor for most people.\nB: I'd agree, especially for young people. There's no point moving to an exciting city if you can't afford the rent.\nA: Exactly. Although job opportunities are closely linked to that, aren't they? People often accept higher costs because that's where the work is.\nB: That's a fair point. Having said that, remote working has changed things a bit. What's your take on being close to family?\nA: I think it becomes more important as people get older, particularly once they have children.\nB: True. And the climate? Personally, I don't think it matters as much as people say." },
    { prompt: "Now you have about a minute to decide which of these factors would be the most important for young people.", seconds: 60,
      model: "A: So, which one do you think matters most for young people?\nB: I'd say job opportunities. Without a job, nothing else is possible.\nA: I see your point, but I'd go for the cost of living, because even with a job, many young people simply can't afford to live in big cities.\nB: Hmm, that's true. Shall we say they're closely connected, but cost of living is the deciding factor?\nA: Yes, are we agreed on that, then?\nB: Agreed." }
  ]
},
{
  id: "sp-c1-p4", level: "c1", exam: "C1 Advanced", part: "Parte 4 · Discussion", title: "Decisiones y sociedad",
  intro: "Preguntas más abstractas relacionadas con el tema de la Parte 3. Desarrolla cada respuesta durante aproximadamente 1 minuto, con opinión, razones, ejemplos y matices.",
  tips: ["Estructura: opinión → razón → ejemplo → matiz.", "Muestra rango: hedging, condicionales, cleft sentences.", "Puedes hablar de la sociedad en general, no solo de tu experiencia."],
  phrases: [
    { f: "Opinar con matices", items: ["I'd argue that…", "To a certain extent, …", "It's not as straightforward as it seems."] },
    { f: "Ejemplificar y concluir", items: ["Take…, for instance.", "A case in point is…", "All in all, …"] }
  ],
  tasks: [
    { prompt: "Some people say that young people today have more choice than previous generations, but find it harder to make decisions. What do you think?", seconds: 60, model: "I think there's a lot of truth in that. In many ways, having more options is obviously positive, but it can also be paralysing. Take career choices, for instance: my parents more or less followed the path that was expected of them, whereas my friends and I have endless possibilities, and many of us feel under pressure to choose the perfect one. That said, I wouldn't want to go back to having fewer options. I think the challenge is learning to accept that no choice is ever perfect." },
    { prompt: "Should governments do more to help people afford housing? Why or why not?", seconds: 60, model: "I'd argue that they should, yes. Housing isn't just another product; it's fundamental to people's wellbeing and to their ability to work and start a family. When rents rise faster than salaries, as they have in many European cities, it's young people and lower-income families who suffer most. Of course, the question is how governments should intervene. Building more social housing seems to me more effective than simply capping rents, which can discourage landlords from renting at all." },
    { prompt: "How has technology changed the way people decide where to live and work?", seconds: 60, model: "Quite dramatically, I'd say. The most obvious change is remote working: for many people, where they live is no longer dictated by where their office is, so some have moved to smaller towns with a lower cost of living. Technology has also made it much easier to research a place before moving there. On the other hand, I'm not convinced that this flexibility is available to everyone. It's largely limited to office jobs, and people in sectors like healthcare or hospitality still need to live close to their work." }
  ]
},
{
  id: "sp-c2-p3", level: "c2", exam: "C2 Proficiency", part: "Parte 3 · Long turn", title: "¿Está bien saltarse las normas?",
  intro: "Recibes una tarjeta con una pregunta y algunas ideas. Hablas durante 2 minutos sin interrupción y después respondes a una pregunta relacionada. Puedes usar las ideas de la tarjeta o las tuyas.",
  tips: ["Organiza el discurso: introducción, dos o tres ideas desarrolladas y conclusión.", "Usa las ideas de la tarjeta como guía, pero no te limites a enumerarlas.", "En C2 se valoran la precisión, los matices y la fluidez: evita las pausas largas usando expresiones para ganar tiempo."],
  phrases: [
    { f: "Estructurar un monólogo largo", items: ["I'd like to start by…", "Turning now to…", "Which brings me to my final point…"] },
    { f: "Matices de C2", items: ["It would be naïve to suggest that…", "There's a strong case to be made for…", "Ultimately, it comes down to…"] }
  ],
  tasks: [
    { prompt: "Is it ever right to break the rules? You may want to consider: personal values, the consequences, social change.",
      visuals: ["Tarjeta: Is it ever right to break the rules? · personal values · the consequences · social change"],
      seconds: 120, model: "I'd like to start by saying that rules exist for good reasons. Most of them protect us, and a society in which everyone decided for themselves which rules to follow would quickly descend into chaos. So, as a general principle, I think we have a duty to respect them.\n\nThat said, it would be naïve to suggest that rules are always just. Many of the rights we now take for granted were won by people who were prepared to break the law: think of the suffragettes, or the civil rights movement in the United States. In those cases, breaking the rules was arguably not only justified but necessary for social change.\n\nTurning to personal values, I think there's a strong case to be made for following your conscience when a rule forces you to act in a way you believe is morally wrong. But that comes with responsibility: anyone who breaks a rule on principle should be prepared to accept the consequences openly.\n\nUltimately, then, it comes down to motive and proportion. Breaking a rule for personal convenience is very different from breaking it to challenge an injustice." },
    { prompt: "Do you think people today are more or less willing to follow rules than in the past?", seconds: 30, model: "On the whole, I'd say less willing, at least when it comes to unwritten rules and authority in general. People are far more inclined to question things than their grandparents were, which I think is largely healthy, although it can tip over into a kind of reflexive distrust." }
  ]
},
{
  id: "sp-a2-p1", level: "a2", exam: "A2 Key", part: "Parte 1 · Entrevista", title: "Preguntas sobre ti",
  intro: "El examinador te hace preguntas sencillas sobre ti y tu vida diaria. Responde con frases completas, unos 20 segundos cada una.",
  tips: ["Responde con una frase completa y añade un detalle: «I live with my parents and my brother. He's ten.»", "Habla despacio y con claridad: no hace falta correr.", "Si no entiendes, di: «Sorry, can you say that again, please?»"],
  phrases: [
    { f: "Dar detalles", items: ["I really like…", "My favourite… is…", "I usually… on…"] },
    { f: "Pedir ayuda", items: ["Sorry, can you say that again, please?", "What does … mean?"] }
  ],
  tasks: [
    { prompt: "Where are you from?", seconds: 20, model: "I'm from Seville, in the south of Spain. It's a beautiful city, and it's very hot in summer." },
    { prompt: "Who do you live with?", seconds: 20, model: "I live with my parents and my younger brother. His name is Pablo and he's twelve. We also have a cat." },
    { prompt: "What do you like doing in your free time?", seconds: 20, model: "I like playing football with my friends and watching films. At the weekend, I sometimes go cycling in the park." },
    { prompt: "Tell me about your favourite food.", seconds: 20, model: "My favourite food is paella. My grandmother makes it every Sunday, and it's delicious. I also really like pizza." }
  ]
},
{
  id: "sp-b1-p2", level: "b1", exam: "B1 Preliminary", part: "Parte 2 · Describir una foto", title: "Cocinar con amigos",
  intro: "Recibes una foto y la describes durante aproximadamente 1 minuto. Aquí la foto se describe por escrito: imagínala.",
  tips: ["Di dónde está cada cosa: on the left, in the middle, in the background.", "Describe a las personas: qué llevan, qué hacen, cómo parecen sentirse.", "Si no sabes una palabra, explícala: «a thing you use to cut vegetables»."],
  phrases: [
    { f: "Situar", items: ["In this photo, I can see…", "On the left / On the right…", "In the background…"] },
    { f: "Suponer", items: ["They look…", "I think they're probably…", "It might be…"] }
  ],
  tasks: [
    { prompt: "Now, I'd like you to talk on your own about something. Here is your photograph. It shows some people cooking. Please tell us what you can see in the photograph.",
      visuals: ["Foto: un grupo de cuatro amigos cocinando juntos en una cocina pequeña. Uno corta verduras, una chica remueve una olla y otro pone la mesa. Hay platos y vasos sobre la mesa y una ventana al fondo."],
      seconds: 60, model: "In this photo, I can see four young people cooking together in a small kitchen. They're probably friends, and they look happy and relaxed. On the left, a young man is cutting some vegetables, maybe for a salad. In the middle, a girl with long dark hair is stirring something in a big pot. I think it might be soup or pasta. On the right, another man is putting plates and glasses on the table. In the background, there's a window, and it looks quite sunny outside. I think they're preparing dinner for a party or a special occasion." }
  ]
},
{
  id: "sp-b2-p4", level: "b2", exam: "B2 First", part: "Parte 4 · Discussion", title: "Viajes y vacaciones",
  intro: "Preguntas de opinión relacionadas con el tema de la Parte 3. Desarrolla cada respuesta durante unos 45 segundos.",
  tips: ["Da tu opinión, explica por qué y pon un ejemplo.", "Reconoce el otro punto de vista: «Some people think…, but…».", "Usa conectores variados: however, on the other hand, as a result."],
  phrases: [
    { f: "Opinar", items: ["In my opinion, …", "I'm convinced that…", "As far as I'm concerned, …"] },
    { f: "Contrastar", items: ["On the other hand, …", "Some people think…, but…", "Having said that, …"] }
  ],
  tasks: [
    { prompt: "Do you think it's better to travel on your own or with other people?", seconds: 45, model: "It depends on the kind of trip, but on the whole I prefer travelling with friends. It's more fun to share experiences, and it's also safer and cheaper, because you can split the cost of accommodation. Having said that, some people say that travelling alone forces you to meet locals and be more independent, and I think that's true. Maybe everyone should try it at least once." },
    { prompt: "Some people say that tourism does more harm than good to popular destinations. What do you think?", seconds: 45, model: "I think it can, if there are too many tourists. In cities like Venice or Barcelona, rents have gone up so much that local people can't afford to live in the centre any more. On the other hand, tourism creates a lot of jobs, so it isn't all negative. In my opinion, the solution is to manage it better, for example by limiting the number of cruise ships." },
    { prompt: "How do you think people will go on holiday in the future?", seconds: 45, model: "I imagine that people will travel closer to home, partly because of the environmental impact of flying and partly because it's getting so expensive. I also think trains will become more popular, especially night trains. Of course, people will still want to see exotic places, but maybe they'll travel less often and stay longer." }
  ]
},
{
  id: "sp-c2-p1", level: "c2", exam: "C2 Proficiency", part: "Parte 1 · Entrevista", title: "Preguntas personales",
  intro: "Una breve conversación con el examinador sobre ti, tus experiencias y tus opiniones. En C2 se espera precisión, naturalidad y respuestas desarrolladas de unos 30 segundos.",
  tips: ["Muestra rango sin forzarlo: un idiom o una estructura compleja bien colocados bastan.", "Matiza y personaliza: el examinador valora respuestas reflexivas, no listas.", "Evita respuestas preparadas: suenan rígidas."],
  phrases: [
    { f: "Reflexionar", items: ["If I'm honest, …", "Looking back, …", "It's something I've given a lot of thought to."] },
    { f: "Matizar", items: ["Not so much…, as…", "Up to a point.", "It's not that…; it's more that…"] }
  ],
  tasks: [
    { prompt: "What has been the most valuable thing you've learned outside formal education?", seconds: 30, model: "Probably how to listen properly. Looking back, I spent years waiting for my turn to speak rather than genuinely taking in what people were saying. It was a former manager who made me realise this, and it's transformed not just my working relationships but my friendships too." },
    { prompt: "How do you think your town or city will have changed in twenty years' time?", seconds: 30, model: "I suspect it will be far greener, if only out of necessity. There's already a push to pedestrianise the centre, and I can't see that being reversed. What worries me slightly is that it might become too expensive for young people, which would drain it of a lot of its character." },
    { prompt: "Is there anything you used to believe strongly that you've since changed your mind about?", seconds: 30, model: "Yes, the idea that talent matters more than effort. As a teenager I was convinced that people were either naturally gifted or not. It's not that I think talent is irrelevant now; it's more that I've seen how far consistent, unglamorous practice can take someone." }
  ]
},
{
  id: "sp-c2-p2", level: "c2", exam: "C2 Proficiency", part: "Parte 2 · Collaborative task", title: "La vida en la ciudad",
  intro: "En el examen hablas con otro candidato sobre unas imágenes: primero 1 minuto sobre una o dos de ellas y después 3 minutos para tomar una decisión sobre todas. Aquí practicas solo, como si respondieras a tu compañero; al final verás un diálogo modelo.",
  tips: ["En la primera fase, ve más allá de describir: habla de sensaciones, implicaciones y contrastes.", "En la decisión, valora ventajas e inconvenientes de cada opción antes de elegir.", "Usa lenguaje persuasivo y negocia con elegancia."],
  phrases: [
    { f: "Valorar opciones", items: ["The downside of this one is that…", "This would appeal to…, whereas…", "It conveys a sense of…"] },
    { f: "Negociar", items: ["I take your point, but…", "Wouldn't you say that…?", "I could live with that."] }
  ],
  tasks: [
    { prompt: "Look at the pictures. They show different aspects of city life. First, talk together about how these two pictures make you feel about living in a city.",
      visuals: ["Imagen A: una calle comercial abarrotada en hora punta, con tráfico y pantallas publicitarias.", "Imagen B: un pequeño huerto comunitario en una azotea, con vecinos de distintas edades trabajando juntos."],
      seconds: 60, model: "A: The first one makes me feel slightly claustrophobic, to be honest. It captures the relentless pace of city life: the noise, the crowds, the constant visual bombardment.\nB: I know what you mean, although some people thrive on that energy. The rooftop garden is the complete opposite, isn't it? It conveys a real sense of community.\nA: Absolutely. It suggests that even in a dense city, people can carve out spaces to slow down and connect with their neighbours." },
    { prompt: "Now look at all the pictures. Imagine that a city council is producing a brochure to attract new residents. Talk together about the advantages and disadvantages of using each picture, and then decide which would be the most effective.",
      visuals: ["Imagen A: calle comercial abarrotada en hora punta.", "Imagen B: huerto comunitario en una azotea.", "Imagen C: un moderno tranvía cruzando un puente al atardecer.", "Imagen D: un concierto gratuito al aire libre en una plaza.", "Imagen E: una familia paseando en bicicleta por un carril bici junto al río."],
      seconds: 180, model: "A: Well, I think we can rule out the busy street straight away. It's honest, but hardly an advertisement.\nB: Agreed. The tram at sunset is visually striking, and it says a lot about efficient public transport, though it's rather impersonal.\nA: True. The concert has the advantage of showing a vibrant cultural life, which would appeal to younger people, whereas the family cycling by the river targets a different audience altogether.\nB: Wouldn't you say the rooftop garden combines both, though? It shows community, sustainability and people of all ages.\nA: I take your point, but it's quite a niche image. Not everyone wants to grow vegetables!\nB: Fair enough. So it's between the garden and the cyclists?\nA: I'd go for the cyclists. It suggests safety, green space and a good quality of life, which is what most new residents are looking for.\nB: I could live with that. The cyclists it is." }
  ]
}

];
IDIOMA.speakingById = id => IDIOMA.speaking.find(x => x.id === id);
