import React from 'react';
import styles from './ChipStyles.module.css';

const Chip = () => {
	const checkIconElement = (
		<svg viewBox='0 0 512 512'>
			<path d='M436 83L173 347l-97-97c-5-5-12-5-17 0l-28 28c-5 5-5 12 0 17l133 134c5 4 13 4 17 0l300-300c5-5 5-13 0-17l-28-29c-5-4-12-4-17 0z' />
		</svg>
	);
	return (
		<div className={styles.chip}>
			<span>Chip</span>
			<span className={styles.chip__icon}>{checkIconElement}</span>
		</div>
	);
};

export default Chip;