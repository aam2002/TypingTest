let textString =
  "It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger. Then people will appreciate your leadership. Growing up as an athlete, I started skating very young. My parents didn't know anything about the sport, so they went with the flow. I had two great coaches who gave great advice and gave guidelines for my parents. My parents let the coaches dictate what was going on on the ice. Once I opened up a fortune cookie and inside was the guy's cheque next to me I said hey buddy I got your cheque he said thanks. Imagine having a conversation with the greatest minds in history. With our digital assistant Sage, you can explore the thoughts, ideas, and wisdom of legendary figures like Albert Einstein, Marie Curie, and Martin Luther King Jr. Whether you're seeking inspiration, guidance, or simply curious about how they viewed the world, this powerful tool brings their words and perspectives to life. Dive into the minds that changed history and discover how their timeless ideas can impact your life today.";
let myArray = textString.split(" ");
let para = document.getElementById("para");
let input = document.getElementById("myInput");
let time = 60;
let count = 0;
let currIndex = 0;
let currArrayIndex = 0;
let wrong = 0;
let correctChar = 0;
let wordCount = 0;
let totalTypedChar = 0;

//Text loader
document.addEventListener("DOMContentLoaded", () => {
  myArray.forEach((item, index) => {
    let span = document.createElement("span");
    span.setAttribute("attr", index);
    span.innerText = item;
    if (index == 0) {
      span.classList.add("active");
    }
    para.append(span);
    let anotherSpan = document.createElement("span");
    anotherSpan.innerHTML = " ";
    para.append(anotherSpan);
  });
});

let startTime = null;
let timerInterval;
let timeBox = document.getElementById("timer-Box");

function myFunction(e) {
  //Timer
  if (!startTime) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
  }

  //Right Character Count
  if (
    e.value.charAt(e.value.length - 1) ==
    myArray[currArrayIndex].split("")[wordCount]
  ) {
    correctChar++;
  }
  wordCount++;
  if (!e.value.includes(" ")) {
    totalTypedChar++;
  }

  //Right or Wrong
  if (e.value.includes(" ") && currArrayIndex + 1 != myArray.length) {
    if (e.value.trim() == myArray[currArrayIndex]) {
      para.children[currIndex].classList.add("right");
      count++;
    } else if (e.value.trim() != myArray[currArrayIndex]) {
      para.children[currIndex].classList.add("wrong");
      wrong++;
    }
    para.children[currIndex].classList.remove("active");
    currIndex = currIndex + 2;
    e.value = "";
    para.children[currIndex].classList.add("active");

    currArrayIndex++;
    wordCount = 0;
    return;
  }
}

//Time updater
function updateTimer() {
  let elapsed = Math.floor((new Date().getTime() - startTime) / 1000);
  timeBox.innerText = elapsed + "s";
  if (elapsed == 60) {
    result();
    clearInterval(timerInterval);
  }
}

