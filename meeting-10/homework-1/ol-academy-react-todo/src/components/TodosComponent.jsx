import React from "react";
import { Form, TodoItem, Header, ErrorNotification } from "./Index";

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
      grabedId: "",
      showControls: true,
    };
  }

  render() {
    const {
      todos,
      todo,
      showEditMenu,
      editTitle,
      errorContainer,
      errorMsg,
      showControls,
      grabedId,
    } = this.state;

    const title = todos?.map((item) => item.title);
    const up = -1;
    const down = 1;

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
          errorMsg: "Item with such title already registered",
        });
      } else if (todo.length === 0) {
        this.setState({
          errorContainer: true,
          errorMsg: "Input field must not be empty",
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
      this.setState({ todos: updatedList, showEditMenu: false });
    };

    const handleComplete = (id) => {
      const updatedList = [...todos].map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      this.setState({ todos: updatedList });
    };

    const handleOpenEditMenu = (item) => {
      this.setState({
        showEditMenu: true,
        editTitle: item.title,
        grabedId: item.id,
        showControls: false,
      });
    };

    const handleSaveEdited = () => {
      const allTitles = todos.map((item) => item.title);
      const isTitle = allTitles.some((nt) => nt === editTitle);
      const updatedObj = [...todos].map((item) => {
        if (item.id === grabedId && editTitle.length !== 0 && !isTitle) {
          item.title = editTitle;
        }
        return item;
      });
      if (isTitle) {
        this.setState({
          errorContainer: true,
          errorMsg: "Item with such title already registered",
        });
      } else {
        this.setState({
          todos: updatedObj,
          showEditMenu: false,
          editTitle: "",
          errorContainer: null,
          todo: "",
          showControls: true,
        });
      }
    };

    const handleMove = (id, direction) => {
      const position = todos.findIndex((i) => i.id === id);

      if (
        (direction === up && position === 0) ||
        (direction === down && position === todos.length - 1)
      ) {
        return;
      }

      const item = todos[position];
      const reordered = todos.filter((i) => i.id !== id);
      reordered.splice(position + direction, 0, item);

      this.setState({ todos: reordered });
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
        <Header
          title="Todos"
          deleteAll={deleteAll}
          deleteComplete={deleteComplete}
          todos={todos}
        />
        {errorContainer && <ErrorNotification errorMsg={errorMsg} />}
        <Form
          addTodo={addTodo}
          todo={todo}
          handleChangeInput={handleChangeInput}
        />
        <ul className="todo-list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleOpenEditMenu={handleOpenEditMenu}
              handleMove={handleMove}
              up={up}
              down={down}
              showControls={showControls}
            />
          ))}
        </ul>
        {showEditMenu && (
          <div className="edit-menu">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => this.setState({ editTitle: e.target.value })}
            />
            <button onClick={handleSaveEdited}>Save</button>
          </div>
        )}
      </>
    );
  }
}

export default TodosComponent;
