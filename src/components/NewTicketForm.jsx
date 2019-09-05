import React from 'react';

function NewTicketForm(){
  return (
    <div className="new-form">
      <form>
        <input
          type='text'
          id='names'
          placeholder='Please enter your name'/>
        <br/>
        <br/>
        <input
          type='text'
          id='location'
          placeholder='Please enter your location'/>
        <br/>
        <br/>
        <textarea
          id='issue'
          placeholder='Give a brief description of issue you are having.'/>
        <br/>
        <button class="btn btn-danger pull-right" type='submit'>Help!</button>
      </form>
      <style jsx>{`
        .new-form {
          padding-top:100px;
          text-align: center;
        }
        input {
          width:50%;
          padding-bottom: 10px;

        }
        #issue {
          width:50%;
          padding-bottom: 80px;
        }
        `}</style>
    </div>
  );
}



export default NewTicketForm;
