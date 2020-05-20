// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

// URL: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  let array = [...string];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      array.splice(i, 0, " ");
      i++;
    }
  }
  console.log(array.join(""));
  // return(array.join(''))
}
solution("camelCase");
solution("camelCaseYay");
solution("thisIsFunky");
solution("hiHowAreYou");
