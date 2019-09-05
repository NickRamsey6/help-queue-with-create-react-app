import React from 'react';
import Ticket from './Ticket';


var masterTicketList = [
  {
    names: 'Thano and Haley',
    location: '3A',
    issue: 'Firebase wont\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList(){
  return (
    <div className="red-text">
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names = {ticket.names}
          location = {ticket.location}
          issue = {ticket.issue}
          key = {index}/>
      )}
      <style jsx>{`
        .red-text {
          color: red;
          padding-top: 100px;
        }
        `}</style>
    </div>
  );
}

export default TicketList;
