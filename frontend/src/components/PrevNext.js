import React from 'react';
import Data from './data.json'


function PrevNext() {
  
    return (
      <div>
        <div>
          {
            Data.map(post => {
              return <h4> {post.text}</h4>
            })
          }
        </div>
      </div>
    );
  }

export default PrevNext;





