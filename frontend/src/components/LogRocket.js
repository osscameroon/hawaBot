import React, { Component } from 'react';

export class LogRocket extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: '',
         inputText: '',
         mode: 'view'
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleChange(e){
        this.setState( {
            inputText: e.target.value
        });
    }
    handleSave(){
        this.setState({
            text: this.state.inputText, mode:'view'
        });
    }
    handleEdit(){
        this.setState({
            mode: 'edit'
        });
    }
    
    renderInputField(){ 
        
        if(this.state.mode === 'view'){
            return null;
        }else{
            return(
                <p>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.inputText}
                    />
                </p>
            )
        }
    }
    renderButton(){
        if(this.state.mode === 'view'){
            return (
                <button onClick={this.handleEdit}>
                    Edit
                </button>
            )
        } else{
            return(
                <button onClick={this.handleSave}>
                    Save
                </button>
            );
        }
    }
    
  render() {
      
          return(
            <div>
                <p>Text: {this.state.text}</p>
                {this.renderInputField()}
                {this.renderButton()}
            </div>
          );
      }
    
  }

  return (
    <div>
      <div style={{marginRight: 90 + 'px'}} >
        {
         // Data.map(post => {
            // eslint-disable-next-line react/style-prop-object
           // return <h4 key={post.id} > {post.text}</h4>
          })
        }
      </div>
    </div>
  );


export default LogRocket;
