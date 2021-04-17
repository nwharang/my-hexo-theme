const sp = '%20';
const champId = null;
const queue = null;
const endIndex = 1 ;
const begIndex = 0 ;
var champlist = [];
var champkey = [];
var keys = [];

async function fetchdata () {
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
let summonerName = data.games.games[0].participantIdentities[0].player.summonerName;
let championId = data.games.games[0].participants[0].championId;
champion();
var myJSON = JSON.stringify(champkey);
}

async function champion () {
  let response = await fetch("https://ddragon.leagueoflegends.com/cdn/11.8.1/data/vn_VN/champion.json")
  let {data} = (await response.json())
  var dataID = Object.entries(data)

  dataID.forEach((s) => {
    //console.log(`Champions: ${s[0]} is key : ${s[1].key}`)
    var newLength  = champkey.push(parseInt(s[1].key))
    var newLength  = champlist.push(s[0])
  });
};
fetchdata(); 

