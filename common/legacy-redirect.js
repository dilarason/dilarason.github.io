(function () {
  var root = document.documentElement;
  if (!root) return;

  var target = root.getAttribute("data-redirect-target");
  if (!target) return;

  var currentPath = window.location.pathname.replace(/\/+/g, "/");
  if (currentPath === target) return;

  window.location.replace(target);
})();
