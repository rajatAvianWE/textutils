import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlert("Text converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.handleAlert("Text converted to Lowercase!", "success");
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.handleAlert("Text cleared from textbox!", "success");
    }

    const handleUpOnChange= (i)=>{
        //console.log('Hello');
        const newText = i.target.value;
        setText(newText);
        sanitizeAndWordCount(newText);
    }
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const sanitizeAndWordCount = (inputText)=>{
        const sanitizedText = inputText.trim();
        const wordArray = sanitizedText.split(/\s+/);
        const realWordCount = wordArray.filter(word => word !=='').length;
        setWordCount(realWordCount); 
    }
    
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
                <p>{wordCount} Words, {text.length} Characters and it will take around { parseFloat((0.008 * wordCount).toFixed(1)) } minutes to read above paragraph</p>
                <h4>Preview Your Text</h4>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>
            </div>
        </div>
    )
}
