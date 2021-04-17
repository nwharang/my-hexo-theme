async function fetchdata () {

  let response = await fetch("https://thingproxy.freeboard.io/fetch/https://acs-garena.leagueoflegends.com/v1/stats/player_history/VN/486211408?begIndex=0&endIndex=1", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Cookie" : "__cfduid=d13284f5d84203e94a2895f5439db2da11618571234",
  },
  "referrer": "https://matchhistory.vn.leagueoflegends.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include",
});
let data = await response.json()
console.log(data.games.games[0].participantIdentities[0].player.summonerName)
console.log(data.games.games[0].participants[0].championId)
}

async function champion () {
  let response = await fetch("https://ddragon.leagueoflegends.com/cdn/11.8.1/data/vn_VN/champion.json")
  let data = await response.json()
  let  championid  = data.data
  console.log(data)
  console.log(championid)
}
fetchdata();
champion();