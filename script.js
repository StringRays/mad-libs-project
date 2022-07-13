//sets the regex, grabs a word from each array, and prints the final string with variables inserted
 function printMadLib() {
    let wordRegex = /[a-z]+/gi;
    let finalNoun = getNoun(wordRegex);
    let finalVerb = getVerb(wordRegex);
    let finalAdjective = getAdjective(wordRegex);
    let finalAdverb = getAdverb(wordRegex);
    let changedValue = replaceMadLibs(document.getElementById("answerText").value);
    let strDefault = `This is a noun: ${finalNoun}. This is a verb: ${finalVerb}. This is an adjective: ${finalAdjective}. This is an adverb: ${finalAdverb}.This is a verb: ${finalVerb}.`
    if ( document.getElementById("answerText").value == false ) {
        document.getElementById("answerText").value = strDefault;
    } else {
        document.getElementById("answerText").value = changedValue;
    }
}

//if a word is present, puts all words in array and calls the get random word from array function (repeated for other parts of speech)
function getVerb(regex) {
    let verbString= document.getElementById("verbInput").value;
    if (regex.test(verbString) === true) {
        let verbArray = verbString.match(regex);
        return getRandomFromArray(verbArray);
    } else {
        return "(No input given)";
    }
}

function getNoun(regex) {
    let nounString= document.getElementById("nounInput").value;
    if (regex.test(nounString) === true) {
        let nounArray = nounString.match(regex);
        return getRandomFromArray(nounArray);
    } else {
        return "(No input given)";
    }
}

function getAdjective(regex) {
    let adjectiveString= document.getElementById("adjectiveInput").value;
    if (regex.test(adjectiveString) === true) {
        let adjectiveArray = adjectiveString.match(regex);
        return getRandomFromArray(adjectiveArray);
    } else {
        return "(No input given)";
    }
}

function getAdverb(regex) {
    let adverbString= document.getElementById("adverbInput").value;
    if (regex.test(adverbString) === true) {
        let adverbArray = adverbString.match(regex);
        return getRandomFromArray(adverbArray);
    } else {
        return "(No input given)";
    }
}
//gets a random number from 0 to 1 less than length of array, returns word at that index
function getRandomFromArray(array) {
    let index = Math.floor(Math.random()*array.length);
    return array[index];
} 

function replaceMadLibs(string) {
    let regexNo = /noun/gi;
    let regexVerb = /verb/gi;
    let regexAdj = /adjective/gi;
    let regexAdv = /adverb/g;
    if ( regexNo.test(string) == true ) {
        string = string.replaceAll(regexNo, getNoun(wordRegex));
    }
    if ( regexVerb.test(string) == true ) {
        string = string.replaceAll(regexVerb, getVerb(wordRegex));
    }
    if ( regexAdj.test(string) == true ) {
        string = string.replaceAll(regexAdj, getAdjective(wordRegex));
    }
    if ( regexAdv.test(string) == true ) {
        string = string.replaceAll(regexAdv, getAdverb(wordRegex));
    }
    return string;
}
console.log("bird dog".replaceAll('bird', 'cat'))
console.log( /noun/gi.test("noun adjective"))
let newStr = "noun verb noun"
if ( /noun/gi.test(newStr) == true ) {
    newStr = newStr.replaceAll(/noun/gi, "cat");
}
console.log(newStr)