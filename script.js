const result = document.getElementById('result');

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

document.getElementById('displayButton').addEventListener('click', getData, false);