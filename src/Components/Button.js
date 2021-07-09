import React from 'react';
import styles from './Button.module.css'

const Button = ({text, type}) => {
   return (
      <div className={styles.buttonContainer}>
         <a href="">{text}</a>
      </div>
   );
}
 
export default Button;