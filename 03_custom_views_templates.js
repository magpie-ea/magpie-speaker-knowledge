// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// In this view the user can click on one of two buttons
const custom_spr = function(config) {
    const answer_container_generator = answer_container_generators.button_choice
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)
            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT)

	    $("main").html(`<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                    <p id='context' class='magpie-spr-sentence context'></p>
                    <br/>
                    <p id='trigger' class='magpie-spr-sentence trigger'></p>
                    <br/>
                    <p id='continuation' class='magpie-spr-sentence continuation'></p>
                </div>`);

            // That's everything for this view

	    const context = config.data[CT].context.trim().split(" | ");
	    const trigger = config.data[CT].trigger.trim().split(" | ");
	    const continuation = config.data[CT].continuation.trim().split(" | ");

            let spaceCounter = 0;

	    let context_wordList;
	    let trigger_wordList;
	    let continuation_wordList;




            let readingTimes = [];
            // wordPos "next" or "same", if "next" words appear next to each other, if "same" all words appear at the same place
            // default: "next"
            let wordPos = config.data[CT].wordPos === undefined ? "next" : config.data[CT].wordPos;
            let showNeighbor = wordPos === "next";
            // underline "words", "sentence" or "none", if "words" every word gets underlined, if "sentence" the sentence gets
            // underlined, if "none" there is no underline
            // default: "words"
            let underline = config.data[CT].underline === undefined ? "words" : config.data[CT].underline;
            let not_underline = underline === "none";
            let one_line = underline === "sentence";

            // shows the sentence word by word on SPACE press
            const handle_key_press = function(e) {
		if (e.which === 32 && spaceCounter < wordList.length) {
                    if (showNeighbor) {
			wordList[spaceCounter].classList.remove("spr-word-hidden");
                    } else {
			$("context").html(`<span class='spr-word'>${context[spaceCounter]}</span>`);
			if (not_underline){
                            $('.magpie-spr-sentence .spr-word').addClass('no-line');
			}
                    }

		    if (spaceCounter === 0) {
			$(".magpie-help-text").addClass("magpie-invisible");
                    }

                    if (spaceCounter > 0 && showNeighbor) {
			wordList[spaceCounter - 1].classList.add("spr-word-hidden");
                    }

                    readingTimes.push(Date.now());
                    spaceCounter++;

		}  else if (e.which === 32 && spaceCounter === wordList.length) {
                    $(".magpie-spr-sentence").html("");

                    $(".magpie-view").append(answer_container_generator(config, CT));

                    $("input[name=answer]").on("change", function() {
			const RT = Date.now() - startingTime;
			let reactionTimes = readingTimes
			    .reduce((result, current, idx) => {
				return result.concat(
				    readingTimes[idx + 1] - readingTimes[idx]
				);
			    }, [])
			    .filter((item) => isNaN(item) === false);
			let trial_data = {
                            trial_name: config.name,
                            trial_number: CT + 1,
                            response: $("input[name=answer]:checked").val(),
                            reaction_times: reactionTimes,
                            time_spent: RT
			};

			trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

			magpie.trial_data.push(trial_data);
			magpie.findNextView();
                    });
                    readingTimes.push(Date.now());
                    spaceCounter++;
		}
            };
            // shows the help text
            $(".magpie-help-text").removeClass("magpie-nodisplay");

            if (showNeighbor) {
		// creates the sentence
		context.map((word) => {
                    $(".context").append(
			`<span class='context-words spr-word spr-word-hidden'>${word}</span>`
                    );
		});
		trigger.map((word) => {
                    $(".trigger").append(
			`<span class='trigger-words spr-word spr-word-hidden'>${word}</span>`
                    );
		});
		continuation.map((word) => {
                    $(".continuation").append(
			`<span class='continuation-words spr-word spr-word-hidden'>${word}</span>`
                    );
		});

		// creates an array of spr word elements
		context_wordList = $(".context-words").toArray();
		trigger_wordList = $(".trigger-words").toArray();
		continuation_wordList = $(".continuation-words").toArray();

		wordList = context_wordList.concat(trigger_wordList, continuation_wordList)
		console.log(wordList)
            }

            if (not_underline){
		$('.magpie-spr-sentence .spr-word').addClass('no-line');
            }
            if (one_line){
		$('.magpie-spr-sentence .spr-word').addClass('one-line');
            }

            // attaches an eventListener to the body for space
            $("body").on("keydown", handle_key_press);

	}
    }


// We have to return the view, so that it can be used in 05_views.js
return view;
};
