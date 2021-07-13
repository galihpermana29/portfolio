import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import cx from 'classnames';

const Navbar = () => {
	const [scrolled, setScrolled] = useState();
	const [clicked, setClicked] = useState(false);

	const handleMenuIcon = () => {
		setClicked(!clicked);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0 && scrolled === true) {
				setScrolled(false);
			} else if (window.scrollY !== 0 && scrolled !== true) {
				setScrolled(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	return (
		<div
			className={styles.navbarContainer}
			style={{
				position: scrolled ? 'fixed' : 'relative',
				left: 0,
				right: 0,
			}}
		>
			{' '}
			<motion.a
				whileHover={{
					opacity: 0.7,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className={styles.buttonContainer}
				href="/#home"
				rel="canonical"
			>
				<img
					src={`${process.env.PUBLIC_URL}/assets/logo.png`}
					alt="logo"
					className={styles.logo}
				/>
			</motion.a>
			<div
				className={cx(
					styles.linkContainer,
					`${clicked ? styles.open : ''}`
				)}
			>
				<div>
					<span>MENU</span>
					<a href="/#about" rel="canonical" onClick={handleMenuIcon}>
						About
					</a>
					<a href="/#projects" rel="canonical" onClick={handleMenuIcon}>
						Projects
					</a>
					<a href="/#hire" rel="canonical" onClick={handleMenuIcon}>
						Hire
					</a>
					<p>
						&copy; 2021 Galih Permana. <br /> Made within missing you in
						Batam.
					</p>
				</div>
			</div>
			{/* <Button text={'Send me an email'} className={styles.emailButton} /> */}
			<motion.div
				whileHover={{
					opacity: 0.7,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className={styles.buttonContainer}
				style={{
					display: 'flex',
					alignItems: 'center',
					fontSize: '1.2rem',
					fontWeight: '600',
					justifyContent: 'space-between',
				}}
            onClick={handleMenuIcon}
			>
				<p style={{ position: 'relative', zIndex: 2, cursor: 'pointer' }}>MENU</p>
				<div className={`${styles.menuIcon} `} >
					<input
						type="checkbox"
						className={styles.menuIconCheckBox}
						checked={clicked ? 'yes' : ''}
						onChange={() => {}}
					/>
					<div>
						<span></span>
						<span></span>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Navbar;
