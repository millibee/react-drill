import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Hey this is text',
      phText: "This is..idk",
      stuffFromInput: '',
      hasLoaded: false,
    };
  }

  componentDidMount(){
      this.setState({ hasLoaded: !this.state.hasLoaded });

  }

  onInputChange = (e) => {
    this.setState({ stuffFromInput: e.target.value });
  };

  changeLoaded = () => {
   
  };

  render() {
    if (this.state.hasLoaded) {
      return (
        <>
          <h1>{this.props.text}</h1>
          <h1>{this.state.text}</h1>
          <input
            value={this.state.stuffFromInput}
            type="text"
            placeholder={this.state.phText}
            onChange={(e) => this.onInputChange(e)}
          />
           <button onClick={this.changeLoaded}>Click me</button>
        </>
      );
    } else {
      return (
        <>
          <h1>Loading...</h1>
          <button onClick={this.changeLoaded}>Click me</button>
        </>
      );
    }
  }

}

export default App;