const axios = require('axios');
const url = 'https://api.github.com/orgs/takenet/repos?per_page=5&language=C#&sort=created&direction=desc';

async function fetchGithubData() {
	try {
		let repos = [];
		const response = await axios.get(url);

		response.data.map((repo) => {
			repos.push({ name: repo.name, description: repo.description });
		});

	} catch (err) {
		console.warn(err);
	}
}

module.exports = fetchGithubData()
