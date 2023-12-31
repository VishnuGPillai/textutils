import React, { useState } from 'react'

export default function TextForm(props) {
    // let [wc, setWC] = useState();
    let [wordCount, setWordCount] = useState(0);
    const [text, setText] = useState('Enter Text Here');

    const handleOnChange = (event) => {
        setText(event.target.value)
        let rtext = (text.split(/[ ]+/))
        let wc = rtext.join(" ");
        let nwc = (wc.split(' ').length)
        setWordCount(nwc);
    }
    const handleChange = (event) => {
        setText('')
    }
    const CopyText = () => {
        let texxt = document.getElementById("myBox")
        texxt.select()
        navigator.clipboard.writeText(texxt.value)
        props.ShowAlert("success", "Message copied !")
    }

    const toUpperCase = () => {
        let newText = text.toUpperCase().trim()
        setText(newText);
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase().trim()
        setText(newText);
    }
    const RemoveSpace = () => {
        let rtext = (text.split(/[ ]+/))
        setText(rtext.join(" "))
    }
    return (
        <>
            <div >
                <h1>{props.heading}</h1>
                <div className="mb-3 ">

                    <textarea style={{
                        color: props.mode === 'light' ? 'black' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#110b2e'
                    }}
                        id='myBox' className="form-control" value={text} onChange={handleOnChange} onClick={handleChange} rows="8" ></textarea>
                </div>
                <button className=" btn btn-primary" onClick={toUpperCase}>Convert to Uppercase</button>
                <button className=" btn btn-primary mx-3" onClick={toLowerCase}>Convert to Lowercase</button>
                <button className=" btn btn-primary mx-3" onClick={CopyText}>Copy Text</button>
                <button className=" btn btn-primary mx-3" onClick={RemoveSpace}>Remove Extra Spaces</button>
                <div className='container my-3'>
                    <h2>Your Text Summary</h2>
                    <h4 >Your text has:</h4>
                    <span className='btn btn-danger' >{wordCount} Words</span>
                    <span className='ms-3'> and</span>
                    <span className='btn btn-primary mx-4' >{text.length} letters </span>
                    <span className='btn btn-danger mx-4' >{text.split('.').length - 1} Sentences </span>
                    <h2 >Preview Text</h2>
                    {text}
                </div>
            </div >
        </>

    )
}
