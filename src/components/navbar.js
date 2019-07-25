import React from "react";

const styles = {
  background: "grey",
  height: "100px"
};

const Navbar = props => {
  return (
    <div>
      <nav style={styles}>
        <a className="navbar-brand">Navbar</a>
        <p onClick={props.increaseCount}> Count is {props.count}</p>
      </nav>
    </div>
  );
};

export default Navbar;
