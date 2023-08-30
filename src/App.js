
import { useState, useEffect } from 'react';


import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import AppNavbar from './components/AppNavbar';
import Products from './pages/Products';
import ProductView from './components/ProductView';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AdminDashboard from './components/AdminDashboard';
import AddProduct from './components/AddProduct';
import AdminProduct from './pages/AdminProduct'
import Update from './components/Update';
import Navbar from './components/UsersComponents/Navbar';
import UsersHomePage from './pages/HomePage/UsersHomePage';


import { UserProvider } from './UserContext'

function App() {

 
  const [ user, setUser ] = useState({
      id: null,
      isAdmin: null
  });

  
  const unsetUser = () => {
    localStorage.clear();
  }

  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {

      console.log(data)

      setUser({
        id: data._id,
        isAdmin: data.isAdmin
      })
    });
  }, [])

  return (

   
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Container fluid> 
          {/* <AppNavbar /> */}
          <UsersHomePage />
            <Routes>
            {/* <Route path="/register" element={<Register />} />   */}
              {/* <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductView />} />
              <Route path="/admindashboard" element={<AdminDashboard />}/>         */}
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />}/>
              {/* <Route path="/addproduct" element={<AddProduct />}/>
              <Route path="/products/all" element={<AdminProduct/>}/>
              <Route path="/product/:productId" element={<Update/>}/> */}
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </Container>
      </Router>
    </UserProvider>

  );
}

export default App;
