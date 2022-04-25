import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
  //   fetch('http://localhost:5000/user',{method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user)
  // })
  // .then(response => response.json())
  // .then(data => setUsers(data));
  },[])

  const handleForm=(event)=>{
    event.preventDefault();
    const nam=event.target.name.value;
    const email=event.target.email.value;
    const user={nam,email};
    fetch('http://localhost:5000/user',{method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => setUsers(data));
   
  }
  return (
    <div className="App">
     <h1>hellow</h1>
      <form onSubmit={handleForm}>
        <input type="text" name='name' placeholder='name'/><br></br>
        <input type="email" name='email' placeholder='email'/><br></br>
        <button>abc</button>
      </form>
    </div>
  );
}

export default App;
