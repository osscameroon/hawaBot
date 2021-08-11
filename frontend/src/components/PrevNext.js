import React, {useState, useEffect} from 'react';

function PrevNext() {
  // fetch local JSON data
  const [data, setData] = useState([]);
  const getData=()=>{
    fetch('data.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(function(response){
      console.log(response)
      return response.json();
     })
     .then(function(myJson){
       console.log(myJson);
       setData(myJson)
     });
  }
  //call fetched data
  useEffect(()=>{
    getData()
  }, [])
  // function handleClick(props){
  //   alert("Hello World")
  // }
  return (
    <div>
      {
        data && data.length>0 && data.map((item) =><p>{item.text}</p>)
      }
    </div>
  );
}

export default PrevNext;





