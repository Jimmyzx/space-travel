import {NavLink} from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar ()
{
  
    return ( // DONE todo
      <nav className={styles.navbar}>
        <NavLink 
          to="/home"
          className={({isActive}) => isActive ? styles.active : undefined}  
        >
          Home
        </NavLink>
  
        <NavLink
          to="/planets"
          className={({isActive}) => isActive ? styles.active : undefined}
        >
          Planets
        </NavLink>
  
        <NavLink
          to="/spacecrafts" 
          className={({isActive}) => isActive ? styles.active : undefined}
        >
          Spacecrafts
        </NavLink>
      </nav>
    );
  }
  
export default NavigationBar;
