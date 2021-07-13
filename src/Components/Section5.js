import React from 'react';
import styles from './Section5.module.css';
import {motion} from 'framer-motion';
const Section5 = () => {
	return (
		<div className={styles.section5}>
			<div className={styles.section5Container}>
				<div className={styles.iconContainer}>
					<motion.a
						whileHover={{
							y: -10,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
						href="https://www.instagram.com/ygalihpermana/"
                  target="_blank"
                  rel="noreferrer"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
							alt="ig"
						/>
					</motion.a>
					<motion.a
						whileHover={{
							y: -10,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
						href="https://www.linkedin.com/in/galihpermana/"
                  target="_blank"
                  rel="noreferrer"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
							alt="linkedin"
						/>
					</motion.a>
					<motion.a
						whileHover={{
							y: -10,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
						href="http://wa.me/6289621490655"
                  target="_blank"
                  rel="noreferrer"
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/wa.png`}
							alt="wa"
						/>
					</motion.a>
				</div>
				<div className={styles.footbar}>
					<div className={styles.footBar}>
						<div></div>
						<img
							src={`${process.env.PUBLIC_URL}/assets/logoFooter.png`}
							alt="logo"
						/>
						<div></div>
					</div>
					<div className={styles.footNote}>
						<p>Galih Permana</p>
						<p>Thankyou</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section5;
