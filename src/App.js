import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import SubFooter from "./components/SubFooter";
import Terms from "./components/Terms.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <SubFooter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
