import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Public from "./components/Public";
import Hero from "./components/Hero";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Hero />} />
          {/* Wrap Protected route with ProtectedRoute */}
          <Route path="/protected" element={<ProtectedRoute element={<Protected />} />} />
          <Route path="/public" element={<Public />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
