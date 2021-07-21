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
                this.setState({get_child: response.data.children})
            })
            .catch(error => {
                console.log(error)
            })
      }
      
    render() {
        const {get_child} = this.state
        console.log("get_child:", get_child);
      return (
        <div>
          <button type='Submit' className="btn-class">
            Bring developers together
          </button>
          <div>
            
            {get_child && get_child.length?
            get_child.map(child => <div key={child.id}>{child.text}</div> ):
            null
            
    
            }
          </div>
        </div>
      );
    }
}

export default Body;

