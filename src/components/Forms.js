import React from "react";

const Forms = ({ handleInput, handleSubmit, data }) => {
  return (
    <article>
      <form>
        <input
          type="text"
          onChange={handleInput}
          value={data}
          placeholder="Add a new Todo"
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </article>
  );
};

export default Forms;
