import "./App.css";
import PopularPlaces from "./components/PopularPlacesSection";
import Hero from "./components/HeroSection";
import NavBar from "./components/HeaderSection";

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <PopularPlaces />
    </>
  );
}

export default App;
