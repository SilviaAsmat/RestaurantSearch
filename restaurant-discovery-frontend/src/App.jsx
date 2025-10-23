import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantsPage from './restaurants/RestaurantsPage';
import LoginPage from './login/LoginPage';
import RegisterPage from "./register/RegisterPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
