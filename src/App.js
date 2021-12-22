import {Routes,Route} from 'react-router-dom';  
import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Create from './components/Create/Create.js';
  
import './App.css';
import Edit from './components/Edit/Edit.js';
import Details from './components/Details/Details.js';



function App() {
  return (
    <>
    <div id="container">
     <Header/>
     <main id="site-content">
   
  <Routes>
   <Route path="/dashboard" element={<Dashboard />}/>
   <Route path="/Login" element={<Login />}/>
   <Route path="/Register" element={<Register />}/>
   <Route path="/Create" element={<Create />}/>
   <Route path="/Edit/:id" element={<Edit />}/>
   <Route path="/Details/:id" element={<Details />}/>
  </Routes>
     </main>
    
    </div>
    
    </>
  );
}

export default App;
