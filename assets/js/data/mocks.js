/* Simulacros de examen (Reading & Use of English completo).
   Los textos usan {{n}} para marcar el hueco número n.
   Tipos de parte: mcCloze, openCloze, wordForm, kwt, readingMC, matching
   (matching con gapped: true = párrafos eliminados; sin gapped = emparejar preguntas con textos A–D). */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.mocks = [

/* ============================ C1 ADVANCED ============================ */
{
  id: "c1-rue-1", level: "c1", exam: "C1 Advanced", title: "Reading & Use of English completo · Simulacro 1", minutes: 90, minReport: 142,
  scale: [[0, 120], [0.2, 142], [0.4, 160], [0.6, 180], [0.8, 200], [1, 210]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "The science of habit",
      text: "Most of us like to believe that our daily choices are the product of careful thought. In {{1}}, however, researchers estimate that a large {{2}} of our behaviour is driven by habit rather than conscious decision. A habit forms when an action is repeated so often in the same context that it becomes automatic, {{3}} up very little mental effort.\n\nThis is not necessarily a bad thing: if we had to think through every step of brushing our teeth, we would quickly {{4}} out of energy for more important matters. The problem {{5}} when unhelpful routines become deeply {{6}}. Experts suggest that, rather than relying on willpower alone, people who want to {{7}} a bad habit should change the environment that {{8}} it.",
      gaps: [
        { n: 1, options: ["certainty", "reality", "sum", "effect"], answer: 1 },
        { n: 2, options: ["proportion", "deal", "number", "majority"], answer: 0 },
        { n: 3, options: ["taking", "using", "making", "putting"], answer: 0 },
        { n: 4, options: ["run", "go", "come", "fall"], answer: 0 },
        { n: 5, options: ["arises", "rises", "raises", "arouses"], answer: 0 },
        { n: 6, options: ["rooted", "fixed", "planted", "grown"], answer: 0 },
        { n: 7, options: ["break", "cut", "smash", "leave"], answer: 0 },
        { n: 8, options: ["triggers", "launches", "starts up", "opens"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "Never too late",
      text: "It is often claimed that children learn languages more easily {{9}} adults. While there is some truth in this, adults have certain advantages {{10}} their own. {{11}} one thing, they can draw on their knowledge of how language works. Adults are also better at organising their study, {{12}} allows them to make rapid progress in the early stages.\n\n{{13}} really matters, according to most experts, is not age {{14}} the amount of exposure to the language. {{15}} matter how motivated learners are, without regular contact with the language their progress will be slow. In short, it is {{16}} too late to start.",
      gaps: [
        { n: 9, answers: ["than"] },
        { n: 10, answers: ["of"] },
        { n: 11, answers: ["for"] },
        { n: 12, answers: ["which"] },
        { n: 13, answers: ["what"] },
        { n: 14, answers: ["but"] },
        { n: 15, answers: ["no"] },
        { n: 16, answers: ["never"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "Working from home",
      text: "The shift towards remote working has been one of the most {{17}} changes in the workplace in recent decades. At first, many {{18}} were reluctant to let staff work from home, fearing a drop in {{19}}. {{20}}, however, studies have generally found that output stays the same or even rises.\n\nWorkers particularly value the {{21}} to organise their own schedules. On the other hand, some report feelings of {{22}}, and others struggle with an {{23}} between their professional and private lives. For remote work to succeed, it is also vital that staff have access to a {{24}} internet connection.",
      gaps: [
        { n: 17, word: "SIGNIFY", answers: ["significant"] },
        { n: 18, word: "EMPLOY", answers: ["employers"] },
        { n: 19, word: "PRODUCE", answers: ["productivity", "production"] },
        { n: 20, word: "SURPRISE", answers: ["surprisingly"] },
        { n: 21, word: "FLEXIBLE", answers: ["flexibility"] },
        { n: 22, word: "ISOLATE", answers: ["isolation"] },
        { n: 23, word: "BALANCE", answers: ["imbalance"] },
        { n: 24, word: "RELY", answers: ["reliable"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 6 palabras.",
      items: [
        { n: 25, first: "I'm sure she didn't mean to offend you.", keyword: "CAN'T", before: "She", after: "to offend you.", answers: ["can't have meant", "cannot have meant", "can't have wanted"] },
        { n: 26, first: "It was only when I got home that I realised I had lost my wallet.", keyword: "UNTIL", before: "Not", after: "realise I had lost my wallet.", answers: ["until i got home did i", "until i arrived home did i", "until i had got home did i", "until i reached home did i"] },
        { n: 27, first: "People say that the company is going to close.", keyword: "SAID", before: "The company", after: "going to close.", answers: ["is said to be"] },
        { n: 28, first: "I regret not taking the job.", keyword: "WISH", before: "I", after: "the job.", answers: ["wish i had taken", "wish i'd taken", "wish i had accepted", "wish i'd accepted"] },
        { n: 29, first: "They cancelled the concert because of the bad weather.", keyword: "CALLED", before: "The concert", after: "because of the bad weather.", answers: ["was called off", "had been called off", "has been called off"] },
        { n: 30, first: "You don't have to come if you don't want to.", keyword: "OBLIGED", before: "You", after: "come if you don't want to.", answers: ["are not obliged to", "aren't obliged to"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "In praise of boredom",
      passage: [
        "For most of human history, boredom was simply an unavoidable part of life. Long journeys, slow afternoons and endless waiting were accepted as the normal texture of existence. Today, however, it has become almost possible to eliminate boredom altogether. The smartphone in our pocket offers an endless supply of distraction, and few of us can resist reaching for it the moment we have nothing to do.",
        "At first glance, this might seem like progress. Boredom, after all, is unpleasant, and nobody would argue that we should seek it out for its own sake. Yet a growing number of psychologists believe that something valuable is being lost. Their argument is not that boredom is enjoyable, but that it serves a purpose. Like hunger or pain, they suggest, it is a signal: it tells us that our current activity is not meeting our needs and pushes us to look for something more meaningful.",
        "There is also evidence that boredom can stimulate creativity. In one frequently cited experiment, participants who had first completed a deliberately tedious task (copying numbers from a telephone directory) went on to produce more inventive answers in a subsequent test than those who had not. The researchers concluded that when the mind is understimulated, it begins to wander, and that this wandering allows unexpected connections to form.",
        "Not everyone is convinced. Critics point out that such studies are small and that their results have not always been replicated. Others argue that the distinction between boredom and rest is often blurred: what looks like the creative benefit of boredom may simply be the benefit of a break. Even so, few would dispute that constant stimulation has a cost. If every idle moment is filled, the mind has little opportunity to reflect, to plan or simply to process what has happened.",
        "Perhaps, then, the lesson is not that we should deliberately make ourselves bored, but that we should be less quick to escape the feeling. The next time you find yourself queuing with nothing to do, it might be worth leaving your phone where it is, and seeing where your thoughts take you."
      ],
      questions: [
        { n: 31, prompt: "What does the writer say about boredom in the first paragraph?", options: ["It was once considered a sign of laziness.", "It used to be an accepted part of everyday life.", "It has always been easy to avoid.", "It has become more common than in the past."], answer: 1 },
        { n: 32, prompt: "According to the psychologists mentioned in the second paragraph, boredom", options: ["is more enjoyable than people admit.", "should be actively pursued.", "motivates people to change what they are doing.", "is a sign of physical illness."], answer: 2 },
        { n: 33, prompt: "The experiment described in the third paragraph suggests that", options: ["tedious tasks improve memory.", "a dull activity can lead to more original thinking.", "people prefer boring tasks to difficult ones.", "creativity cannot be measured reliably."], answer: 1 },
        { n: 34, prompt: "What point do some critics make in the fourth paragraph?", options: ["The benefits of boredom may actually come from resting.", "Boredom is more harmful than previously thought.", "The experiments were deliberately misleading.", "Rest is less valuable than stimulation."], answer: 0 },
        { n: 35, prompt: "\"Even so\" in the fourth paragraph introduces", options: ["a further criticism of the research.", "a point the writer believes is widely accepted.", "an example from the writer's own life.", "a contradiction of the psychologists' argument."], answer: 1 },
        { n: 36, prompt: "What is the writer's main conclusion?", options: ["People should try to become bored more often.", "Smartphones should be banned in public places.", "We should be more willing to tolerate boredom.", "Boredom is the main source of creativity."], answer: 2 }
      ]
    },
    { type: "matching", title: "Parte 6 · Cross-text multiple matching", marks: 2,
      instructions: "Lee las opiniones de cuatro especialistas (A–D) y responde: ¿qué especialista…?",
      heading: "Why study history?",
      texts: [
        { label: "A", body: "History is too often taught as a list of names and dates to be learnt by heart, an approach that does little more than test short-term memory and leaves many pupils with a lifelong aversion to the subject. Properly taught, however, history trains young people to weigh evidence, to recognise bias and to construct a reasoned argument, skills that are invaluable in almost any career. For this reason I would argue that no pupil should be allowed to drop the subject before leaving school; it is simply too important to be left to personal preference." },
        { label: "B", body: "There is a fashionable view that dates no longer matter, but without a firm grasp of chronology pupils cannot understand cause and effect, so learning when key events took place remains essential. Studying history also equips students to analyse sources critically, a skill employers value highly. Above all, it helps us make sense of the world around us: today's conflicts and debates are rarely intelligible without knowing how they arose. That said, I see little point in forcing teenagers who have no interest in the subject to continue with it; beyond the age of fourteen it should be a matter of choice." },
        { label: "C", body: "Few things are less useful than being able to recite the dates of battles and coronations, and examinations that reward this kind of memorisation do the subject a disservice. What history does offer is training in the careful reading of documents and the evaluation of conflicting accounts, which students will use long after they have forgotten the details. I am, however, wary of the claim that the past can explain the present. Circumstances change so profoundly that drawing parallels is more likely to mislead than enlighten. Even so, every pupil should study history until the end of their schooling." },
        { label: "D", body: "Those who defend history on the grounds that it produces useful skills are, I think, mistaken. Lawyers and scientists learn to weigh evidence perfectly well in their own disciplines; history has no special claim here. Its real value lies elsewhere: in giving us a sense of where we come from and in illuminating the forces that continue to shape our societies today. It is precisely because it offers this understanding of the present that I believe it should remain a compulsory part of every child's education." }
      ],
      questions: [
        { n: 37, prompt: "has a different view from the others on whether history develops skills useful in other fields?", answer: "D" },
        { n: 38, prompt: "shares A's opinion about memorising dates?", answer: "C" },
        { n: 39, prompt: "shares B's view on whether history helps us understand the present?", answer: "D" },
        { n: 40, prompt: "has a different opinion from the others on whether history should be compulsory?", answer: "B" }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 7 · Gapped text", marks: 2,
      instructions: "Se han eliminado seis párrafos del artículo. Elige el párrafo (A–G) que encaja en cada hueco. Sobra un párrafo.",
      heading: "My first year as a beekeeper",
      passage: [
        "When I inherited three beehives from my grandfather, I knew almost nothing about bees. I had watched him work with them as a child, but I had always kept a safe distance, and the idea of opening a hive myself filled me with dread.",
        { gap: 41 },
        "The course turned out to be the best decision I could have made. Our instructor, a retired schoolteacher called Margaret, had been keeping bees for over forty years, and her calm manner was infectious.",
        { gap: 42 },
        "This advice proved invaluable when, a few weeks later, I opened my first hive alone. I moved slowly, as Margaret had taught us, and to my astonishment I was not stung once.",
        { gap: 43 },
        "I called Margaret, who came round the following day. After a careful inspection, she identified the cause: the colony had lost its queen, and without her no new eggs were being laid.",
        { gap: 44 },
        "For several anxious days I waited. Then, when I finally lifted the lid, I saw the unmistakable sign of success: neat rows of freshly laid eggs.",
        { gap: 45 },
        "By the end of the summer, I had harvested more honey than I knew what to do with. I gave jars to friends and neighbours, and kept one aside for my grandmother, who said it tasted exactly like his.",
        { gap: 46 },
        "Next spring I plan to add two more hives. Margaret, of course, has already offered to help."
      ],
      options: [
        { label: "A", text: "Fortunately, the problem could be solved. Margaret explained that I could introduce a new queen, bought from a specialist breeder, although there was no guarantee that the colony would accept her." },
        { label: "B", text: "Rather than risk harming the colonies, I decided to sign up for a weekend course run by the local beekeeping association. It was, I told myself, the least I could do for my grandfather's memory." },
        { label: "C", text: "Sadly, Margaret was unable to teach the course that year, so a younger colleague with far less experience took her place." },
        { label: "D", text: "That moment marked a turning point. For the first time, I felt that I was not just looking after my grandfather's bees but becoming a beekeeper in my own right." },
        { label: "E", text: "She began by reassuring us that bees are not naturally aggressive. They sting, she explained, only when they feel their colony is under threat, and most problems are caused by beekeepers who move too quickly or clumsily." },
        { label: "F", text: "Looking back, though, it is not the honey I value most, but what the year taught me about patience. Bees cannot be rushed, and neither, it seems, can learning." },
        { label: "G", text: "My confidence, however, was short-lived. By midsummer, one of the colonies had become noticeably weaker, with far fewer bees flying in and out than in the other two hives." }
      ],
      questions: [
        { n: 41, answer: "B" }, { n: 42, answer: "E" }, { n: 43, answer: "G" },
        { n: 44, answer: "A" }, { n: 45, answer: "D" }, { n: 46, answer: "F" }
      ]
    },
    { type: "matching", title: "Parte 8 · Multiple matching", marks: 1,
      instructions: "Cuatro personas hablan de su cambio de profesión. ¿Qué persona (A–D)…?",
      heading: "Starting again",
      texts: [
        { label: "A", heading: "Tom, from lawyer to baker", body: "For twelve years I worked as a corporate lawyer, and on paper I had everything. When I announced that I was leaving to open a bakery, my parents were convinced I was having some kind of crisis and spent months trying to talk me out of it. They've come round since, but I can see why they worried: I now earn about a third of what I used to. What I hadn't anticipated was the toll on my body. I'd imagined baking as a gentle, creative activity, but starting work at four in the morning and lifting heavy sacks of flour all day left me exhausted for the first year." },
        { label: "B", heading: "Sara, from accountant to teacher", body: "I spent my twenties and thirties as an accountant, and although I was good at it, I never felt it mattered much. Teaching had always been at the back of my mind, so at forty-two I finally applied for a training course. I'd been told it would take a year, but between placements and assessments it was closer to two before I was fully qualified. Now, though, I can honestly say that watching a struggling pupil suddenly grasp an idea is the most rewarding thing I've ever experienced. My only real regret is that I waited so long; I could have been doing this for twenty years." },
        { label: "C", heading: "Raj, from engineer to furniture maker", body: "I'd never seriously considered leaving engineering until I got talking to an elderly carpenter at a friend's wedding. He showed me photos of the chairs he made, and something just clicked. Within a year I'd set up my own workshop. Interestingly, a lot of what I learned as an engineer still comes in handy: I plan every piece meticulously and understand exactly how much weight a joint can bear. The one thing I find hard is the solitude. In my old job I was part of a team, and I do miss the conversations and the sense of working towards a shared goal." },
        { label: "D", heading: "Elena, from marketing to nursing", body: "When my father was seriously ill a few years ago, I spent a great deal of time in hospital, and I was struck by how much difference the nurses made, not just to him but to all of us. My career in marketing suddenly seemed rather empty. Retraining was hard work, but I have no doubts about my decision. I won't pretend the job is easy, though. Some days I come home completely drained, and it can be difficult to switch off from what I've seen. On the positive side, nursing offers a kind of stability I never had in marketing, where people were constantly being made redundant." }
      ],
      questions: [
        { n: 47, prompt: "admits to underestimating how physically demanding the new job would be?", answer: "A" },
        { n: 48, prompt: "says that a chance conversation led to the change?", answer: "C" },
        { n: 49, prompt: "wishes they had changed career earlier?", answer: "B" },
        { n: 50, prompt: "mentions earning considerably less than before?", answer: "A" },
        { n: 51, prompt: "still makes use of skills from their previous job?", answer: "C" },
        { n: 52, prompt: "was prompted to change by a family member's illness?", answer: "D" },
        { n: 53, prompt: "says their family was initially opposed to the decision?", answer: "A" },
        { n: 54, prompt: "misses working alongside other people?", answer: "C" },
        { n: 55, prompt: "found that the training took longer than expected?", answer: "B" },
        { n: 56, prompt: "finds the work emotionally exhausting at times?", answer: "D" }
      ]
    }
  ]
},

/* =========================== C2 PROFICIENCY =========================== */
{
  id: "c2-rue-1", level: "c2", exam: "C2 Proficiency", title: "Reading & Use of English completo · Simulacro 1", minutes: 90, minReport: 162,
  scale: [[0, 130], [0.3, 162], [0.45, 180], [0.6, 200], [0.75, 213], [0.85, 220], [1, 230]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "Lost in translation",
      text: "Translation is often {{1}} as a purely mechanical task, a matter of finding the right equivalent for each word. Anyone who has {{2}} their hand at it, however, will know that it is {{3}} with difficulty. Languages do not {{4}} neatly onto one another, and much of what makes a text distinctive lies in connotation, rhythm and tone.\n\nThe translator must constantly {{5}} a balance between fidelity to the original and readability in the target language. Lean too far one way and the result is stilted; too far the other and the translator risks {{6}} liberties with the author's meaning. Small wonder, then, that the best translators are held in such high {{7}}, nor that their work, when done well, so often goes {{8}}.",
      gaps: [
        { n: 1, options: ["dismissed", "rejected", "discarded", "denied"], answer: 0 },
        { n: 2, options: ["tried", "put", "turned", "lent"], answer: 0 },
        { n: 3, options: ["fraught", "loaded", "laden", "riddled"], answer: 0 },
        { n: 4, options: ["map", "match", "lay", "fit"], answer: 0 },
        { n: 5, options: ["strike", "hit", "draw", "make"], answer: 0 },
        { n: 6, options: ["taking", "making", "having", "getting"], answer: 0 },
        { n: 7, options: ["esteem", "opinion", "admiration", "reputation"], answer: 0 },
        { n: 8, options: ["unnoticed", "unseen", "unheard", "unwatched"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "The printing press",
      text: "Few inventions have had {{9}} profound an effect on daily life as the printing press. Before its arrival, books were copied by hand, {{10}} made them both rare and expensive. Within a few decades, {{11}}, printed texts were circulating across Europe {{12}} their thousands. {{13}} was the demand that printers struggled to keep up.\n\nHistorians remain divided {{14}} to how far the press caused the social upheavals that followed, but {{15}} would deny that it played a decisive role. It was, {{16}} it were, the internet of its day.",
      gaps: [
        { n: 9, answers: ["as", "so"] },
        { n: 10, answers: ["which"] },
        { n: 11, answers: ["however", "though"] },
        { n: 12, answers: ["in", "by"] },
        { n: 13, answers: ["such"] },
        { n: 14, answers: ["as"] },
        { n: 15, answers: ["few", "none"] },
        { n: 16, answers: ["as"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "The cost of sleeplessness",
      text: "Chronic sleep {{17}} is now recognised as a serious public health problem. Scientists warn that some of the damage it causes may be {{18}}, and that it leads to an increased {{19}} to infection. Even after a single bad night, concentration declines {{20}}.\n\nWorryingly, most people tend to {{21}} how much sleep they actually need, and many find the urge to check their phones late at night almost {{22}}. With the benefit of {{23}}, many of those who have suffered from burnout say they wish they had learned to {{24}} rest much earlier in their careers.",
      gaps: [
        { n: 17, word: "DEPRIVE", answers: ["deprivation"] },
        { n: 18, word: "REVERSE", answers: ["irreversible"] },
        { n: 19, word: "SUSCEPTIBLE", answers: ["susceptibility"] },
        { n: 20, word: "NOTICE", answers: ["noticeably"] },
        { n: 21, word: "ESTIMATE", answers: ["underestimate"] },
        { n: 22, word: "RESIST", answers: ["irresistible"] },
        { n: 23, word: "SIGHT", answers: ["hindsight"] },
        { n: 24, word: "PRIOR", answers: ["prioritise", "prioritize"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 8 palabras.",
      items: [
        { n: 25, first: "It's possible that he didn't receive the message.", keyword: "MAY", before: "He", after: "the message.", answers: ["may not have received", "may not have got", "may not have gotten"] },
        { n: 26, first: "Although I admire her work, I find her very difficult to deal with.", keyword: "MUCH", before: "", after: "her work, I find her very difficult to deal with.", answers: ["much as i admire"] },
        { n: 27, first: "The minister was determined to stress that no decision had been made.", keyword: "PAINS", before: "The minister", after: "that no decision had been made.", answers: ["was at pains to stress", "was at pains to emphasise", "was at pains to emphasize", "was at pains to point out", "was at pains to make clear"] },
        { n: 28, first: "People believe that the thieves escaped abroad.", keyword: "BELIEVED", before: "The thieves", after: "abroad.", answers: ["are believed to have escaped", "are believed to have fled", "are believed to have gone"] },
        { n: 29, first: "As soon as I arrived, it started to rain.", keyword: "SOONER", before: "No", after: "it started to rain.", answers: ["sooner had i arrived than"] },
        { n: 30, first: "The film was so popular that extra screenings were added.", keyword: "SUCH", before: "", after: "of the film that extra screenings were added.", answers: ["such was the popularity"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "The myth of multitasking",
      passage: [
        "Few claims are made with more confidence in job interviews than the ability to multitask. It is presented as a skill, even a virtue: proof that a candidate can cope with the relentless demands of modern working life. Yet the cognitive science on which such claims might rest is, at best, equivocal, and at worst flatly contradicts them.",
        "The difficulty lies partly in the term itself. Borrowed from computing, where it describes a processor's ability to run several programs in apparent simultaneity, 'multitasking' implies that the human brain can do the same. What actually happens, researchers argue, is something closer to rapid switching: attention is shifted back and forth between tasks, and each shift exacts a small but measurable toll. Over the course of a day, these 'switch costs' accumulate, leaving us not only slower but more prone to error.",
        "This is not to say that we can never do two things at once. Walking while holding a conversation presents few problems, precisely because one of the activities has become so automatic that it makes almost no demands on conscious attention. The trouble begins when both tasks require the same mental resources: reading an email while listening to a colleague, say, both of which draw on our capacity for processing language.",
        "Perhaps the most striking finding concerns people's perception of their own abilities. In several studies, those who described themselves as habitual multitaskers performed worse on tests of attention than those who did not, apparently because they had become more susceptible to distraction. If these findings hold, the very habit that people cite as evidence of their competence may in fact be eroding it.",
        "None of this is likely to banish multitasking from the workplace, where the expectation of constant availability shows no sign of abating. But it might encourage a degree of scepticism towards the idea that doing more things at once is the same as getting more done."
      ],
      questions: [
        { n: 31, prompt: "In the first paragraph, the writer suggests that the scientific evidence for multitasking is", options: ["widely misunderstood by researchers.", "unconvincing or even contrary to popular belief.", "stronger than critics claim.", "too recent to be reliable."], answer: 1 },
        { n: 32, prompt: "Why does the writer mention computing in the second paragraph?", options: ["To explain the origin of a misleading term.", "To show that computers switch between tasks better than humans.", "To argue that technology has caused people to multitask.", "To illustrate how attention is measured."], answer: 0 },
        { n: 33, prompt: "What point is made about 'switch costs'?", options: ["They only affect people who are tired.", "They are clearly noticeable after every single shift.", "Their combined effect becomes significant over time.", "They can be eliminated with enough practice."], answer: 2 },
        { n: 34, prompt: "According to the third paragraph, doing two things at once is possible when", options: ["both activities involve language.", "one of the activities requires little conscious attention.", "the person has practised both activities together.", "neither activity is particularly important."], answer: 1 },
        { n: 35, prompt: "What is ironic about the findings described in the fourth paragraph?", options: ["People who avoid multitasking are more easily distracted.", "The habit people are proud of may be damaging the ability they claim to have.", "Tests of attention favour people who multitask.", "Multitaskers tend to underestimate their own abilities."], answer: 1 },
        { n: 36, prompt: "What is the writer's view in the final paragraph?", options: ["Multitasking will soon disappear from the workplace.", "Employers should stop expecting staff to be constantly available.", "People should question whether multitasking really increases productivity.", "Workers should refuse to multitask."], answer: 2 }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 6 · Gapped text", marks: 2,
      instructions: "Se han eliminado siete párrafos del artículo. Elige el párrafo (A–H) que encaja en cada hueco. Sobra un párrafo.",
      heading: "The return of the night train",
      passage: [
        "For much of the late twentieth century, the sleeper train seemed destined for extinction. Cheap flights had made the overnight journey across Europe look slow and quaint, and one operator after another quietly withdrew its services. By the early 2010s, a traveller hoping to fall asleep in Paris and wake up in Rome would have been met with blank looks.",
        { gap: 37 },
        "Much of the credit for this revival is usually given to Austria's national railway, which in 2016 took the bold step of buying up rolling stock that others were discarding. Where its competitors had seen only losses, it saw an opportunity.",
        { gap: 38 },
        "Commercial success alone, however, does not explain the shift in public mood. Equally important has been a growing unease about the environmental cost of flying, particularly over the short and medium distances for which night trains are best suited.",
        { gap: 39 },
        "But there is something else at work too, something harder to quantify. Passengers who choose the sleeper often speak less of efficiency than of experience: the pleasure of watching the landscape darken, of drifting off to the rhythm of the rails, of arriving in the heart of a city rather than at an airport on its fringes.",
        { gap: 40 },
        "None of this means that the revival is secure. Running night trains remains a stubbornly difficult business. The carriages are expensive to build and maintain, and because each one carries far fewer passengers than a daytime train, the margins are thin.",
        { gap: 41 },
        "Some campaigners argue that governments should intervene more decisively, for example by reducing track access charges for overnight services or by taxing aviation fuel. Without such measures, they warn, the current boom could prove as short-lived as the decline that preceded it.",
        { gap: 42 },
        "Operators, meanwhile, are experimenting with ways to broaden the trains' appeal. Some have introduced compact sleeping pods aimed at budget travellers; others are reviving the luxury of the private compartment, complete with its own shower.",
        { gap: 43 }
      ],
      options: [
        { label: "A", text: "Matters are further complicated by the patchwork of national rail systems through which international services must pass. Each country has its own track charges, its own technical standards and, frequently, its own priorities." },
        { label: "B", text: "For many travellers, the calculation is a simple one. A journey that produces a fraction of the emissions of the equivalent flight, and that saves the cost of a hotel into the bargain, has an obvious appeal." },
        { label: "C", text: "This is why the Austrian operator decided, in 2016, to abandon its overnight routes altogether and concentrate on high-speed daytime services." },
        { label: "D", text: "Yet in the space of a few years, the picture has changed almost beyond recognition. New routes have been launched, old ones revived, and tickets on some services now sell out weeks in advance." },
        { label: "E", text: "Whatever the outcome of these experiments, one thing is already clear: the sleeper train, so recently written off, has earned a place in the debate about how Europeans will travel in the decades to come." },
        { label: "F", text: "That gamble has paid off handsomely. Its network of overnight services has expanded steadily, and the company has since ordered a fleet of new carriages designed specifically for the purpose." },
        { label: "G", text: "Whether politicians will heed such warnings remains to be seen. Several governments have offered encouraging words, but concrete support has so far been limited." },
        { label: "H", text: "It would be easy to dismiss this as mere nostalgia, a longing for a more romantic age of travel. Yet the enthusiasm is strongest among younger travellers, many of whom have no memory of the trains' earlier heyday." }
      ],
      questions: [
        { n: 37, answer: "D" }, { n: 38, answer: "F" }, { n: 39, answer: "B" }, { n: 40, answer: "H" },
        { n: 41, answer: "A" }, { n: 42, answer: "G" }, { n: 43, answer: "E" }
      ]
    },
    { type: "matching", title: "Parte 7 · Multiple matching", marks: 1,
      instructions: "Cuatro novelistas hablan de su primera novela. ¿Qué novelista (A–D)…?",
      heading: "First novels",
      texts: [
        { label: "A", body: "I wrote my first novel on the train to and from the office, over the course of almost four years. Not even my wife knew what I was doing; I suppose I was afraid that if I told anyone, I would have to admit failure if it came to nothing. When I finally finished, I sent it to more agents than I care to remember, and the refusals came back with depressing regularity, often without so much as a personal note. It was the thirty-seventh agent who took it on, and I sometimes wonder what would have happened had I given up at thirty-six." },
        { label: "B", body: "Before the novel that was eventually published, there was another one, some ninety thousand words long, which I put away in a drawer after realising it simply wasn't working. That was painful, but instructive. Second time round, I set myself rules: a thousand words every morning before breakfast, no exceptions, no matter how uninspired I felt. I'm convinced that without that discipline the book would never have been completed. Inspiration, in my experience, tends to arrive while you're already working rather than beforehand." },
        { label: "C", body: "When I typed the final sentence, I remember feeling oddly deflated. The book I had written seemed a pale shadow of the one I had carried around in my head for years. It was only when my editor got hold of it that it really came to life; she saw connections I had missed and persuaded me to cut almost a third of the manuscript. I owe her an enormous debt. What I was less prepared for was what came after publication: the interviews, the festivals, the photographs. I'm a private person, and being on display never felt natural to me." },
        { label: "D", body: "The novel grew out of stories my grandmother used to tell about her childhood in a fishing village, and much of what happens in it is barely fictionalised. I assumed readers would see it as a simple portrait of a vanished way of life, so I was taken aback when reviewers began describing it as a political allegory. I hadn't intended anything of the sort, although I've come to accept that once a book is published, it no longer belongs entirely to its author." }
      ],
      questions: [
        { n: 44, prompt: "initially kept the project hidden from the people closest to them?", answer: "A" },
        { n: 45, prompt: "felt the finished book fell short of what they had imagined?", answer: "C" },
        { n: 46, prompt: "believes a strict daily routine was essential to finishing the book?", answer: "B" },
        { n: 47, prompt: "was surprised by the way the book was interpreted?", answer: "D" },
        { n: 48, prompt: "abandoned an earlier attempt at a novel?", answer: "B" },
        { n: 49, prompt: "credits another person with greatly improving the book?", answer: "C" },
        { n: 50, prompt: "experienced a long series of rejections?", answer: "A" },
        { n: 51, prompt: "based the book closely on a relative's memories?", answer: "D" },
        { n: 52, prompt: "found the attention that followed publication uncomfortable?", answer: "C" },
        { n: 53, prompt: "wrote the book while holding down another job?", answer: "A" }
      ]
    }
  ]
},

/* ============================ C1 ADVANCED · 2 ============================ */
{
  id: "c1-rue-2", level: "c1", exam: "C1 Advanced", title: "Reading & Use of English completo · Simulacro 2", minutes: 90, minReport: 142,
  scale: [[0, 120], [0.2, 142], [0.4, 160], [0.6, 180], [0.8, 200], [1, 210]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "The rise of citizen science",
      text: "In recent years, ordinary members of the public have come to play an increasingly significant {{1}} in scientific research. So-called citizen science projects {{2}} heavily on volunteers to gather data that professional researchers could never collect on their own. Birdwatchers, for {{3}}, have helped scientists track the effects of climate change on migration patterns across entire continents.\n\nThe approach has not been without its critics. Some scientists have {{4}} doubts about the reliability of data collected by untrained volunteers. Supporters, however, point out that most projects provide clear guidance, and that errors tend to cancel each other out when data is gathered on such a large {{5}}. What is more, taking {{6}} in such projects appears to {{7}} participants' interest in science, and in some cases has even {{8}} rise to new careers.",
      gaps: [
        { n: 1, options: ["role", "function", "position", "task"], answer: 0 },
        { n: 2, options: ["rely", "trust", "believe", "hope"], answer: 0 },
        { n: 3, options: ["instance", "case", "sample", "model"], answer: 0 },
        { n: 4, options: ["raised", "lifted", "put", "made"], answer: 0 },
        { n: 5, options: ["scale", "size", "range", "measure"], answer: 0 },
        { n: 6, options: ["part", "place", "share", "role"], answer: 0 },
        { n: 7, options: ["boost", "climb", "rise", "mount"], answer: 0 },
        { n: 8, options: ["given", "made", "brought", "put"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "Why we put things off",
      text: "Most people put things off from time {{9}} time. Contrary {{10}} popular belief, however, procrastination has little to do with laziness. Psychologists now regard it {{11}} a problem of managing emotions rather than time. When faced {{12}} a task that makes us anxious or bored, we look for ways to avoid the unpleasant feeling, {{13}} only makes the task seem larger.\n\n{{14}} the time we eventually get round to it, the deadline is often uncomfortably close. One effective strategy is to break the task down into smaller steps, {{15}} of which feels manageable. Another is simply to commit to working on it for five minutes; once they have started, people tend to carry {{16}}.",
      gaps: [
        { n: 9, answers: ["to"] }, { n: 10, answers: ["to"] }, { n: 11, answers: ["as"] }, { n: 12, answers: ["with"] },
        { n: 13, answers: ["which"] }, { n: 14, answers: ["by"] }, { n: 15, answers: ["each"] }, { n: 16, answers: ["on"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "Museums in the digital age",
      text: "Museums are attracting more {{17}} than ever before. {{18}}, they were seen as quiet places for experts, but many have worked hard to make their exhibits more {{19}} to the general public. {{20}} displays allow children to touch and explore, and entire {{21}} can now be viewed online.\n\nSome fear that virtual tours will eventually make physical visits unnecessary. Yet the experience of standing in front of an original work of art is {{22}} richer than viewing it on a screen. There is something {{23}} about seeing the real thing, and it is this sense of {{24}} that keeps people coming back.",
      gaps: [
        { n: 17, word: "VISIT", answers: ["visitors"] },
        { n: 18, word: "TRADITION", answers: ["traditionally"] },
        { n: 19, word: "ACCESS", answers: ["accessible"] },
        { n: 20, word: "INTERACT", answers: ["interactive"] },
        { n: 21, word: "COLLECT", answers: ["collections"] },
        { n: 22, word: "ARGUE", answers: ["arguably"] },
        { n: 23, word: "REPLACE", answers: ["irreplaceable"] },
        { n: 24, word: "AUTHENTIC", answers: ["authenticity"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 6 palabras.",
      items: [
        { n: 25, first: "It's possible that she missed the train.", keyword: "MIGHT", before: "She", after: "the train.", answers: ["might have missed", "might've missed"] },
        { n: 26, first: "I'd prefer you not to smoke in here.", keyword: "RATHER", before: "I'd", after: "smoke in here.", answers: ["rather you didn't", "rather you did not"] },
        { n: 27, first: "Although it was raining heavily, the match went ahead.", keyword: "SPITE", before: "The match went ahead", after: "heavy rain.", answers: ["in spite of the"] },
        { n: 28, first: "They're building a new hospital in the town.", keyword: "BUILT", before: "A new hospital", after: "in the town.", answers: ["is being built"] },
        { n: 29, first: "Tom is the only person who knows the password.", keyword: "NOBODY", before: "", after: "Tom knows the password.", answers: ["nobody apart from", "nobody except", "nobody other than", "nobody but", "nobody else but", "nobody besides"] },
        { n: 30, first: "I hadn't expected the exam to be so easy.", keyword: "EASIER", before: "The exam", after: "I had expected.", answers: ["was much easier than", "was far easier than", "was a lot easier than", "was easier than"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "The return of the repair shop",
      passage: [
        "Not so long ago, it seemed that the repair shop had gone the way of the typewriter. When a toaster stopped working or a phone screen cracked, the sensible response was to throw it away and buy a new one; replacement was usually cheaper, and certainly more convenient, than repair. Today, however, a quiet counter-movement is under way.",
        "In towns across Europe, volunteers have set up 'repair cafés', informal gatherings where people bring broken household items and, with the help of skilled amateurs, try to fix them. The first was organised in Amsterdam in 2009; there are now thousands worldwide. Their founders insist that the aim is not simply to save money. 'It's about changing the way people think about objects,' one organiser told me. 'Once you've repaired something yourself, you never quite look at it in the same way again.'",
        "Manufacturers have been slow to embrace this shift. Many products are designed in ways that make repair difficult, if not impossible: components are glued rather than screwed together, spare parts are unavailable, and repair manuals are kept confidential. Critics argue that this is deliberate, a strategy to encourage frequent replacement. Manufacturers, for their part, maintain that sealed designs make products thinner, lighter and more resistant to water.",
        "Legislators are now stepping in. New 'right to repair' rules require manufacturers of certain appliances to make spare parts available for a number of years after a product is sold. Campaigners have welcomed the measures but warn that they do not go far enough, pointing out that they cover only a limited range of products and do nothing to bring down the often prohibitive cost of official repairs.",
        "Whether these changes will alter consumer behaviour remains to be seen. Convenience is a powerful force, and many people will continue to choose a new device over a repaired one. But the popularity of repair cafés suggests that, for a growing number of people, the satisfaction of making something work again is worth a little inconvenience."
      ],
      questions: [
        { n: 31, prompt: "In the first paragraph, the writer suggests that until recently, repairing items was", options: ["considered a valuable skill.", "less practical than replacing them.", "only possible for experts.", "more popular than it is today."], answer: 1 },
        { n: 32, prompt: "According to the organiser quoted in the second paragraph, repairing things yourself", options: ["saves a surprising amount of money.", "changes your attitude towards possessions.", "is easier than most people imagine.", "should be taught in schools."], answer: 1 },
        { n: 33, prompt: "What does the writer say about manufacturers in the third paragraph?", options: ["They openly admit that they discourage repairs.", "They justify their designs on practical grounds.", "They have begun publishing repair manuals.", "They are unaware of the repair café movement."], answer: 1 },
        { n: 34, prompt: "In the third paragraph, \"this\" in \"Critics argue that this is deliberate\" refers to", options: ["designing products that are hard to repair.", "the confidentiality of repair manuals only.", "making products thinner and lighter.", "the growing interest in repair."], answer: 0 },
        { n: 35, prompt: "What reservation do campaigners express about the new rules?", options: ["They will make new products more expensive.", "They are too limited in scope.", "They will be difficult to enforce.", "They were introduced too hastily."], answer: 1 },
        { n: 36, prompt: "What is the writer's conclusion?", options: ["Most consumers will soon prefer repair to replacement.", "Repair cafés will eventually replace commercial repair shops.", "For some people, repairing things brings rewards that outweigh the effort.", "Legislation is the only way to change consumer behaviour."], answer: 2 }
      ]
    },
    { type: "matching", title: "Parte 6 · Cross-text multiple matching", marks: 2,
      instructions: "Lee las opiniones de cuatro especialistas (A–D) sobre los zoológicos y responde: ¿qué especialista…?",
      heading: "Do zoos still have a place?",
      texts: [
        { label: "A", body: "There is no doubt that zoos have saved a number of species from extinction through carefully managed breeding programmes, and this alone justifies their existence. I am far less persuaded by the claim that they educate the public; studies suggest most visitors leave knowing little more than when they arrived. More troubling still is the situation of large, wide-ranging mammals such as elephants, which show clear signs of stress in even the most spacious enclosures. Zoos should stop keeping such animals and concentrate instead on species that genuinely thrive in captivity." },
        { label: "B", body: "Zoos like to present themselves as modern arks, but the truth is that very few animals bred in captivity are ever successfully returned to the wild; their contribution to conservation is largely symbolic. Where zoos do excel is in education. Seeing a living animal up close can spark a lifelong interest in nature, particularly among children. And the welfare standards in accredited zoos today are vastly better than they were a generation ago. I see no need for fundamental change; the best zoos are already doing what they should." },
        { label: "C", body: "For some species, captive breeding is the last line of defence against extinction, and without zoos several animals would already have disappeared. Zoos also have an important role in teaching the public about biodiversity; visitors who see endangered animals are more likely to support conservation causes. I do, however, share the concern that elephants, great apes and big cats cannot have their needs met in captivity. In the long term, zoos should evolve into research and breeding centres, with far less emphasis on entertainment." },
        { label: "D", body: "Zoos have made an undeniable contribution to the survival of threatened species, and their breeding expertise is invaluable. Their educational role, on the other hand, is often exaggerated: a quick stroll past a few enclosures, usually with a smartphone in hand, teaches visitors very little. As for welfare, I find most criticism outdated; the animals in well-run zoos are healthy and well cared for. Nevertheless, zoos cannot carry on as they are. They should become true sanctuaries, open to the public only in limited ways." }
      ],
      questions: [
        { n: 37, prompt: "has a different view from the others on the contribution zoos make to conservation?", answer: "B" },
        { n: 38, prompt: "shares A's opinion on the educational value of zoos?", answer: "D" },
        { n: 39, prompt: "shares C's concerns about the welfare of large animals in zoos?", answer: "A" },
        { n: 40, prompt: "has a different opinion from the others on whether zoos need to change?", answer: "B" }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 7 · Gapped text", marks: 2,
      instructions: "Se han eliminado seis párrafos del artículo. Elige el párrafo (A–G) que encaja en cada hueco. Sobra un párrafo.",
      heading: "Learning to sail at fifty",
      passage: [
        "I had always assumed that sailing was something you learned as a child, ideally from a parent with a boat and a great deal of patience. So when, at the age of fifty, I signed up for a beginners' course on the south coast, I was fully prepared to be the oldest and most incompetent person there.",
        { gap: 41 },
        "Our instructor, Jen, wasted no time. Within an hour of arriving, we were out on the water in small dinghies, each of us paired with another beginner.",
        { gap: 42 },
        "'Everybody capsizes,' she told us later, as we sat shivering on the jetty. 'The ones who learn fastest are the ones who stop being afraid of it.'",
        { gap: 43 },
        "By the third day, something had changed. The jargon that had baffled me at first, all those halyards, tacks and gybes, began to make sense, and I found myself reacting to the wind almost without thinking.",
        { gap: 44 },
        "On the boat, by contrast, every action had an immediate consequence. Pull the rope too hard and you lost speed; steer a fraction too close to the wind and the sails began to flap.",
        { gap: 45 },
        "On the final day, Jen sent us out alone. I sailed across the bay and back without capsizing once, which, given my performance on the first morning, felt like a minor miracle.",
        { gap: 46 }
      ],
      options: [
        { label: "A", text: "I was half right. At least two of my fellow students were older than me, including a retired surgeon who had decided, after decades of operating, that he wanted to spend his remaining years 'doing something that couldn't kill anyone else'." },
        { label: "B", text: "It was advice that applied to more than sailing. Over the following days, I noticed that my worst moments came not from a lack of skill but from hesitation: the second of doubt before turning, the reluctance to commit." },
        { label: "C", text: "Unfortunately, the weather that week was so poor that we never actually left the harbour, and spent most of the course studying diagrams in a classroom." },
        { label: "D", text: "That sense of instinctive control was, I think, what I had been looking for without realising it. In my working life, almost everything involved meetings, emails and decisions that took weeks to have any visible effect." },
        { label: "E", text: "I have been sailing most weekends since. I am still far from expert, but I have stopped worrying about that. What matters is the time on the water, and the reminder that it is never too late to be a beginner." },
        { label: "F", text: "My partner was a nervous young accountant called Tom, and between us we managed to capsize twice before lunch. Jen, watching from a motorboat, seemed entirely unconcerned." },
        { label: "G", text: "There was something deeply satisfying about this directness. For the first time in years, I was fully absorbed in what I was doing, with no room in my head for anything else." }
      ],
      questions: [
        { n: 41, answer: "A" }, { n: 42, answer: "F" }, { n: 43, answer: "B" },
        { n: 44, answer: "D" }, { n: 45, answer: "G" }, { n: 46, answer: "E" }
      ]
    },
    { type: "matching", title: "Parte 8 · Multiple matching", marks: 1,
      instructions: "Cuatro jóvenes emprendedores hablan de sus negocios. ¿Qué persona (A–D)…?",
      heading: "Going it alone",
      texts: [
        { label: "A", heading: "Leo, app developer", body: "When I left university, I had an idea for an app that would help people split bills with friends. My parents lent me enough money to cover the first year, which I'm still paying back. My biggest mistake was assuming nobody else had thought of the same thing. Within six months, three similar apps had appeared, all backed by much larger companies, and I had to rethink the whole product. In the end, we found a niche among small community groups, and things have gone well since, but it was a hard lesson." },
        { label: "B", heading: "Ana, clothing designer", body: "I started collecting unwanted clothes and turning them into new designs because I was shocked by how much textile waste ends up in landfill. In the beginning, it was incredibly hard. After a year of barely breaking even, I came very close to closing down and looking for a regular job. What saved me was meeting an older businesswoman who had run a fashion company for decades. She showed me how to price my products properly and how to approach shops, and within months everything had turned around." },
        { label: "C", heading: "Sam, bike delivery service", body: "I set up a bike delivery service while I was still at college, mostly as a way to earn some money between lectures. By the time I graduated, it had grown into a proper business with twelve riders. People sometimes ask whether I miss having a stable salary, but honestly, the freedom to decide when and how I work matters far more to me. If I want to take a Tuesday afternoon off to go climbing, I can. That's worth a lot." },
        { label: "D", heading: "Priya, tutoring platform", body: "When I moved to a new country, I found it almost impossible to find an affordable language tutor, so I built a simple website connecting learners with students who wanted to earn some extra money by teaching. I expected it to take years to attract users, but within a few months we had thousands. We're now in talks with investors about launching the platform in other countries, starting with Germany and Spain next year." }
      ],
      questions: [
        { n: 47, prompt: "received financial help from their family?", answer: "A" },
        { n: 48, prompt: "got the idea for the business from a difficulty they had experienced?", answer: "D" },
        { n: 49, prompt: "nearly abandoned the business at one stage?", answer: "B" },
        { n: 50, prompt: "values the flexibility of working for themselves?", answer: "C" },
        { n: 51, prompt: "underestimated the competition?", answer: "A" },
        { n: 52, prompt: "benefited from the advice of a more experienced person?", answer: "B" },
        { n: 53, prompt: "is planning to expand the business internationally?", answer: "D" },
        { n: 54, prompt: "started the business while still studying?", answer: "C" },
        { n: 55, prompt: "was motivated by environmental concerns?", answer: "B" },
        { n: 56, prompt: "says the business grew more quickly than they had anticipated?", answer: "D" }
      ]
    }
  ]
},

/* =========================== C2 PROFICIENCY · 2 =========================== */
{
  id: "c2-rue-2", level: "c2", exam: "C2 Proficiency", title: "Reading & Use of English completo · Simulacro 2", minutes: 90, minReport: 162,
  scale: [[0, 130], [0.3, 162], [0.45, 180], [0.6, 200], [0.75, 213], [0.85, 220], [1, 230]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "The uses of nostalgia",
      text: "For much of its history, nostalgia was regarded as an illness in its own {{1}}; the term was coined in the seventeenth century to describe the debilitating homesickness of soldiers serving abroad. Recent research, however, paints a rather more {{2}} picture. Far from being a sign of an inability to {{3}} to the present, nostalgia appears to serve a useful psychological purpose. Recalling cherished memories can {{4}} feelings of loneliness and strengthen a sense of meaning, particularly at times of uncertainty. It is, as one researcher put it, a kind of emotional reserve on which we can {{5}} when needed.\n\nThat is not to say that nostalgia is entirely {{6}} of risk. Dwelling too much on an idealised past may {{7}} people's ability to engage with the present, and politicians have long been adept at {{8}} on a collective longing for a supposedly golden age.",
      gaps: [
        { n: 1, options: ["right", "way", "terms", "sense"], answer: 0 },
        { n: 2, options: ["nuanced", "blurred", "tinted", "painted"], answer: 0 },
        { n: 3, options: ["adapt", "suit", "match", "fit"], answer: 0 },
        { n: 4, options: ["alleviate", "lighten", "thin", "slacken"], answer: 0 },
        { n: 5, options: ["draw", "pull", "bring", "take"], answer: 0 },
        { n: 6, options: ["devoid", "empty", "bare", "lacking"], answer: 0 },
        { n: 7, options: ["hamper", "block", "bar", "stall"], answer: 0 },
        { n: 8, options: ["capitalising", "cashing", "exploiting", "profiting"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "The art of listening",
      text: "We tend to think of good communicators as those who speak well, {{9}} in reality listening is at least as important. Genuine listening involves far more {{10}} simply waiting for one's turn to speak. It requires us to set {{11}} our own preoccupations and to attend fully to what the other person is saying, {{12}} it be welcome or not.\n\n{{13}} is perhaps surprising, given how much time we spend in conversation, is how rarely we are taught to do this. Most of us, {{14}} pressed, would admit that we often listen {{15}} little more than half our attention. Small wonder, then, that misunderstandings are {{16}} common.",
      gaps: [
        { n: 9, answers: ["but", "yet", "whereas", "while", "whilst"] }, { n: 10, answers: ["than"] }, { n: 11, answers: ["aside"] },
        { n: 12, answers: ["whether"] }, { n: 13, answers: ["what"] }, { n: 14, answers: ["if", "when"] },
        { n: 15, answers: ["with"] }, { n: 16, answers: ["so"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "Letting cities grow wild",
      text: "Across Europe, cities are creating small pockets of {{17}} in the most unlikely places, from rooftops to abandoned railway lines. The scale of some of these projects is {{18}}, and early results suggest they can significantly increase local {{19}}.\n\nAllowing parks to grow wild may seem an {{20}} approach to urban planning, and it has been met with some {{21}} from residents who prefer neatly trimmed lawns. Yet rewilded areas require far less {{22}} than conventional green spaces, which makes them {{23}} attractive to councils with limited budgets. A common {{24}} is that such areas are simply neglected; in fact, they are carefully managed.",
      gaps: [
        { n: 17, word: "WILD", answers: ["wilderness"] },
        { n: 18, word: "PRECEDE", answers: ["unprecedented"] },
        { n: 19, word: "DIVERSE", answers: ["biodiversity", "diversity"] },
        { n: 20, word: "CONVENTION", answers: ["unconventional"] },
        { n: 21, word: "SCEPTIC", answers: ["scepticism", "skepticism"] },
        { n: 22, word: "MAINTAIN", answers: ["maintenance"] },
        { n: 23, word: "DOUBT", answers: ["undoubtedly"] },
        { n: 24, word: "CONCEIVE", answers: ["misconception"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 8 palabras.",
      items: [
        { n: 25, first: "It was wrong of you to read my diary.", keyword: "SHOULD", before: "You", after: "my diary.", answers: ["should not have read", "shouldn't have read"] },
        { n: 26, first: "She didn't realise how serious the situation was until later.", keyword: "DID", before: "Only later", after: "how serious the situation was.", answers: ["did she realise", "did she realize", "did she understand"] },
        { n: 27, first: "I'm sure it wasn't Tom who broke the window.", keyword: "CAN'T", before: "It", after: "who broke the window.", answers: ["can't have been tom", "cannot have been tom"] },
        { n: 28, first: "The weather was so bad that the flight was cancelled.", keyword: "SUCH", before: "", after: "that the flight was cancelled.", answers: ["it was such bad weather", "such was the weather", "such was the bad weather"] },
        { n: 29, first: "He's determined not to resign.", keyword: "INTENTION", before: "He has", after: "resigning.", answers: ["no intention of", "no intention whatsoever of", "no intention at all of"] },
        { n: 30, first: "People suspect that the minister knew about the scandal.", keyword: "SUSPECTED", before: "The minister", after: "about the scandal.", answers: ["is suspected of having known", "is suspected to have known"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "The value of being wrong",
      passage: [
        "Science, as it is usually presented to the public, is a story of success: the brilliant insight, the decisive experiment, the theory triumphantly confirmed. What this account leaves out is the vast quantity of work that leads nowhere. Experiments fail, hypotheses collapse, and promising lines of inquiry turn out to be dead ends. Most working scientists spend far more of their time being wrong than being right.",
        "This would matter less if failure were properly recorded. But journals have traditionally shown little interest in publishing negative results, which are seen as unglamorous and, in the competitive world of academic careers, of little value to those who produce them. The consequence is a distorted scientific record, in which successful findings are overrepresented and failures quietly disappear.",
        "The costs of this distortion are considerable. Researchers unaware that an approach has already been tried and found wanting may waste years repeating it. More insidiously, when only positive results see the light of day, the evidence for a given effect can appear far stronger than it really is. In fields such as medicine, where treatment decisions rest on published findings, the implications are obvious.",
        "There are signs that attitudes are shifting. A number of journals now explicitly welcome negative results, and some funding bodies require researchers to register their studies in advance, so that the outcome is recorded whatever it turns out to be. Sceptics note, however, that such measures address the symptoms rather than the cause: as long as careers depend on producing striking results, the incentive to bury inconvenient ones will remain.",
        "Perhaps what is ultimately required is a change in how failure itself is perceived. A well-designed experiment that disproves a plausible hypothesis is not a waste of resources; it narrows the field of possibilities and brings the truth a little closer. Until that view is reflected in how scientists are rewarded, the public image of science as an unbroken series of triumphs is likely to persist, to the detriment of science itself."
      ],
      questions: [
        { n: 31, prompt: "In the first paragraph, the writer suggests that public accounts of science", options: ["exaggerate the importance of individual genius.", "give a misleadingly positive impression.", "are too technical for general readers.", "underestimate how quickly science progresses."], answer: 1 },
        { n: 32, prompt: "According to the second paragraph, negative results are rarely published because", options: ["they are often based on flawed methods.", "they offer little reward to journals or researchers.", "scientists are embarrassed by them.", "they are too difficult to interpret."], answer: 1 },
        { n: 33, prompt: "What does \"More insidiously\" introduce in the third paragraph?", options: ["A less obvious but more serious consequence.", "An example from the field of medicine.", "A solution to the problem described.", "A criticism of individual researchers."], answer: 0 },
        { n: 34, prompt: "The sceptics mentioned in the fourth paragraph believe that recent measures", options: ["have been widely ignored.", "will make research more expensive.", "fail to tackle the underlying problem.", "are likely to discourage innovation."], answer: 2 },
        { n: 35, prompt: "In the final paragraph, the writer argues that a failed experiment", options: ["should be repeated before it is published.", "can still contribute to scientific knowledge.", "is usually the result of poor design.", "should be reported separately from successful ones."], answer: 1 },
        { n: 36, prompt: "What is the writer's main purpose in the text?", options: ["To defend scientists against public criticism.", "To argue that the way science treats failure needs to change.", "To explain why medical research is unreliable.", "To describe the history of scientific publishing."], answer: 1 }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 6 · Gapped text", marks: 2,
      instructions: "Se han eliminado siete párrafos del artículo. Elige el párrafo (A–H) que encaja en cada hueco. Sobra un párrafo.",
      heading: "Life without a car",
      passage: [
        "When we sold our car eighteen months ago, friends reacted as though we had announced some kind of eccentric religious conversion. How would we do the weekly shop? What about visiting relatives? And what on earth would we do when it rained?",
        { gap: 37 },
        "The first few weeks were, admittedly, something of a trial. We had underestimated how much of our routine had been built around the car, and every small errand seemed to require a new plan.",
        { gap: 38 },
        "The financial savings were considerable. Once we had added up the cost of fuel, insurance, tax, servicing and the inevitable repairs, we realised that we had been spending far more on the car than we had ever admitted to ourselves.",
        { gap: 39 },
        "More surprising were the less tangible changes. Walking to the shops, I began to recognise neighbours I had lived alongside for years without ever speaking to.",
        { gap: 40 },
        "I do not want to overstate the case. There are journeys that remain genuinely difficult, particularly to relatives who live in villages poorly served by public transport, and a family emergency in the middle of the night would present real problems.",
        { gap: 41 },
        "Nor am I suggesting that everyone should follow our example. What I would suggest is that many of us drive out of habit rather than necessity, and that it is worth asking, honestly, how many of our journeys really require a car.",
        { gap: 42 },
        "Eighteen months on, we have no plans to buy another car. The questions our friends asked have, for the most part, answered themselves.",
        { gap: 43 }
      ],
      options: [
        { label: "A", text: "Gradually, though, new habits took shape. We discovered that the supermarket would deliver for a modest fee, that the bus into town was quicker than driving once parking was taken into account, and that most of our local journeys could comfortably be made on foot." },
        { label: "B", text: "As for the rain, we have found a remarkably simple solution: good waterproofs." },
        { label: "C", text: "These were reasonable questions, and I would be lying if I said we had worked out the answers in advance. The decision was made, as such decisions often are, in a moment of frustration: an expensive repair bill had arrived on the same day as a reminder that the insurance was due." },
        { label: "D", text: "Within a fortnight, we had given in and bought a second-hand replacement, and the experiment was quietly forgotten." },
        { label: "E", text: "Our children, too, became noticeably more independent. Without the option of being driven everywhere, they learned to navigate the bus network, and now think nothing of making their own way to friends' houses." },
        { label: "F", text: "For us, the answer turned out to be surprisingly few. That does not make car ownership wrong, but it does suggest that the choice deserves more thought than most of us give it." },
        { label: "G", text: "It is also true that our circumstances are unusually favourable. We live close to a town centre with good transport links; for many people in rural areas, giving up a car would be neither practical nor sensible." },
        { label: "H", text: "Some of that money now goes on the occasional taxi or hire car, which we use perhaps once a month. Even so, we are several thousand pounds a year better off." }
      ],
      questions: [
        { n: 37, answer: "C" }, { n: 38, answer: "A" }, { n: 39, answer: "H" }, { n: 40, answer: "E" },
        { n: 41, answer: "G" }, { n: 42, answer: "F" }, { n: 43, answer: "B" }
      ]
    },
    { type: "matching", title: "Parte 7 · Multiple matching", marks: 1,
      instructions: "Cuatro críticos hablan de las adaptaciones de novelas al cine. ¿Qué crítico (A–D)…?",
      heading: "From page to screen",
      texts: [
        { label: "A", body: "Critics who complain that a film 'isn't like the book' miss the point entirely. A novel and a film are different creatures, and a director who slavishly reproduces every scene is more likely to produce something lifeless than something true. The real difficulty, in my experience, is that viewers arrive with pictures already formed in their heads, and any departure from those pictures is treated as a betrayal. That weight of expectation can stifle a director's creativity before a single scene has been shot." },
        { label: "B", body: "I will confess that when I first saw the screen version of a novel I had loved since adolescence, I walked out of the cinema furious. Watching it again years later, I realised I had been unfair; it had captured the spirit of the book far better than I had allowed. Occasionally, indeed, the film surpasses its source: one crime thriller I can think of was a fairly ordinary novel but became a genuinely great film. And whatever their merits, adaptations send thousands of viewers back to the original books, which can only be a good thing." },
        { label: "C", body: "The novel's great strength is its ability to take us inside a character's head, and this is precisely what film struggles to reproduce. Too often, directors resort to lengthy voice-overs, which tend to feel clumsy and intrusive, or they simply abandon the inner life of the characters altogether, leaving us with plot and little else. I also worry that, with budgets so large, studios are increasingly unwilling to take risks, preferring safe, simplified versions that will appeal to the widest possible audience." },
        { label: "D", body: "Adapting a novel is rather like translating a poem: something is always lost, and the art lies in deciding what can be sacrificed and what must be preserved at all costs. Some books, though, resist adaptation altogether. Novels whose interest lies chiefly in their style or structure, rather than their story, rarely survive the journey to the screen, however talented the film-maker. In such cases, I would rather the attempt were not made at all." }
      ],
      questions: [
        { n: 44, prompt: "believes that faithfulness to the original is overrated?", answer: "A" },
        { n: 45, prompt: "mentions an adaptation that was better than the novel?", answer: "B" },
        { n: 46, prompt: "is concerned about the influence of financial considerations?", answer: "C" },
        { n: 47, prompt: "thinks some novels are inherently unsuitable for film?", answer: "D" },
        { n: 48, prompt: "feels that audiences' expectations can limit film-makers?", answer: "A" },
        { n: 49, prompt: "values adaptations for encouraging people to read?", answer: "B" },
        { n: 50, prompt: "criticises a particular technique used to convey characters' thoughts?", answer: "C" },
        { n: 51, prompt: "compares adaptation to another creative process?", answer: "D" },
        { n: 52, prompt: "regrets that characters' inner lives are often lost?", answer: "C" },
        { n: 53, prompt: "describes revising an initial opinion of a film?", answer: "B" }
      ]
    }
  ]
},

/* ============================ C1 ADVANCED · 3 ============================ */
{
  id: "c1-rue-3", level: "c1", exam: "C1 Advanced", title: "Reading & Use of English completo · Simulacro 3", minutes: 90, minReport: 142,
  scale: [[0, 120], [0.2, 142], [0.4, 160], [0.6, 180], [0.8, 200], [1, 210]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "The power of walking",
      text: "Walking is so much a part of everyday life that we rarely give it a second {{1}}. Yet a growing body of research suggests that a daily walk may be one of the most effective ways to {{2}} both physical and mental health. Studies have found that people who walk regularly are less {{3}} to suffer from heart disease, and that even a brief stroll can {{4}} a person's mood.\n\nWalking also appears to {{5}} creativity. In one experiment, participants came up with significantly more ideas while walking than when they {{6}} seated. Many famous writers and thinkers, from Dickens to Darwin, were in the {{7}} of taking long daily walks, which they believed helped them {{8}} through problems.",
      gaps: [
        { n: 1, options: ["thought", "idea", "mind", "notion"], answer: 0 },
        { n: 2, options: ["improve", "heal", "cure", "repair"], answer: 0 },
        { n: 3, options: ["likely", "possible", "probable", "able"], answer: 0 },
        { n: 4, options: ["lift", "climb", "rise", "grow"], answer: 0 },
        { n: 5, options: ["boost", "push", "press", "thrust"], answer: 0 },
        { n: 6, options: ["remained", "kept", "stood", "held"], answer: 0 },
        { n: 7, options: ["habit", "custom", "routine", "practice"], answer: 0 },
        { n: 8, options: ["think", "ponder", "reflect", "consider"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "In defence of handwriting",
      text: "In an age of keyboards and touchscreens, it is tempting to regard handwriting {{9}} an outdated skill. However, research suggests that writing {{10}} hand may have benefits that typing cannot match. Students who take notes with a pen tend to remember more, {{11}} because they cannot write fast enough to record everything and must therefore summarise. {{12}} other words, the slowness of handwriting forces the brain to process information more deeply.\n\nThis does not mean that schools should abandon technology altogether, {{13}} it does suggest that handwriting deserves more attention than it currently receives. {{14}} all, a skill that has served humanity for thousands of years should not be discarded simply {{15}} something faster has come {{16}}.",
      gaps: [
        { n: 9, answers: ["as"] }, { n: 10, answers: ["by"] }, { n: 11, answers: ["perhaps", "probably", "possibly", "partly", "presumably"] },
        { n: 12, answers: ["in"] }, { n: 13, answers: ["but", "yet"] }, { n: 14, answers: ["after"] },
        { n: 15, answers: ["because"] }, { n: 16, answers: ["along"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "Giving your time",
      text: "Volunteering is often described as a selfless act, but research suggests that the {{17}} are mutual. People who volunteer regularly report higher levels of life {{18}} and tend to feel more {{19}} to their communities. For young people, volunteering can also be an {{20}} good way to develop new skills, and {{21}} increasingly look for evidence of such activities, particularly when candidates have few formal {{22}}.\n\nHowever, charities warn that volunteers' goodwill should not be taken for granted. {{23}} training can lead to frustration, and volunteers who feel {{24}} are far more likely to give up.",
      gaps: [
        { n: 17, word: "BENEFIT", answers: ["benefits"] },
        { n: 18, word: "SATISFY", answers: ["satisfaction"] },
        { n: 19, word: "CONNECT", answers: ["connected"] },
        { n: 20, word: "EXCEPTION", answers: ["exceptionally"] },
        { n: 21, word: "EMPLOY", answers: ["employers"] },
        { n: 22, word: "QUALIFY", answers: ["qualifications"] },
        { n: 23, word: "ADEQUATE", answers: ["inadequate"] },
        { n: 24, word: "APPRECIATE", answers: ["unappreciated"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 6 palabras.",
      items: [
        { n: 25, first: "It was such a boring film that I fell asleep.", keyword: "SO", before: "The film", after: "I fell asleep.", answers: ["was so boring that", "was so dull that"] },
        { n: 26, first: "I haven't seen Mark for ages.", keyword: "LAST", before: "The", after: "Mark was ages ago.", answers: ["last time i saw"] },
        { n: 27, first: "I strongly advise you to apologise to her.", keyword: "BETTER", before: "You", after: "to her.", answers: ["had better apologise", "'d better apologise", "had better apologize", "'d better apologize"] },
        { n: 28, first: "Someone stole my bike while I was shopping.", keyword: "HAD", before: "I", after: "while I was shopping.", answers: ["had my bike stolen"] },
        { n: 29, first: "Paul regrets not studying harder at school.", keyword: "WISHES", before: "Paul", after: "harder at school.", answers: ["wishes he had studied", "wishes he'd studied", "wishes he had worked", "wishes he'd worked"] },
        { n: 30, first: "They postponed the meeting because the manager was ill.", keyword: "PUT", before: "The meeting", after: "because the manager was ill.", answers: ["was put off", "had been put off", "was put back", "had been put back"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "The four-day week",
      passage: [
        "When a number of companies began experimenting with a four-day working week, many observers predicted that productivity would collapse. Staff would surely achieve less in four days than in five; customers would be left waiting; the whole enterprise would quietly be abandoned. The results of several large trials have proved these predictions largely wrong.",
        "In the majority of participating firms, output remained stable or even rose, while staff reported lower levels of stress and burnout. Absences due to illness fell, and companies found it easier to attract and retain employees. Perhaps most tellingly, the overwhelming majority of firms chose to continue with the arrangement once the trial had ended.",
        "Supporters argue that the explanation is straightforward. Much of the traditional working week, they say, is taken up with low-value activities: unnecessary meetings, constant email and what one researcher memorably called 'performative busyness'. Faced with less time, employees and managers are forced to prioritise, and much of this clutter simply disappears.",
        "Sceptics, however, urge caution. The companies that volunteered for the trials were, almost by definition, those most likely to succeed: often small, office-based firms with enthusiastic leadership. Whether the model would work as well in hospitals, schools or factories, where output is closely tied to hours, is far from clear. There are also concerns that the compressed week may simply intensify work, leaving employees exhausted by Thursday.",
        "What seems beyond dispute is that the experiments have reopened a question that many had assumed was settled. The five-day week is, after all, a relatively recent invention, and there is nothing inevitable about it. Whether or not the four-day week becomes the norm, it has forced employers to ask what their staff are actually doing with their time."
      ],
      questions: [
        { n: 31, prompt: "In the first paragraph, the writer suggests that early predictions about the four-day week were", options: ["based on careful research.", "mostly inaccurate.", "made mainly by employees.", "partly confirmed by the trials."], answer: 1 },
        { n: 32, prompt: "Which result does the writer present as the most significant evidence of the trials' success?", options: ["Output rose in some firms.", "Staff felt less stressed.", "Fewer people took sick leave.", "Most firms kept the arrangement afterwards."], answer: 3 },
        { n: 33, prompt: "What does the phrase 'performative busyness' refer to?", options: ["Work done to impress customers.", "Activity that looks like work but achieves little.", "Stress caused by long working hours.", "Tasks that require a great deal of creativity."], answer: 1 },
        { n: 34, prompt: "What concern do the sceptics raise in the fourth paragraph?", options: ["The trials did not last long enough.", "The companies taking part were not typical.", "Employees were paid less during the trials.", "Managers resisted the changes."], answer: 1 },
        { n: 35, prompt: "The phrase 'leaving employees exhausted by Thursday' suggests that", options: ["the same work may be squeezed into fewer, harder days.", "employees would prefer to have Thursday off.", "the trials ended on a Thursday.", "hospitals cannot adopt the model."], answer: 0 },
        { n: 36, prompt: "What is the writer's conclusion?", options: ["The four-day week will soon become universal.", "The trials have prompted a useful re-examination of working time.", "The five-day week should be abolished.", "The evidence is too weak to draw any conclusions."], answer: 1 }
      ]
    },
    { type: "matching", title: "Parte 6 · Cross-text multiple matching", marks: 2,
      instructions: "Cuatro profesores opinan sobre los deberes escolares. ¿Qué profesor (A–D)…?",
      heading: "Is homework worth it?",
      texts: [
        { label: "A", body: "There is good evidence that, at secondary level, homework makes a real difference to pupils' progress, provided it is purposeful. A carefully designed task that consolidates what was learnt in class is worth far more than an hour of mechanical exercises. For children in their first years of school, though, I see no case for it at all: their time is better spent playing, reading for pleasure and simply being children." },
        { label: "B", body: "Homework undoubtedly helps older pupils to achieve better results, but we should not ignore its cost. I regularly see teenagers who are anxious and exhausted, juggling assignments from several subjects late into the evening. The answer is not more or less homework but better homework: short, focused tasks with a clear purpose. With younger children, a little shared reading at home is valuable, but formal assignments are another matter." },
        { label: "C", body: "Regular homework is one of the most reliable ways to improve attainment, and I have seen it transform the results of many pupils. Concerns about stress are, in my view, overstated; homework builds discipline and independence rather than anxiety. What matters most is consistency and volume: pupils need plenty of practice, and twenty minutes a week simply will not do. That said, I would not set homework for children under eight; it is far too early." },
        { label: "D", body: "The research on homework is far less conclusive than its defenders admit; for many pupils, the link between homework and better results is weak at best. What is clear is the damage it can do to family life and to young people's mental health when it becomes excessive. If we must set it, it should be short, creative and genuinely useful. For younger pupils, encouraging them to read with their parents is worthwhile; anything more seems unnecessary." }
      ],
      questions: [
        { n: 37, prompt: "has a different view from the others on whether homework improves pupils' results?", answer: "D" },
        { n: 38, prompt: "shares A's view on homework for young children?", answer: "C" },
        { n: 39, prompt: "shares B's concern about the effect of homework on pupils' wellbeing?", answer: "D" },
        { n: 40, prompt: "has a different opinion from the others on whether the amount of homework matters more than its design?", answer: "C" }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 7 · Gapped text", marks: 2,
      instructions: "Se han eliminado seis párrafos del artículo. Elige el párrafo (A–G) que encaja en cada hueco. Sobra un párrafo.",
      heading: "My first marathon",
      passage: [
        "I have never been what anyone would call sporty. At school I was the child who 'forgot' her PE kit, and as an adult my exercise consisted mainly of running for buses. So when a colleague suggested that I sign up for a marathon to raise money for a children's charity, I laughed.",
        { gap: 41 },
        "My first training run lasted precisely eleven minutes. I came home red-faced and gasping, and seriously considered emailing the charity to withdraw.",
        { gap: 42 },
        "Over the following months, the running intervals grew longer and the walking breaks shorter. By the spring, I could run for an hour without stopping, something I would once have considered impossible.",
        { gap: 43 },
        "When I started again, I was slower than before and terrified the injury would return. A physiotherapist gave me exercises to strengthen the muscles around the knee, and insisted that I build up gradually.",
        { gap: 44 },
        "On the morning of the marathon, the atmosphere at the start line was electric. Thousands of runners, many in fancy dress, stood shivering in the early light, waiting for the signal.",
        { gap: 45 },
        "What carried me through those final miles was not fitness but the thought of the children the charity supports, and the hundreds of people who had sponsored me.",
        { gap: 46 }
      ],
      options: [
        { label: "A", text: "Not everything went smoothly. In April, a knee injury kept me off my feet for three weeks, and I watched my carefully built fitness drain away while I sat on the sofa with an ice pack." },
        { label: "B", text: "A week later, however, I found myself filling in the application form. The cause was one I cared about deeply, and I had a nagging feeling that if I didn't do something difficult now, I never would." },
        { label: "C", text: "The first half passed in a blur of cheering crowds and brass bands. It was somewhere around the twentieth mile that things became difficult; my legs felt like lead, and every step was an act of will." },
        { label: "D", text: "As a lifelong runner, I had always assumed that a marathon would be the natural next step, and I was looking forward to the challenge." },
        { label: "E", text: "I crossed the line in a little under five hours, which will not trouble any records. But as someone who once couldn't run for eleven minutes, I have never been prouder of anything." },
        { label: "F", text: "Her advice was frustrating at the time, but it almost certainly saved my race. Several of the runners I had met online, who had pushed through similar injuries, ended up unable to start at all." },
        { label: "G", text: "Instead, I downloaded a beginners' plan that started by alternating one minute of running with two of walking. It seemed almost embarrassingly easy, which, I later realised, was exactly the point." }
      ],
      questions: [
        { n: 41, answer: "B" }, { n: 42, answer: "G" }, { n: 43, answer: "A" },
        { n: 44, answer: "F" }, { n: 45, answer: "C" }, { n: 46, answer: "E" }
      ]
    },
    { type: "matching", title: "Parte 8 · Multiple matching", marks: 1,
      instructions: "Cuatro adultos hablan de aprender a tocar un instrumento. ¿Qué persona (A–D)…?",
      heading: "Never too late to play",
      texts: [
        { label: "A", heading: "Martin, piano", body: "It was my daughter who finally persuaded me to start. She'd been having lessons for a couple of years and kept telling me that it was never too late. I'm not especially talented, but I've found that half an hour at the piano at the end of a working day does wonders for my stress levels. Whatever has been going on at work just melts away." },
        { label: "B", heading: "Claire, violin", body: "I'd played the violin until I was about twelve and then gave it up, so I assumed I'd pick it up again in no time. I couldn't have been more wrong; it took months before I was producing anything other than painful scratching. I'm still embarrassed to practise when my neighbours are at home, so I tend to wait until they've gone out." },
        { label: "C", heading: "Raj, guitar", body: "My first mistake was buying a very expensive guitar before I knew whether I'd stick with it, which in hindsight was rather foolish. I tried lessons with a local teacher but, to be honest, I've learnt far more from video tutorials, which I can pause and repeat as often as I like. The real problem is fitting practice around work and two small children." },
        { label: "D", heading: "Lucía, cello", body: "I heard a recording of Bach's cello suites on the radio and decided there and then that I had to learn to play them. I knew it would take years, and it has. But I've joined an amateur orchestra, and we give concerts twice a year in local churches. Playing in front of an audience still terrifies me, but it's a wonderful feeling." }
      ],
      questions: [
        { n: 47, prompt: "found that progress was slower than they had expected?", answer: "B" },
        { n: 48, prompt: "was encouraged to start by a family member?", answer: "A" },
        { n: 49, prompt: "has found online resources more useful than a teacher?", answer: "C" },
        { n: 50, prompt: "now performs in public?", answer: "D" },
        { n: 51, prompt: "had learnt the instrument as a child?", answer: "B" },
        { n: 52, prompt: "finds it difficult to make time to practise?", answer: "C" },
        { n: 53, prompt: "says that playing helps them to relax?", answer: "A" },
        { n: 54, prompt: "was inspired by a particular piece of music?", answer: "D" },
        { n: 55, prompt: "feels self-conscious about being heard practising?", answer: "B" },
        { n: 56, prompt: "admits to spending money unwisely?", answer: "C" }
      ]
    }
  ]
},

/* =========================== C2 PROFICIENCY · 3 =========================== */
{
  id: "c2-rue-3", level: "c2", exam: "C2 Proficiency", title: "Reading & Use of English completo · Simulacro 3", minutes: 90, minReport: 162,
  scale: [[0, 130], [0.3, 162], [0.45, 180], [0.6, 200], [0.75, 213], [0.85, 220], [1, 230]],
  parts: [
    { type: "mcCloze", title: "Parte 1 · Multiple-choice cloze", marks: 1,
      instructions: "Elige la palabra (A, B, C o D) que mejor completa cada hueco.",
      heading: "Bringing back the mammoth",
      text: "Scientists are now closer than ever to bringing extinct species back to life, a prospect that until recently {{1}} firmly in the realm of science fiction. Advocates argue that resurrecting animals such as the woolly mammoth could help restore damaged ecosystems and {{2}} amends for the harm humans have caused. Critics, however, are quick to {{3}} out that the money might be better spent protecting species that are still alive. There is also the question of whether a resurrected animal would truly be the same species or merely a {{4}} imitation.\n\nBeyond the practical objections {{5}} deeper ethical concerns. Some philosophers warn that the promise of de-extinction could {{6}} public support for conservation, by suggesting that extinction is no longer {{7}}. Others counter that such fears are overblown, and that the research is likely to {{8}} valuable insights into genetics regardless of its outcome.",
      gaps: [
        { n: 1, options: ["lay", "stood", "stayed", "set"], answer: 0 },
        { n: 2, options: ["make", "do", "take", "give"], answer: 0 },
        { n: 3, options: ["point", "bring", "set", "call"], answer: 0 },
        { n: 4, options: ["pale", "faint", "weak", "dim"], answer: 0 },
        { n: 5, options: ["lie", "stay", "rest", "dwell"], answer: 0 },
        { n: 6, options: ["erode", "wear", "wash", "waste"], answer: 0 },
        { n: 7, options: ["permanent", "perpetual", "everlasting", "eternal"], answer: 0 },
        { n: 8, options: ["yield", "grant", "bear", "hand"], answer: 0 }
      ]
    },
    { type: "openCloze", title: "Parte 2 · Open cloze", marks: 1,
      instructions: "Escribe una sola palabra en cada hueco.",
      heading: "In praise of the comma",
      text: "Few punctuation marks inspire {{9}} much passion as the humble comma. Misplace one, and the meaning of a sentence can change entirely; omit one, and a list can become {{10}} more than a muddle. Yet for {{11}} its importance, there is surprisingly little agreement on how commas should be used. Style guides differ, editors disagree, and writers tend to rely {{12}} instinct as much as on rules.\n\n{{13}} this suggests is that punctuation is less a matter of strict law than of judgement. A comma, after {{14}}, exists to help the reader, and {{15}} helps one reader may confuse another. Good writers, therefore, punctuate not by rote but with their audience firmly {{16}} mind.",
      gaps: [
        { n: 9, answers: ["as", "so"] }, { n: 10, answers: ["little", "nothing", "no"] }, { n: 11, answers: ["all"] },
        { n: 12, answers: ["on", "upon"] }, { n: 13, answers: ["what"] }, { n: 14, answers: ["all"] },
        { n: 15, answers: ["what", "whatever"] }, { n: 16, answers: ["in"] }
      ]
    },
    { type: "wordForm", title: "Parte 3 · Word formation", marks: 1,
      instructions: "Forma una palabra a partir de la que aparece en mayúsculas para completar cada hueco.",
      heading: "Bored at work",
      text: "Workplace boredom is a widespread but rarely discussed source of {{17}}. Employees who are chronically bored become {{18}} and are more likely to leave. Boredom tends to arise when work is {{19}} and {{20}}, offering little challenge.\n\nIts costs are considerable: lost {{21}}, higher staff turnover and a decline in {{22}}. {{23}}, some researchers argue that short periods of boredom can be beneficial, prompting people to seek new challenges. The real danger lies in boredom that goes {{24}} by managers for months or even years.",
      gaps: [
        { n: 17, word: "SATISFY", answers: ["dissatisfaction"] },
        { n: 18, word: "MOTIVE", answers: ["demotivated", "unmotivated"] },
        { n: 19, word: "PREDICT", answers: ["predictable"] },
        { n: 20, word: "REPEAT", answers: ["repetitive"] },
        { n: 21, word: "PRODUCT", answers: ["productivity"] },
        { n: 22, word: "CREATE", answers: ["creativity"] },
        { n: 23, word: "SURPRISE", answers: ["surprisingly"] },
        { n: 24, word: "ACKNOWLEDGE", answers: ["unacknowledged"] }
      ]
    },
    { type: "kwt", title: "Parte 4 · Key word transformations", marks: 2,
      instructions: "Completa la segunda frase para que signifique lo mismo que la primera. Usa la palabra dada sin cambiarla y entre 3 y 8 palabras.",
      items: [
        { n: 25, first: "The success of the project was entirely due to her efforts.", keyword: "CREDIT", before: "She", after: "the success of the project.", answers: ["deserves all the credit for", "deserves full credit for", "deserves the credit for", "should be given all the credit for", "should get all the credit for"] },
        { n: 26, first: "I had no idea that he was planning to leave.", keyword: "LITTLE", before: "", after: "that he was planning to leave.", answers: ["little did i know", "little did i realise", "little did i realize", "little did i suspect"] },
        { n: 27, first: "We couldn't have finished without your help.", keyword: "BEEN", before: "Had", after: "your help, we couldn't have finished.", answers: ["it not been for"] },
        { n: 28, first: "It doesn't matter how hard you try; you won't convince her.", keyword: "HOWEVER", before: "", after: ", you won't convince her.", answers: ["however hard you try", "however much you try"] },
        { n: 29, first: "The government's decision was severely criticised.", keyword: "CAME", before: "The government's decision", after: "criticism.", answers: ["came in for severe", "came in for heavy", "came under severe", "came under heavy", "came in for a lot of", "came in for a great deal of", "came under a lot of"] },
        { n: 30, first: "They are unlikely to accept the offer.", keyword: "CHANCES", before: "The", after: "accept the offer are slim.", answers: ["chances that they will", "chances that they'll", "chances of them being willing to"] }
      ]
    },
    { type: "readingMC", title: "Parte 5 · Multiple choice", marks: 2,
      instructions: "Lee el texto y elige la respuesta (A, B, C o D) que mejor se ajusta a lo que dice.",
      heading: "The case for slow reading",
      passage: [
        "Reading, we are often told, is in crisis. Attention spans are shrinking, screens are displacing books, and the capacity for sustained concentration is said to be withering. There is some truth in these claims, but they tend to obscure a more interesting shift: not that we read less, but that we read differently, skimming and scanning rather than dwelling.",
        "This is not entirely new. Readers have always varied their pace to suit their purpose, and nobody reads a railway timetable as they would a sonnet. What has changed is the balance. Much of our reading now takes place on devices designed to keep us moving on, and the habits formed there seep into the way we approach longer, more demanding texts.",
        "Advocates of what has been called 'slow reading' argue that something important is at stake. Certain kinds of understanding, they contend, emerge only through patient attention: the ability to follow a complex argument, to notice ambiguity, to enter imaginatively into another person's experience. These are not luxuries but capacities on which democratic debate and empathy depend.",
        "Their critics accuse them of nostalgia, and of mistaking a change in reading habits for a decline. Skimming, they point out, is itself a skill, and an essential one in an age of information overload. Besides, the golden age of deep reading that slow-reading advocates seem to mourn was always confined to a small, privileged minority.",
        "Both sides have a point, and the most persuasive position may lie somewhere between them. The aim need not be to renounce speed, but to cultivate the ability to switch between modes of reading as the occasion demands. That, perhaps, is the real challenge for schools: not to protect children from screens, but to ensure they also learn to slow down."
      ],
      questions: [
        { n: 31, prompt: "In the first paragraph, the writer suggests that claims about a reading crisis", options: ["are entirely unfounded.", "overlook a change in the way people read.", "are supported by strong evidence.", "exaggerate the fall in book sales."], answer: 1 },
        { n: 32, prompt: "The reference to 'a railway timetable' and 'a sonnet' illustrates that", options: ["poetry is harder to read than practical texts.", "readers have always adapted their approach to the text.", "people now read less poetry than before.", "most digital texts are practical in nature."], answer: 1 },
        { n: 33, prompt: "According to the second paragraph, digital devices affect reading by", options: ["making texts shorter.", "encouraging habits that carry over into other reading.", "reducing the overall amount people read.", "replacing printed books entirely."], answer: 1 },
        { n: 34, prompt: "Slow-reading advocates believe that deep reading", options: ["is above all a pleasurable pastime.", "underpins important social and personal abilities.", "should replace digital reading altogether.", "was more widespread in the past."], answer: 1 },
        { n: 35, prompt: "What point do the critics make in the fourth paragraph?", options: ["Deep reading was never widespread.", "Skimming damages understanding.", "Schools have neglected reading.", "Screens improve concentration."], answer: 0 },
        { n: 36, prompt: "What does the writer conclude?", options: ["Children should be kept away from screens.", "Fast reading is now more valuable than slow reading.", "Readers should learn to adapt their reading to the situation.", "The debate cannot be resolved."], answer: 2 }
      ]
    },
    { type: "matching", gapped: true, title: "Parte 6 · Gapped text", marks: 2,
      instructions: "Se han eliminado siete párrafos del artículo. Elige el párrafo (A–H) que encaja en cada hueco. Sobra un párrafo.",
      heading: "Eight hundred kilometres on foot",
      passage: [
        "I had walked a fair amount before, but never for more than a day or two at a time. So setting out to walk the eight hundred kilometres of the Camino Francés, from the French Pyrenees to Santiago de Compostela, was, I knew, a considerable leap.",
        { gap: 37 },
        "The first day, crossing the Pyrenees, was brutal. The path climbs steeply for hours, and by the time I reached the monastery at Roncesvalles, my legs were trembling and my shoulders ached from the weight of my pack.",
        { gap: 38 },
        "In the weeks that followed, a rhythm established itself: walk, eat, wash clothes, sleep. The simplicity of it was, at first, almost disorienting.",
        { gap: 39 },
        "Then there were the other pilgrims. People who would never have spoken to each other at home walked side by side for days, sharing food, blisters and, increasingly, confidences.",
        { gap: 40 },
        "Not every stage was memorable. The long, flat plain of the Meseta, which some pilgrims skip by taking a bus, tested my resolve more than any mountain.",
        { gap: 41 },
        "When I finally walked into the cathedral square in Santiago, I expected to feel triumphant. Instead, I felt strangely flat.",
        { gap: 42 },
        "In the years since, I have often been asked whether I would do it again.",
        { gap: 43 }
      ],
      options: [
        { label: "A", text: "That evening, I removed almost a third of the contents of my rucksack and posted them home. It was the first of many lessons in how little one actually needs." },
        { label: "B", text: "My answer is always the same: not yet. Some experiences, I suspect, need time to settle before they can be repeated, and I am not sure this one has finished settling." },
        { label: "C", text: "I walked for almost a week with a retired Dutch engineer and a young Korean woman who had quit her job in a bank. We had almost nothing in common, and yet by the end we were confiding things we had told no one else." },
        { label: "D", text: "Having walked the route twice before, I knew exactly what to expect, and was determined to do it faster this time." },
        { label: "E", text: "It took me some time to understand why. The arrival, I realised, had never been the point; it was the walking itself that mattered, and now it was over." },
        { label: "F", text: "My reasons for going were, I confess, rather vague. I was not religious, and I had no particular crisis to resolve; I simply had a month free between jobs and a sense that I ought to do something with it." },
        { label: "G", text: "Day after day, the same straight track stretched to the horizon under a pitiless sun. Yet it was there, oddly, that I did most of my thinking, and where some of the decisions that have since shaped my life began to take form." },
        { label: "H", text: "Gradually, though, the absence of choice began to feel less like a deprivation than a relief. Without the constant small decisions that fill ordinary life, my mind had space to wander." }
      ],
      questions: [
        { n: 37, answer: "F" }, { n: 38, answer: "A" }, { n: 39, answer: "H" }, { n: 40, answer: "C" },
        { n: 41, answer: "G" }, { n: 42, answer: "E" }, { n: 43, answer: "B" }
      ]
    },
    { type: "matching", title: "Parte 7 · Multiple matching", marks: 1,
      instructions: "Cuatro científicos explican qué les llevó a la ciencia. ¿Qué científico (A–D)…?",
      heading: "Why I became a scientist",
      texts: [
        { label: "A", heading: "An astronomer", body: "When I was eight, my grandfather took me out into a field far from any town lights, and I saw the Milky Way for the first time. I remember being almost frightened by it. A few years later, I read Carl Sagan's Cosmos, and that settled it. What astronomy has given me, more than anything, is a sense of proportion: it's hard to get too worked up about small irritations when you spend your days thinking about galaxies." },
        { label: "B", heading: "A chemist", body: "My chemistry teacher at school told me, quite bluntly, that I didn't have the mind for science and should concentrate on languages. I was furious, and I suspect that fury drove me for years. If I'm honest, I've always been fairly competitive; there's a part of me that wants to solve a problem before anyone else does, and I don't think that's necessarily a bad thing." },
        { label: "C", heading: "A biologist", body: "I started out as a physicist, but halfway through my doctorate I realised that the questions that really fascinated me were biological, so I switched to studying how cells move. It was a difficult transition, but I've never regretted it. What I love most is that modern research is so collaborative; my best ideas have come out of conversations with colleagues from completely different disciplines. I do wish, though, that the pressure to publish constantly weren't so intense." },
        { label: "D", heading: "A geologist", body: "Most of what I do doesn't work. Experiments fail, samples turn out to be contaminated, theories collapse, and you learn to treat that as part of the process rather than a personal defeat. I also feel strongly that we scientists need to get out of our laboratories and explain what we do to the public. Too many people have no idea how science actually works, and that makes them vulnerable to misinformation." }
      ],
      questions: [
        { n: 44, prompt: "was told by a teacher that they were not suited to science?", answer: "B" },
        { n: 45, prompt: "describes a childhood experience that sparked their interest?", answer: "A" },
        { n: 46, prompt: "believes scientists should communicate more with the public?", answer: "D" },
        { n: 47, prompt: "moved from one scientific field to another?", answer: "C" },
        { n: 48, prompt: "particularly values working with people from other fields?", answer: "C" },
        { n: 49, prompt: "admits to being driven partly by a desire to beat others?", answer: "B" },
        { n: 50, prompt: "says that setbacks are a normal part of their work?", answer: "D" },
        { n: 51, prompt: "was influenced by a book?", answer: "A" },
        { n: 52, prompt: "criticises an aspect of the way research careers work?", answer: "C" },
        { n: 53, prompt: "says their work has changed how they view everyday problems?", answer: "A" }
      ]
    }
  ]
}

];
IDIOMA.mockById = id => IDIOMA.mocks.find(m => m.id === id);
