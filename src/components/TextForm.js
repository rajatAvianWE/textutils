import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleUpOnChange= (i)=>{
        //console.log('Hello');
        setText(i.target.value);
    }
    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="mt-3 mb-3">
                <h2 className="form-label mb-3">{props.label}</h2>
                <textarea className="form-control" value={text} onChange={handleUpOnChange} id="textBox" rows="10" placeholder="Enter your text here to transform."></textarea>  
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-danger' onClick={handleClearText}>Clear Text</button>
            <div className="row my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} Words, {text.length} Characters and it will take around { 0.008 * text.split(" ").length } minutes to read above paragraph</p>
                <h4>Preview Your Text</h4>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>
            </div>
        </div>
    )
}
