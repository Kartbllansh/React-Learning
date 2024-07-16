export default function SomeSubject({ subjects }) {
	if (!subjects) {
		return null;
	}
	console.log(subjects);
	return (
		<div>
			<h4>Некие школьные предметы:</h4>
			{Object.keys(subjects).map(sub => (
				<p>
					{sub}: {subjects[sub]}
				</p>
			))}
		</div>
	);
}
