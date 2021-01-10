import React from "react";

const Todo = ({key, item, items ,handleDelete,setItems}) => {

  return (
    <li>
      <p>{item}</p>
      <button onClick={handleDelete(key)}>Delete</button>
    </li>
  );
};

export default Todo;
