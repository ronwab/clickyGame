import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Body = props => {
  const styles = {
      width: 150
  }
  return (
    <Container>
      <div className="card-header">
        <h3 className={Card.Title}>{props.name}</h3>
      </div>
      <div className="img-container">
        {/* <p className="card-text"></p> */}
        <p>
          <img style={styles} alt={props.name} src={props.href} />
        </p>
        <button onClick={props.clickMe}>CLICK ME</button>
      </div>
    </Container>
  );
};


export default Body;

const Container = styled.div `
width: "15rem"
margin: 20
`
    
  