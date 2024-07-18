import React from 'react';
import styles from './header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Hotel from './images/hotel.svg';

export const Header = ({ className }) => {
	return (
		<header className={classNames(styles.root)}>
			<Image src={'/logo.png'} width={115} height={18} alt='' />
			<Hotel />
		</header>
	);
};
