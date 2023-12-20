import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Posts from './Posts';
import Register from './Register';
import WriteBlog from './WriteBlog';



function App() {
  return (
    <div className="App">
      <h1> Deloitte Blogging App </h1>
      <Router>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/WriteBlog">WriteBlog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Posts" element={<Posts/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/WriteBlog" element={<WriteBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
