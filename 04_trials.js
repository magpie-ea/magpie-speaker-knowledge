let raw_trial_info = [
    {
	context: {
	    full: "I | carefully | inspected | the | new | shipment | of | jewelry.",
	    partial: "I | helped | unload | the | new | shipment | of | jewelry.",
	},
	trigger: {
	    scalar: "Some | of | the | gold | watches | were | fakes.",
	    focused: "Only | some | of | the | gold | watches | were | fakes.",
	},
	continuation: {
	    complement: "The | rest | were | real, | but | the | company | is | still | planning | to | sue.",
	    cancelation: "In | fact, | they | all | were, | so | the | company | is | planning | to | sue.",
	},
	question: "Comprehension question",
    },

    {
	context: {
	    full: "Before | the | hurricane | landed, | I | checked | every | house | in | town.",
	    partial: "Before | the | hurricane | landed, | I | volunteered | to | help | out | in | town.",
	},
	trigger: {
	    scalar:"Some | of | the | residents | had | evacuated.",
	    focused: "Only | some | of | the | residents | had | evacuated.",
	},
	continuation: {
	    complement: "The | rest | stayed | at | home | and | foolishly | risked | their | lives.",
	    cancelation: "In | fact, | they | all | did | and, | as | a | result, | they | survived | the | storm.",
	},
    },

    {
	context: {
	    full: "This | morning, | I | took | attendance | at | an | important | meeting | with | the | manager.",
	    partial: "This | morning, | I | heard | about | an | important | meeting | with | the | manager.",
	},
	trigger: {
	    scalar: "Some | of | the | company’s | accountants | were | there.",
	    focused: "Only | some | of | the | company’s | accountants | were | there.",
	},
	continuation: {
	    complement: "The | rest | were | missing | because | they | had | to | audit | the | company’s | finances | before | the | end | of | the | quarter.",
	    cancelation: "In | fact, | they | all | were | in | order | to | communicate | how | budget | cutbacks | were | crippling | their | division.",
	},
    },

    {
	context: {
	    full: "I | was | the | chief | medic | overseeing | the | bus | accident | on | the | side | of | the | highway.",
	    partial: "I | stopped | to | see | if | I | could | help | with | the | bus | accident | on | the | side | of | the | highway.",
	},
	trigger: {
	    scalar: "Some | of | the | passengers | were | still | alive.",
	    focused: "Only | some | of | the | passengers | were | still | alive.",
	},
	continuation: {
	    complement: "The | others | were | killed | on | impact | and | there | was | no | opportunity | to | save | them.",
	    cancelation: "In | fact, | they | all | were | and | none | were | critically | injured.",
	},
    },
    {
	context: {
	    full: "At | my | client’s | request, | I | meticulously | compiled | the | investment | report.",
	    partial: "At | my | client’s | request, | I | skimmed | the | investment | report.",
	},
	trigger: {
	    scalar: "Some | of | the | real estate | investments | lost | money.",
	    focused: "Only | some | of | the | real estate | investments | lost | money.",
	},
	continuation: {
	    complement: "The | others | were | successful | in | spite | of | the | recent | economic | downturn.",
	    cancelation: "In | fact, | they | all | did | because | of | the | recent | economic | downturn.",
	},

    },
    {
	context: {
	    full: "As | the | office’s | main | technician, | I | had | to | check | each | computer | for | the | dangerous | new | virus.",
	    partial: "As | the | office’s | main | technician, | I | had | been | alerted | to | the | dangerous | new | virus.",
	},
	trigger: {
	    scalar: "Some | of | our | computers | were | infected.",
	    focused: "Only | some | of | our | computers | were | infected.",
	},
	continuation: {
	    complement: "The | rest | were | clean | because | their | owners | had | been | very | cautious.",
	    cancelation: "In | fact, | they | all | were | and | the | virus | nearly | destroyed | the | whole | system.",
	},
    },

    {
	context: {
	    full: "Earlier | today, | I | was | leading | a | small | group | of | tourists | around | the | sights | downtown.",
	    partial: "Earlier | today, | I | passed | by | a | group | of | tourists | looking | at | sights | downtown.",
	},
	trigger: {
	    scalar: "Some | of | the | tourists | got | soaked | by | the | rain | storm.",
	    focused: "Only | some | of | the | tourists | got | soaked | by | the | rain | storm.",
	},
	continuation: {
	    complement: "The | rest | were | dry | because | they | had | remembered | their | umbrellas.",
	    cancelation: "In | fact, | they | all | did | because | they | had | forgotten | their | umbrellas.",
	},
    },
    {
	context: {
	    full: "After | the | furniture | sale, | I | catalogued | all | the | merchandise | in | the | store.",
	    partial: "After | the | furniture | sale, | I | closed | down | and | locked | up | the | store.",
	},
	trigger: {
	    scalar: "Some | of | the | leather | couches | had | been | sold.",
	    focused: "Only | some | of | the | leather | couches | had | been | sold.",
	},
	continuation: {
	    complement: "The | rest | were | going | to | be | stored | in | the | warehouse | until | the | following | season.",
	    cancelation: "In | fact, | they | all | had | since | they | were | stylish | and | cheap.",
	},
    },
    {
	context: {
	    full: "Last | week, | I | tasted | every | dish | at | a | family | potluck.",
	    partial: "Last | week, | I | attended | a | family | potluck.",
	},
	trigger: {
	    scalar: "Some | of | the | dishes | were | spicy.",
	    focused: "Only | some | of | the | dishes | were | spicy.",
	},
	continuation: {
	    complement: "The | rest | were | mild | and | I | found | them | to | be | bland.",
	    cancelation: "In | fact, | they | all | were | but | fortunately | I | love | spicy | food.",
	},
    },
    {
	context: {
	    full: "When | I | entered | Disney | World, | I | asked | about | the | status | of | each | of | the | rides.",
	    partial: "When | I | visited | Disney | World, | I | quickly | walked | around | the | amusement | park.",
	},
	trigger: {
	    scalar: "Some | of | my | favorite | rides | were | still | running.",
	    focused: "Only | some | of | my | favorite | rides | were | still | running.",
	},
	continuation: {
	    complement: "The | rest | were | shut down | since | they | were | no | longer | popular.",
	    cancelation: "In | fact, | they | all | were | since | they | were | still | popular.",
	},
    },
    {
	context: {
	    full: "After | my | house | was | burglarized, | I | carefully | inventoried | my | wine | collection.",
	    partial: "After | my | house | was | burglarized, | I | briefly | checked | the | basement.",
	},
	trigger: {
	    scalar: "Some | of | the | bottles | of | Chardonnay | were | missing.",
	    focused: "Only | some | of | the | bottles | of | Chardonnay | were | missing.",
	},
	continuation: {
	    complement: "The | rest | were | safe | but | I | was | still | extremely | upset.",
	    cancelation: "In | fact, | they | all | were | even | though | I | had | secured | them.",
	},
    },
    {
	context: {
	    full: "While | working | in | the | veterinary | clinic, | I | closely | examined | the | mouth | of | large | bulldog.",
	    partial: "While | working | in | the | veterinary | clinic, | I | caught | a | glimpse | of | a | large | bulldog.",
	},
	trigger: {
	    scalar: "Some | of | the | dog’s | teeth | were | missing.",
	    focused: "Only | some | of | the | dog’s | teeth | were | missing.",
	},
	continuation: {
	    complement: "The | rest | were | intact | so | it | should | still | be | able | to | eat | solid | food.",
	    cancelation: "In | fact, | they | all | were | because | its | owners | completely | neglected | its | oral | hygiene.",
	},
    },
    {
	context: {
	    full: "In | the | school | parking | lot, | I | carefully | inspected | an | old | bus.",
	    partial: "In | the | school | parking | lot, | I | passed | by | an | old | bus.",
	},
	trigger: {
	    scalar: "Some | of | its | tires | were | flat.",
	    focused: "Only | some | of | its | tires | were | flat.",
	},
	continuation: {
	    complement: "The | others | were | fine | so | it | would | not | cost | too | much | to | fix | it.",
	    cancelation: "In | fact, | they | all | were | so | the | cost | to | repair | it | would | be | enormous.",
	},
    },
    {
	context: {
	    full: "To | check | on | the | progress | of | my | research, | I | meticulously | recorded | the | results | of | the | experiments.",
	    partial: "To | check | on | the | progress | of | my | research, | I | quickly | scanned | the | experiments | in | the | lab.",
	},
	trigger: {
	    scalar: "Some | of | my | predictions | were | correct.",
	    focused: "Only | some | of | my | predictions | were | correct.",
	},
	continuation: {
	    complement: "The | rest | were | wrong | so | my | theory | must | be | mistaken.",
	    cancelation: "In | fact, | they | all | were | so | I | should | be | able | to | publish | the | results.",
	},
    },
    {
	context: {
	    full: "When | they | returned, | I | reviewed | each | of | the | receipts | for | my | family’s | trip | to | Europe.",
	    partial: "When | they | returned, | my | family | told | me | about | their | trip | to | Europe.",
	},
	trigger: {
	    scalar: "Some | of | their | hotels | were | expensive.",
	    focused: "Only | some | of | their | hotels | were | expensive.",
	},
	continuation: {
	    complement: "The | rest | were | cheap | despite | my | family’s | love | for | luxurious | holidays.",
	    cancelation: "In | fact, | they | all | were | because | my | family | loves | luxurious | holidays.",
	},
    },
    {
	context: {
	    full: "After | the | babysitter | left, | I | carefully | examined | my | liquor | collection.",
	    partial: "After | the | babysitter | left, | I | went | to | my | liquor | collection | and | made | a | drink.",
	},
	trigger: {
	    scalar: "Some | of | my | new | bottles | of | vodka | were | opened.",
	    focused: "Only | some | of | my | new | bottles | of | vodka | were | opened.",
	},
	continuation: {
	    complement: "The | others | were | untouched, | but | I | was | still | concerned | and | decided | to | call | her | parents.",
	    cancelation: "In | fact, | they | all | were | but | I | decided | not | to | call | her | parents | because | it | was | so | hard | to | find | a | babysitter.",
	},
    },
    {
	context: {
	    full: "I | examined | the | damage | after | I | dropped | a | bowling | ball | down | the | stairs.",
	    partial: "I | heard | that | my | friend | dropped | a | bowling | ball | down | the | stairs.",
	},
	trigger: {
	    scalar: "Some | of | the | steps | were | damaged.",
	    focused: "Only | some | of | the | steps | were | damaged.",
	},
	continuation: {
	    complement: "The | others | were | fine | so | the | repairs | shouldn’t | be | too | expensive.",
	    cancelation: "In | fact, | they | all | were | so | they | will | require | extensive | repairs.",
	},
    },
    {
	context: {
	    full: "At | a | friend’s | suggestion, | I | completely | worked | through | an | entire | math | textbook.",
	    partial: "At | a | friend’s | suggestion, | I | read | a | review | of | a | new | math | textbook.",
	},
	trigger: {
	    scalar: "Some | of | its | problems | were | difficult.",
	    focused: "Only | some | of | its | problems | were | difficult.",
	},
	continuation: {
	    complement: "The | others | were | straightforward | and | I | feel | like | I | learned | a | lot.",
	    cancelation: "In | fact, | they | all | were | but | it | received | a | positive | review | anyway.",
	},
    },
    {
	context: {
	    full: "To | keep | the | laboratory | well | stocked, | I | write | down | exactly | how | much | of | the | chemicals | are | used | every | night.",
	    partial: "To | keep | the | laboratory | well | stocked, | I | occasionally | look | at | which | chemicals | are | being | used.",
	},
	trigger: {
	    scalar: "Today, | some | of | the | liquid | nitrogen | containers | needed | to | be | refilled.",
	    focused: "Today, | only | some | of | the | liquid | nitrogen | containers | needed | to | be | refilled.",
	},
	continuation: {
	    complement: "The | others | were | normal | but | I | decided | to | order | more | anyway.",
	    cancelation: "In | fact, | they | all | did | which | confused | me | because | we | hadn’t | used | a | lot | this | morning.",
	},
    },
    {
	context: {
	    full: "The | PTA | picked | me | to | organize | every | award | for | the | assembly | at | my | daughter’s | school.",
	    partial: "My | daughter | told | me | about | the | awards | assembly | at | her | school.",
	},
	trigger: {
	    scalar: "Some | of | the | honors | students | received | prizes.",
	    focused: "Only | some | of | the | honors | students | received | prizes.",
	},
	continuation: {
	    complement: "The | others | were | not | invited | to | attend | because | the | teachers | didn’t | want | anyone | to | feel | left | out.",
	    cancelation: "In | fact, | they | all | did | because | the | teachers | didn’t | want | any | of | them | to | feel | left | out.",
	},
    },
    {
	context: {
	    full: "As | the | new | librarian, | it | was | my | responsibility | to | catalog | every | book | in | the | reference | section.",
	    partial: "The | librarian | told | me | about | how | annoying | it | was | to | reorganize | the | reference | section.",
	},
	trigger: {
	    scalar: "Some | of | the | dictionaries | were | labeled | incorrectly.",
	    focused: "Only | some | of | the | dictionaries | were | labeled | incorrectly.",
	},
	continuation: {
	    complement: "The | others | were | labeled | appropriately | though | a | few | of | them | had | been | shelved | in | the | wrong | place.",
	    cancelation: "In | fact, | they | all | were | which | made | his | job | much | more | difficult.",
	},
    },
    {
	context: {
	    full: "I | am | a | huge | fan | of | my | old | high school | football | team | and | attended | every | game | last | season.",
	    partial: "I | ran | into | a | friend | who | started | telling | how | my | old | high school | football | team | did | last | season.",
	},
	trigger: {
	    scalar: "Some | of | their | losses | were | close.",
	    focused: "Only | some | of | their | losses | were | close.",
	},
	continuation: {
	    complement: "The | others | were | blowouts | which | made | the | games | boring | to | watch.",
	    cancelation: "In | fact, | they | all | were | which | made | the | games | stressful | to | watch.",
	},

    },
    {
	context: {
	    full: "To | prepare | for | my | Spanish | test, | I | spent | hours | studying | the | new | vocabulary | items.",
	    partial: "I | had | little | time | to | prepare | for | my | Spanish | test | so | I | quickly | glanced | at | the | new | vocabulary | items.",
	},
	trigger: {
	    scalar: "Some | of | the | words | sounded | like | they | do | in | English.",
	    focused: "Only | some | of | the | words | sounded | like | they | do | in | English.",
	},
	continuation: {
	    complement: "The | others | were | totally | unfamiliar | which | made | the | test | somewhat | challenging.",
	    cancelation: "In | fact, | they | all | did | which | made | the | test | somewhat | easier.",
	},
    },
    {
	context: {
	    full: "While | eating | breakfast, | I | had | lots | of | time | to | pore | over | the | stock | prices | from | yesterday.",
	    partial: "While | eating | breakfast, | I | had | little | time | to | skim | the | stock | prices | from | yesterday.",
	},
	    trigger: {
		scalar: "Some | of | my | stocks | went | up.",
		focused: "Only | some | of | my | stocks | went | up.",
	    },
	continuation: {
	    complement: "The | others | were | relatively | steady | but | my | portfolio | was | still | down | for | the | year.",
	    cancelation: "In | fact, | they | all | did | but | my | portfolio | was | still | down | for | the | year.",
	}
    }
]



