import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // conditoional rendering
  return !loading ? (
    <div className="min-h-sc flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>TODO:{/*<Outlet />*/}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
