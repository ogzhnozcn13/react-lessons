import { useState } from "react"

const KeyboardClipboard = () => {

  const [inputData, setInputData] = useState("")

  const handleChange = (e) => {
    e.target.value = e.target.value.toUpperCase()
    setInputData(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.keyCode >=48 && 57 >= e.keyCode){
      alert(`Dont enter a number!`)
      e.preventDefault()
    }
  }

  const handleAreaPaste = (e) => {
    e.target.style.border = "3px solid red"
    e.target.style.fontSize = "20px"
    e.target.style.backgroundColor = "yellow"
  }

  const handleCopy = (e) => {
    alert(`dont do this bro`)
    e.preventDefault()
  }


  return (
    <div className="container text-center">

      <h2 className="text-danger display-5">KeyboardClipboard</h2>

      <input type="text" className="form-control" onChange={handleChange} onKeyDown={handleKeyDown}/>

      <p className="mt-3 text-start" onCopy={handleCopy}>Your Text: {inputData.toLowerCase()}</p>

      <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="10" onPaste={handleAreaPaste}></textarea>
    </div>
  )
}

export default KeyboardClipboard