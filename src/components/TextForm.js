import React, {useState} from 'react'



export default function TextForm(props) {

const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
}


const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
}

const handleRemSpClick = () =>{
  let newText = text.replaceAll(' ', '');
  setText(newText);
  props.showAlert("Spaces Removed !", "success");
}

const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Text In Speech !", "success");

}

const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard !", "success");
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces Removed !", "success");
}

const [text, setText] = useState('');
  return (
    <>
    <div  className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
    </div> 
    <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleRemSpClick}>Remove Spaces</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
     <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>Your Text Summary</h1>
       <p >{((text.trim().split(" ")).filter(function (element) {
          return element !== "";})).length} words and {text.length} characters </p>
       <p>{0.008 * text.split(" ").length} Minutes Read</p>
     </div>

     <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
     <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter your text to preview it here"}</p>
    </>
  )
}
