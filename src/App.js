import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
