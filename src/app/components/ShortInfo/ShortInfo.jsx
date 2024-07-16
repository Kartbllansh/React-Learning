export const ShortInfo = ({ person }) => {
	const { name, age } = person;
	return (
		<div>
			<h3>{name}</h3>
			<span>{age} лет</span>
		</div>
	);
};
