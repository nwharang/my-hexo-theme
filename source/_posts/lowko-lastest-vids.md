---
title: lowko-lastest-vids
date: 2021-04-10 09:16:46
tags:
---

# Here some lastest videos from my favorite caster , streamer , gamer , whatever , ... hope you like it !!

<iframe class="latestVideoEmbed" vnum='0' cid="UCZNTsLA6t6bRoj-5QRmqt_w" width="600" height="340" frameborder="0" allowfullscreen></iframe>
<iframe class="latestVideoEmbed" vnum='1' cid="UCZNTsLA6t6bRoj-5QRmqt_w" width="600" height="340" frameborder="0" allowfullscreen></iframe>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
function loadVideo(iframe) {
  $.getJSON(reqURL + iframe.getAttribute('cid'),
    function(data) {
      var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
      console.log(videoNumber);
      var link = data.items[videoNumber].link;
      id = link.substr(link.indexOf("=") + 1);
      iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=1");
    }
  );
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
  loadVideo(iframes[i]);
}
</script>
