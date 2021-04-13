const axios = require('axios');
const BlipSdk = require('blip-sdk');
const WebSocketTransport = require('lime-transport-websocket');

	//-------Criando Servidor -------

let IDENTIFIER = 'chatparadesafio';
let ACCESS_KEY = 'dG9vNW81UVVxcEZCWWs0Q0pwRVY=';

let client = new BlipSdk.ClientBuilder()
	.withIdentifier(IDENTIFIER)
	.withAccessKey(ACCESS_KEY)
	.withTransportFactory(() => new WebSocketTransport())
	.build();

client
	.connect() // This method return a 'promise'.

	.then(function (session) {
		var msg = {
			type: 'text/plain',
			content: 'dassd, world',
			to: '5531990000@0mn.io',
		};

		client.sendMessage(msg);



	})
	.catch(function (err) {
		/* Connection failed. */
	});


	//-------API GitHub -------

		const url = "https://api.github.com/orgs/takenet/repos?";
		const client_id = "d2460f3bb1640c25772c";
		const client_secret = "83f2c933ea28b9302b35b5539e7684cb626cc716";
		const filtro = "&per_page=5&language=C#&sort=created&direction=des";
		const url_final = `${url}client_id=${client_id}&client_secret=${client_secret}${filtro}`;
		
		console.log(url_final);


		async function fetchGithubData() {
			try {
				let repos = [];
				const response = await axios.get(url_final);
		
				response.data.map((repo) => {
					repos.push({ name: repo.name, description: repo.description });
					console.warn(repos);
				});
			} catch (err) {
				console.warn(err);
			}
		};
		console.warn(fetchGithubData)







	