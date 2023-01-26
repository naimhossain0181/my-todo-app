import Swal from "sweetalert2";
import { editItem } from "../../redux/state/todo/TodoSlice";
import store from "../../redux/store/store";
export const editHandler = (item, i) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Are You want to Edit this?!",
    input: "text",
    showCancelButton: true,
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editItem({ index: i, task: value }));
      }
    },
  });
};
