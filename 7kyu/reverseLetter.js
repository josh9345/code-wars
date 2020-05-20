// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  let array = str.split("");
  for (i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == array[i].toUpperCase()) {
      array.splice(i, 1);
      i--;
    }
  }
  console.log(array);
  solution = array.reverse().join("");

  console.log(solution);
  // return solution
}

reverseLetter("he3llo0");
reverseLetter("n?ortlu");
reverseLetter("krish21an");
