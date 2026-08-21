(function () {
  var isDesktop = window.matchMedia('(min-width: 990px)').matches;
  if (!isDesktop) return;

  function handleMouseOver(event) {
    event.currentTarget.style.transform = 'scale(2)';
  }

  function handleMouseMove(event) {
    var image = event.currentTarget;
    var rect = image.getBoundingClientRect();
    var xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    var yPercent = ((event.clientY - rect.top) / rect.height) * 100;
    image.style.transformOrigin = xPercent + '% ' + yPercent + '%';
  }

  function handleMouseOut(event) {
    var image = event.currentTarget;
    image.style.transform = 'scale(1)';
    image.style.transformOrigin = 'center center';
  }

  function initZoomableImage(image) {
    if (image.dataset.zoomHoverInit) return;
    image.dataset.zoomHoverInit = 'true';
    image.addEventListener('mouseover', handleMouseOver);
    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseout', handleMouseOut);
  }

  document.querySelectorAll('.ss-zoom-hover-image').forEach(initZoomableImage);
})();
