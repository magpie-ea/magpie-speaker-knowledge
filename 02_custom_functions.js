/* Generators for custom view templates, answer container elements and enable response functions
 *
 *
 */

custom_self_paced_reading_stimulus = function(config, CT){
    const helpText = config.data[CT].help_text !== undefined ?
          config.data[CT].help_text : "Press the SPACE bar to reveal the words";
    $("main").html(`<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
                    <p class='magpie-help-text magpie-nodisplay'>${helpText}</p>
                    <p class='magpie-spr-sentence context-sentence'></p>
                    <br/>
                    <p class='magpie-spr-sentence trigger-sentence'></p>
                    <br/>
                    <p class='magpie-spr-sentence continuation-sentence'></p>
                </div>`);
}


custom_self_paced_reading_answer = function(config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                    <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                    <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
                </div>`;
    },


custom_self_paced_reading_response = function(config, CT, magpie, answer_container_generator, startingTime) {

    const context = config.data[CT].context.trim().split(" | ");
    const trigger = config.data[CT].trigger.trim().split(" | ");
    const continuation = config.data[CT].continuation.trim().split(" | ");
    const sentenceList = context.concat(trigger, continuation)

    let spaceCounter = 0;

    let wordList;
    let context_wordList;
    let trigger_wordList;
    let continuation_wordList;

    let readingTimes = [];

    let underline = config.data[CT].underline === undefined ? "words" : config.data[CT].underline;
    let not_underline = underline === "none";
    let one_line = underline === "sentence";

    // shows the sentence word by word on SPACE press
    const handle_key_press = function(e) {

	// if space is pressed and we still have words left
	if (e.which === 32 && spaceCounter < sentenceList.length) {
	    // reveal the next word
	    wordList[spaceCounter].classList.remove("spr-word-hidden");

	    // for the first time, make the help text invisible
	    if (spaceCounter === 0) {
		$(".magpie-help-text").addClass("magpie-invisible");
            }

	    // if we are after the first word, hide the current word
            if (spaceCounter > 0) {
		wordList[spaceCounter - 1].classList.add("spr-word-hidden");
            }

	    // save the current time
            readingTimes.push(Date.now());

	    // increase the space counter
            spaceCounter++;

	    // otherwise if we are out of words
	}  else if (e.which === 32 && spaceCounter === sentenceList.length) {

	    readingTimes.push(Date.now());
	    spaceCounter ++

	    // delete all current sentences
            $(".magpie-spr-sentence").html("");

	    // add the question
            $(".magpie-view").append(answer_container_generator(config, CT));

	    // when the question is answered
            $("input[name=answer]").on("change", function() {

		// record the overall reaction time
		let RT = Date.now() - startingTime;

		// save the reaction times for each word
		reactionTimes = readingTimes
		    .reduce((result, current, idx) => {
			return result.concat(
			    readingTimes[idx + 1] - readingTimes[idx]
			);
		    }, [])
		    .filter((item) => isNaN(item) === false);

		// split the reaction times by sentence
		let context_reaction = reactionTimes.slice(0, context_wordList.length)
		let trigger_reaction =  reactionTimes.slice(context_wordList.length, context_wordList.length + trigger_wordList.length)
		let continuation_reaction =  reactionTimes.slice(context_wordList.length + trigger_wordList.length)

		// set which data will be saved
		let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: $("input[name=answer]:checked").val(),

		    // save all reaction times for double checking
		    all_reaction_times: reactionTimes,
                    context_reaction_times: context_reaction,
		    trigger_reaction_times: trigger_reaction,
		    continuation_reaction_times: continuation_reaction,
                    time_spent: RT
		};

		// push the trial data and goto the next view
		trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
		magpie.trial_data.push(trial_data);
		magpie.findNextView();

            });
	}
    };
    // shows the help text
    $(".magpie-help-text").removeClass("magpie-nodisplay");

    // creates the sentence
    context.map((word) => {
        $(".context-sentence").append(
	    `<span class='context-word spr-word spr-word-hidden'>${word}</span>`
        );
    });
    trigger.map((word) => {
        $(".trigger-sentence").append(
	    `<span class='trigger-word spr-word spr-word-hidden'>${word}</span>`
        );
    });
    continuation.map((word) => {
        $(".continuation-sentence").append(
	    `<span class='continuation-word spr-word spr-word-hidden'>${word}</span>`
        );
    });

    // creates an array of spr word elements
    context_wordList = $(".context-word").toArray();
    trigger_wordList = $(".trigger-word").toArray();
    continuation_wordList = $(".continuation-word").toArray();

    wordList = $(".spr-word").toArray()


    if (not_underline){
	$('.magpie-spr-sentence .spr-word').addClass('no-line');
    }
    if (one_line){
	$('.magpie-spr-sentence .spr-word').addClass('one-line');
    }

    // attaches an eventListener to the body for space
    $("body").on("keydown", handle_key_press);

}
