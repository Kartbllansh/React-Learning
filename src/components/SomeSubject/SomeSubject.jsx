import { Rating } from '../Rating/Rating';

export default function SomeSubject({ subjects }) {
	if (!subjects) {
		return null;
	}

	return (
		<div>
			<h4>Некие школьные предметы:</h4>
			{Object.keys(subjects).map(sub => (
				<p key={sub}>
					{sub}: {subjects[sub]}
				</p>
			))}
		</div>
	);
}
