import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* Admin Route */}
        <Route path="/admin" element={<div>Hello admin</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
