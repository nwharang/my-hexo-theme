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
                output.innerHTML +=  `         
                <div class="wrapper">
                <iframe id="vid${number}" width="100%" height="600" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <style>
                /*Floating CSS Start*/
.wrapper{
  width:100%;
  margin:0 auto;
}
        @keyframes fade-in-up {
            0% {
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .stuck {
            position: fixed;
            bottom: -10px;
            right: 50px;
            transform: translateY(100%);
            width: 460px;
            height: 300px;
            animation: fade-in-up .25s ease forwards;
            z-index: 999;
        }

        /*Floating CSS End*/

@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: #ff7037;}
    50%  {background-color: red;}
    100% {background-color: #ff7037;}
}

                </style>
                </div>
                `;
                number++
            });
/*Floating Code for Iframe Start*/
if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
  /*Wrap (all code inside div) all vedio code inside div*/
  jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
  /*main code of each (particular) vedio*/
  jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) {

      /*Floating js Start*/
      var windows = jQuery(window);
      var iframeWrap = jQuery(this).parent();
      var iframe = jQuery(this);
      var iframeHeight = iframe.outerHeight();
      var iframeElement = iframe.get(0);
      windows.on('scroll', function() {
          var windowScrollTop = windows.scrollTop();
          var iframeBottom = iframeHeight + iframeWrap.offset().top;
          //alert(iframeBottom);

          if ((windowScrollTop > iframeBottom)) {
              iframeWrap.height(iframeHeight);
              iframe.addClass('stuck');
              jQuery(".scrolldown").css({"display": "none"});
          } else {
              iframeWrap.height('auto');
              iframe.removeClass('stuck');
          }
      });
      /*Floating js End*/
  });
}
    });
  }


/*Floating Code for Iframe End*/
