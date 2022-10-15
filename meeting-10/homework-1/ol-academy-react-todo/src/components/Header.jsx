import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deleteAll, deleteComplete } = this.props;
    return (
      <div>
        <button onClick={deleteAll}>Delete All</button>
        <button onClick={deleteComplete}>Delete Complete</button>
      </div>
    );
  }
}

export default Header;