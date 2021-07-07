import React, { useState, useEffect, useRef } from 'react';
//import logo from './img/logo.jpeg';
import './styles/HeaderStyle.css';





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
    
    <div>
      
    
      <div className='lmg'>
        <img src='/img/logo.jpeg' className='app-logo' alt='not found' width="40" height="40"/>
        <h1 className='head'><b>OSS CAMEROON</b></h1>
      </div>
      
      
        <div className='text'>{currentText}</div>
      
       
    </div>
  );
}

export default Header;
