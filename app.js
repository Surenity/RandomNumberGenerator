//document.querySelector() allows us to access the FIRST HTML element on the page that can be identified with the given CSS selector.
//document.querySelectorAll() will give us an array-like LIST of elements that can be identified with the given CSS selector.

let cashLabel = document.querySelector('#cashTotal');
cashLabel.innerText = ""

let cashTotal = 0


let smallQuestButton = document.querySelector('#button1');
let longQuestButton = document.querySelector('#button2');
let bossFightButton = document.querySelector('#button3');

//The addEventListener() function allows to run a javascript function when a specific event occurs on the HTML page (such as a mouse-click, or a hover over).
//addEventListener() takes two arguments, the first being a string that specifies what event we want to "listen" to, and the second being the function we want to run.
//Notice that the function passed in as an argument is not invoked (aka there's no parenthesis next to the name), but rather the function name alone is given.
smallQuestButton.addEventListener('click', takeSmallQuest);
longQuestButton.addEventListener('click', takeLongQuest);
bossFightButton.addEventListener('click', takeBossFight);

//TODO: alter the behavior of the takeSmallQuest, takeLongQuest, and takeBossFight functions so that they randomly add a value within their defined ranges to your total cash!
function takeSmallQuest(){
  let r = Math.floor(Math.random() * 10) + 10;
  cashTotal += r
  return cashLabel.innerText = cashTotal


  // alert('you took on the small quest!')


}

function takeLongQuest(){
    let r = Math.floor(Math.random() * 20) + 30;
    cashTotal += r
    return cashLabel.innerText = cashTotal

  // alert('you took on the long quest!')


}

function takeBossFight(){
  let r = Math.floor(Math.random() * 30) + 70;
  cashTotal += r
  return cashLabel.innerText = cashTotal


  // alert('you took on the boss fight!')


}
//HINT: All visible elements on HTML web page will be represented as strings when they are accessed using javascript

//HINT: To get the text value of the cash that's currently on the page, access it's inner text using cashLabel.innerText


//HINT: To set the text value of the cash that's currently on the page, try using cashLabel.innerText = '(some other value)'
