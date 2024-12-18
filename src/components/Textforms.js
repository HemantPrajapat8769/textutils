import React,{useState}  from 'react'

export default function Textforms(props) {
    const handleUpClick= () =>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upperCase!","Success:")
    }
    const handleLowClick= () =>{
        let newText= text.toLowerCase()
        setText(newText)
         props.showAlert("Converted to lowerCase!","Success:")
    }
    const handleClearClick= () =>{
        let newText= ""
        setText(newText)
        props.showAlert("Text is cleared!","Success:")
    }
    
    const HandleOnChange = (event) =>{
        setText(event.target.value)
    }
    const speak = () => {

        let msg = new SpeechSynthesisUtterance();
      
        msg.text = text;
      
        window.speechSynthesis.speak(msg);
      
    }
    const handleExtraspaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","Success:")
    }

    const [text, setText]= useState('');
    
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e' :'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleLowClick}>convert to Lowercase</button>
             <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleExtraspaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
        
        
    )
}
