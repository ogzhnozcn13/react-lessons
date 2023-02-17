import Card from "./components/card/Card"
import data from "./utils/data"

import Card2 from "./components2/card2/Card2"
import data2 from "./utils/data2"

function App() {
  console.log(data)
  return (
    <>
    <Card2/>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </>
  )
}

export default App
