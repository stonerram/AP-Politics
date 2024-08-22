import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Compaines from './components/Compaines/Compaines';
import Politician from './components/Politician/Politician';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Value from './components/Value/Value';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App">
      <div>
    <div className='white-gradient'/>

     <Header/>
     <Hero/>
     </div>
    
     <Compaines/>
     <Politician/>
     <Value/>
     <Contact/>
     <SocialMedia/>
     <GetStarted/>
     <br/>
     <Footer/>
    </div>
  );
}

export default App;
