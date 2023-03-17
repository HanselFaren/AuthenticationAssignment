import Modal from "./Modal";
import { useState } from "react";
import "../styles/editTodo.css";

function EditTodo({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);

  /* function to update document in firestore */

  return (
    <Modal modalLable="Edit Todo" onClose={onClose} open={open}>
      <form className="editTodo" name="updateTodo">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTodo;
