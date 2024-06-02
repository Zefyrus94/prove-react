import Recipe from "./components/Recipe";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Recipe />
      <Counter />
      <Parent />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;