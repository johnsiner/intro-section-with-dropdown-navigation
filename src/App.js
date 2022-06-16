import logo from './images/logo.svg';
import menuIcon from './images/icon-menu.svg';
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import NavbarTop from './components/NavbarTop';
import desktopHeroImage from './images/image-hero-desktop.png';
import mobileHeroImage from './images/image-hero-mobile.png';
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';
function App() {
   const [menuIsOpened, setMenuIsOpened] = useState(false);

   return (
      <div className="App">
         <SideMenu
            active={menuIsOpened}
            onClose={() => setMenuIsOpened(false)}
         />
         <header>
            <div className="logo-container">
               <img className="logo" src={logo} alt="logo" />
               <img
                  className="menu-icon"
                  src={menuIcon}
                  alt="menu-icon"
                  onClick={() => setMenuIsOpened(true)}
               />
            </div>
            <NavbarTop />
         </header>
         <main>
            <div className="main-container">
               <div className="details-container">
                  <h1>Make remote work</h1>
                  <p>
                     Get your team in sync, no matter your location. Streamline
                     processes, create team rituals, and watch productivity
                     soar.
                  </p>
                  <button>Learn more</button>
                  <div className="client-logo-container">
                     <div>
                        <img src={databiz} alt="databiz"></img>
                     </div>
                     <div>
                        <img src={audiophile} alt="audiophile"></img>
                     </div>
                     <div>
                        <img src={meet} alt="meet"></img>
                     </div>
                     <div>
                        <img src={maker} alt="maker"></img>
                     </div>
                  </div>
               </div>
               <div className="hero-image-container">
                  <img
                     src={desktopHeroImage}
                     alt="hero"
                     className="desktop"
                  ></img>
                  <img
                     src={mobileHeroImage}
                     alt="hero"
                     className="mobile"
                  ></img>
               </div>
            </div>
         </main>
      </div>
   );
}

export default App;
