import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success")
    }
    const handleLoClick=()=>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to LowerCase!" , "success")
    }
    const handleClearClick=()=>{
      let newText = " "
      setText(newText)
      props.showAlert("All texts cleared!" , "danger")
    }
    const handleOnChnage=(event)=>{
        setText(event.target.value)
    }
    const [text , setText] = useState(" ");
  return (
    <>
    <div className='container' style={{color: props.mode ==="dark"?"white" :"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}onChange={handleOnChnage}  style={{backgroundColor: props.mode ==="dark" ?"#13466e" : "white" ,color: props.mode ==="dark"?"white" :"#042743"}}> </textarea>

        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled ={text.length===0} className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container" style={{color: props.mode ==="dark"?"white" :"#042743"}} >
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>1?text:"Nothing To Preview "}</p>

    </div>
    </>
  )
}
