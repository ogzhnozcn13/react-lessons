

import nature from "./img/wild-nature.jpg"

import "./Content2.css"

const Content2 = () => {
  return (
    <div className="content-div">
      <h2 style={{color: "red" , backgroundColor: "green"}}>başlık</h2>
      <p style={pstyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate unde ipsa omnis commodi ea soluta perferendis labore illum sit!
      </p>
      <img style={imgStyle} src="https://wallpaperaccess.com/full/2027099.jpg" alt="" />
      <img style={imgStyle} src= {nature} alt="" />

      <p className="par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis et repellendus culpa deleniti placeat, alias illum quae dolorem non recusandae, repudiandae aperiam nobis ducimus? Vero expedita reiciendis nulla tempore, exercitationem recusandae est eveniet consectetur eius explicabo molestiae unde, dolores voluptatum perspiciatis nemo maxime deserunt nobis omnis amet? Officia, natus non.</p>
      <p className="par">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto natus non dolorum vitae alias fugiat debitis eveniet quaerat nemo consequatur nulla iure minima labore, nisi voluptatem. Dicta obcaecati inventore saepe.</p>
    </div>
  )
}

  const pstyle = {
    fontFamily: "Verdana",
    fontSize: "3rem"
  }
  
  const imgStyle = {
    display: "block",
    height: "200px"
  }

export default Content2