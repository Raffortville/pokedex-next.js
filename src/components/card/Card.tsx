import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './CardStyles.module.css';

interface ICard {
	children?: ReactNode | JSX.Element;
	className: string;
	effectOnHover?: boolean;
}

const Card = (props: ICard) => {
	return (
		<div
			className={clsx(styles.card, {
				[props.className]: props.className,
				[styles.shadow_effect]: props.effectOnHover,
			})}>
			{props.children}
		</div>
	);
};

Card.defaultsProps = {
	className: '',
	effectOnHover: false,
};

export default Card;
