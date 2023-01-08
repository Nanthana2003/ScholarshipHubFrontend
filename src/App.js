import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Registration"
import {Routes, BrowserRouter,Route} from  "react-router-dom";
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Navbar/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/chat" element={<Chat/>}/>
          
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
