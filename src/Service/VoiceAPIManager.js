export function voiceover(text){
    console.log("voiceOver start!")
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate=1;
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);

}

export function pauseVoice(){
    if(speechSynthesis.speaking){
        speechSynthesis.pause();
    }
}

export function stopVoice(){
    speechSynthesis.resume();
    speechSynthesis.cancel();
}