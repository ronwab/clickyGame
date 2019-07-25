import React, { Component } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body/body";
import cards from "./imagesource/images.json";
import Container from "./components/Container";

class App extends Component {
  state = {
    cards,
    count: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ cards: this.shuffleCards(this.state.cards) });
  }
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
  shuffleCards = newdata => {
    this.setState({
      cards: this.shuffle(newdata)
    });
    return newdata;
    console.log(cards);
  };

  resetCards = resetCards => {
    const cardReset = resetCards.map(card => ({ ...card, clicked: false }));
    return this.shuffleCards(cardReset);
  };

  handleGuessCorrectly = newCards => {
    const { count, topScore } = this.state;
    const newCount = count + 1;
    console.log(newCount);

    const newTopscore = Math.max(newCount, topScore);

    this.setState({
      cards: this.shuffleCards(newCards),
      count: newCount,
      topScore: newTopscore
    });
  };
  handleWrongGuess = newCards => {
    this.setState({
      cards: this.resetCards(newCards),
      count: 0
    });
  };

  handleCardClicks = id => {
    let guessCorrectly = false;
    const newCards = this.state.cards.map(card => {
      const newcard = { ...card };
      if (newcard.id === id) {
        if (!newcard.clicked) {
          newcard.clicked = true;
          guessCorrectly = true;
        }
      }
      return newcard;
    });
    console.log(newCards);

    guessCorrectly
      ? this.handleGuessCorrectly(newCards)
      : this.handleWrongGuess(newCards);
  };

  render() {
    return (
      <div>
        <Navbar count={this.state.count} topScore={this.state.topScore} />
        <div className="row">
          <div className="col-sm-3">
            <Container>
              {this.state.cards.map(card => (
                <Body
                  key={card.id}
                  id={card.id}
                  href={card.imageUrl}
                  // clickMe={this.shuffleCards}

                  handleClick={this.handleCardClicks}
                  // increaseCount={this.handleCount}
                  // onHover={this.shakeOnHover}
                />
              ))}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
