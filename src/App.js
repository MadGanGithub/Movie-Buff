import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Each from "./pages/each.js";
import Book from './pages/book.js'
import Appbar from "./components/appbar.js";

function App() {
  return (
    <> 
    <Appbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/:id" element={<Each/>}/>
       <Route path="/book/:id" element={<Book/>}/>
      </Routes>
      </>
  );
}
export default App;


