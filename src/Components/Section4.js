import React from 'react';
import styles from './Section4.module.css';

const Section4 = () => {
	return (
		<div className={styles.section4}>
			<div className={styles.fingerContainer}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/finger.png`}
					alt="fingertips"
				/>
			</div>
			<div className={styles.textContainer}>
				<p>NEED A DEVELOPER?</p>
				<h1>Let’s work together!</h1>
				<div className={styles.buttonContainer}>
					<a href="" download>
						Send me an email
					</a>
				</div>
			</div>
		</div>
	);
};

export default Section4;
