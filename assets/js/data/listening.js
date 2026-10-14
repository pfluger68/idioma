/* Ejercicios de comprensión auditiva.
   speakers: { clave: { name, gender: "f"|"m", accent: "en-GB"|"en-US" } }
   script: [[clave, texto], …]  (el reproductor divide cada intervención en frases)
   questions: mc → {prompt, options, answer} · gap → {prompt con ___, answers} */
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
}
];
IDIOMA.listeningById = id => IDIOMA.listening.find(x => x.id === id);