// 2 knowledge conditions: full vs partial
// 3 continuation conditions: scalar + complement, scalar + cancelation, focused + complement
// 24 total vignettes
// 6 lists

const latin_square_lists = [
    [
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"}
    ],
    [
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}
    ],
    [
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"}],
    [
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"}
    ],
    [
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"}],
    [
	{context_type: "partial", trigger_type: "scalar", continuation_type: "cancelation"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "partial", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "complement"},
	{context_type: "full", trigger_type: "focused", continuation_type: "complement"},
	{context_type: "full", trigger_type: "scalar", continuation_type: "cancelation"}
    ]
]

// create the list of trials for a participant by randomly choosing 4 lists (each consisting of 6 trial types) and filling them in with the content

raw_trial_info = _.shuffle(raw_trial_info)

const trial_list = _.flatten(_.sampleSize(latin_square_lists, 4))

const create_trial = function(trial, args) {
    return {
	sentence: trial.context[args.context_type].concat(" | ", trial.trigger[args.trigger_type],
						     " | ", trial.continuation[args.continuation_type]),
	question: trial.question,
	option1: "Yes",
	option2: "No"
    }
}

const trial_info = trial_list.map(function(e) {
    trial = create_trial(raw_trial_info[_.indexOf(trial_list, e)], e)
    return trial})
