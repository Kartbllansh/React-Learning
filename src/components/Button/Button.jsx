'use client';
import styles from './button.module.scss';
export function Button({ onClick, children }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
}
