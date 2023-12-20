import React from 'react'
import axios from 'axios';

export default function Posts() {
  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    
      .then(function (response) { 
        console.log(response);
        // go to another page  
        
      })
      .catch(function (error) { console.log(error); });

  };
  return (
    
    <div>
      Posts
    </div>
  )
}
