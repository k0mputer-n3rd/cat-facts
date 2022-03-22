/* JavaScript for Beginners */
/* Cat Facts */
/* Allen P */
/* 03/20/2022 */

/* main.js */

/******\
* main *
\******/

// First-time Initialization

const theURL = "https://cat-fact.herokuapp.com/facts";
const theButton = document.getElementById("theButton");
const theFact = document.getElementById("theFact");
const theImage = document.getElementById("theImage");

var factArray;
getFacts();  // Get fact array and put it in factArray

/**********\
* getFacts *
\**********/

// Get fact array

async function getFacts() {
  let response = await fetch(theURL);
  factArray = await response.json();
}

/**********\
* getFacts *
\**********/

// Get a single fact, display fact and image

function getFact() {
  let factIndex = Math.trunc(Math.random() * factArray.length);
  let fact = factArray[factIndex].text;
  theFact.innerHTML = fact;
  switch (factIndex) {
    case 0:
      theImage.src = "./img/pexels-aleksandr-nadyojin-4492170-a.jpg"
      break;
    case 1:
      theImage.src = "./img/pexels-anel-rossouw-2558605-a.jpg"
      break;
    case 2:
      theImage.src = "./img/pexels-cats-coming-1543793-a.jpg"
      break;
    case 3:
      theImage.src = "./img/pexels-danielle-daniel-479009-a.jpg"
      break;
    case 4:
      theImage.src = "./img/pexels-flickr-156934-a.jpg"
      break;
  }
}
