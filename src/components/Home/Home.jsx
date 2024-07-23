'use client';
import { array } from '@/constant/arr';
import React, { useEffect, useState } from 'react';

import { Person } from '../Person/Person';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Tabs } from '../Tabs/Tabs';
import { NewFormMessage } from '../NewFormMessage/NewFormMessage';

export const Home = () => {
	const [activePersonIndex, setActivePersonIndex] = useState(0);
	const activePerson = array[activePersonIndex];
	useEffect(() => {
		console.log('Gotovo'), [activePersonIndex];
	});
	return (
		<div>
			<Header />
			<Tabs array={array} onTabClick={setActivePersonIndex} />
			<Person key={activePerson.id} person={activePerson} />
			<NewFormMessage />
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
					<h3>person.name</h3>
				</div>
			))}
		</div>
	);
}
