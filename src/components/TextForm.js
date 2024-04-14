import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        let newTransform = "Text converted to Uppercase successfully!";
        setText(newText);
        setTransform(newTransform);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        let newTransform = "Text converted to Lowercase successfully!";
        setText(newText);
        setTransform(newTransform);
    }

    const handleUpOnChange= (i)=>{
        //console.log('Hello');
        setText(i.target.value);
        let newTransform = "Processing...";
        setTransform(newTransform);
    }
    const [text, setText] = useState('');
    const [transform, setTransform] = useState();
    return (
        <div>
            <div className="mt-3 mb-3">
                <h2 className="form-label mb-3">{props.label}</h2>
                <p>{transform}</p>
                <textarea className="form-control" value={text} onChange={handleUpOnChange} id="textBox" rows="10"></textarea>  
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
            <div className="row my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} Words, {text.length} Characters and it will take around { 0.008 * text.split(" ").length } minutes to read above paragraph</p>
                <h4>Preview Your Text</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
