import Navbar from "./navbar/Navbar";
import Explore from "./body/Explore";
import Chose from "./body/Chose";
import WeBest from "./body/WeBest";
import Service from "./body/Service";
import Gallery from "./body/Gallery";
import Team from "./team/Team";
import Slider from "./slider/Slider"
import Bikes from "./bikes/Bikes"
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Explore />
      <Chose />
      <WeBest />
      <Slider />
      <Service />
      <Team />
      <Gallery />
      <Bikes />
      <Footer />

    </>
  );
}

export default App;
