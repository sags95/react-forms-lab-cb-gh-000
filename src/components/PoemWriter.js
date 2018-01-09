import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false,
    };

  }

  onChange = event => {
    var lineCheck = false;
    this.setState({
      value: event.target.value,
    })

    var lines = event.target.value;
    var lineCount = lines.split(/\r\n|\r|\n/).length
    if (lineCount == 3){
      lineCheck = true;
    }



    var firstLine = 0;
    var secLine = 0;
    var thrLine = 0;
  }



  render() {

    if (this.state.valid == false){
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        </div>
      );
    } else {
      return(
        <div>
        <textarea
          rows="3"
          cols="60"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
          />
          </div>
      );
    }

  }
}

export default PoemWriter;
