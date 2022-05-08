import React from 'react';
import styles from './ChipStyles.module.css';

interface IChip {
	name: string;
	onClick?: () => void;
	style?: React.CSSProperties;
}

const Chip = (props: IChip) => {
	return (
		<div onClick={props.onClick} className={styles.chip} style={props.style}>
			<span>{props.name}</span>
		</div>
	);
};

export default Chip;
