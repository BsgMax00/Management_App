//import the react components to fix routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages to add to the routes
import Home from "./views/Home";
import Test from "./views/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;