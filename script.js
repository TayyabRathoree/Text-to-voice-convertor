let speech = new SpeechSynthesisUtterance()

let voices = []

let selectVoice = document.getElementsByTagName("select")[0]

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]

    voices.forEach((voice,i) => (selectVoice.options[i] = new Option(voice.name, i )))
}

selectVoice.addEventListener("change", () =>{
    speech.voice = voices[selectVoice.value];
})

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    speech.text = document.getElementsByTagName("textarea")[0].value

    window.speechSynthesis.speak(speech);

})