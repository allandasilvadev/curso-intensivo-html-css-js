const result = document.getElementById('result');
const filter = document.getElementById('filter');

filter.addEventListener('input', (el) => {
	filterData(el.target.value)
});

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

console.log( listNames );

function getData() {
	result.innerHTML = '';

	listNames.forEach(user => {
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

function filterData( searchTerm ) {
  listItens.forEach((item) => {
  	if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
  		item.classList.remove('hide');
  	} else {
  		item.classList.add('hide');     
  	}
  });
}

document.getElementById('displayButton').addEventListener('click', getData, false);