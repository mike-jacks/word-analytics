"use strict";

const twitterCharsAllowed = 280;
const facebookCharsAllowed = 2200;

const textareaEl = document.querySelector(".textarea");
const wordsCountValue = document.querySelector(".stat__number--words");
const charactersCountValue = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

function checkCharacterLimit(countElement) {
  if (countElement.textContent <= 10 && countElement.textContent >= 0) {
    countElement.classList.add("stat__number--at-zero");
    countElement.classList.remove("stat__number--over-limit");
  } else if (countElement.textContent < 0) {
    countElement.classList.add("stat__number--over-limit");
    countElement.classList.remove("stat__number--at-zero");
  } else {
    countElement.classList.remove("stat__number--over-limit");
    countElement.classList.remove("stat__number--at-zero");
  }
}

function countWordsAndCharacters(e) {
  // determine new numbers
  const textAreaString = textareaEl.value;
  let characterCount = textareaEl.value.trim().length;
  let wordCount = textAreaString.trim().split(" ").length;
  let twitterCharactersLeft = twitterCharsAllowed - characterCount;
  let facebookCharsLeft = facebookCharsAllowed - characterCount;
  if (textAreaString === "") {
    wordCount = 0;
    characterCount = 0;
  }

  // set new numbers
  charactersCountValue.textContent = characterCount;
  wordsCountValue.textContent = wordCount;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharsLeft;

  checkCharacterLimit(twitterNumberEl);
  checkCharacterLimit(facebookNumberEl);
}

textareaEl.addEventListener("input", countWordsAndCharacters);
