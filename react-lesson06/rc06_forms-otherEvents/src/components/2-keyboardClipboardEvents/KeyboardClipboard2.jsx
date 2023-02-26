import { useState } from "react"


const KeyboardClipboard2 = () => {

    const [inputData, setInputData] = useState("")

    const handleKeyDown = (e) => {
      console.log(e.keyCode);
      if(e.keyCode >= 48 && e.keyCode <= 57){
        alert("Dont enter number!")
        e.preventDefault()
      }
    }
    

    const handleAreaPaste = (e) => {
      console.log(e);
      e.target.style.fontSize = "30px"
      e.target.style.border = "5px solid red"
      e.target.style.backgroundColor = "yellow"

      e.target.value += e.clipboardData.getData("text").toLocaleUpperCase()
    }

    const handleParCopy = (e) => {
      alert("you can not copy")
      e.preventDefault()
    }

    const handleParCut = (e) => {
      alert("kesmeee!!...")
      e.preventDefault()
    }


    // const handleChange = () => {
    // }

  return (
    <div className="container text-danger" onCut={handleParCut}>
        <h2 className="display-5">Keyboard-Clipboard Event
        </h2>

        <input type="text" className="form-control"
        onChange={(e) => {
            e.target.value = e.target.value.toLocaleUpperCase() 
            setInputData(e.target.value)
        }}
        onKeyDown= {handleKeyDown}/>

        <div className="text-start mt-4">
            <h6>Copied Input Data</h6>
            <p onCopy={handleParCopy}>{inputData.toLocaleLowerCase()}</p>
        </div>

        <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="10" onPaste={handleAreaPaste}></textarea>




        <br /><br /><hr />
    </div>
  )
}

export default KeyboardClipboard2