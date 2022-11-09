import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import residoLogo from "../../../assets/resido.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
 

const Navbar = () => {
  
 const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div>
      <nav className={`flex items-center justify-between bg-white fixed z-50 w-full top-0 ${styles.nav} `}>
        <Link to='/'>
          <img src={residoLogo} alt='resido' />
        </Link>

        <div>
          {
            clicked ? (
              <ul className={`flex items-center justify-center ${styles.navLinks} `}>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/service'>Our services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/pricing'>
              <button className={`${styles.btn}`}>Get started</button>
            </Link>
          </li>
          </ul>
            ) : (
              <ul className={`flex items-center justify-center ${styles.navLinksActive} `}>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/service'>Our services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/pricing'>
              <button className={`${styles.btn}`}>Get started</button>
            </Link>
          </li>
          </ul>
            )
          }
          
        </div>

        <div className={`${styles.mobile}`} onClick={handleClick}>
          {clicked ? (
            <FontAwesomeIcon icon={faTimes} className={`${styles.mobileIcons}`} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={`${styles.mobileIcons}`} />
          )}
          
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
