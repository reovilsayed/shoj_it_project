import Footer from "./Components/Navbar/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import CategorySection from "./Pages/CategorySection/CategorySection";
import HeroSection from "./Pages/HeroSection/HeroSection";
import NoticesSection from "./Pages/NoticesSection/NoticesSection";
import AutoComPleted from "./utilitis/AutoCompleted/AutoComPleted";
import Text from "./utilitis/Text/Text";

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
