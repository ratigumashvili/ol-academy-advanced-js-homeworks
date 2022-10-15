import React from "react";

class TodoItem extends React.Component {
  render() {
    const { id, title, handleDelete, handleComplete } = this.props;
    return (
      <li>
        <div>
          <input type="checkbox" onChange={() => handleComplete(id)} /> {title}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
