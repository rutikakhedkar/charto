import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Chat from './components/Chat.jsx';


function App() {
  const [color, setColor] = useState("red");

  return (
    <Router>
      <div>
        {/* Define your routes here */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />

          {/* Chat Route */}
          <Route path="/chat" element={<Chat />} />

          {/* Catch-All Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
