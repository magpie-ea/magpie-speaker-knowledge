import json
import csv
import itertools
import copy

#read txt file as list of lists of strings
with open('items-original-study.txt', 'r') as f:
    reader = f.read()
    stimuli_file = list(reader)

    for line in f:
        words


# get number of words
# ideally, I want nr of words of context / trigger
num_words = 0
with open('items-original-study.txt', 'r') as f:
    for line in f:
        words = line.split()
        num_words += len(words)
    return num_words


# ID soll zahl an stelle line[0] sein
#context_length nr of words in context
def create_dict(line):
    return {
            "type": "filler",
            "ID": line[0],
            "context" :line[1],
            "context_length":  ,
            "trigger": line[2],
            "trigger_length": ,
            "continuation": ``,
            "question": ``,
            "correct": ""
            }



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


#create the right format s.t. output is a java script dictionary
# \n for newline in output
#a+ to append the material to the file
#w+ overwrites existing one
#happens for trials1!!! -> be aware if you want to append all to existing file)
filler_trials = "const filler_trials = "+str(trial_list)+"\n }\n"
filler_trials = filler_trials.replace("\'item\'","\n item")
filler_trials = filler_trials.replace("\'QUD\'","\n QUD")
filler_trials = filler_trials.replace("\'target\'","\n target")
filler_trials = filler_trials.replace("\'question\'","\n question")
filler_trials = filler_trials.replace("\'optionLeft\'","\n optionLeft")
filler_trials = filler_trials.replace("\'optionRight\'","\n optionRight")

#save file as stimuli.js
f = open("stimuli.js","w+")
f.write(filler_trials)
f.close()
