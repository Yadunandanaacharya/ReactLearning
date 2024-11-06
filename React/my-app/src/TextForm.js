import React, { useState } from 'react'

export default function TextForm(props) {
    

    const [prevText, updatedText] = useState("Enter text here"); 
    prevText="value changed"
    // updatedText("New text");
    console.log(prevText);
    return (
        <div>
            <h1 >{props.heading} - {prevText}</h1>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={prevText}></textarea>
            </div>

            <button className='btn btn-primary' onClick={handleUpperCaseClick}>Convert</button>
        </div>
    )
}


