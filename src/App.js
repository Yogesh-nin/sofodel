import './App.css';
import Navbar from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Footer from './Components/Footer';
import StayPlaces from './Components/StayPlaces';
import Section2 from './Components/section2';
import DiscoverySuggestion from './Components/DiscoverySuggestion';
import Cities from './Components/section1';
import NewsLetter from './Components/Newsletter';
import ChooseUs from './Components/ChooseUs';
import Reviews from './Components/Reviews';
import StaysTypes from './Components/TypesStays';
import Experience from './Components/Experience';

function App() {
  return (
   <div>
      <Navbar />
      <div className='homepage relative overflow-x-hidden'>
      <Hero />
        <Cities />
        <StayPlaces />
        <Experience />
        <Section2 />
        <ChooseUs />
        <Reviews />
        <NewsLetter />
      <Footer />
      </div>
        
      
   </div>
  );
}

export default App;
