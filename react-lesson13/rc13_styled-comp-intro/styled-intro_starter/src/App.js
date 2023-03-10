import { Button, OZI } from "./components/Buton.styled";
import HeaderText from "./components/Header.styled";
import Links from "./components/Links.styled";
import Sarmal from "./components/Sarmal.styled";

const App = () => {
  return (

    <>
    <Sarmal>
      <HeaderText>Styled Components</HeaderText>
      <HeaderText color>Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <OZI react>Koş</OZI>
      <OZI>Yürü</OZI>
    </Sarmal>
    
    <Sarmal>
      <Links href="https://www.google.com" target="blank">Google</Links>
      <Links small href="https://www.reactjs.org" target="blank">React</Links>
    </Sarmal>
    </>

  );
};

export default App;
 