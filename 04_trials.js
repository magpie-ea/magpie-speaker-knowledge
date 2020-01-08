const practice_trial_info = [
    {context: `This is | the | first | example paragraph.`,
     trigger: `Parts of | each sentence | appear | one | at | a | time.`,
     continuation: `You | will | see two | more | examples for | practice.`,
     question: "Will you see two more examples?",
     option1: "yes",
     option2: "no",
    },
    {context: `This | is | the second | example | paragraph.`,
     trigger: `You | will | see | one more example | for practice.`,
     continuation: `The | next will | be the | last | example.`,
     question: "Will you see two more examples?",
     option1: "yes",
     option2: "no"
    },
    {context: `This | is | the | third | example | paragraph.`,
     trigger: `It | is | also | the | final | example.`,
     continuation: `You | will | not | see | any | more | examples | for | practice.`,
     question: "Will you see more examples?",
     option1: "yes",
     option2: "no"
    }
]

let raw_trial_info = [
    {
        ID: 1,
	      context: {
	          full: `I carefully inspected | the new | shipment of jewelry.`,
	          partial: `I helped unload | the new | shipment of jewelry.`,
	      },
        context_length: {
	          full: 8,      // number of words in full context condition
	          partial: 8,   // number of words in partial context condition
	      },
	      trigger: {
	          scalar: `Some of | the gold | watches were | fakes.`,
	          focused: `Only | some of | the gold | watches were | fakes.`,
	      },
        trigger_length: {
	          scalar: 7,      // number of words in scalar trigger sentence
	          focused: 8,     // number of words in focused trigger sentence
	      },
	      continuation: {
	          complement: `The rest | were real, | but the | company is still | planning | to sue.`,
	          cancelation: `In fact, | they all | were, | so the | company is | planning | to sue.`,
	      },
      	question: `Did the new shipment of jewelery contain gold watches that were fake?`,
      	correct: "yes"
    },
    {
        ID: 2,
      	context: {
      	    full: `Before the | hurricane landed, | I checked every | house | in town.`,
      	    partial: `Before the | hurricane landed, | I volunteered | to help out | in town.`,
      	},
        context_length: {
            full: 10,
            partial: 11,
        },
      	trigger: {
      	    scalar:`Some of | the residents | had evacuated.`,
      	    focused: `Only | some of | the residents | had evacuated.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The rest | stayed at home | and foolishly | risked their | lives.`,
      	    cancelation: `In fact, | they all | did | and, | as a result, | they survived | the storm.`,
      	},
      	question: `Were all of the residents in their town when the hurricane landed?`,
	      correct: "no"
    },
    {
        ID: 3,
      	context: {
      	    full: `This morning, | I took | attendance | at an | important meeting | with the manager.`,
      	    partial: `This morning, | I heard | about an | important meeting | with the manager.`,
      	},
        context_length: {
            full: 12,
            partial: 11,
        },
      	trigger: {
      	    scalar: `Some of | the company’s | accountants were | there.`,
      	    focused: `Only | some of | the company’s | accountants were | there.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The rest | were missing | because they | had to audit | the company’s finances | before | the end of | the quarter.`,
      	    cancelation: `In fact, | they all | were | in order to | communicate | how budget cutbacks | were crippling | their division.`,
      	},
      	question: `Did the manager have a meeting with any of the accountants?`,
	      correct: "yes"
    },
    {
        ID: 4,
      	context: {
      	    full: `I was | the chief medic | overseeing | the bus accident | on the side | of the | highway.`,
      	    partial: `I stopped | to see | if | I could help | with the | bus accident | on the side | of the highway.`,
      	},
        context_length: {
            full: 15,
            partial: 18,
        },
      	trigger: {
      	    scalar: `Some of | the passengers | were still | alive.`,
      	    focused: `Only | some of | the passengers | were still | alive.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The others | were killed | on impact | and there | was no | opportunity to | save them.`,
      	    cancelation: `In fact, | they all | were | and none | were critically injured.`,
      	},
      	question: `Did any passenger survive the bus accident on the highway?`,
	      correct: "yes"
    },
    {
        ID: 5,
      	context: {
      	    full: `At my client’s request, | I | meticulously compiled | the investment report.`,
      	    partial: `At my client’s request, | I | skimmed | the investment report.`,
      	},
        context_length: {
            full: 10,
            partial: 9,
        },
      	trigger: {
      	    scalar: `Some of | the real estate | investments lost | money.`,
      	    focused: `Only | some of | the real estate | investments lost | money.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The others | were successful | despite the | recent economic | downturn.`,
      	    cancelation: `In fact, | they all | did | because of the | recent economic | downturn.`,
      	},
      	question: `Did all real estate investments increase in value in spite an the economic downturn?`,
	      correct: "no"
    },
    {
        ID: 6,
      	context: {
      	    full: `As the | office’s main technician, | I had | to check | each computer | for | the dangerous | new virus.`,
      	    partial: `As the | office’s main technician, | I had | been alerted | to | the dangerous | new virus.`,
      	},
        context_length: {
            full: 16,
            partial: 14,
        },
      	trigger: {
      	    scalar: `Some of | our computers | were infected.`,
      	    focused: `Only | some of | our computers | were infected.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The rest | were clean | because their | owners had | been very | cautious.`,
      	    cancelation: `In fact, | they all | were | and the | virus nearly | destroyed the | whole system.`,
      	},
      	question: `Has there been damaging software on any computers at the office?`,
	      correct: "yes"
    },
    {
        ID: 7,
      	context: {
      	    full: `Earlier today, | I was | leading | a small | group of tourists | around the sights | downtown.`,
      	    partial: `Earlier today, | I passed | by a group of tourists | looking at sights | downtown.`,
      	},
        context_length: {
            full: 14,
            partial: 13,
        },
      	trigger: {
      	    scalar: `Some of | the tourists | got soaked | by the | rain storm.`,
      	    focused: `Only | some of | the tourists | got soaked | by the | rain storm.`,
      	},
        trigger_length: {
            scalar: 10,
            focused: 11,
        },
      	continuation: {
      	    complement: `The rest | were dry | because they | had remembered | their umbrellas.`,
      	    cancelation: `In fact, | they all | did | because they | had forgotten | their umbrellas.`,
      	},
      	question: `Have all tourists managed to stay dry during the rainstorm?`,
	      correct: "no"
    },
    {
        ID: 8,
      	context: {
      	    full: `After | the furniture sale, | I catalogued | all the merchandise | in the store.`,
      	    partial: `After | the furniture sale, | I closed down | and | locked up | the store.`,
      	},
        context_length: {
            full: 12,
            partial: 12,
        },
      	trigger: {
      	    scalar: `Some of | the leather | couches had | been sold.`,
      	    focused: `Only | some of | the leather | couches had | been sold.`,
      	},
        trigger_length: {
            scalar: 8,
            focused: 9,
        },
      	continuation: {
      	    complement: `The rest | were going | to be | stored in | the warehouse | until the | following season.`,
      	    cancelation: `In fact, | they all | had | since they | were stylish | and cheap.`,
      	},
      	question: `Had all of the leather couches been sold out before the furniture sale?`,
	      correct: "no"
    },
    {
        ID: 9,
      	context: {
      	    full: `Last week, | I tasted | every dish | at | a family potluck.`,
      	    partial: `Last week, | I attended | a family potluck.`,
      	},
        context_length: {
            full: 10,
            partial: 7,
        },
      	trigger: {
      	    scalar: `Some of | the dishes | were spicy.`,
      	    focused: `Only | some of | the dishes | were spicy.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The rest | were mild | and I | found them | to be | bland.`,
      	    cancelation: `In fact, | they all | were | but fortunately | I love | spicy food.`,
      	},
      	question: `Have there been spicy dishes at the family potluck?`,
	      correct: "yes"
    },
    {
        ID: 10,
        context: {
      	    full: `When I | entered Disney World, | I asked | about the status | of each | of the rides.`,
      	    partial: `When I | visited Disney World, | I quickly | walked around | the amusement park.`,
      	},
        context_length: {
            full: 15,
            partial: 12,
        },
      	trigger: {
      	    scalar: `Some of | my favorite | rides were | still running.`,
      	    focused: `Only | some of | my favorite | rides were | still running.`,
      	},
        trigger_length: {
            scalar: 8,
            focused: 9,
        },
      	continuation: {
      	    complement: `The rest | were shut down | since they | were no | longer popular.`,
      	    cancelation: `In fact, | they all | were | since they | were still | popular.`,
      	},
      	question: `Had all of my favorite rides at Disney World been closed?`,
	      correct: "no"
    },
    {
        ID: 11,
      	context: {
      	    full: `After | my house | was burglarized, | I carefully | inventoried | my wine collection.`,
      	    partial: `After | my house | was burglarized, | I briefly | checked | the basement.`,
      	},
        context_length: {
            full: 11,
            partial: 10,
        },
      	trigger: {
      	    scalar: `Some of | the bottles | of Chardonnay | were missing.`,
      	    focused: `Only | some of | the bottles | of Chardonnay | were missing.`,
      	},
        trigger_length: {
            scalar: 8,
            focused: 9,
        },
      	continuation: {
      	    complement: `The rest | were safe | but I | was still | extremely upset.`,
      	    cancelation: `In fact, | they all | were | even though | I had | secured them.`,
      	},
      	question: `Were all of my bottles of wine safe in the basement?`,
	      correct: "no"
    },
    {
        ID: 12,
      	context: {
      	    full: `While working | in the | veterinary clinic, | I | closely examined | the mouth | of a large | bulldog.`,
      	    partial: `While working | in the | veterinary clinic, | I | caught a glimpse | of a large | bulldog.`,
      	},
        context_length: {
            full: 15,
            partial: 14,
        },
      	trigger: {
      	    scalar: `Some of | the dog’s | teeth were | missing.`,
      	    focused: `Only | some of | the dog’s | teeth were | missing.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The rest | were intact | so it | should still | be able | to eat | solid food.`,
      	    cancelation: `In fact, | they all | were | because its | owners completely | neglected its | oral hygiene.`,
      	},
      	question: `Was there a dog in the veterinary clinic?`,
	      correct: "yes"
    },
    {
        ID: 13,
      	context: {
      	    full: `In the | school parking lot, | I carefully | inspected | an old bus.`,
      	    partial: `In the | school parking lot, | I passed by | an old bus.`,
      	},
        context_length: {
            full: 11,
            partial: 11,
        },
      	trigger: {
      	    scalar: `Some of | its tires | were flat.`,
      	    focused: `Only | some of | its tires | were flat.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The others | were fine | so it | would not | cost too | much to | fix it.`,
      	    cancelation: `In fact, | they all | were | so the | cost to | repair it | would be enormous.`,
      	},
      	question: `Did the old bus have flat tires?`,
	      correct: "yes"
    },
    {
        ID: 14,
      	context: {
      	    full: `To check | on the progress | of my research, | I | meticulously recorded | the results of | the experiments.`,
      	    partial: `To check | on the progress | of my research, | I | quickly scanned | the experiments | in the lab.`,
      	},
        context_length: {
            full: 16,
            partial: 16,
        },
      	trigger: {
      	    scalar: `Some of | my predictions | were correct.`,
      	    focused: `Only | some of | my predictions | were correct.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The rest | were wrong | so my | theory must | be mistaken.`,
      	    cancelation: `In fact, | they all | were | so I | should be | able to | publish the results.`,
      	},
      	question: `Were any of my predictions confirmed by my research?`,
	      correct: "yes"
    },
    {
        ID: 15,
      	context: {
      	    full: `When they returned, | I reviewed | each of the | receipts | for my family’s trip | to Europe.`,
      	    partial: `When they returned, | my family | told me | about their trip | to Europe.`,
      	},
        context_length: {
            full: 15,
            partial: 12,
        },
      	trigger: {
      	    scalar: `Some of | their hotels | were expensive.`,
      	    focused: `Only | some of | their hotels | were expensive.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The rest | were cheap | despite my | family’s love | for luxurious holidays.`,
      	    cancelation: `In fact, | they all | were | because my | family loves | luxurious holidays.`,
      	},
      	question: `Did my family save money by entirely avoiding expensive hotels?`,
	      correct: "no"
    },
    {
        ID: 16,
      	context: {
      	    full: `After | the babysitter | left, | I carefully | examined | my liquor collection.`,
      	    partial: `After | the babysitter | left, | I went | to my liquor collection | and made | a drink.`,
      	},
        context_length: {
            full: 10,
            partial: 14,
        },
      	trigger: {
      	    scalar: `Some of | my new | bottles of | vodka were | opened.`,
      	    focused: `Only | some of | my new | bottles of | vodka were | opened.`,
      	},
        trigger_length: {
            scalar: 9,
            focused: 10,
        },
      	continuation: {
      	    complement: `The others | were untouched, | but I | was still | concerned and | decided to | call her | parents.`,
      	    cancelation: `In fact, | they all | were | but I | decided not | to call | her parents | because it | was so | hard to | find a | babysitter.`,
      	},
      	question: `Have all new bottles of vodka been untouched?`,
	      correct: "no"
    },
    {
        ID: 17,
      	context: {
      	    full: `I examined | the damage | after I dropped | a bowling ball | down the stairs.`,
      	    partial: `I heard that | my friend dropped | a bowling ball | down the stairs.`,
      	},
        context_length: {
            full: 13,
            partial: 12,
        },
      	trigger: {
      	    scalar: `Some of | the steps | were damaged.`,
      	    focused: `Only | some of | the steps | were damaged.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The others | were fine | so the | repairs shouldn’t be | too expensive.`,
      	    cancelation: `In fact, | they all | were | so they | will require | extensive repairs.`,
      	},
      	question: `Do any of the steps have to be repaired due to a dropped bowling ball?`,
	      correct: "yes"
    },
    {
        ID: 18,
      	context: {
      	    full: `At a friend’s suggestion, | I completely | worked through | an entire | math textbook.`,
      	    partial: `At a friend’s suggestion, | I read | a review | of a new | math textbook.`,
      	},
        context_length: {
            full: 12,
            partial: 13,
        },
      	trigger: {
      	    scalar: `Some of | its problems | were difficult.`,
      	    focused: `Only | some of | its problems | were difficult.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The others | were straightforward | and I | feel like | I learned | a lot.`,
      	    cancelation: `In fact, | they all | were | but it | received a | positive review anyway.`,
      	},
      	question: `Have there been difficult problems within the textbook?`,
        correct: "yes"
    },
    {
        ID: 19,
      	context: {
      	    full: `To keep | the laboratory | well stocked, | I | write down | exactly | how much | of the chemicals | are used | every night.`,
      	    partial: `To keep | the laboratory | well stocked, | I | occasionally | look at | which chemicals | are being used.`,
      	},
        context_length: {
            full: 19,
            partial: 15,
        },
      	trigger: {
      	    scalar: `Today, | some of | the liquid | nitrogen containers | needed to | be refilled.`,
      	    focused: `Today, | only | some of | the liquid | nitrogen containers | needed to | be refilled.`,
      	},
        trigger_length: {
            scalar: 11,
            focused: 12,
        },
      	continuation: {
      	    complement: `The others | were normal | but I | decided to | order more anyway.`,
      	    cancelation: `In fact, | they all | did | which confused | me because | we hadn’t | used a | lot this morning.`,
      	},
      	question: `Have all liquid nitrogen containers been full?`,
      	correct: "no"
    },
    {
        ID: 20,
      	context: {
      	    full: `The | PTA | picked me | to organize | every | award | for the assembly | at my daughter’s | school.`,
      	    partial: `My | daughter | told me | about the | awards assembly | at her | school.`,
      	},
        context_length: {
            full: 15,
            partial: 11,
        },
      	trigger: {
      	    scalar: `Some of | the honors | students received | prizes.`,
      	    focused: `Only | some of | the honors | students received | prizes.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The others | were not | invited to | attend because | the teachers | didn’t want | anyone to | feel left out.`,
      	    cancelation: `In fact, | they all | did | because the | teachers didn’t | want any | of them | to feel | left out.`,
      	},
      	question: `Have there been honors students at the assembly?`,
      	correct: "yes"
    },
    {
        ID: 21,
      	context: {
      	    full: `As | the new librarian, | it was | my responsibility | to catalog | every book | in the reference section.`,
      	    partial: `The librarian | told me | about | how annoying | it was | to reorganize | the reference section.`,
      	},
        context_length: {
            full: 16,
            partial: 14,
        },
      	trigger: {
      	    scalar: `Some of | the dictionaries | were labeled | incorrectly.`,
      	    focused: `Only | some of | the dictionaries | were labeled | incorrectly.`,
      	},
        trigger_length: {
            scalar: 7,
            focused: 8,
        },
      	continuation: {
      	    complement: `The others | were labeled | appropriately though | a few | of them | had been | shelved in | the wrong place.`,
      	    cancelation: `In fact, | they all | were | which made | his job | much more difficult.`,
      	},
      	question: `Had all of the dictionaries at the library been labeled correctly?`,
        correct: "no"
    },
    {
        ID: 22,
      	context: {
      	    full: `I | am a | huge fan | of my old | high school football team | and attended | every game | last season.`,
      	    partial: `I | ran | into a | friend | who started | telling how | my old | high school football team | did | last season.`,
      	},
        context_length: {
            full: 17,
            partial: 17,
        },
      	trigger: {
      	    scalar: `Some of | their losses | were close.`,
      	    focused: `Only | some of | their losses | were close.`,
      	},
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The others | were blowouts | which made | the games | boring to watch.`,
      	    cancelation: `In fact, | they all | were | which made | the games | stressful to watch.`,
      	},
      	question: `Did the football team win each of their matches?`,
        correct: "no"
    },
    {
        ID: 23,
      	context: {
      	    full: `To prepare | for my Spanish test, | I spent hours | studying | the new | vocabulary items.`,
      	    partial: `I had | little time | to prepare | for my Spanish test | so I | quickly glanced at | the new | vocabulary items.`,
      	},
        context_length: {
            full: 14,
            partial: 19,
        },
      	trigger: {
      	    scalar: `Some of | the words | sounded like | they do | in English.`,
      	    focused: `Only | some of | the words | sounded like | they do | in English.`,
      	},
        trigger_length: {
            scalar: 10,
            focused: 11,
        },
      	continuation: {
      	    complement: `The others | were totally | unfamiliar which | made the | test somewhat challenging.`,
      	    cancelation: `In fact, | they all | did | which made | the test | somewhat easier.`,
      	},
      	question: `Do any Spanish vocabulary items have similarities with English words?`,
	      correct: "yes"
    },
    {
        ID: 24,
      	context: {
      	    full: `While | eating breakfast, | I | had lots of time | to pore over | the stock prices | from yesterday.`,
      	    partial: `While | eating breakfast, | I | had little time | to skim | the stock prices | from yesterday.`,
      	},
        context_length: {
            full: 16,
            partial: 14,
        },
      	trigger: {
        		scalar: `Some of | my stocks | went up.`,
        		focused: `Only | some of | my stocks | went up.`,
        },
        trigger_length: {
            scalar: 6,
            focused: 7,
        },
      	continuation: {
      	    complement: `The others | were relatively steady | but my | portfolio was | still down | for the year.`,
      	    cancelation: `In fact, | they all | did | but my | portfolio was | still down | for the year.`,
      	},
      	question: `Did all the stock prices go down?`,
        correct: "no"
    }
]

let raw_filler_info = [
    {
        type: "filler",
        ID: 1,
        context: `I drove | to | the mall | yesterday.`,
        context_length: 6,      // number of words in context
        trigger: `I stayed | in the | Apple | store for | one hour while | looking at | a new | iMac before | stopping at | JC Penny's | on the way home.`,
        trigger_length: 23,
	    continuation: ``,
      	question: `Did the Apple store have a recently released computer?`,
      	correct: "yes"
    }
]

