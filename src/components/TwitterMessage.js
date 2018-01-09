import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();


    this.state = {
      value: '',
      remChars: 140,
      chars: 0
    };
  }

  charCounter = event => {
    const max = this.props.maxChars;
    var input = event.target.value;

    this.setState({
      value: event.target.value,
      chars: input.length,
      remChars: max - this.state.chars

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        //  value={this.state.value}
          onChange={this.charCounter.bind(this)}
        />
        <strong> Chars left: {this.state.remChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
