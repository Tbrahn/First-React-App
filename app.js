'use strict';

const e = React.createElement;

class headsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You chose heads';
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
      return 'You chose tails';
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
const domContainer3 = document.querySelector('#result');


ReactDOM.render(e(headsButton), domContainer1);
ReactDOM.render(e(tailsButton), domContainer2);

