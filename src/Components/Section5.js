import React from 'react';
import styles from './Section5.module.css';
const Section5 = () => {
	return (
		<div className={styles.section5}>
			<div className={styles.section5Container}>
				<div className={styles.iconContainer}>
					<a href="">
						<img
							src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
							alt="ig"
						/>
					</a>
					<a href="">
						<img
							src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
							alt="linkedin"
						/>
					</a>
					<a href="">
						<img
							src={`${process.env.PUBLIC_URL}/assets/wa.png`}
							alt="wa"
						/>
					</a>
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
