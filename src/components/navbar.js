import React from "react";

const styles = {
  background: "grey",
  height: "100px"
};

function Navbar() {
  return (
    <div>
      <nav style={styles}>
        <a className="navbar-brand">Navbar</a>
      </nav>
    </div>
  );
}

export default Navbar;
