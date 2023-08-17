import React from 'react';
import axios from 'axios';

function Navbar() {
  async function testBackend() {
    const data = await axios.get('/api/');
    console.log(data);
  }
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <h2>InterviewAsker</h2>
      </div>
      <div className='navbar-right'>
        <button onClick={testBackend}>Profile</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
