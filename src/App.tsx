import Header from "./components/Header"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Ticket from "./Pages/TicketPage";
import AboutUs from "./Pages/AboutUs";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import History from "./Pages/History";
import Booking from "./Pages/Booking";
import SeaImg from "./components/SeaImg";

const App = () => {
  return (
    
    <BrowserRouter basename="/Ocean-Jenkinson">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/history" element={<History />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/SeaImg" element={<SeaImg />} /> {/* Add route for SeaImg */}
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App