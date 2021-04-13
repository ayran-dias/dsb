//-------constantes e importações -------

const axios = require("axios");
const BlipSdk = require("blip-sdk");
const WebSocketTransport = require("lime-transport-websocket");
const Lime = require("lime-js");
const img_perfil = "https://avatars.githubusercontent.com/u/4369522";

//-------Criando Servidor -------

let IDENTIFIER = "chatparadesafio";
let ACCESS_KEY = "dG9vNW81UVVxcEZCWWs0Q0pwRVY=";

let client = new BlipSdk.ClientBuilder()
  .withIdentifier(IDENTIFIER)
  .withAccessKey(ACCESS_KEY)
  .withTransportFactory(() => new WebSocketTransport())
  .build();

client
  .connect()
  .then(function (session) {
    var msg = {
      type: "text/plain",
      content: "Ei, vamos começar!",
    };
    client.sendMessage(msg);
  })
  .catch(function (err) {});

//-------API GitHub -------

const url = "https://api.github.com/orgs/takenet/repos?";
const client_id = "d2460f3bb1640c25772c";
const client_secret = "83f2c933ea28b9302b35b5539e7684cb626cc716";
const filtro = "&per_page=5&language=C#&sort=created&direction=des";
const url_final = `${url}client_id=${client_id}&client_secret=${client_secret}${filtro}`;
async function fetchGithubData() {
  const repos = [];
  try {
    const response = await axios.get(`${url_final}`);
    response.data.map((repo) => {
      repos.push({
        name: repo.name,
        description: repo.description,
        clone_url: repo.clone_url,
      });
      console.warn(repos);
    });
  } catch (err) {
    console.warn(err);
  }
}
fetchGithubData();

//-------ENVIAR MENSAGEM -------

//-------ENVIAR CARROSSEL -------

client.sendMessage({
  id: Lime.Guid(),
  type: "application/vnd.lime.collection+json",
  content: {
    itemType: "application/vnd.lime.document-select+json",
    items: [
      {
        header: {
          type: "application/vnd.lime.web-link+json",
          value: {
            title: repo.name[0],
            text: repo.description[0],
            uri: repo.clone_url[0],
          },
        },

        options: [
          {
            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[1],
                text: repo.description[1],
                uri: repo.clone_url[1],
              },
            },
          },

          {
            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[2],
                text: repo.description[2],
                uri: repo.clone_url[2],
              },
            },
            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[2],
                text: repo.description[2],
                uri: repo.clone_url[2],
              },
            },

            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[3],
                text: repo.description[3],
                uri: repo.clone_url[3],
              },
            },

            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[4],
                text: repo.description[4],
                uri: repo.clone_url[4],
              },
            },

            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[3],
                text: repo.description[3],
                uri: repo.clone_url[3],
              },
            },
            label: {
              type: "application/vnd.lime.web-link+json",
              value: {
                title: repo.name[4],
                text: repo.description[4],
                uri: repo.clone_url[4],
              },
            },
          },
        ],
      },
    ],
  },
});
