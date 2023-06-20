import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { axios } from "react";
import EditTutorial from "./EditTutorial";

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

const TutorialList = ({ tutorials, getTutorials }) => {
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${BASE_URL} ${id}`);
    } catch (error) {}
    getTutorials();
  };

  const editTutorial = async ({ id, title, description }) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    try {
      await axios.put(`${BASE_URL} ${id}`, { title, description });
    } catch (error) {}
    getTutorials();
  };

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
                    onClick={() =>
                      editTutorial({
                        id: 1062,
                        title: "Deneme",
                        description: "REACT",
                      })
                    }
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

      <EditTutorial />
    </div>
  );
};

export default TutorialList;
