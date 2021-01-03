import React, { useState } from "react";
//import components
import Header from "./components/Header";
import Todos from "./components/Todos";
import Forms from "./components/Forms";

const TodoList = () => {
  // State
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  //function to handle the submit function
  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, data]);
    setData("");
  }

  //function to handle the input input
  function handleInput(e) {
    setData(e.target.value);
  }


  return (
    <div className="container">
      <section className="todo-cont">
        <Header />
        <Todos items={items} />
        <Forms
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          data={data}
        />
      </section>
    </div>
  );
};

export default TodoList;
