///I need to grab how many of each element are in the incoming text, and feed that both to 
//how many cycles to run to get words, and also figure out how to either iterate into variables to pass to the 
//string literals, or to break the 
//how do I say for regex match in string, replace with this function, without saying that? 

//what if I make empty arrays of required length to hold stuff later, pass those arrays to the right function and then for the length
//of those, replace each element in the array. Or empty array that can hold 7 and push? I might be mixing up data-types still but 
//either way might be cleaner than what I stated above. 

//after that I'd still have to find a way to combine in with text but ya know, can always use breaking into a bunch of pieces if needed

//just would like to see if maybe I could either skip array stuff and generate output a little more dynamically either with the 
//function in the string or an array that cycles into it. 

//ooooooh, I could slowly build the string literal by having a function that populates that wooooooord, this might be the winner folks. 
//



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
function getVerb() {
    let verbString= document.getElementById("verbInput").value;
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
        //put back in maybe? need to figure out how to take this length and 
        //for ( let cycle = 0; cycle < adjectiveArray.length; cycle++ ) {
        return getRandomFromArray(adjectiveArray);
        //}
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


//gets a random number from 0 to 1 less than length of array, returns word at that index
function getRandomFromArray(array) {
    let index = Math.floor(Math.random()*array.length);
    return array[index];
} 

function replaceMadLibs(string) {
    if ( /\*/gi.test(string) == true ) {
        string = string.replaceAll(/\*/gi, getNoun());
    }
    if ( /\&/gi.test(string) == true ) {
        string = string.replaceAll(/\&/gi, getVerb());
    }
    if ( /\$/gi.test(string) == true ) {
        string = string.replaceAll(/\$/gi, getAdjective());
    }
    if ( /\@/gi.test(string) == true ) {
        string = string.replaceAll(/\@/gi, getAdverb());
    }
    return string;
}





function clearText() {
    document.getElementById("answerText").value = null;
}
//this below is practice stuff to debug
// const regTest = /\*/gi;
// let newStr = "* verb *";
// let newArr = ["mouse", "horse"];
// let replaceArr = newStr.match(regTest);
// while ( regTest.test(newStr) == true ) {
    
    
//     newStr[newStr.indexOf('*')] = randomNew(newArr);
// }

// function randomNew(array) { 
//     let myArr = array
//     return myArr[Math.floor(Math.random()*2)];
// }

// newStr[newStr.indexOf('*')] = randomNew(newArr);
// console.log(newStr)

//I copied this function and replaced the outputand it works 
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