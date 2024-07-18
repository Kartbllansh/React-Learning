import '@/app/style/globals.scss'; //Он не видит эти импорты

//Это универсальная обертка для всех страниц

export default function App({ Component, pageProps }) {
	//Этот компонент у меня не работает

	return (
		<div>
			<h1>Hello</h1>
			<Component {...pageProps} />
		</div>
	);
}
