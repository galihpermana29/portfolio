import React from 'react';
import styles from './Section3.module.css';
import { data } from '../data';
import Tilt from 'react-tilt';
const Section3 = () => {
	return (
		<div className={styles.section3}>
			<div>
				{data.map(({ id, judul, gif, detail, desc, link, sc }) => {
					return (
						<div key={id}>
							<div className={styles.section3Container}>
								<h1 className={styles.judulSection3}>{judul}</h1>
								<Tilt
									options={{
										max: 2,
										perspective: 1000,
										scale: 1,
										reverse: false,
									}}
								>
									<img
										src={`${process.env.PUBLIC_URL}/assets/${gif}`}
										alt={gif}
                    className={styles.imgSection3}
									/>
								</Tilt>
								<div className={styles.textContainer}>
									<div className={styles.detailText}>
										<div>
											<p>
												Designed By
												<br />
												<span>{detail.design}</span>
											</p>
										</div>
										<div>
											<p>
												Develop Using
												<br />
												<span>{detail.tools}</span>
											</p>
										</div>
										<div>
											<p>
												Year
												<br />
												<span>{detail.year}</span>
											</p>
										</div>
									</div>
									<div className={styles.descText}>
										<p>{desc}</p>
										<p>
											Visit{' '}
											<a href={link} target="_blank">
												demo
											</a>
											,{' '}
											<a href="" target="_blank">
												design
											</a>
											, and{' '}
											<a href={sc} target="_blank">
												source code
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Section3;
