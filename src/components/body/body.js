import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

function Body(props) {
  const styles = {
    width: 100
  };
  return (
    <div>
      <div className="card-header">
        <h3 className={Card.Title}>{props.name}</h3>
      </div>
      <div className="img-container">
        <p className="card-text" />
        <p>
          <img
            alt={props.name}
            src={props.href}
            style={{ width: "3em" }}
            onClick={() => props.handleClick(props.id)}
          />
        </p>
        {/* <button >CLICK ME</button> */}
      </div>
    </div>
  );
}

export default Body;

// const Container = styled.div`
// width: "15rem"
// margin: 20
// `;
