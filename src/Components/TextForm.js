import React, { useState } from "react";

export default function TextForm() {
  const HandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const HandleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const HandleCapClick = () => {
    let newText = text.split(" ").map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    setText(newText)
  }
  const HandleRevClick = () => {
    let newText = text.split(" ").reverse().join(' ');
    setText(newText)
  }
  const HandleSpeClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  const HandleStoClick = () => {
    window.speechSynthesis.cancel();
  }
  const HandleClearClick = () => {
    let newText = ("");
    setText(newText)
  }
  const HandleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h2>Enter the text you want to analyse</h2>
        <textarea className="form-control" placeholder="Enter here" id="mybox" onChange={HandleOnChange} rows="8" value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleLowClick}>LowerCase</button>
      <button className="btn btn-primary" onClick={HandleCapClick}>Captialize Case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleRevClick}>Reverse Text</button>
      <button className="btn btn-primary" onClick={HandleSpeClick}>Text-to-Speech</button>
      <button className="btn btn-primary mx-2 my-2" onClick={HandleStoClick}>Stop</button>
      <button className="btn btn-primary" onClick={HandleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
    <h3>Your text summary</h3>
    <p> {text.split(" ").length} Words {text.length} Characters</p>
    {/* <p>{0.008 * text.length} minutes to read</p> */}
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  );
}
