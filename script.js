// quot-txt is a pera graph of quot
// btn is start butto for start game
//inputV is  typing Value
//message is  a pera of give message
//words is a array
//
let html = document.getElementById("html");
// let div = document.getElementById("on");
let div = document.getElementById("on");
let quotTxt = document.getElementById("quot-txt");
let btn = document.getElementById("button");
let inputV = document.getElementById("input");
let message = document.getElementById("message");
let user = document.getElementById("user");
let userDta;
let words = [];
let wordIndex = 0;
let array = [
  "Be yourself; everyone else is already taken. A room without books is like a body without a soul. You only live once, but if you do it right, once is enough.Be the change that you wish to see in the world",
  "In three words I can sum up everything I've learned about life: it goes on I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together",
  "If you tell the truth, you don't have to remember anythingI'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
  "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do",
];
userDta = window.prompt("Enter Your Name");
user.textContent += userDta;
user.contentEditable = "true";

let img = document.createElement("img");
// click on button and start this function
btn.addEventListener("click", (b) => {
  div.style.display = "block";
  // focus on input
  if (btn.textContent === "Start") {
    btn.textContent = "restart";
  } else {
    btn.textContent = "Start";
  }
  inputV.focus();
  // get a random number
  let randomnum = Math.floor(Math.random() * array.length);
  // start time
  let time = Date.now();
  let quot = array[randomnum];
  //word value  = quot and cut a space per word(text)
  words = quot.split(" ");
  // spanword It has to put <span> at the front and back of the word.
  let spanwords = words.map((word) => {
    return `<span>${word} </span>`;
  });
  // combining all child <span>
  quotTxt.innerHTML = spanwords.join("");
  inputV.value = "";
  quotTxt.childNodes[0].className = "higlight";
  img.setAttribute("src", "");
});

// call function on every input

inputV.addEventListener("input", () => {
  let typedWord = inputV.value;
  let currentWord = words[wordIndex];

  // user type and first letter of quots chaking this condsion
  if (typedWord === currentWord && wordIndex === words.length - 1) {
    img.setAttribute(
      "src",
      "https://i.pinimg.com/originals/d8/0b/fe/d80bfe9df92a5c45880f2eb3ecfbdd3e.png"
    );
    // inputV.className = "input-green"
    message.appendChild(img);
    inputV.value = "";
    words = [];
    wordIndex = 0;
    // html.textContent = "";
    div.style.display = "none";
  }
  //the type words ends whith a space // and current word  === to typeword so trime typed word
  else if (typedWord.endsWith(" ") && currentWord === typedWord.trim()) {
    inputV.value = "";
    // wordIndex vale ++
    wordIndex++;
    // typedWord = "";
    // this forloop use in removing class form all child

    for (let snajay of quotTxt.childNodes) {
      snajay.className = "";
      quotTxt.childNodes[wordIndex].className = "higlight";
    }
  } else if (currentWord.startsWith(typedWord)) {
    inputV.className = "input-green";
  } else {
    inputV.className = "input-red";
  }
  // console.log(typedWord);
  // console.log(currentWord);
});
