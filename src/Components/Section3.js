import React from 'react';
import styles from './Section3.module.css';
import {data} from '../data';
const Section3 = () => {
	return (
		<div className={styles.section3}>
			<div>
				{data.map(({ id, judul, gif, detail, desc, link }) => {
					return (
						<>
							<div className={styles.section3Container} key={id}>
								<h1>{judul}</h1>
								<img
									src={`${process.env.PUBLIC_URL}/assets/wetravs.gif`}
									alt={gif}
								/>
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
										<p>
											{desc}
										</p>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Section3;
