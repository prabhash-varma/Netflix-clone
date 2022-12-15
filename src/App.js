import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/Netflix-clone" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
