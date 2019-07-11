import React, { Component } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Cards from "./imagesource/images.json";

class App extends Component {
  state = {
    Cards
  };

  shuffle = array => {
    let i = 0,
      j = 0,
      temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  shuffleCards = () => {
    console.log("here");
    this.setState({
      Cards: this.shuffle(this.state.Cards)
    });
    console.log("here");
    console.log(Cards);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-sm-3">
            {this.state.Cards.map(card => {
              return (
                <Body
                  key={card.id}
                  name={card.imgname}
                  href={card.imageUrl}
                  clickMe={this.shuffleCards}
                  onHover={this.shakeOnHover}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
