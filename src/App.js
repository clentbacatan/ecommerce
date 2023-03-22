
import { useState, useEffect } from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';



import './App.css';
import AppNavBar from './components/AppNavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';


import { UserProvider } from './UserContext';


function App() {

  const [ user, setUser ] = useState({
      id: null,
      isAdmin: null 
  });

  const unsetUser = () => {

    localStorage.clear()
  }

  useEffect(() => {
    fetch(`http://localhost:4000/users/details`,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(data => {

          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          })
        });
      }, [])

  return (
    
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router >
        <Container fluid>
         <AppNavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Container>
      </Router>
    </UserProvider>

  );
}

export default App;