const qwertyKeys = [
  [
    { key: "` ~", keyCode: 192, name: "Backquote" },
    { key: "1 !", keyCode: 49, name: "Digit1" },
    { key: "2 @", keyCode: 50, name: "Digit2" },
    { key: "3 #", keyCode: 51, name: "Digit3" },
    { key: "4 $", keyCode: 52, name: "Digit4" },
    { key: "5 %", keyCode: 53, name: "Digit5" },
    { key: "6 ^", keyCode: 54, name: "Digit6" },
    { key: "7 &", keyCode: 55, name: "Digit7" },
    { key: "8 *", keyCode: 56, name: "Digit8" },
    { key: "9 (", keyCode: 57, name: "Digit9" },
    { key: "0 )", keyCode: 48, name: "Digit0" },
    { key: "- _", keyCode: 189, name: "Minus" },
    { key: "= +", keyCode: 187, name: "Equal" },
    { key: "Backspace", keyCode: 8, name: "Backspace" },
  ],
  [
    { key: "Tab", keyCode: 9, name: "Tab" },
    { key: "Q", keyCode: 81, name: "KeyQ" },
    { key: "W", keyCode: 87, name: "KeyW" },
    { key: "E", keyCode: 69, name: "KeyE" },
    { key: "R", keyCode: 82, name: "KeyR" },
    { key: "T", keyCode: 84, name: "KeyT" },
    { key: "Y", keyCode: 89, name: "KeyY" },
    { key: "U", keyCode: 85, name: "KeyU" },
    { key: "I", keyCode: 73, name: "KeyI" },
    { key: "O", keyCode: 79, name: "KeyO" },
    { key: "P", keyCode: 80, name: "KeyP" },
    { key: "[ {", keyCode: 219, name: "BracketLeft" },
    { key: "] }", keyCode: 221, name: "BracketRight" },
    { key: "\\ |", keyCode: 220, name: "Backslash" },
  ],
  [
    { key: "CapsLock", keyCode: 20, name: "CapsLock" },
    { key: "A", keyCode: 65, name: "KeyA" },
    { key: "S", keyCode: 83, name: "KeyS" },
    { key: "D", keyCode: 68, name: "KeyD" },
    { key: "F", keyCode: 70, name: "KeyF" },
    { key: "G", keyCode: 71, name: "KeyG" },
    { key: "H", keyCode: 72, name: "KeyH" },
    { key: "J", keyCode: 74, name: "KeyJ" },
    { key: "K", keyCode: 75, name: "KeyK" },
    { key: "L", keyCode: 76, name: "KeyL" },
    { key: "; :", keyCode: 186, name: "Semicolon" },
    { key: "' \"", keyCode: 222, name: "Quote" },
    { key: "Enter", keyCode: 13, name: "Enter" },
  ],
  [
    { key: "Shift", keyCode: 16, name: "ShiftLeft" },
    { key: "Z", keyCode: 90, name: "KeyZ" },
    { key: "X", keyCode: 88, name: "KeyX" },
    { key: "C", keyCode: 67, name: "KeyC" },
    { key: "V", keyCode: 86, name: "KeyV" },
    { key: "B", keyCode: 66, name: "KeyB" },
    { key: "N", keyCode: 78, name: "KeyN" },
    { key: "M", keyCode: 77, name: "KeyM" },
    { key: ", <", keyCode: 188, name: "Comma" },
    { key: ". >", keyCode: 190, name: "Period" },
    { key: "/ ?", keyCode: 191, name: "Slash" },
    { key: "Shift", keyCode: 16, name: "ShiftRight" },
  ],
  [{ key: "Space", keyCode: 32, name: "Space" }],
];

//Keyboard Crater & Visual Presentaion of key pressed
let keyboard = document.getElementById("keyboard");
qwertyKeys.forEach((item, index) => {
  item.forEach((e, i) => {
    let span = document.createElement("button");
    span.setAttribute("class", "keyboardKeys");
    span.setAttribute("id", e.name);
    span.innerText = e.key;
    keyboard.append(span);
  });
  keyboard.append(document.createElement("br"));
});
window.addEventListener("keypress", (e) => {
  new Audio("keyPressed.mp3").play();
  document.getElementById(e.code).classList.add("animate");
  setTimeout(() => {
    document.getElementById(e.code).classList.remove("animate");
  }, 200);
});

window.addEventListener("keydown", detectCapsLock);
window.addEventListener("keyup", detectCapsLock);

function detectCapsLock(e) {
  if (e.getModifierState("CapsLock")) {
    // new Audio("keyPressed.mp3").play();
    document.getElementById("CapsLock").classList.add("animate");
  } else {
    document.getElementById("CapsLock").classList.remove("animate");
  }
  if (e.getModifierState("Shift")) {
    if (e.location === 1) {
      new Audio("keyPressed.mp3").play();
      document.getElementById("ShiftLeft").classList.add("animate");
    }
    if (e.location === 2) {
      new Audio("keyPressed.mp3").play();
      document.getElementById("ShiftRight").classList.add("animate");
    }
  } else {
    if (e.location === 1) {
      document.getElementById("ShiftLeft").classList.remove("animate");
    }
    if (e.location === 2) {
      document.getElementById("ShiftRight").classList.remove("animate");
    }
  }
}

//Result Calculator && Updater
function result() {
  input.value = "";
  input.setAttribute("disabled", "disabled");
  let wpm = document.getElementById("wpm");
  let accuracyDom = document.getElementById("accuracy");
  let correctDom = document.getElementById("Result-correct");
  let wrongDom = document.getElementById("Result-wrong");
  let resultBox = document.getElementById("resultBox");
  let accuracy = (correctChar / totalTypedChar) * 100;
  wpm.innerText = "Typing Speed: " + Number(count + wrong) + " " + "Wps";
  accuracyDom.innerText = "Accuracy: " + accuracy + "%";
  correctDom.innerText = "Correct: " + count + " " + "words";
  wrongDom.innerText = "Wrong: " + wrong + " " + "words";
  resultBox.style.visibility = "visible";
  resultBox.style.animation = "blur 1s ease-in forwards";
}
