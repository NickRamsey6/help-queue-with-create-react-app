import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div className="orange-header">
      <h1>Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>

      <style jsx>{`
        .orange-header {
          background-color: #F05A26;
          color: #FEFEFE;
          text-align: center;
          height: 70px;
          width: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }
        `}</style>
    </div>
  );
}

export default Header;
