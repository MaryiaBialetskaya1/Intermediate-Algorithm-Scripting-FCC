//TASK: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  }

  spinalCase('This Is Spinal Tap');
  console.log(spinalCase('This Is Spinal Tap'))

//Split the string at one of the following conditions
        //a whitespace character [\s] is encountered
        //underscore character [_] is encountered
        //or by an uppercase letter [(?=[A-Z])]
//Join the array using a hyphen (-)
//Lowercase the whole resulting string