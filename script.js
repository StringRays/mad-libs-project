//sets the regex, grabs a word from each array, and prints the final string with variables inserted
 function printMadLib() {
    let wordRegex = /[a-z]+/gi;
    let finalNoun = getNoun(wordRegex);
    let finalVerb = getVerb(wordRegex);
    let finalAdjective = getAdjective(wordRegex);
    let finalAdverb = getAdverb(wordRegex);
    let strDefault = `This is a noun: ${finalNoun}. This is a verb: ${finalVerb}. This is an adjective: ${finalAdjective}. This is an adverb: ${finalAdverb}.`
     if ( document.getElementById("answerText").value == false ) {
        document.getElementById("answerText").value = strDefault;
     } else {
        let finalOutput = replaceMadLibs(document.getElementById("answerText").value);
        document.getElementById("answerText").value = finalOutput;
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
    // let regexNo = /noun/gi;
    // let regexVerb = /verb/gi;
    // let regexAdj = /adjective/gi;
    // let regexAdv = /adverb/g;
    let localWordRegex = /[a-z]+/gi;
    if ( /\*/gi.test(string) == true ) {
        string = string.replaceAll(/\*/gi, getNoun(localWordRegex));
    }
    if ( /\&/gi.test(string) == true ) {
        string = string.replaceAll(/\&/gi, getVerb(localWordRegex));
    }
    if ( /\$/gi.test(string) == true ) {
        string = string.replaceAll(/\$/gi, getAdjective(localWordRegex));
    }
    if ( /\@/gi.test(string) == true ) {
        string = string.replaceAll(/\@/gi, getAdverb(localWordRegex));
    }
    return string;
}

// console.log("bird dog".replaceAll('bird', 'cat'))
// console.log( /noun/gi.test("noun adjective"))
// let newStr = "noun verb noun"
// if ( /noun/gi.test(newStr) == true ) {
//     newStr = newStr.replaceAll(/noun/gi, "cat");
// }
// console.log(newStr)

//I copied this function and replaced the output nodes and it works 
// function replaceWords(string) {
//     // let regexNo = /noun/gi;
//     // let regexVerb = /verb/gi;
//     // let regexAdj = /adjective/gi;
//     // let regexAdv = /adverb/g;
//     if ( /noun/gi.test(string) == true ) {
//         string = string.replaceAll(/noun/gi, wordFunction);
//     }
//     if ( /verb/gi.test(string) == true ) {
//         string = string.replaceAll(/verb/gi, "NEWVERB");
//     }
//     if ( /adjective/gi.test(string) == true ) {
//         string = string.replaceAll(/adjective/gi, "NEWADJECTIVE");
//     }
//     if ( /adverb/gi.test(string) == true ) {
//         string = string.replaceAll(/adverb/g, "NEWADVERB" );
//     }
//     return string;
// }

// const wordFunction = () => "newlongerstring"
// console.log(replaceWords("noun verb noun"))