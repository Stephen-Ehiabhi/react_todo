import React from "react";

const Todo = ({ item, items}) => {
  //function to handle the list delete
  function handleDelete() {
    items.filter((item) => item.key !== items.key);
    console.log("delete clicked");
  }
  return (
    <div>
      <p>{item}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
