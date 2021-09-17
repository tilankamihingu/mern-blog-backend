import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:8080/articles')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  })
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route to="/" render={() => <Articles posts={posts}/>} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
