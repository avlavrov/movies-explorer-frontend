import Header from '../Header/Header.js';
import Promo from './Promo/Promo.js';
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Footer from '../Footer/Footer.js';

function Main() {
  return (
      <main className="Main">
        <Header/>
        <Promo/>
        <AboutProject
        id="about"/>
        <Techs/>
        <AboutMe/>
        <Footer/>
      </main>
  )
}

export default Main;
