import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Tentang from "./components/Tentang";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Carousel />
        <Tentang />
      </header>
    </>
  );
}

export default App;
