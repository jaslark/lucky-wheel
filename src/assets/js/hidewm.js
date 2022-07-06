function hideWatermark(retry) {
  if ($(".dash-board-chart-container svg").length > 0) {
    $(".dash-board-chart-container svg").each(function() {
      var p = $(this).parent();
      if (p.find(".layer-w").length == 0)
        p.append(
          '<div class="layer-w" style="position:absolute;bottom:4px;left:5px;width:55px;height:16px;background:white"></div>'
        );
    });
    if (
      $(".layer-w").length > 0 &&
      $(".dash-board-chart-container svg").length == $(".layer-w").length
    )
      return console.log("hideWatermark success");
  }
  let r = retry + 1;
  if (r > 100) return;
  setTimeout(function() {
    hideWatermark(r);
  }, 1000);
}
$(function() {
  setTimeout(function() {
    hideWatermark(0);
  }, 1000);
});
