import './Main.css'

const Main = (props) => {

  const {img, title, desc} = props

  return (
    <div className='main'>
      <div className="card">
      <img src={img} alt="" width={200} className="mainİmg"/>

      <h4>{title}</h4>

      <div className="desc">
        <p>{desc}</p>
      </div>

      <button className='btn'>More Detail</button>
      </div>
    </div>
  )
}

export default Main