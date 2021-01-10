import React from "react";
//imported component
import Todo from "./Todo";

const Todos = ({ items, setItems,  handleDelete }) => {
  return (
    <section className="todo">
      <ul>
        {items.map((item,index) => {
          return <Todo key={index} item={item} handleDelete={handleDelete} items={items} setItems={setItems} />;
        })}
      </ul>
    </section>
  );
};

export default Todos;
