function fetchdata () {
  fetch("https://acs-garena.leagueoflegends.com/v1/stats/player_history/VN/486211408?begIndex=0&endIndex=1&", {
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
  "credentials": "include"
}).then(response => {
 console.log(response);
})};

var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  
  xhr.onload = function() {
  
      var status = xhr.status;
      
      if (status == 200) {
          callback(null, xhr.response);
      } else {
          callback(status);
      }
  };
  
  xhr.send();
};

getJSON('https://acs-garena.leagueoflegends.com/v1/stats/player_history/VN/486211408?begIndex=0&endIndex=15&',  function(err, data) {
  
  if (err != null) {
      console.error(err);
  } else {
      
      var text = `Date: ${data.date}
Time: ${data.time}
Unix time: ${data.milliseconds_since_epoch}`
  
      console.log(text);
  }
});