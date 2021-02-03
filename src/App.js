import React , {useState} from 'react';
import Navbar from './Components/Navbar'
import GlobalStyle from "./globalStyles";
import Hero from './Components/Hero'
import {SliderData} from './data/sliderData'
import DropDown from './Components/DropDown'
import InfoSection from './Components/InfoSection'
import { InfoData , InfoDataTwo} from './data/InfoData';
import NewHomes from './Components/NewHomes';
import {HomeDataOne} from './data/NewHomesData';
import StunningSection from './Components/StunningSection';
import {StunningData} from './data/StunningData';
import ModernDesign from './Components/ModernDesign';
import Footer from './Components/Footer'

function App() {

  const [isOpen , setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
      <NewHomes {...HomeDataOne}  />
      <StunningSection {...StunningData} />
      <ModernDesign {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
