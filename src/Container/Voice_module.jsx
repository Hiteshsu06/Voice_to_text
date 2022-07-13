import React from 'react';
import './Voice_module.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voice_module = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <div>
         <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onMouseOver={SpeechRecognition.startListening} onMouseOut={SpeechRecognition.stopListening}>SAY</button>
      <p style={{fontSize:"100px"}}>{transcript}</p>
    </div>
    </div>
  )
}

export default Voice_module