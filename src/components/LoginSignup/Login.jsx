import React from 'react';
import './Login.css';
const Description = () => {
  return (
    <div className="description-box">
      <h2><center>LOGIN </center></h2>
      <p>
        <h3>USERNAME : <br/><br/></h3>
        <input type="text" placeholder="Username"/>
        <h3>PASSWORD : <br/><br/></h3>
        <input type="password" placeholder="Password"/>

      </p>
    </div>
  );
}

export default Description;