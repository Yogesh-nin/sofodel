import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header';
import Hero from './Components/Hero';
import SliderComponent from './Components/Slider';
import Features from './Components/Features';
import Footer from './Components/Footer';
import StayPlaces from './Components/StayPlaces';

function App() {
  return (
   <div>
      <Navbar />
        <Hero />
        <SliderComponent />
        <Features />
        <StayPlaces />
      <Footer />
      
   </div>
  );
}

export default App;
