
import './App.css';
import {Login} from './pages/login/login'
import { Routes, Route} from "react-router-dom";
import {Home} from "./pages/home/home";
import {Register} from "./pages/register/register";
import {ChatLayout} from "./pages/layouts/chat.layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<ChatLayout />}  />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
  );
}

export default App;
