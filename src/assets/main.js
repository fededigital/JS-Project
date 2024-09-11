// Este código fue sacado de la página de RapidApi para obtener la Api de Youtube

//Se instaló la dependencia "npm install gh-pages --save-dev"

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNnNCBgckxzqIh1Txw5cgSg&part=snippet%2Cid&order=date&maxResults=30';

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
			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
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
