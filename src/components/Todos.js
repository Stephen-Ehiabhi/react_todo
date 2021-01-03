import React from "react";
//imported component
import Todo from "./Todo";

const Todos = ({ items }) => {
  return (
    <section className="todo">
      <ul>
        {items.map((item) => {
          return <Todo key={item.id} item={item} items={items} />;
        })}
      </ul>
    </section>
  );
};

export default Todos;
