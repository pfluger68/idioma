/* Simulacros de examen (Reading & Use of English, partes 1–5).
   Los textos usan {{n}} para marcar el hueco número n.
   Tipos de parte: mcCloze, openCloze, wordForm, kwt, readingMC. */
window.IDIOMA = window.IDIOMA || {};
IDIOMA.mocks = [

/* ============================ C1 ADVANCED ============================ */
{
  id: "c1-rue-1", level: "c1", exam: "C1 Advanced", title: "Reading & Use of English · Simulacro 1", minutes: 45, minReport: 142,
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
    }
  ]
},

/* =========================== C2 PROFICIENCY =========================== */
{
  id: "c2-rue-1", level: "c2", exam: "C2 Proficiency", title: "Reading & Use of English · Simulacro 1", minutes: 50, minReport: 162,
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
    }
  ]
}
];
IDIOMA.mockById = id => IDIOMA.mocks.find(m => m.id === id);
