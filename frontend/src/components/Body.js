import React, { Component } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import './styles/BodyStyle.css';


class Body extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           get_child: [],
           show_child: false, 
        }
        this.handleClick = this.handleClick.bind(this)
      }
      componentDidMount(){
         this.getChildrenByParentID(1)
      }
      getChildrenByParentID(parentID){
        axios.get(`http://localhost:4000/hawaBot/backend/get.php?id=${parentID}`)
           
        .then(response => {
            console.log(response)
            this.setState({get_child: response.data.children})
        })
        .catch(error => {
            console.log(error)
        })
      }

       handleClick() {
       //console.log("Hello")
       // if ({child.id} = 1){
          this.setState (() => {
            return {
             show_child: !this.state.show_child 
          }
        });
        
     // }
       
         
       
       }
      
    render() {
        const {get_child} = this.state
        console.log("get_child:", get_child);
       // const {show_child} = this.state.show_child;
      
       
      return (
        <div>
         <div className="button">
            <center><button type='Submit' className="btn-class" onClick={() => {this.handleClick()}} >
            Founders of Oss Cameroon
            </button> </center>
         </div>
          <div>
          
         { this.state.show_child ?  
              
                get_child && get_child.length?
                get_child.map(child => <div key={child.id}  onClick={() =>{ this.getChildrenByParentID(child.id)}}>{parse(child.text)} </div> ): null
               : null
            
         } 
           
          
            
          
          </div>
        </div>
      );
    }
}

export default Body;

