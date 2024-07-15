export function Hobby({ nam, hobbies }) {
	return (
		<div>
			<h3>В свободное время помимо учебы {nam} имеет следующие хобби:</h3>
			{hobbies.map(hobby => (
				<div>
					<h5>{hobby}</h5>
				</div>
			))}
		</div>
	);
}
