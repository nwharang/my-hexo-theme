gapi.load("client", loadClient);
function loadClient() {
    gapi.client.setApiKey( "AIzaSyBL6xae05XTd640zee8PMVomSV2Fh63aKE" );
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { 
            execute();
         },
                function(err) { console.error("Error loading GAPI client for API", err); });
}
function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "id",
        "snippet"
      ],
      "channelId": "UCZNTsLA6t6bRoj-5QRmqt_w",
      "maxResults": 3,
      "order": "date"
    }).then((response) => {
            var output = document.getElementsByClassName("md body")[0]
            let number = 1
            const { result } = response ;
            result.items.forEach(item => {
                console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\nID: ${item.id.videoId}`)
                output.innerHTML +=  `         
                <div>
                <iframe class="vid${number}" width="100%" height="600" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                `;
                number++
            });
    });
  }

document.getElementsByClassName('vids')[0].requestPictureInPicture();
