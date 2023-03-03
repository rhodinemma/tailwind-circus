import "./App.css";
import PopularPlaces from "./components/PopularPlacesSection";
import Hero from "./components/HeroSection";
import NavBar from "./components/HeaderSection";
import DiscoverByCategories from "./components/DiscoverByCategories";
import CollectionsSection from "./components/CollectionsSection";

function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <PopularPlaces />

      <DiscoverByCategories />

      <CollectionsSection />
    </>
  );
}

export default App;
