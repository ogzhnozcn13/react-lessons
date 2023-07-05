import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
// const tutorials = [
//   {
//     id: 1,
//     title: "JS",
//     description: "JS is a programming language",
//   },
//   {
//     id: 2,
//     title: "React",
//     description: "JS library for UI design",
//   },
// ]
const TutorialList = ({ tutorials }) => {

  const deleteTutorial = async(id) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.delete(`${BASE_URL}/${id}/`)
    } catch (error) {
      console.log(error);
    }
  }

  const editTutorial = async({id, title, descriiption}) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.put(`${BASE_URL}/${id}/`, {title,descriiption})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-tutor"
                    onClick={() => editTutorial({
                      id: 1670,
                      title: "Deneme",
                      description: "rerere"
                    })}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
