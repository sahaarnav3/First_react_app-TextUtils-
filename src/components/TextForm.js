import React, { useState } from 'react'



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
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        console.log(text);
        props.showAlert("Converted to Lower Case", "success");
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spacing Removed", "success");
    }
    const wordCount = (text) => {
        if(text[0] == null)
            return 0;
        let newText = text.replace(/(^\s*)|(\s*$)/gi,"");
        // newText = newText.replace(/\n /,"\n");
        let n = newText.split(/[ ]+/).length;
        if(text[n-1] == " ")
            return n-1;
        else    
            return n;
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container my-5">
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
                {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
                <p>{wordCount(text)} words and {text.length} characters</p>
                <p>{0.004 * text.split(" ").length} Minutes Needed to Read</p>
            </div>
        </>
    )
}
