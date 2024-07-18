import styles from './hobby.module.scss';
import classNames from 'classnames';

const textStyles = {
	primary: styles.primary,
	secondary: styles.secondary,
};

export function Hobby({ nam, hobbies, disabled, className, type = 'primary' }) {
	if (!hobbies?.length) {
		//Зачем нужна такая проверка? Если массив пустой, то цикл просто не будет крутиться. Правда только он позволит избежать ошибки, если hobbies = null or undefined
		return null; // Очень выгодно в коде использовать ранний return
	}
	return (
		<div>
			<h3>В свободное время помимо учебы {nam} имеет следующие хобби:</h3>
			{hobbies.map(hobby => (
				<div key={hobby}>
					<h5
						className={classNames(
							styles.root,
							styles.container,
							className,
							textStyles[type],
							{
								[styles.root]: disabled,
								[styles.container]: disabled,
							}
						)}
					>
						{hobby}
					</h5>
				</div>
			))}
		</div>
	);
}
