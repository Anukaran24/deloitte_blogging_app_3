import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Posts from './Posts';
import RegisterationForm from './RegisterationForm';
import WriteBlog from './WriteBlog';
import axios from 'axios';



function App() {
  return (
    <div className="App">
      {/* <h1> Deloitte Blogging App </h1> */}
      <Router>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/Login">Login</Link>
          <Link to="/RegisterationForm">Register</Link>
          <Link to="/WriteBlog">WriteBlog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Posts" element={<Posts/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/RegisterationForm" element={<RegisterationForm/>}/>
          <Route path="/WriteBlog" element={<WriteBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