// 2 knowledge conditions: full vs partial
// 3 continuation conditions: scalar + complement, scalar + cancelation, focused + complement
// 24 total vignettes
// 6 lists

// latin square:
// C E D B A F
// D C A E F B
// A B F D E C
// E D C F B A
// F A B C D E
// B F E A C D

// A = full, scalar + complement
// B = full, scalar + cancelation
// C = full, focused + complement
// D = partial, scalar + complement
// E = partial, scalar + cancelation
// F = partial, focus + complement

const latin_square_lists = [
    [
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}, // C
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}, // B
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}, // A
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"} // F
    ],
    [
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}, // C
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}, // A
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"}, // F
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"} // B
    ],
    [
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}, // A
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}, // B
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"}, // F
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"} // C
    ],
    [
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}, // C
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"}, // F
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}, // B
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"} // A
    ],
    [
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"}, // F
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}, // A
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}, // B
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}, // C
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
    ],
    [
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}, // B
	{context_type: "partial", trigger_type: "focused", continuation_type: "complement"}, // F
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}, // E
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}, // A
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}, // C
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}, // D
    ]
]




// create the list of trials for a participant by randomly choosing 4
// lists (each consisting of 6 trial types) and filling them in with
// the content

// raw_trial_info = _.shuffle(raw_trial_info);

const trial_list = _.flatten(_.sampleSize(latin_square_lists, 4));

// fills in a single trial based on context_type, trigger_type and continuation_type
const create_trial = function(trial, args) {
    return {
	knowledge: args.context_type,
        trigger_type: args.trigger_type,
	continuation_type: args.trigger_type.concat("-", args.continuation_type),
	context: trial.context[args.context_type],
	trigger: trial.trigger[args.trigger_type],
	continuation: trial.continuation[args.continuation_type],
	question: trial.question,
	correct_answer: trial.correct,
	option1: "yes",
	option2: "no",
	ID: trial.ID,

    }
}

// fill in all trial templates in the list with the corresponding text from the raw_trial_info
const trial_info = trial_list.map(function(e) {
    trial = create_trial(raw_trial_info[_.indexOf(trial_list, e)], e)
    return trial})