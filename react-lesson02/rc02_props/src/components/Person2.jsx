import Msg2 from "./Msg2"


const Person2 = (props) => {

    const {name,tel,img} = props

  return (
    <div>
        <Msg2/>
        <h2>Hi Im {name}</h2>
        <img src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person2