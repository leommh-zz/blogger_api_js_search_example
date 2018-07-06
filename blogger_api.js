
//Informações do blog [EDITAR]
let blogId = "ID DO BLOGGER";
let apikey = "API KEY DO BLOGGER V3";
let results = "5";
let search = "CONTEUDO PARA A PESQUISA";

let url = "https://www.googleapis.com/blogger/v3/blogs/"
	+ blogId
	+ "/posts?fetchBodies=false"
	+ "&maxResults=" + results 
	+ "&key=" + apikey;

let url_search = "https://www.googleapis.com/blogger/v3/blogs/"
	+ blogId
	+ "/posts"
	+ "/search?q=" + search
	+ "&key=" + apikey;



let catchPosts = (url) => {
	//recebe os valores da api http
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, false ); // false for synchronous request
	xmlHttp.send( null );

	//trata estes valores
	let conteudo = JSON.parse(xmlHttp.responseText);
	let posts = conteudo.items;

	console.log('--------- POSTS ----------');
	console.log(posts);   
	console.log('---------------------------');
}

//Mostrar postagens
catchPosts(url);

//Mostrar postagens de acordo com a busca
catchPosts(url_search);