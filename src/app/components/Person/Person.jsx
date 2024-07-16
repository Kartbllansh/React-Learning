import { ShortInfo } from '../ShortInfo/ShortInfo';
import SomeSubject from '../SomeSubject/SomeSubject';
import { Hobby } from '../Hobby/Hobby';

export const Person = ({ person }) => {
	if (!person) {
		// При  использовании логических условий falsy значения преобразуются в false: false, null, undefined, 0, "", NaN
		return null;
	}

	const { schoolSubject, hobby, name } = person; //деструктуризация параметров
	return (
		<div>
			<ShortInfo person={person} />
			<SomeSubject subjects={schoolSubject} />
			<Hobby nam={name} hobbies={hobby} />
		</div>
	);
};
