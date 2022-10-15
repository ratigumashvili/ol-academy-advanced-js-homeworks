import React from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Header from "./Header";

class TodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      showEditMenu: false,
      editTitle: "",
      errorContainer: null,
      errorMsg: "",
    };
  }

  render() {
    const { todos, todo, showEditMenu, editTitle, errorContainer, errorMsg } =
      this.state;

    const title = todos?.map((item) => item.title);

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

      if (title.some((newTitle) => newTitle === todo)) {
        this.setState({
          errorContainer: true,
          errorMsg: "Item's allready added, bro",
        });
      } else if (todo.length === 0) {
        this.setState({
          errorContainer: true,
          errorMsg: "You have to right down something, bro",
        });
      } else {
        this.setState({
          todos: [...todos, newTodo],
          todo: "",
          errorContainer: null,
        });
      }
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

    const handleOpenEditMenu = (item) => {
      this.setState({ showEditMenu: true, editTitle: item.title });
    };

    const handleSaveUpdated = (id) => {
      const updatedObj = [...todos].map((item) => {
        if (item.id === id && editTitle.length !== 0) {
          item.title = editTitle;
        }
        return item;
      });
      this.setState({
        todos: updatedObj,
        showEditMenu: false,
        editTitle: "",
        errorContainer: null,
        todo: "",
      });
    };

    const deleteAll = () => {
      this.setState({ todos: [] });
    };

    const deleteComplete = () => {
      const updatedList = [...todos].filter((item) => item.isComplete !== true);
      this.setState({ todos: updatedList });
    };

    return (
      <>
        <h1>Todos</h1>
        <Header deleteAll={deleteAll} deleteComplete={deleteComplete} />
        {errorContainer && <div>{errorMsg}</div>}
        <Form
          addTodo={addTodo}
          todo={todo}
          handleChangeInput={handleChangeInput}
        />
        <ul>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleOpenEditMenu={handleOpenEditMenu}
              handleSaveUpdated={handleSaveUpdated}
            />
          ))}
        </ul>
        {showEditMenu && (
          <div>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => this.setState({ editTitle: e.target.value })}
            />
          </div>
        )}
      </>
    );
  }
}

export default TodosComponent;
