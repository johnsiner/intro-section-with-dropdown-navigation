import React, { useState } from 'react';
import classes from './NavbarSide.module.css';
import arrow from '../images/icon-arrow-down.svg';
import todoIcon from '../images/icon-todo.svg';
import calenderIcon from '../images/icon-calendar.svg';
import remindersIcon from '../images/icon-reminders.svg';
import planningIcon from '../images/icon-planning.svg';

export default function NavbarSide() {
   const [showFeatures, setShowFeatures] = useState(false);
   const [showCompany, setShowCompany] = useState(false);

   return (
      <div className={classes['nav-container']}>
         <div className={classes['top-nav']}>
            <ul>
               <li
                  className={classes.features}
                  onClick={() => {
                     setShowFeatures((state) => !state);
                  }}
               >
                  Features{' '}
                  <span>
                     <img
                        className={
                           !showFeatures
                              ? classes.arrow
                              : classes['arrow-responsive']
                        }
                        src={arrow}
                        alt="arrow"
                     />
                  </span>
               </li>
               {showFeatures && (
                  <li className={classes['features-dropdown']}>
                     <ul>
                        <li>
                           <img src={todoIcon} alt="todo" />
                           <span>Todo List</span>
                        </li>
                        <li>
                           <img src={calenderIcon} alt="calender" />
                           <span>Calender</span>
                        </li>
                        <li>
                           <img src={remindersIcon} alt="reminders" />
                           <span>Reminders</span>
                        </li>
                        <li>
                           <img src={planningIcon} alt="planning" />
                           <span>Planning</span>
                        </li>
                     </ul>
                  </li>
               )}
               <li
                  className={classes.company}
                  onClick={() => {
                     setShowCompany((state) => !state);
                  }}
               >
                  Company{' '}
                  <span>
                     <img
                        className={
                           !showCompany
                              ? classes.arrow
                              : classes['arrow-responsive']
                        }
                        src={arrow}
                        alt="arrow"
                     />
                  </span>
                  {showCompany && (
                     <li className={classes['company-dropdown']}>
                        <ul>
                           <li>History</li>
                           <li>Our Team</li>
                           <li>Blog</li>
                        </ul>
                     </li>
                  )}
               </li>
               <li>Carrers</li>
               <li>About</li>
            </ul>
         </div>
         <div className={classes['buttom-nav']}>
            <ul>
               <li>Login</li>
            </ul>
            <button>Register</button>
         </div>
      </div>
   );
}
