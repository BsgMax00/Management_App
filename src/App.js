//import the react components to fix routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages to add to the routes
import Home from "./view/Home";
import Test from "./view/Test";
import TodoPage from "./view/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;