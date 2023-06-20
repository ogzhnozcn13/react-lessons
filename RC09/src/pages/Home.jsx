import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";


const Home = () => {

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/turorials/"

  const getTutorials = async() => {
    const data = await axios(BASE_URL)
    console.log(data.data);
  }

  getTutorials()

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
