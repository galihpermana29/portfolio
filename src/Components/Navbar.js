import React from 'react';
import Button from './Button';
import styles from './Navbar.module.css'
const Navbar = () => {
   return (
      <div className={styles.navbarContainer}>
         <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" className={styles.logo}/>
         <div className={styles.linkContainer}>
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#hire">Hire</a>
         </div>
         <Button text={"Send me an email"} className={styles.emailButton}/>
        
         <div className={styles.menuIcon}>
            <input type="checkbox" className={styles.menuIconCheckBox}/>
            <div>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
   );
}
 
export default Navbar;