const sp = '%20';
const champId = null;
const queue = null;
const endIndex = 10 ;
const begIndex = 0 ;
const summonerName = undefined ;
const championId = ``;
const fetchdata = async function () {
  let accId = '486211408';
  let link = 'https://thingproxy.freeboard.io/fetch/https://acs-garena.leagueoflegends.com/v1/stats/player_history/VN/' + await accId + '?';
      if(champId != null)
        link += 'champion=' +champId+'&';
      if(queue != null)
        link += 'queue=' +queue+'&';
      if(endIndex != null)
        link += 'endIndex=' +endIndex+'&';
      if(begIndex != null)
        link += 'begIndex=' +begIndex+'&';
  let response = await fetch(link , {
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
var output = document.getElementsByClassName("md body")[0]
var summonerName = data.games.games[0].participantIdentities[0].player.summonerName;
console.log(data)
console.log(await champion (data.games.games[9].participants[0].championId));
console.log(await champion (data.games.games[8].participants[0].championId));
console.log(await champion (data.games.games[7].participants[0].championId));
console.log(await champion (data.games.games[6].participants[0].championId));
console.log(await champion (data.games.games[5].participants[0].championId));
console.log(await champion (data.games.games[4].participants[0].championId));
console.log(await champion (data.games.games[3].participants[0].championId));
console.log(await champion (data.games.games[2].participants[0].championId));
console.log(await champion (data.games.games[1].participants[0].championId));
console.log(await champion (data.games.games[0].participants[0].championId));

};

async function champion (championId) {

  let response = await fetch("https://ddragon.leagueoflegends.com/cdn/11.8.1/data/vn_VN/champion.json")
  let { data } = await response.json()
  for  (var i = 0 in data ) {
    if ( data[i].key != championId ){
      continue;
    } else {
      return data[i].id
    }
  }
}


fetchdata();