# Speech Synthesis Web App

This web application uses the Web Speech API to convert text to speech, allowing users to select different voices and speak text entered into a textarea.

## Features
- **Voice Selection**: Choose from a list of available voices.
- **Text-to-Speech**: Convert the entered text into speech using the selected voice.

## Getting Started

### Prerequisites
- A modern web browser with support for the Web Speech API (e.g., Chrome, Firefox).

### Installation
No installation required. Simply open the `index.html` file in your web browser.

### Usage
1. Open the `index.html` file in your browser.
2. Select a voice from the dropdown menu.
3. Enter text into the textarea.
4. Click the button to speak the text.

### Code Explanation

#### JavaScript
```javascript
// Create a new SpeechSynthesisUtterance instance
let speech = new SpeechSynthesisUtterance();

// Initialize voices array
let voices = [];

// Get the select element
let selectVoice = document.getElementsByTagName("select")[0];

// Event listener for when voices have changed (usually on page load)
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  // Set the default voice
    voices.forEach((voice, i) => {
        selectVoice.options[i] = new Option(voice.name, i);
    });
};

// Event listener for voice selection change
selectVoice.addEventListener("change", () => {
    speech.voice = voices[selectVoice.value];
});

// Event listener for button click to speak the text
document.getElementsByTagName("button")[0].addEventListener("click", () => {
    speech.text = document.getElementsByTagName("textarea")[0].value;
    window.speechSynthesis.speak(speech);
});
