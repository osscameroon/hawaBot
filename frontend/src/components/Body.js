import React, { Component } from 'react';
import axios from 'axios';


class Body extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           get_child: []
        }
      }
      componentDidMount(){
          axios.get('http://localhost:4000/hawaBot/backend/get.php?id=1')
           
            .then(response => {
                console.log(response)
                this.setState({get_child: response.data})
            })
            .catch(error => {
                console.log(error)
            })
      }
      
    render() {
        const {get_child} = this.state
        
      return (
        <div>
          Children
          {get_child.length?
          get_child.map(child => <div key={child.id}>{child.text}</div> ):
           null
          
  
          }
        </div>
      );
    }
}

export default Body;

