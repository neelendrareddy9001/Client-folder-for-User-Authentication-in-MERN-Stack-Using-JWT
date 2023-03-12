import React, {useState, createContext} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Login from './components/Login';
import Register from './components/Register';
import MyProfile from './components/MyProfile';

export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
      <Nav/>
      <Routes>
        <Route exact path="/register" component={<Register/>}/>
        <Route exact path="/login" component={<Login/>}/>
        <Route exact path="/myprofile" component={<MyProfile/>}/>
      </Routes>
      </store.Provider>
    </div>
  );
}

export default App;
