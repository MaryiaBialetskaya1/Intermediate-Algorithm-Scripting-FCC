//TASK: Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // Split by character to avoid problems.

    let temp = str.split("");

    // Since we are only checking for a few HTML elements, use a switch

    for (let i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }

    temp = temp.join("");
    return temp;
  }


  convertHTML("Dolce & Gabbana");
  console.log(convertHTML("Dolce & Gabbana"))

  //second solution

  function convertHTML_1(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }

  // test here
  convertHTML_1("Dolce & Gabbana");
  console.log(convertHTML_1("Dolce & Gabbana"))


  //third solution

  function convertHTML_3(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }

  // test here
  convertHTML_3("Dolce & Gabbana");
  console.log(convertHTML_3("Dolce & Gabbana"))