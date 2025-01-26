alert("zoom out to 90% if you are on PC");

const facts = [
    "Welcome to my website(still in wip)",
    "I'm bad at scripting😭",
    "I made this website to prove my older brother that i can make a web(he told me its impossible)",
    "Did you know that I used chatgpt to create this because I don't know how to script javascript?",
    "Edging rizzler is the best🤫🧏",
    "Did you know this website is being made to be an unblocker because some guy called jase asked me to make an unblocker(not really)?",
    "Did you know that this was inspired by that one data:text/html website i made in december 2024?"
  ];
  
  function changeText(element, textArray, delay = 0) {
    let currentTextIndex = 0;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetweenTexts = 1500;
  
    function typeText() {
      const text = textArray[currentTextIndex];
      let currentCharIndex = 0;
  
      function typeChar() {
        if (currentCharIndex < text.length) {
          element.innerText += text[currentCharIndex];
          currentCharIndex++;
          setTimeout(typeChar, typingSpeed);
        } else {
          setTimeout(deleteText, pauseBetweenTexts);
        }
      }
  
      function deleteText() {
        let currentCharIndexToDelete = text.length;
  
        function deleteChar() {
          if (currentCharIndexToDelete > 0) {
            element.innerText = text.substring(0, currentCharIndexToDelete - 1);
            currentCharIndexToDelete--;
            setTimeout(deleteChar, deletingSpeed);
          } else {
            currentTextIndex = (currentTextIndex + 1) % textArray.length; // Loop through the texts
            setTimeout(typeText, typingSpeed);
          }
        }
  
        deleteChar();
      }
  
      typeChar();
    }
  
    setTimeout(typeText, delay);
  }
  
  window.onload = function() {
    const factElement = document.getElementById("fact");
    factElement.classList.add('typing');
    changeText(factElement, facts);
  };
  


// Array with the different text options
const texts = [
  "amongussy",
  "sussyrizz",
  "ABDI IS GAY",
  "mewing is sigma🤫🧏"
];

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get a random index from the texts array
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  // Set the random text to the h2 element with id 'Text'
  document.getElementById("Text").textContent = randomText;
});

