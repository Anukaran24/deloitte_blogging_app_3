import React from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function WriteBlog() {

    const handleClick = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts')
        
          .then(function (response) { 
            console.log(response);
            // go to another page  
            
          })
          .catch(function (error) { console.log(error); });
    
      };
  return (
    <div className='PostsWriteBlog'>
        {" "}
        <div className='cpContainer'>
        <h1> Create a Blog </h1>
        <div className='inputGp'>
        <div className='inputGp'>
            <label>Title:</label><br/>
            <input placeholder="Title..."/></div>
            <label>Post:</label><br></br>
            <textarea placeholder='Post...'/>
            <button onClick={handleClick}>Submit Blog</button>
        </div>
        </div>
    </div>
  )
}
