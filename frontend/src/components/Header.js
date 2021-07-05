import React, { useState, useEffect, useRef } from 'react';
//import logo from './img/logo.jpeg';
import './HeaderStyle.css';





const Header = ({text}) => {

    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current))  
      index.current += 1;
    }, 100);
  }, [currentText, text]);
  return (
    
    <div className='lmg'>
    <div><img src={window.location.hostname + './public/img/logo.jpeg'} className='App' alt='not found'/></div>
    <h1 className='head'><b>OSS CAMEROON</b></h1>
    
     <div>{currentText}</div>
      
    </div>
  );
}

export default Header;
