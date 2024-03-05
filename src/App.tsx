import Header from "./components/Header"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Ticket from "./Pages/TicketPage";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import History from "./Pages/History";
import CheckOut from "./Pages/CheckOut";
import SeaImg from "./components/SeaImg";
import { ShoppingContextProvider } from './contexts/ShoppingContext'

const App = () => {
  return (
    <ShoppingContextProvider>
      <BrowserRouter basename="/Ocean-Jenkinson">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/SeaImg" element={<SeaImg />} /> {/* Add route for SeaImg */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShoppingContextProvider>
  )
}

export default App