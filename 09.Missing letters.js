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