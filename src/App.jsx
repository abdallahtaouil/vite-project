import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
