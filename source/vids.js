gapi.load("client", loadClient);
function loadClient() {
    gapi.client.setApiKey( "AIzaSyBL6xae05XTd640zee8PMVomSV2Fh63aKE" );
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { 
            execute();
         },
                function(err) { console.error("Error loading GAPI client for API", err); });
}

/*
const ytForm = document.getElementById('yt-form');
const keywordInput = document.getElementById('keyword-input');
const maxresultInput = document.getElementById('maxresult-input');
const orderInput = document.getElementById('order-input');
const videoList = document.getElementById('videoListContainer');
var pageToken = '';
  
ytForm.addEventListener('submit', e => {
    e.preventDefault();
    execute();
});
  
function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
}
  
// Make sure the client is loaded before calling this method.
function execute() {
    const searchString = keywordInput.value;
    const maxresult = maxresultInput.value;
    const orderby = orderInput.value;
  
    var arr_search = {
        "part": 'snippet',
        "type": 'video',
        "order": orderby,
        "maxResults": maxresult,
        "q": searchString
    };
  
    if (pageToken != '') {
        arr_search.pageToken = pageToken;
    }
  
    return gapi.client.youtube.search.list(arr_search)
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        const listItems = response.result.items;
        if (listItems) {
            let output = '<h4>Videos</h4><ul>';
  
            listItems.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                output += `
                    <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>${videoTitle}</p></li>
                `;
            });
            output += '</ul>';
  
            if (response.result.prevPageToken) {
                output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
            }
  
            if (response.result.nextPageToken) {
                output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
            }
  
            // Output list
            videoList.innerHTML = output;
        }
    },
    function(err) { console.error("Execute error", err); });
}
*/
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
            const { result } = response ;
            result.items.forEach(item => {

                console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\nID: ${item.id.videoId}`)
            });
              });
  }
var output = document.getElementsByClassName("md body")[0]
let ifrm  = document.createElement("iframe")
ifrm.setAttribute("src", "https://www.youtube.com/embed/${item.id.videoId}");
ifrm.style.width = "640px";
ifrm.style.height = "480px";
output.insertBefore(ifrm, output.childNodes[0]);
  

