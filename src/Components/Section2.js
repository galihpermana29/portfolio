import React from 'react';
// import Button from './Button';
import styles from './Section2.module.css';
const Section2 = () => {
	return (
		<div className={styles.section2}>
			<div className={styles.section2Container}>
				<div className={styles.imgContainer}>
					<img
						src={`${process.env.PUBLIC_URL}/assets/galih.png`}
						alt="galih permana"
					/>
				</div>
				<div className={styles.textContainer}>
					<h1>Hi, there.</h1>
					<p>
						I am <span>Galih Permana</span>, a student of Computer
						Engineering Universitas Brawijaya who{' '}
						<span>
							likes new things and challenges as a process to be
							completed
						</span>
						. <br />
						<br />I define myself by the work I want to do. Skills can be
						taught, personality is inherent.{' '}
						<span>
							I prefer to keep learning, keep challenging myself, and do
							interesting things that matter.
						</span>
					</p>
					<div className={styles.buttonContainer}>
						<a href="" download>Download my CV</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
