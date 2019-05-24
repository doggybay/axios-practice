let axios = {
	get: function (url) {
		return fetch(url).then(response => response.json())
			.then(data => {
				return {
					data: data
				};
			});
	}

} // Might want to add something here?


axios.get(`https://swapi.co/api/people/1`).then(response => console.log(response.data.name)); // should log "Luke Skywalker"

axios.get(`https://swapi.co/api/people/1`)
	.then(response => console.log(response.data.height)); // should log "172"

	
