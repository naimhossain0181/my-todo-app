import CreateTOdo from "../components/todo/CreateTodo";
import ListTodo from "../components/todo/ListTodo";

function TodoPages() {
  return (
    <>
      <div className="container">
        <div>
          <CreateTOdo></CreateTOdo>
          <ListTodo></ListTodo>
        </div>
      </div>
    </>
  );
}

export default TodoPages;
