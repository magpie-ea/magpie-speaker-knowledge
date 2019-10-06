// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for taking part in this experiment.
            <br />
            <br />
            Participation in this experiment is voluntary. You may quit at any moment without negative consequences.
            <br />
            <br />
            The data from this experiment will be used for scientific purposes only. It will be stored anonymously and may be shared with other scientists.
            <br />
            <br />
            By proceeding you indicate that you have read, understood and that you agree with these terms.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
 text: `In this experiment, you will read 24 short pieces of text. After each piece of text, you will be asked a question relating to it. Please read the texts carefully and answer the question based on your intuitive understanding of the situation described. <br/><br/>
The texts are presented in 'self-paced reading' tasks, meaning that you will only see a single word at a time, and a new word will appear when you press the spacebar.`,
  buttonText: 'go to practice '
});

const begin = magpieViews.view_generator("begin", {
    trials: 1,
    name: "begin",
    title: "Get ready",
    text: "The practice trials are now complete. When you are ready to begin the study, click 'Begin'.",
    buttonText: "Begin"})


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


const self_paced_reading_practice = magpieViews.view_generator("self_paced_reading", {
    trials: practice_trial_info.length,
    name: 'self_paced_reading_practice',
    data: practice_trial_info,
}, {
    stimulus_container_generator: custom_self_paced_reading_stimulus,
    handle_response_function: custom_self_paced_reading_response,
    answer_container_generator: custom_self_paced_reading_answer
});

const self_paced_reading = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.length,
    name: 'self_paced_reading',
    data: _.shuffle(trial_info),
}, {
    stimulus_container_generator: custom_self_paced_reading_stimulus,
    handle_response_function: custom_self_paced_reading_response,
    answer_container_generator: custom_self_paced_reading_answer
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
