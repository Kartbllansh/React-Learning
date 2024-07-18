import React from 'react';
import { Home } from '@/components/Home/Home';

export default function HomePage() {
	return <Home />;
}

function HomePageOld() {
	return React.createElement('div', {
		children: [React.createElement(Button), React.createElement(Button)],
	});
}
