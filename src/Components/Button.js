import React from 'react';
import styles from './Button.module.css';
import {motion} from 'framer-motion'

const Button = ({ text, type }) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.05,
				transition: { duration: .2 },
			}}
			whileTap={{ scale: 0.9 }}
			className={styles.buttonContainer}
		>
			<a href="">{text}</a>
		</motion.div>
	);
};

export default Button;
