/* Ejercicios de comprensión auditiva.
   speakers: { clave: { name, gender: "f"|"m", accent: "en-GB"|"en-US" } }
   script: [[clave, texto], …]  (el reproductor divide cada intervención en frases)
   questions: mc → {prompt, options, answer} · gap → {prompt con ___, answers}
             select → {prompt, choices: ["A", …], answer: "A"} (con boxes: [{title, items}] para la lista de opciones) */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.listening = [
{
  id: "l-a2-1", level: "a2", title: "En la estación de tren", kind: "Conversación", plays: 2,
  intro: "Vas a escuchar a una viajera hablando con un empleado en la taquilla de una estación.",
  speakers: { A: { name: "Traveller", gender: "f", accent: "en-GB" }, B: { name: "Ticket clerk", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "Excuse me, what time is the next train to Oxford?"],
    ["B", "The next one leaves at ten fifteen, from platform four."],
    ["A", "And how long does it take?"],
    ["B", "About an hour. It arrives at quarter past eleven."],
    ["A", "OK. How much is a return ticket?"],
    ["B", "A day return is twenty-four pounds fifty."],
    ["A", "Can I pay by card?"],
    ["B", "Yes, of course. Just put your card in the machine."],
    ["A", "Thanks. Oh, is there a café on the train?"],
    ["B", "Not on this one, I'm afraid, but there's a shop on platform two."]
  ],
  questions: [
    { type: "mc", prompt: "What time does the next train leave?", options: ["10.05", "10.15", "10.50"], answer: 1 },
    { type: "mc", prompt: "Which platform does it leave from?", options: ["Platform 2", "Platform 4", "Platform 14"], answer: 1 },
    { type: "mc", prompt: "What time does the train arrive in Oxford?", options: ["11.00", "11.15", "11.45"], answer: 1 },
    { type: "mc", prompt: "How much is the ticket?", options: ["£24.50", "£25.40", "£14.50"], answer: 0 },
    { type: "mc", prompt: "Where can she buy something to eat?", options: ["On the train", "On platform two", "At the ticket office"], answer: 1 }
  ]
},
{
  id: "l-b1-1", level: "b1", title: "Planes para el fin de semana", kind: "Conversación", plays: 2,
  intro: "Vas a escuchar a dos amigos, Jess y Mark, hablando de sus planes. Completa los huecos con una o dos palabras, o un número.",
  speakers: { A: { name: "Jess", gender: "f", accent: "en-GB" }, B: { name: "Mark", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "Hi Mark! Have you got any plans for the weekend?"],
    ["B", "Not really. I was going to go cycling on Saturday, but the forecast says it's going to rain all day."],
    ["A", "That's a shame. Listen, a few of us are going to see that new exhibition at the Science Museum on Sunday. Do you fancy coming?"],
    ["B", "The one about space travel? I've been meaning to see that for ages. What time are you going?"],
    ["A", "We're meeting outside the main entrance at eleven. Tickets are cheaper if you book online. They're twelve pounds instead of fifteen."],
    ["B", "Great, I'll book one tonight. Are you going to have lunch there?"],
    ["A", "Probably not. The café's always really crowded, so we thought we'd try that Italian place round the corner."],
    ["B", "Sounds perfect. Should I bring anything?"],
    ["A", "Just your student card. You get a discount on lunch with it."]
  ],
  questions: [
    { type: "mc", prompt: "Why isn't Mark going cycling on Saturday?", options: ["He has to work.", "The weather will be bad.", "His bike is broken."], answer: 1 },
    { type: "gap", prompt: "The exhibition is about ___.", answers: ["space travel", "space", "travelling in space"] },
    { type: "mc", prompt: "What time are they meeting?", options: ["10 o'clock", "11 o'clock", "12 o'clock"], answer: 1 },
    { type: "gap", prompt: "An online ticket costs £___.", answers: ["12", "twelve", "£12"] },
    { type: "mc", prompt: "Why won't they eat at the museum café?", options: ["It's too expensive.", "It's always crowded.", "It's closed on Sundays."], answer: 1 },
    { type: "gap", prompt: "Mark should bring his ___ card.", answers: ["student"] }
  ]
},
{
  id: "l-b2-1", level: "b2", title: "Un chef contra el desperdicio", kind: "Entrevista de radio", plays: 2,
  intro: "Vas a escuchar una entrevista de radio con Daniel Harper, un chef cuyo restaurante apenas genera residuos.",
  speakers: { A: { name: "Presenter", gender: "f", accent: "en-GB" }, B: { name: "Daniel Harper", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "My guest today is chef Daniel Harper, whose restaurant has become famous for producing almost no waste. Daniel, where did the idea come from?"],
    ["B", "Honestly, it started out of necessity rather than principle. When we opened, money was tight, and I was horrified by how much food we were throwing away at the end of each night. It was like watching our profits go straight into the bin."],
    ["A", "So the environmental side came later?"],
    ["B", "It did, although now it's what motivates me most. Once you start paying attention, you realise that around a third of all the food produced in the world is wasted. That's not just a financial problem. It's an ethical one."],
    ["A", "What does a zero-waste kitchen actually look like?"],
    ["B", "It's mostly about planning. We change the menu every day depending on what's left over. Vegetable peelings go into stocks, stale bread becomes breadcrumbs or desserts, and whatever we genuinely can't use goes to a local farm for compost."],
    ["A", "Doesn't that make life difficult for your chefs?"],
    ["B", "At first, definitely. Some of my team found it frustrating not to know what they'd be cooking from one day to the next. But most of them now say it's made them far more creative."],
    ["A", "And what would you say to people who want to waste less at home?"],
    ["B", "Don't shop when you're hungry, and always write a list. It sounds obvious, but it's the single most effective thing you can do."]
  ],
  questions: [
    { type: "mc", prompt: "Why did Daniel first try to reduce waste?", options: ["To save money.", "For environmental reasons.", "Because customers complained."], answer: 0 },
    { type: "gap", prompt: "Around ___ of all the food produced in the world is wasted.", answers: ["a third", "one third", "third", "1/3"] },
    { type: "mc", prompt: "What motivates Daniel most now?", options: ["Making a profit.", "Ethical and environmental concerns.", "Attracting publicity."], answer: 1 },
    { type: "mc", prompt: "How does the restaurant decide its menu?", options: ["It changes with the seasons.", "The head chef chooses it every week.", "It changes daily depending on leftovers."], answer: 2 },
    { type: "mc", prompt: "How did some of the chefs feel at first?", options: ["Frustrated by the uncertainty.", "Worried about losing their jobs.", "Excited by the challenge."], answer: 0 },
    { type: "mc", prompt: "What is his main advice for people at home?", options: ["Buy organic food.", "Plan your shopping and don't shop hungry.", "Cook large quantities at once."], answer: 1 }
  ]
},
{
  id: "l-c1-1", level: "c1", title: "Extractos cortos (Parte 1)", kind: "Dos extractos", plays: 2,
  intro: "Vas a escuchar dos extractos breves. En el primero, dos amigos hablan de un documental; en el segundo, dos compañeros de trabajo hablan de su nueva oficina. Elige la mejor respuesta.",
  speakers: { M: { name: "Man", gender: "m", accent: "en-GB" }, F: { name: "Woman", gender: "f", accent: "en-GB" } },
  script: [
    ["M", "Extract one. Did you watch that documentary about the deep sea last night?"],
    ["F", "I did, and I have to say I was a bit underwhelmed. The photography was stunning, of course, but I felt they'd padded it out. There was barely enough material for half an hour, let alone an hour and a half."],
    ["M", "Really? I thought the pacing was deliberate. It gave you time to take in how alien that world is."],
    ["F", "Maybe. I just wish they'd spent less time on the presenter and more on the scientists actually doing the research."],
    ["M", "Extract two."],
    ["F", "So, what do you make of the new open-plan office?"],
    ["M", "Well, I was dead against it when they first announced it. I thought it'd be impossible to concentrate. But I have to admit, it's made it a lot easier to sort things out quickly, without endless emails."],
    ["F", "I'm still not convinced. I find myself putting headphones on half the day just to block out the noise."],
    ["M", "That's fair. Maybe they should set aside a quiet area for people who need it."]
  ],
  questions: [
    { type: "mc", prompt: "Extract 1: What is the woman's main criticism of the documentary?", options: ["The photography was disappointing.", "It was too long for the amount of content.", "It was too technical for most viewers."], answer: 1 },
    { type: "mc", prompt: "Extract 1: What do the speakers disagree about?", options: ["The quality of the images.", "The pace of the programme.", "The presenter's knowledge."], answer: 1 },
    { type: "mc", prompt: "Extract 2: How has the man's attitude to the office changed?", options: ["He was opposed to it but now sees some benefits.", "He liked it at first but now has doubts.", "His opinion has not changed."], answer: 0 },
    { type: "mc", prompt: "Extract 2: What does the man suggest?", options: ["Allowing people to work from home.", "Creating a separate quiet space.", "Banning headphones in the office."], answer: 1 }
  ]
},
{
  id: "l-c1-2", level: "c1", title: "Charla sobre arrecifes de coral (Parte 2)", kind: "Monólogo", plays: 2,
  intro: "Vas a escuchar a una bióloga marina hablando de su trabajo. Completa las frases con la palabra o el número que oigas.",
  speakers: { A: { name: "Dr Laura Benson", gender: "f", accent: "en-GB" } },
  script: [
    ["A", "Hello everyone. I'm Dr Laura Benson, and for the past fifteen years I've been studying coral reefs, mainly in the Indian Ocean. I actually started out wanting to be a vet, and it was only during a diving holiday in my second year at university that I became fascinated by marine life."],
    ["A", "People often assume coral is a kind of plant, or even a rock, but it's actually an animal, or rather a colony of tiny animals called polyps. What gives many reefs their spectacular colours are microscopic algae living inside the coral."],
    ["A", "The biggest threat reefs face today is rising sea temperatures. When the water gets too warm, the coral expels these algae and turns completely white, a process known as bleaching. If temperatures return to normal quickly, the coral can recover, but prolonged bleaching is usually fatal."],
    ["A", "In my current project, we're testing whether coral fragments grown in underwater nurseries can be used to restore damaged reefs. So far, the survival rate has been around seventy per cent, which is far higher than we expected."],
    ["A", "What I'd like you to remember is this. Reefs cover less than one per cent of the ocean floor, yet they support about a quarter of all marine species."]
  ],
  questions: [
    { type: "gap", prompt: "Laura originally wanted to become a ___.", answers: ["vet", "veterinarian", "veterinary surgeon"] },
    { type: "gap", prompt: "She became interested in marine life during a ___ holiday.", answers: ["diving"] },
    { type: "gap", prompt: "Coral is made up of tiny animals called ___.", answers: ["polyps"] },
    { type: "gap", prompt: "The colours of many reefs come from microscopic ___.", answers: ["algae"] },
    { type: "gap", prompt: "When coral loses its algae and turns white, the process is called ___.", answers: ["bleaching"] },
    { type: "gap", prompt: "Coral grown in underwater ___ is being used to restore reefs.", answers: ["nurseries"] },
    { type: "gap", prompt: "The survival rate in her project is about ___ per cent.", answers: ["70", "seventy"] },
    { type: "gap", prompt: "Reefs support around a ___ of all marine species.", answers: ["quarter"] }
  ]
},
{
  id: "l-c2-1", level: "c2", title: "Entrevista a una arquitecta (Parte 3)", kind: "Entrevista", plays: 2,
  intro: "Vas a escuchar una entrevista con Ruth, una arquitecta crítica con cierto tipo de edificios. Presta atención a sus opiniones y actitudes, no solo a lo que dice de forma literal.",
  speakers: { I: { name: "Interviewer", gender: "m", accent: "en-GB" }, R: { name: "Ruth", gender: "f", accent: "en-GB" } },
  script: [
    ["I", "Ruth, you've been quite outspoken about what you call Instagram architecture. What exactly do you mean by that?"],
    ["R", "I suppose I mean buildings designed primarily to be photographed rather than lived in. They look extraordinary from one particular angle, ideally at sunset, but walk around the back and you find blank walls, windswept plazas and entrances nobody can find. I'm not against ambition, far from it. I just think we've confused spectacle with quality."],
    ["I", "Some would say that striking buildings put cities on the map, though. They attract tourism, investment."],
    ["R", "Oh, they certainly do, at least for a while. But novelty wears off remarkably quickly. Ten years on, the city is left with a building that's expensive to maintain and that, frankly, the people who live nearby never asked for."],
    ["I", "So what should architects be prioritising instead?"],
    ["R", "The unglamorous things. How a building meets the street. Whether there's shade in summer. Whether a parent with a pushchair can get through the door. None of that wins awards, mind you, which is rather the problem."],
    ["I", "Do you see things changing?"],
    ["R", "Slowly. Younger architects seem far more interested in how buildings are actually used, which gives me some hope. Whether clients will be prepared to pay for that kind of attention is another matter."]
  ],
  questions: [
    { type: "mc", prompt: "What is Ruth's main objection to 'Instagram architecture'?", options: ["It is too ambitious.", "It puts appearance before everyday use.", "It is difficult to photograph well."], answer: 1 },
    { type: "mc", prompt: "How does Ruth respond to the idea that striking buildings attract tourism?", options: ["She rejects it completely.", "She accepts it but doubts the benefits last.", "She agrees it is the most important factor."], answer: 1 },
    { type: "mc", prompt: "When Ruth says \"None of that wins awards, mind you\", she implies that", options: ["awards encourage the wrong priorities.", "practical design is rarely achieved.", "she has never won an award herself."], answer: 0 },
    { type: "mc", prompt: "How does Ruth feel about the future?", options: ["Thoroughly pessimistic.", "Cautiously optimistic.", "Confident that change is imminent."], answer: 1 },
    { type: "mc", prompt: "What is Ruth's attitude to ambitious architecture in general?", options: ["Hostile.", "Supportive, but critical of its current focus.", "Indifferent."], answer: 1 }
  ]
},
{
  id: "l-a1-1", level: "a1", title: "Primer día de clase", kind: "Conversación", plays: 2,
  intro: "Vas a escuchar a dos personas que se conocen el primer día en una escuela de idiomas. Elige la respuesta correcta.",
  speakers: { A: { name: "Emma", gender: "f", accent: "en-GB" }, B: { name: "Daniel", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "Hi! I'm Emma. What's your name?"],
    ["B", "Hi Emma. My name's Daniel."],
    ["A", "Nice to meet you, Daniel. Where are you from?"],
    ["B", "I'm from Canada, from Toronto. And you?"],
    ["A", "I'm from Ireland. I'm a nurse. What do you do?"],
    ["B", "I'm a teacher. I teach music."],
    ["A", "Oh, great! How old are you?"],
    ["B", "I'm twenty-eight. And this is my sister, Anna. She's a student."]
  ],
  questions: [
    { type: "mc", prompt: "What's his name?", options: ["David", "Daniel", "Dennis"], answer: 1 },
    { type: "mc", prompt: "Where is Daniel from?", options: ["Canada", "Ireland", "England"], answer: 0 },
    { type: "mc", prompt: "What is Emma's job?", options: ["She's a teacher.", "She's a nurse.", "She's a student."], answer: 1 },
    { type: "mc", prompt: "What does Daniel teach?", options: ["English", "Music", "Maths"], answer: 1 },
    { type: "mc", prompt: "How old is Daniel?", options: ["18", "28", "38"], answer: 1 },
    { type: "mc", prompt: "Who is Anna?", options: ["His sister", "His wife", "His friend"], answer: 0 }
  ]
},
{
  id: "l-a2-2", level: "a2", title: "Reservar mesa por teléfono", kind: "Llamada telefónica", plays: 2,
  intro: "Vas a escuchar a una mujer que llama a un restaurante para reservar una mesa.",
  speakers: { A: { name: "Waiter", gender: "m", accent: "en-GB" }, B: { name: "Mrs Whitford", gender: "f", accent: "en-GB" } },
  script: [
    ["A", "Good afternoon, Bella Cucina. How can I help you?"],
    ["B", "Hello. I'd like to book a table for Friday evening, please."],
    ["A", "Certainly. For how many people?"],
    ["B", "For six. Well, five adults and one child."],
    ["A", "And what time would you like?"],
    ["B", "Half past seven, if possible."],
    ["A", "I'm sorry, we're full at half past seven. We have a table at eight o'clock."],
    ["B", "Eight is fine."],
    ["A", "Can I have your name, please?"],
    ["B", "Yes, it's Mrs Whitford. That's W, H, I, T, F, O, R, D."],
    ["A", "Thank you. And a phone number?"],
    ["B", "Oh seven seven, double nine, four five three, two one eight."],
    ["A", "Lovely. Anything else?"],
    ["B", "Yes, could we have a high chair for my daughter, please? She's two."],
    ["A", "Of course. See you on Friday."]
  ],
  questions: [
    { type: "mc", prompt: "Which day is the booking for?", options: ["Thursday", "Friday", "Saturday"], answer: 1 },
    { type: "gap", prompt: "The table is for ___ people.", answers: ["6", "six"] },
    { type: "mc", prompt: "What time is the table booked for?", options: ["7.30", "8.00", "8.30"], answer: 1 },
    { type: "gap", prompt: "Her surname is Mrs ___.", answers: ["whitford"] },
    { type: "mc", prompt: "What is her phone number?", options: ["07799 453 218", "07789 453 218", "07799 435 218"], answer: 0 },
    { type: "mc", prompt: "What does she ask for?", options: ["A high chair", "A table by the window", "A birthday cake"], answer: 0 }
  ]
},
{
  id: "l-b1-2", level: "b1", title: "Visita guiada por la ciudad", kind: "Anuncio", plays: 2,
  intro: "Vas a escuchar a un guía turístico dando información antes de empezar una visita. Completa los huecos con una o dos palabras, o un número.",
  speakers: { A: { name: "Richard (guide)", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "Good morning, everyone, and welcome to the Old Town walking tour. My name's Richard, and I'll be your guide today. The tour lasts about two and a half hours, and we'll stop for a twenty-minute break at the market square, where you can buy coffee or a snack."],
    ["A", "We'll start at the cathedral, which was built in the thirteenth century, and then walk along the river to the old castle. Please be careful on the castle steps, as they can be quite slippery when it's wet."],
    ["A", "Entry to the castle is included in the price of your ticket, but if you'd like to climb the tower, there's an extra charge of three pounds. Photography is allowed everywhere except inside the cathedral."],
    ["A", "If you get lost, my phone number is on the back of your ticket. And finally, the tour ends at the main bus station, so it's very easy to get back to your hotel."]
  ],
  questions: [
    { type: "gap", prompt: "The tour lasts about ___ hours.", answers: ["two and a half", "2.5", "2 and a half", "2½"] },
    { type: "gap", prompt: "There is a break at the ___ square.", answers: ["market"] },
    { type: "gap", prompt: "The cathedral was built in the ___ century.", answers: ["thirteenth", "13th"] },
    { type: "gap", prompt: "The castle steps are slippery when it is ___.", answers: ["wet", "raining"] },
    { type: "gap", prompt: "Climbing the tower costs £___ extra.", answers: ["3", "three"] },
    { type: "gap", prompt: "You cannot take photos inside the ___.", answers: ["cathedral"] },
    { type: "gap", prompt: "The tour finishes at the main bus ___.", answers: ["station"] }
  ]
},
{
  id: "l-b2-2", level: "b2", title: "Vacaciones que salieron mal (Parte 3)", kind: "Cinco hablantes", plays: 2,
  intro: "Vas a escuchar a cinco personas hablando de unas vacaciones que salieron mal. Elige de la lista (A–H) qué le ocurrió a cada una. Sobran tres opciones.",
  boxes: [{ title: "¿Qué le ocurrió a cada hablante?", items: ["A The accommodation was not as advertised.", "B They lost an important document.", "C They fell ill during the trip.", "D Bad weather ruined their plans.", "E They missed a connecting flight.", "F They fell out with a travel companion.", "G They were overcharged for a service.", "H The trip turned out better than expected."] }],
  speakers: { S1: { name: "Speaker 1", gender: "f", accent: "en-GB" }, S2: { name: "Speaker 2", gender: "m", accent: "en-GB" }, S3: { name: "Speaker 3", gender: "f", accent: "en-US" }, S4: { name: "Speaker 4", gender: "m", accent: "en-US" }, S5: { name: "Speaker 5", gender: "f", accent: "en-AU" } },
  script: [
    ["S1", "Speaker one. The website showed a lovely villa with a pool and a view of the sea. What we got was a small flat above a noisy bar, with a pool the size of a bath and a view of a car park. We complained, of course, but the owner just shrugged and said the photos were artistic."],
    ["S2", "Speaker two. We'd planned the whole trip around hiking in the mountains. Unfortunately, it rained solidly for six days out of seven, and most of the paths were closed because of landslides. We spent most of the week in the hotel playing cards. I still haven't been back."],
    ["S3", "Speaker three. Everything was going perfectly until the last morning, when I realised my passport was nowhere to be found. I must have left it in a taxi. I spent the whole day at the embassy filling in forms, and it was three more days before I could finally go home."],
    ["S4", "Speaker four. I went travelling with my oldest friend, which seemed like a great idea at the time. But it turned out we had completely different ideas about what a holiday should be. He wanted to party every night; I wanted to see museums. By the end of the second week, we were barely speaking."],
    ["S5", "Speaker five. Two days into the trip, I came down with a terrible stomach bug. I'd been so careful about what I ate, too. I spent most of the week in bed feeling miserable, while everyone else went off sightseeing without me."]
  ],
  questions: [
    { type: "select", prompt: "Speaker 1", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "A" },
    { type: "select", prompt: "Speaker 2", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "D" },
    { type: "select", prompt: "Speaker 3", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
    { type: "select", prompt: "Speaker 4", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "F" },
    { type: "select", prompt: "Speaker 5", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "C" }
  ]
},
{
  id: "l-b2-3", level: "b2", title: "En bici por Sudamérica (Parte 2)", kind: "Monólogo", plays: 2,
  intro: "Vas a escuchar a un hombre que habla de su viaje en bicicleta por Sudamérica. Completa las frases con una palabra o un número.",
  speakers: { A: { name: "Josh", gender: "m", accent: "en-GB" } },
  script: [
    ["A", "Hi, I'm Josh. Three years ago, I gave up my job at an insurance company and set off to cycle from Colombia to the southern tip of Argentina. In total, the journey took fourteen months and covered just over twelve thousand kilometres."],
    ["A", "People often ask what the hardest part was. They expect me to say the mountains, but actually it was the wind in Patagonia, which was so strong that on some days I could only manage thirty kilometres."],
    ["A", "I carried everything I needed on the bike, including a tent and a small stove, and I slept outdoors about half the time. The rest of the time, I stayed with local families, many of whom I'd contacted through a website for cyclists. The kindness of strangers was the thing that surprised me most."],
    ["A", "My one real mistake was not learning more Spanish before I left. For the first few months, I relied on a phrasebook and a lot of hand gestures. I'm now writing a book about the trip, which should come out next spring."]
  ],
  questions: [
    { type: "gap", prompt: "Before the trip, Josh worked for an ___ company.", answers: ["insurance"] },
    { type: "gap", prompt: "The journey lasted ___ months.", answers: ["fourteen", "14"] },
    { type: "gap", prompt: "The hardest part of the journey was the ___ in Patagonia.", answers: ["wind"] },
    { type: "gap", prompt: "On some days he could only cycle ___ kilometres.", answers: ["thirty", "30"] },
    { type: "gap", prompt: "He found many of the families through a ___ for cyclists.", answers: ["website", "web site", "site"] },
    { type: "gap", prompt: "What surprised him most was the ___ of strangers.", answers: ["kindness", "generosity"] },
    { type: "gap", prompt: "He regrets not learning more ___ before he left.", answers: ["spanish"] },
    { type: "gap", prompt: "His book should be published next ___.", answers: ["spring"] }
  ]
},
{
  id: "l-c1-3", level: "c1", title: "La felicidad en el trabajo (Parte 3)", kind: "Entrevista", plays: 2,
  intro: "Vas a escuchar una entrevista con el Dr Marcus Hale, psicólogo que investiga la satisfacción laboral. Elige la mejor respuesta (A, B, C o D).",
  speakers: { I: { name: "Interviewer", gender: "f", accent: "en-GB" }, M: { name: "Dr Marcus Hale", gender: "m", accent: "en-GB" } },
  script: [
    ["I", "Dr Hale, your research suggests that many of our assumptions about job satisfaction are wrong. Which assumption surprised you most?"],
    ["M", "Probably the idea that salary is the main driver. It matters, of course, up to a point; people who are struggling to pay the bills are rarely content at work. But beyond a fairly modest threshold, extra money makes surprisingly little difference. What people value far more is a sense that their work is making progress, that they're getting somewhere."],
    ["I", "Progress in what sense?"],
    ["M", "Even small wins count. In one study, we asked employees to keep a daily diary, and the days they described as their best were overwhelmingly the days they'd moved forward on something meaningful, however minor. Interestingly, managers consistently underestimated this. When we asked them what motivates staff, they put recognition and pay at the top, and progress near the bottom."],
    ["I", "So what should managers be doing differently?"],
    ["M", "Mostly, getting out of the way. The biggest obstacles to progress are often bureaucratic: unnecessary meetings, constantly shifting priorities, approvals that take weeks. Removing those does more for morale than any number of team-building days. That's not to say recognition doesn't matter. It does. But praise for work that's going nowhere rings rather hollow."],
    ["I", "And what about people who simply don't like their jobs?"],
    ["M", "Well, I'm wary of the idea that everyone should love their work. For many people, a job is a means to an end, and there's nothing wrong with that. What I would say is that even in fairly routine work, a sense of competence and of being trusted can make a significant difference."]
  ],
  questions: [
    { type: "mc", prompt: "What does Dr Hale say about salary?", options: ["It is the most important factor for most employees.", "It matters only until a certain level is reached.", "It has no effect at all on job satisfaction.", "It matters more to managers than to their staff."], answer: 1 },
    { type: "mc", prompt: "The diary study showed that employees' best days were those when they", options: ["received praise from their managers.", "completed a major project.", "made headway on work that mattered to them.", "worked fewer hours than usual."], answer: 2 },
    { type: "mc", prompt: "What does Dr Hale say about managers' views?", options: ["They had a good understanding of what motivates staff.", "They overestimated the importance of progress.", "They ranked progress lower than employees' experience suggests.", "They believed that bureaucracy was necessary."], answer: 2 },
    { type: "mc", prompt: "According to Dr Hale, managers can best improve morale by", options: ["organising team-building activities.", "removing obstacles that slow work down.", "increasing the amount of praise they give.", "holding more regular meetings."], answer: 1 },
    { type: "mc", prompt: "What is his attitude towards people who don't love their jobs?", options: ["He thinks they should look for different work.", "He considers it an acceptable situation.", "He believes they are less productive.", "He feels sorry for them."], answer: 1 }
  ]
},
{
  id: "l-c1-4", level: "c1", title: "Nuevas aficiones (Parte 4)", kind: "Cinco hablantes · dos tareas", plays: 2,
  intro: "Vas a escuchar a cinco personas que hablan de una afición que empezaron hace poco. Mientras escuchas, completa las dos tareas. Sobran tres opciones en cada una.",
  boxes: [
    { title: "Tarea 1 · ¿Por qué empezó cada hablante?", items: ["A A friend persuaded them.", "B A doctor recommended it.", "C To cope with pressure at work.", "D To fill free time after retiring.", "E They were inspired by a TV programme.", "F To prove something to themselves.", "G To spend more time with their family.", "H To save money."] },
    { title: "Tarea 2 · ¿Qué ha ganado cada hablante?", items: ["A Better physical fitness.", "B New friendships.", "C Greater self-confidence.", "D A possible new career.", "E A deeper appreciation of nature.", "F Improved concentration.", "G A sense of inner calm.", "H Recognition from their family."] }
  ],
  speakers: { S1: { name: "Speaker 1", gender: "f", accent: "en-GB" }, S2: { name: "Speaker 2", gender: "m", accent: "en-GB" }, S3: { name: "Speaker 3", gender: "f", accent: "en-US" }, S4: { name: "Speaker 4", gender: "m", accent: "en-US" }, S5: { name: "Speaker 5", gender: "f", accent: "en-AU" } },
  script: [
    ["S1", "Speaker one. When I retired last year, I suddenly had all these empty hours and no idea how to fill them, so I took on an allotment. I knew nothing about growing vegetables, and my first crop of potatoes was a disaster. But I've found that an hour of digging does more to settle my mind than anything else I've tried. Whatever's worrying me just seems to fade away."],
    ["S2", "Speaker two. My doctor told me, quite bluntly, that if I didn't start exercising I'd be in serious trouble within a few years. So I joined a local running club, mainly out of fear. I'm still not particularly fast, but what I hadn't expected was the social side. Some of the people I run with on Sunday mornings have become my closest friends."],
    ["S3", "Speaker three. I've always been painfully shy, and I got tired of letting it hold me back. So, almost as a test, I signed up for an improvisation class, the most terrifying thing I could think of. The first few sessions were agony. But now I find myself speaking up in meetings and chatting to strangers at parties in a way I'd never have imagined."],
    ["S4", "Speaker four. I watched a documentary about wildlife photographers and was completely hooked. The next day I bought a second-hand camera. Two years on, a local magazine has started publishing some of my pictures, and I've been asked to photograph a couple of weddings, so it may even turn into a proper job."],
    ["S5", "Speaker five. My job in finance was incredibly stressful, and I needed something that would take me completely away from screens and spreadsheets. I came across a book about birdwatching and, although I laughed at the idea at first, I gave it a try. What I've gained more than anything is a real love of the countryside. I notice things now, the changing seasons, the different birdsong, that I'd walked past for years without seeing."]
  ],
  questions: [
    { type: "select", prompt: "Tarea 1 · Speaker 1", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "D" },
    { type: "select", prompt: "Tarea 1 · Speaker 2", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
    { type: "select", prompt: "Tarea 1 · Speaker 3", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "F" },
    { type: "select", prompt: "Tarea 1 · Speaker 4", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "E" },
    { type: "select", prompt: "Tarea 1 · Speaker 5", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "C" },
    { type: "select", prompt: "Tarea 2 · Speaker 1", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "G" },
    { type: "select", prompt: "Tarea 2 · Speaker 2", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
    { type: "select", prompt: "Tarea 2 · Speaker 3", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "C" },
    { type: "select", prompt: "Tarea 2 · Speaker 4", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "D" },
    { type: "select", prompt: "Tarea 2 · Speaker 5", choices: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "E" }
  ]
},
{
  id: "l-c2-2", level: "c2", title: "Extractos cortos (Parte 1)", kind: "Dos extractos", plays: 2,
  intro: "Vas a escuchar dos extractos. En el primero, dos amigos comentan una novela premiada; en el segundo, una experta en urbanismo habla en la radio sobre unos carriles bici. Elige la mejor respuesta (A, B, C o D).",
  speakers: { M: { name: "Man", gender: "m", accent: "en-GB" }, F: { name: "Woman", gender: "f", accent: "en-GB" } },
  script: [
    ["F", "Extract one. Have you read the book that won the prize this year?"],
    ["M", "I struggled through it. I can see why the judges admired it; the prose is undeniably accomplished. But I found it so pleased with its own cleverness that I never cared what happened to anyone."],
    ["F", "That's a bit harsh, isn't it? I thought the coldness was deliberate. The whole point is that the narrator can't connect with people."],
    ["M", "Perhaps. But a novel about emotional detachment doesn't have to leave the reader emotionally detached."],
    ["M", "Extract two. The council's new cycle lanes have certainly been controversial."],
    ["F", "They have, and I understand the frustration of drivers who've seen their journey times go up. But I think the outcry has rather obscured the figures. Cycling in the city centre has nearly doubled in a year, and accidents involving cyclists are down. Those aren't trivial gains."],
    ["M", "Though you'd concede the consultation was handled badly?"],
    ["F", "Oh, without question. Residents were presented with what was essentially a finished plan and asked to comment. That's not consultation; it's notification. If the council had involved people earlier, I suspect much of the anger could have been avoided."]
  ],
  questions: [
    { type: "mc", prompt: "Extract 1: What is the man's main criticism of the novel?", options: ["The writing lacks technical skill.", "It is self-satisfied and fails to engage him emotionally.", "The plot is too complicated to follow.", "The judges chose it for the wrong reasons."], answer: 1 },
    { type: "mc", prompt: "Extract 1: How does the woman respond?", options: ["She accepts that the book is cold but believes this is intentional.", "She agrees with him entirely.", "She argues that the prose is weak.", "She admits she has not finished it."], answer: 0 },
    { type: "mc", prompt: "Extract 2: What is the woman's view of the cycle lanes?", options: ["They have caused more problems than they have solved.", "Their benefits have been overshadowed by the controversy.", "Drivers' complaints are entirely unjustified.", "They should be extended across the city at once."], answer: 1 },
    { type: "mc", prompt: "Extract 2: What does she criticise about the consultation?", options: ["It took far too long.", "It ignored the views of cyclists.", "Residents were involved too late to influence the plan.", "It was unnecessarily expensive."], answer: 2 }
  ]
}

];
IDIOMA.listeningById = id => IDIOMA.listening.find(x => x.id === id);
