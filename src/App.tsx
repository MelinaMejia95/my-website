import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import Mentorship from "./routes/Mentorship/Mentorship";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
