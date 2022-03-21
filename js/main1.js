/* JavaScript for Beginners */
/* Cat Facts */
/* Allen P */
/* 03/20/2022 */

/* main.js */

/******\
* main *
\******/

const theURL = "https://cat-fact.herokuapp.com/facts";
const theButton = document.getElementById("theButton");
const theFact = document.getElementById("theFact");
const theImage = document.getElementById("theImage");

/*********\
* getFact *
\*********/

// function getFact() {
//   let abc = get(theURL);
//   console.log(typeof abc);
//   console.dir(abc);

//   alert(`Button Clicked`);
// }

function getFact() {
  let abc = get(theURL);
  console.log(typeof abc);
  console.dir(abc);

  alert(`Button Clicked`);
}

// function get(url) {
//   return fetch(url)
//     .then((result) => {
//     console.log(result);
//     return result.json();
//   });
// }

function get(url) {
  return fetch(url).then(myFunc1);
}

function myFunc1(x) {
  myDebug(x);
  var z = "Hello!";
  myDebug(z);
  console.dir(x);
  y = x.json();
  console.log(typeof y);
  console.dir(y);
  console.log(y);
  z = y.then(myFunc2);
  return `Func1`;
}

function myFunc2(x) {
  console.dir(x);
  y = x[0];
  console.log(typeof y);
  console.dir(y);
  console.log(y);
  return `Func2`;
}

function myDebug(x) {
  let res = "** Variable Debugger **";
  varType = typeof x;
  switch (varType) {
    case "number":
      res += "\nVariable is a Number";
      res += "\nThe value is: "+ x;
      break;
      case "string":
        res += "\nVariable is a String";
        res += '\nThe value is: "'+ x + '"';
        break;
      case "object":
      res += "\nVariable is an Object";
      break;
    case "undefined":
      res += "\nVariable is Undefined";
      break;
    default:
      res += "\nVariable type is " + varType;
  }
  console.log(res);
}
