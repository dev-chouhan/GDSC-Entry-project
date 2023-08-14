import './App.css';
import FrontSection from './components/FrontSection';
import SecondSection from './components/SecondSection';
import FooterSection from './components/FooterSection';
import WhyJoinUs from './components/WhyJoinUs';
import Opportunity from './components/Opportunity';
import OurTeam from './components/OurTeam';
import Events from './components/Events';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <FrontSection />
      <WhyJoinUs />
      <Opportunity />
      <SecondSection />
      <OurTeam />
      <Events />
      <Faq />
      <FooterSection />
    </>
  );
}

export default App;
