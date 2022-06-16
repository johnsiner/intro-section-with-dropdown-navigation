import React from 'react';
import classes from './NavbarTop.module.css';
import arrow from '../images/icon-arrow-down.svg';
import todoIcon from '../images/icon-todo.svg';
import calenderIcon from '../images/icon-calendar.svg';
import remindersIcon from '../images/icon-reminders.svg';
import planningIcon from '../images/icon-planning.svg';

export default function NavbarTop() {
   return (
      <div className={classes['nav-container']}>
         <div className={classes['left-side-nav']}>
            <ul>
               <li className={classes.features}>
                  Features{' '}
                  <span>
                     <img className={classes.arrow} src={arrow} alt="arrow" />
                  </span>
                  <div
                     className={`${classes['dropdown-card']} ${classes.features}`}
                  >
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
                  </div>
               </li>
               <li className={classes.company}>
                  Company{' '}
                  <span>
                     <img className={classes.arrow} src={arrow} alt="arrow" />
                  </span>
                  <div
                     className={`${classes['dropdown-card']} ${classes.company}`}
                  >
                     <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                     </ul>
                  </div>
               </li>
               <li>Carrers</li>
               <li>About</li>
            </ul>
         </div>
         <div className={classes['right-side-nav']}>
            <ul>
               <li>Login</li>
            </ul>
            <button>Register</button>
         </div>
      </div>
   );
}
