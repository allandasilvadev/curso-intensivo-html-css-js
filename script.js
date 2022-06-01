const result = document.getElementById('result');
const filter = document.getElementById('filter');
const select = document.getElementById('select');

let listItens = [];

// let listNames = ['Ana Santos', 'Dalva Duarte', 'Nayra Louise', 'Fernando Pontes'];
let listNames = [
  {
  	picture: 'https://randomuser.me/api/portraits/women/94.jpg',
  	country: 'Brasil',
  	name: 'Ana Santos',
  	age: 20,
  	city: 'São Paulo'
  },
  {
  	picture: 'https://randomuser.me/api/portraits/women/95.jpg',
  	country: 'Brasil',
  	name: 'Dalva Duarte',
  	age: 54,
  	city: 'São Roque'
  },
  {
  	picture: 'https://randomuser.me/api/portraits/women/96.jpg',
  	country: 'Brasil',
  	name: 'Mayra Louise',
  	age: 33,
  	city: 'Cajamar'
  }
];

let dataJson = `
  {
  	"results": [
  	  {
  	    "id": 1,
  	    "name": "Caio Duarte",
  	    "age": 34,
  	    "city": "Cajamar",
  	    "country": "Brasil",
  	    "picture": "https://randomuser.me/api/portraits/men/57.jpg",
  	    "hobby": {
  	  	  "first": "Jogos de Pc",
  	  	  "second": "Escutar musica"
  	    }
  	  },
  	  {
  	    "id": 2,
  	    "name": "Ricardo Alves",
  	    "age": 23,
  	    "city": "Roma",
  	    "country": "Itália",
  	    "picture": "https://randomuser.me/api/portraits/men/58.jpg",
  	    "hobby": {
  	  	  "first": "Assistir filmes",
  	  	  "second": "Jogar futebol"
  	    }
  	  },
  	  {
	  	  "id": 3,
	  	  "name": "Sandro Alves",
	  	  "age": 58,
	  	  "city": "Lisboa",
	  	  "country": "Portugal",
	  	  "picture": "https://randomuser.me/api/portraits/men/59.jpg",
	  	  "hobby": {
	  		  "first": "Assistir filmes",
	  		  "second": "Jogar futebol"
	  	  }
  	  }
  	]
  }
`;

let response = JSON.parse(dataJson);

// console.log( response );

// let listResults = response.results;
let listResults = [];

// console.log( listNames );
/*
function getData() {
	result.innerHTML = '';

	// listNames.forEach(user => {
	listResults.forEach(user => {
		const li = document.createElement('li');

		listItens.push(li);
		
		// li.innerHTML = `${user}`;
		li.innerHTML = `
		  <img src="${user.picture}" alt="${user.name}">
		  <div class="user-info">		    
		    <h4>${user.name}</h4>
		    <p>${user.city} | ${user.country}</p>
		    <p>${user.age} anos</p>
		  </div>
		`;

		result.appendChild(li);
	});
}
*/

async function getData() {
	let uri = 'https://randomuser.me/api/?results=30';
	// retorna uma promise
	const res = await fetch(uri);

	// console.log(res.status);
	// retorna uma promise
	// let data = await res.json();
	// console.log(data.results);

	const { results } = await res.json();
	console.log( results );

	result.innerHTML = '';

	results.forEach(user => {
		const li = document.createElement('li');

		listItens.push(li);

		listResults.push(user);
		
		// li.innerHTML = `${user}`;
		li.innerHTML = `
		  <img src="${user.picture.large}" alt="${user.name.first}">
		  <div class="user-info">		    
		    <h4>${user.name.first} ${user.name.last}</h4>
		    <p>${user.location.city} | ${user.location.country}</p>
		    <p>${user.dob.age} anos</p>
		  </div>
		`;

		result.appendChild(li);
	});
}

function filterData( searchTerm ) {
  listItens.forEach((item) => {
  	if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
  		item.classList.remove('hide');
  	} else {
  		item.classList.add('hide');     
  	}
  });
}

function searchByCountry( country ) {
	// console.log( `O país selecionado foi ${country}.` );

	result.innerHTML = '';

	listResults.forEach((user) => {
		// if ( user.country === country ) {
		if ( user.location.country === country ) {
			const li = document.createElement('li');

			/*
			li.innerHTML = `
			  <img src="${user.picture}" alt="${user.name}">
			  <div class="user-info">		    
			    <h4>${user.name}</h4>
			    <p>${user.city} | ${user.country}</p>
			    <p>${user.age} anos</p>
			  </div>
			`;
			*/

			li.innerHTML = `
			  <img src="${user.picture.large}" alt="${user.name.first}">
			  <div class="user-info">		    
			    <h4>${user.name.first} ${user.name.last}</h4>
			    <p>${user.location.city} | ${user.location.country}</p>
			    <p>${user.dob.age} anos</p>
			  </div>
			`;

			result.appendChild(li);
		}
	});
}


document.getElementById('displayButton').addEventListener('click', getData, false);

filter.addEventListener('input', (el) => {
	filterData(el.target.value)
});

select.addEventListener('change', (el) => {
	searchByCountry(el.target.value);
});