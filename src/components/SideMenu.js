import React, { Fragment } from 'react';
import './SideMenu.css';
import closeMenuIcon from '../images/icon-close-menu.svg';
import NavbarSide from './NavbarSide';
const Backdrop = (props) => {
   return (
      props.active && <div className="backdrop" onClick={props.onClose}></div>
   );
};

export default function SideMenu(props) {
   return (
      <Fragment>
         <Backdrop active={props.active} onClose={props.onClose} />
         {props.active && (
            <div className="side-menu">
               <div className="close-menu-container">
                  <img
                     src={closeMenuIcon}
                     alt="close-menu-icon"
                     className="close-menu-icon"
                     onClick={props.onClose}
                  />
               </div>
               <NavbarSide />
            </div>
         )}
      </Fragment>
   );
}
