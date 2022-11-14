//TASK: Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

//Pig Latin is a way of altering English Words. The rules are as follows:

//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//- If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }

  translatePigLatin("consonant");

  console.log(translatePigLatin("consonant"))

//   Code Explanation
// start at beginning and get longest match of everything not a vowel (consonants)

// if regex pattern found, it saves the match; else, it returns null

// if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end

// if regex pattern not found (starts with vowels), it just adds “way” to the ending


//another solution
function translatePigLatin_1(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }

  // test here
  translatePigLatin_1("consonant");