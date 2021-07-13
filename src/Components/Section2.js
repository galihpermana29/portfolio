import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section2.module.css';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
const Section2 = () => {
	return (
		<div className={styles.section2}>
			<div className={styles.section2Container}>
				<div className={styles.imgContainer}>
					<Tilt options={{max: 8, perspective: 1000, scale: 1, reverse: false}}>
						<img
							src={`${process.env.PUBLIC_URL}/assets/galih.png`}
							alt="galih permana"
						/>
					</Tilt>
				</div>
				<div className={styles.textContainer}>
					<Fade bottom>
						<h1>Hi, there.</h1>
					</Fade>
					<Fade bottom>
						<p>
							I am <span>Galih Permana</span>, a student of Computer
							Engineering Universitas Brawijaya who{' '}
							<span>
								likes new things and challenges as a process to be
								completed
							</span>
							. <br />
							<br />I define myself by the work I want to do. Skills can
							be taught, personality is inherent.{' '}
							<span>
								I prefer to keep learning, keep challenging myself, and
								do interesting things that matter.
							</span>
						</p>
					</Fade>
					<motion.div
						whileHover={{
							y: -10,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
						className={styles.buttonContainer}
					>
						<a
							href="https://drive.google.com/file/d/16SARDcvajSfwV604iGBpEPwQ-PYfQKxg/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Download my CV
						</a>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
