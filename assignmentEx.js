const decisionList = {
    "1": {
        text: "You encounter a Grue. Run or fight?",
        optionOne: {
            text: "Run",
            outcome: "sceneEscape"
        },
        optionTwo: {
            text: "Fight",
            outcome: "sceneDie"
        }
    }, 
    sceneDie: {
        text: "You are eaten by a Grue"
    },
    sceneEscape: {

    }
}

const decision = decisionList.sceneIntro["optionTwo"].outcome; //sceneDie
const currentScene = decisionList[decision];