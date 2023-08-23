import Footer from "./Components/Navbar/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import CategorySection from "./Pages/CategorySection/CategorySection";
import HeroSection from "./Pages/HeroSection/HeroSection";
import NoticesSection from "./Pages/NoticesSection/NoticesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <NoticesSection />
      <Footer />
    </>
  );
}

export default App;
