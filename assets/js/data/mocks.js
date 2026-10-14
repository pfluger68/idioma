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
}
];
IDIOMA.mockById = id => IDIOMA.mocks.find(m => m.id === id);
