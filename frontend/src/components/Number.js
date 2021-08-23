import React, { Component } from 'react';
import LogRocket from './LogRocket';

export class Number extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    
  render() {
    return (
      <div>
        <LogRocket number={this.state.count} />
        <button onClick={this.onClick}> Count </button>
      </div>
    );
  }
}

export default Number;
