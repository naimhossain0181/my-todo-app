import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/state/todo/TodoSlice";
import "../../assest/style.css";

function CreateTOdo() {
  const itemVaule = useRef();
  const dispatch = useDispatch();
  // addButton Handller function
  const addHandler = () => {
    dispatch(addItem(itemVaule.current.value));
    itemVaule.current.value = "";
  };
  return (
    <>
      <div className="card my-5">
        <div className="card-header">
          <h2 className="color">Todo App Using Redux</h2>
        </div>
        <div className="card-body">
          <input
            ref={itemVaule}
            className="input"
            type="text"
            placeholder="Type here"
          />
          <button
            className="btn btn-secondary"
            onClick={() => {
              addHandler();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTOdo;
