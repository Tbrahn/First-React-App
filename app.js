'use strict';


function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const e = React.createElement;

class headsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    if(this.state.liked){
      if (coinToss() === "heads") {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Heads'
    );
  }
}


class tailsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      if (coinToss() === "tails") {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Tails'
    );
  }
}



const domContainer1 = document.querySelector('#heads_button_container');
const domContainer2 = document.querySelector('#tails_button_container');


ReactDOM.render(e(headsButton), domContainer1);
ReactDOM.render(e(tailsButton), domContainer2);

