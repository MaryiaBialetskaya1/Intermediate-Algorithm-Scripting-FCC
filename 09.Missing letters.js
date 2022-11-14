//TASK: Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);

      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }

  fearNotLetter("abce");
  console.log(fearNotLetter("abce"))


  //Code Explanation
// This solutions makes use of a for loop.
// Code of encountered character is stored in code.
// It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
// If a character is missing, the missing character is found and the final string is returned.
// undefined is returned if there is no missing character in the string.