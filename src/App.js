import {Routes,Route} from 'react-router-dom';  
import Header from './componenets/Header/Header.js';
import Dashboard from './componenets/Dashboard/Dashboard.js';
import Register from './componenets/Register/Register.js';
import Login from './componenets/Login/Login.js';
import Create from './componenets/Create/Create.js';
import './App.css';


function App() {
  return (
    <>
    <div id="container">
     <Header/>
     <main id="site-content">
  <Routes>
   <Route path="/" element={<Dashboard />}/>
   <Route path="/Login" element={<Login />}/>
   <Route path="/Register" element={<Register />}/>
   <Route path="/Create" element={<Create />}/>
  </Routes>
     </main>
    </div>
    <footer id="site-footer"></footer>
    </>
  );
}

export default App;
