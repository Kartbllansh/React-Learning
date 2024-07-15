export const ShortInfo = ({ person }) => {
	console.log(person.name);
	return (
		<div>
			<h3>{person.name}</h3>
			<span>{person.age} лет</span>
		</div>
	);
};
