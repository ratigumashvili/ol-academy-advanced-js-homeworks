import React from "react";

class Form extends React.Component {
  render() {
    const { addTodo, todo, handleChangeInput } = this.props;
    return (
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add your task"
          value={todo}
          onChange={handleChangeInput}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
