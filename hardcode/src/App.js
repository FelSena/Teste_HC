import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Graphics from "./components/Graphics";
import Thesis from "./components/Thesis";
import Interview from "./components/Interview";
import News from "./components/News";
import Startups from "./components/Startups";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import GlobalStyle from "./components/styles/Globals";
import "./components/styles/Globals.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <AboutUs />
      <Graphics />
      <Thesis />
      <Interview />
      <News />
      <Startups />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
