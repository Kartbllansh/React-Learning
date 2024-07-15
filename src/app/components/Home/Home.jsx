import { array } from '@/constant/arr';
import React from 'react';

import { Person } from '../Person/Person';

export const Home = () => {
	//return React.createElement('div', {
	//children: array.map(person =>
	//React.createElement('div', { children: person.name })
	//),
	//});
	return (
		<div>
			{array.map(person => (
				<div key={person.id}>
					<Person person={person} />
				</div>
			))}
		</div>
	);
};

function HomeJSX() {
	return (
		//Зачем эта скобка?
		<div>
			{array.map(person => (
				<div key={person.id}>
					{' '}
					//Добавляет к элементу React уникальный ключ
					<h3>person.name</h3>
				</div>
			))}
		</div>
	);
}
