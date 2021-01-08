 
function initRollOverImages() {
  var image_cache = new Object();
  $("img.swap").each(function(i) {
    var imgsrc = this.src;
    var dot = this.src.lastIndexOf('.');
    var imgsrc_o = this.src.substr(0, dot) + '_o' + this.src.substr(dot, 4);
    image_cache[this.src] = new Image();
    image_cache[this.src].src = imgsrc_o;
    $(this).hover(
      function() { this.src = imgsrc_o; },
      function() { this.src = imgsrc; });
  });
}

$(document).ready(initRollOverImages);
