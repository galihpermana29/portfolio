import React from 'react';
import styles from './Section4.module.css';
import { motion } from 'framer-motion';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Section4 = () => {
	return (
		<div className={styles.section4}>
			<Slide bottom>
				<div className={styles.fingerContainer}>
					<img
						src={`${process.env.PUBLIC_URL}/assets/finger.png`}
						alt="fingertips"
					/>
				</div>
			</Slide>
			<div className={styles.textContainer}>
				<Fade up>
					<p>NEED A DEVELOPER?</p>
				</Fade>
				<Fade up>
					<h1>Let’s work together!</h1>
				</Fade>
				<motion.div
					whileHover={{
						y: -10,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.9 }}
					className={styles.buttonContainer}
				>
					<a href="mailto:galihcbn123@gmail.com">Send me an email</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Section4;
