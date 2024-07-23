import { Button } from '../Button/Button';
export const Tabs = ({ array, onTabClick }) => {
	return (
		<div>
			{array.map((person, index) => (
				<Button onClick={() => onTabClick(index)} key={person.id}>
					{person.name}
				</Button>
			))}
		</div>
	);
};
