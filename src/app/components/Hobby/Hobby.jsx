export function Hobby({ nam, hobbies }) {
	if (!hobbies?.length) {
		//Зачем нужна такая проверка? Если массив пустой, то цикл просто не будет крутиться. Правда только он позволит избежать ошибки, если hobbies = null or undefined
		return null; // Очень выгодно в коде использовать ранний return
	}
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
