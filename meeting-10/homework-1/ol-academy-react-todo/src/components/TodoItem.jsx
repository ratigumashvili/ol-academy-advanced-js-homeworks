import React from "react";

class TodoItem extends React.Component {
  render() {
    const {
      item,
      handleDelete,
      handleComplete,
      handleOpenEditMenu,
      handleMove,
      up,
      down,
      showControls,
    } = this.props;

    return (
      <>
        <li>
          <div>
            <input type="checkbox" onChange={() => handleComplete(item.id)} />{" "}
            <span className={`${item.isComplete === true && "mark"}`}>
              {item.title}
            </span>
            {showControls && (
              <>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleOpenEditMenu(item)}>Edit</button>
                <button onClick={() => handleMove(item.id, up)}>Up</button>
                <button onClick={() => handleMove(item.id, down)}>Down</button>
              </>
            )}
          </div>
        </li>
      </>
    );
  }
}

export default TodoItem;
