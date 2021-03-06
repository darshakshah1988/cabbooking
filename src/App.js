import React, { useState, useEffect} from "react";
import "./scss/App.scss";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import BookingSection from "./components/BookingSection";
import Benefits from "./components/Benefits";
import TopRoutes from "./components/TopRoutes";
import International from "./components/International";
import Why from "./components/Why";
import Rates from "./components/Rates";
import Footer from "./components/Footer";
import "react-loading-skeleton/dist/skeleton.css";
// Pages
import CabsScreen from "./components/CabsScreen";
import DashboardScreen from "./components/DashboardScreen";
import Login from './components/login'
import PrivateRoute from "./components/privateRoute";

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookingSection />
              <Benefits />
              <TopRoutes />
              <International />
              <Why />
              <Rates />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/cabs" element={<CabsScreen />}></Route>

          <Route path="/dashboard/*" element={<PrivateRoute><DashboardScreen /></PrivateRoute>}></Route>
        
        <Route path="/login" element={<Login setToken={setToken}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
