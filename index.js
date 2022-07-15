//Prints a defult string with inserted function if no text is given to answerText
 function printMadLib() {
     if ( document.getElementById("answerText").value == false ) {
        let strDefault = `This is a noun: ${getNoun()}. This is a verb: ${getVerb()}. This is an adjective: ${getAdjective()}. This is an adverb: ${getAdverb()}.`
        document.getElementById("answerText").value = strDefault;
     } else {
        let finalOutput = replaceMadLibs(document.getElementById("answerText").value);
        document.getElementById("answerText").value = finalOutput;
     }
}

//checks if each character is in the string, and if so replaces it with a word in that category
function replaceMadLibs(string) {
    if ( /\*/gi.test(string) == true ) {
        string = string.replaceAll(/\*/gi, getNoun);
    }
    if ( /\&/gi.test(string) == true ) {
        string = string.replaceAll(/\&/gi, getVerb);
    }
    if ( /\$/gi.test(string) == true ) {
        string = string.replaceAll(/\$/gi, getAdjective);
    }
    if ( /\@/gi.test(string) == true ) {
        string = string.replaceAll(/\@/gi, getAdverb);
    }
    return string;
}


//the following four functions check if words were given in the category, and returns a random one if so and (no input given) if not
function getVerb() {
    let verbString = document.getElementById("verbInput").value;
    if (/[a-z]+/gi.test(verbString) === true) {
        let verbArray = verbString.match(/[a-z]+/gi);
        return getRandomFromArray(verbArray);
    } else {
        return "(No input given)";
    }
}

function getNoun() {
    let nounString= document.getElementById("nounInput").value;
    if (/[a-z]+/gi.test(nounString) === true) {
        let nounArray = nounString.match(/[a-z]+/gi);
        return getRandomFromArray(nounArray);
    } else {
        return "(No input given)";
    }
}

function getAdjective() {
    let adjectiveString= document.getElementById("adjectiveInput").value;
    if (/[a-z]+/gi.test(adjectiveString) === true) {
        let adjectiveArray = adjectiveString.match(/[a-z]+/gi);
        return getRandomFromArray(adjectiveArray);
    } else {
        return "(No input given)";
    }
}

function getAdverb() {
    let adverbString= document.getElementById("adverbInput").value;
    if (/[a-z]+/gi.test(adverbString) === true) {
        let adverbArray = adverbString.match(/[a-z]+/gi);
        return getRandomFromArray(adverbArray);
    } else {
        return "(No input given)";
    }
}

//returns a random word from the passed array
function getRandomFromArray(array) {
    let index = Math.floor(Math.random()*array.length);
    return array[index];
} 

//clears the answer text box
function clearText() {
    document.getElementById("answerText").value = null;
}