import React, {useState} from 'react'



export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log('handle on change ');
        setText(event.target.value)
    }
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        console.log(text);
    }
    const handleLoClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        console.log(text);
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text Here.." id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower case</button>
            <button className="btn btn-primary " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.004 * text.split(" ").length} Minutes Needed to Read</p>
        </div>
        </>
    )
}
