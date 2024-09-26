// Este código fue sacado de la página de RapidApi para obtener la Api de Youtube

//Se instaló la dependencia "npm install gh-pages --save-dev"

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=23';

// Se guarda del DOM el elemento donde se van a mostrar los datos
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0c0a030fe0msh78cffb30a8d928ep1b3584jsn69bfd4e16d2f',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	return data;
}

// Función anónima, estas funciones tienen la particularidad de que se llaman a sí mismas.
(async () => {
try {
	const videos = await fetchData(url)
	let view = `
		${videos.items.map(video => `
			<div class="content-video">
				<div class="video-box">
					<a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
						<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
					</a>
				</div>
				<div class="video-title-box">
					<h3 class="video-title">
						${video.snippet.title}
					</h3>
				</div>
			</div>
		`).join('')}
	`;
	// slice() sirve para realizar una copia de una arreglo y solo agarrar cierta cantidad de elementos, en este caso solo selecciona los primeros 5 elementos del arreglo del indice 0 al 4.
	// join() sirve para juntar los elementos de un arreglo, dentro de los parentesis se pondrá lo que abrá en medio de esos elementos, ya sea un espacio, un guion etc.
	// ej. console.log(elements.join('-'));
	// Expected output: "Fire-Air-Water"

	//Esto va anexar el HTML de acuerdo el template creado en view.
	content.innerHTML = view;
} catch (error) {
	console.log(error);
	alert(error);
}
})();
