// Declare variables and vowels
const inputElement = document.getElementById("inputText");
const outputElement = document.getElementById("outputText");
const vowels = ["a", "e", "i", "o", "u"];

// Function to translate text to Pig Latin
function translateToPigLatin() {
  // Text Input entered by user to translate
  const inputText = inputElement.value

  // Clear previous translation
  outputElement.textContent = "";

  // Creates warning text if input is empty
  if (!inputText) {
    outputElement.textContent = "Warning: Add a word to translate!";
    return;
  }

  // Split the input text into words
  const words = inputText.toLowerCase().split(" ");

  // Array to store the translated words
  const translatedWords = words.map(word => {
    // Check if word is a single letter
    if (word.length === 1) {
      return word;
    }

    // Apply Pig Latin rules to translate the word
    if (vowels.includes(word[0])) {
      return word + "way";
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    } else {
      return word.slice(1) + word[0] + "ay";
    }
  });

  // Translates the inputed text 
  const translatedText = translatedWords.join(" ");

  // Display the translated text
  outputElement.textContent = translatedText;
}