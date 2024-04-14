import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleUpOnChange= (i)=>{
        //console.log('Hello');
        setText(i.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
        <div>
            <div className="mt-3 mb-3">
                <label htmlFor="textBox" className="form-label">{props.label}</label>
                <textarea className="form-control" value={text} onChange={handleUpOnChange} id="textBox" rows="10"></textarea>  
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
