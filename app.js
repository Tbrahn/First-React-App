'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer1 = document.querySelector('#heads_button_container');
const domContainer2 = document.querySelector('#tails_button_container');

ReactDOM.render(e(LikeButton), domContainer1);
ReactDOM.render(e(LikeButton), domContainer2);
