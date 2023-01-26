import { useSelector } from "react-redux";
import { editHandler } from "./EditAlert";
import { removeHandler } from "./RemoveAlert";
function ListTodo() {
  let todoValue = useSelector((state) => state.todo.value);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table bg bg-secondary">
            <thead>
              <tr>
                <th>Index</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {todoValue.map((item, i) => {
                return (
                  <tr key={toString(i)}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          editHandler(item, i);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          removeHandler(i);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
