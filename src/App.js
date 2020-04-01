import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';

function App() {
	//Definir la categoria y noticias
	const [categoria, guardarCategoria] = useState('');
	const [noticas, guardarNoticias] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=7cffea83743b4b0ca354878f1b69161c`;

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();

			guardarNoticias(noticias.articles);
		}
		consultarAPI();
	}, [categoria])
	return (
		<Fragment>
			<Header
				titulo="Buscador de noticias"
			/>

			<div className="container white">
				<Formulario
					guardarCategoria={guardarCategoria}
				/>
			</div>

			<ListadoNoticias
				noticias={noticas}
			/>
		</Fragment>
	);
}

export default App;
