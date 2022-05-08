import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './CardStyles.module.css';

interface ICard {
	className: string;
	children?: ReactNode | JSX.Element;
	effectOnHover?: boolean;
	style?: React.CSSProperties;
}

const Card = (props: ICard) => {
	return (
		<div
			className={clsx(styles.card, {
				[props.className]: props.className,
				[styles.shadow_effect]: props.effectOnHover,
			})}
			style={props.style}>
			{props.children}
		</div>
	);
};

Card.defaultsProps = {
	className: '',
	effectOnHover: false,
};

export default Card;
