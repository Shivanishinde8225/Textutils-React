import React, { useState } from 'react'

export default function TextBox(props) {
    const [text, settext] = useState('');
    const handleClick = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlter("Uppercase Enable ","success");
    };
    const handleClick2 = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlter("LowerCase Enable ","success");
    };
    const handleClick3=()=>{
        settext(" ");
        props.showAlter("Text cleared ","success");
    }
    const handleonChange = (event) => {
        settext(event.target.value);
    }
    const handleClick4=()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlter("Spaces removed ","success");
    }
    return (
        <>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <div className="form-group">
                    <label htmlFor="text">{props.heading}</label>
                    <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleonChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} id="myBox" rows="7" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" type="submit" onClick={handleClick} >MakeUppercase</button>
                <button className="btn btn-primary mx-2" type="submit" onClick={handleClick2} >MakeLowercase</button>
                <button className="btn btn-primary mx-2" type="submit" onClick={handleClick3} >Clear text</button>
                <button className="btn btn-primary" type="submit" onClick={handleClick4} >Remove Spaces</button>
                <div className="container my-3">
                    <h6>Text Summary</h6>
                    <p>{text.split(" ").length} Words and {text.length} Characters</p>
                    <p>{0.008 *text.split(" ").length} minut to read</p>
                    <h6>Preview</h6>
                    <p>{text}</p>
                </div>

            </div>
        </>

    )
}
