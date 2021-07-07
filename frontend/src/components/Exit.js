import React, { Component } from 'react';

import './styles/ExitStyle.css';

export class Exit extends Component {
    
   handleClick(){

   }
    
  render() {
    return (
     
      <div>
       <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=> this.handleClick}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <span className="close"></span>
        x
     </button>
     </div>
    );
  }
}

export default Exit;

