

const Person = ({ydata}) => {

        console.log(ydata);

        console.log(ydata.name);

  return (
    <div>
        {/* { ydata.map(({name, img, tel}) => (
         name= {name} img ={img} tel
    ))}
        <h1>My name is {name}</h1> */}
        <img src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person