import React from "react";
import TodoItem from "./TodoItem";

class TodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
    };
  }

  render() {
    const { todos, todo } = this.state;

    const handleChangeInput = (e) => {
      this.setState({ todo: e.target.value });
    };
    const addTodo = (e) => {
      e.preventDefault();
      const newTodo = {
        id: Date.now(),
        title: todo,
        isComplete: false,
      };
      this.setState({ todos: [...todos, newTodo] });
      this.setState({ todo: "" });
    };

    const handleDelete = (id) => {
      const updatedList = [...todos].filter((item) => item.id !== id);
      this.setState({ todos: updatedList });
    };

    const handleComplete = (id) => {
      const updatedList = [...todos].map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      this.setState({ todos: updatedList });
      console.log(todos);
    };

    return (
      <>
        <h1>Todos</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add your task"
            value={todo}
            onChange={handleChangeInput}
          />
          <button type="submit">Click</button>
        </form>
        <ul>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodosComponent;
