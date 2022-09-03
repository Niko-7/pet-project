import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <SubFooter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
