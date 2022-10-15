import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnState: "edit",
    };
  }
  render() {
    const { btnState } = this.state;
    const {
      item,
      handleDelete,
      handleComplete,
      handleOpenEditMenu,
      handleSaveUpdated,
    } = this.props;

    const callback = () => {
      if (btnState === "edit") {
        this.setState({ btnState: "save" });
      } else {
        this.setState({ btnState: "edit" });
      }
    };

    return (
      <>
        <li>
          <div>
            <input type="checkbox" onChange={() => handleComplete(item.id)} />{" "}
            <span className={`${item.isComplete === true && "mark"}`}>
              {item.title}
            </span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            {btnState === "edit" ? (
              <button onClick={() => handleOpenEditMenu(item, callback())}>
                Edit
              </button>
            ) : (
              <button onClick={() => handleSaveUpdated(item.id, callback())}>
                Save
              </button>
            )}
          </div>
        </li>
      </>
    );
  }
}

export default TodoItem;
