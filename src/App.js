import './App.css';
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import LoginPages from './Pages/LoginPages'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Exercise from './Pages/Exercise';
import AdminExercise from './Pages/AdminExerciseForm';
import Error from './components/Error/Error';

export const UserContext = createContext()

function App() {
  const [registeruser, setregisteruser] = useState()
  
  const [loginUser, setloginUser] = useState()
  const [token, setToken] = useState()



  return (
    <div className="app">
      <UserContext.Provider value={{ registeruser, setregisteruser, loginUser, setloginUser,token, setToken }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/exercise/:id" element={<Exercise />} />
          {loginUser?.promistion === "admin" ? <Route path="/admin" element={<Admin />} /> : <Route path="/admin" element={<Home />} />}
          {loginUser?.promistion === "admin" ? <Route path="/admin/exercise/:id" element={<AdminExercise />} /> : <Route path="/admin" element={<Home />} />}
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
