(function(){
const script=document.currentScript;
const header="<header>\n    <nav class=\"container\">\n      <a class=\"logo\" href=\"index.html\">\n        Rare<span>M</span><span>a</span><span>te</span>\n      </a>\n      <div class=\"nav-links\">\n        <a href=\"index.html#about\">About</a>\n        <div class=\"nav-dropdown\">\n          <button type=\"button\" class=\"nav-products applications-toggle\" aria-expanded=\"false\" aria-controls=\"products-menu\">Products <span aria-hidden=\"true\">▾</span></button>\n          <div class=\"dropdown-menu\" id=\"products-menu\">\n            <a href=\"led-display.html\">LED Display</a>\n            <a class=\"submenu-link\" href=\"display-r-series.html\">Micro LED Display — R Series</a>\n            <a class=\"submenu-link\" href=\"display-r-pro-series.html\">Micro LED Display — R Pro Series</a>\n            <a class=\"submenu-link\" href=\"display-c-series.html\">Micro LED Display — C Series</a>\n            <a class=\"submenu-link\" href=\"display-b-series.html\">Micro LED Display — B Series</a>\n            <a class=\"submenu-link\" href=\"display-h-series.html\">Micro LED TV — H Series</a>\n            <a class=\"submenu-link\" href=\"display-o-series.html\">Outdoor LED — O Series</a>\n            <a href=\"led-package.html\">LED Package</a>\n            <a class=\"submenu-link\" href=\"package-smd.html\">SMD</a>\n            <a class=\"submenu-link\" href=\"package-dip.html\">DIP</a>\n            <a href=\"led-accessories.html\">LED Display Accessories</a>\n          </div>\n        </div>\n        <div class=\"nav-dropdown applications-dropdown\">\n          <button type=\"button\" class=\"nav-products applications-toggle\" aria-expanded=\"false\" aria-controls=\"applications-menu\">Applications <span aria-hidden=\"true\">▾</span></button>\n          <div class=\"dropdown-menu\" id=\"applications-menu\">\n            <a href=\"index.html#applications\">All Applications</a>\n            <a href=\"application-retail-commercial.html\">Retail &amp; Commercial</a>\n            <a href=\"application-corporate-education.html\">Corporate &amp; Education</a>\n            <a href=\"application-control-rooms.html\">Control Rooms</a>\n            <a href=\"application-broadcast.html\">Broadcast</a>\n            <a href=\"application-home-cinema.html\">Home Cinema</a>\n            <a href=\"application-outdoor-billboard.html\">Outdoor Billboard</a>\n            <a href=\"application-display-production.html\">Display Production</a>\n          </div>\n        </div>\n        <a class=\"button\" href=\"#contact\">Contact Us</a>\n      </div>\n    </nav>\n  </header>";
script.insertAdjacentHTML('beforebegin',header);
})();

  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    const toggle = dropdown.querySelector('button');
    function close() { dropdown.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    toggle.addEventListener('click', function () {
      const open = !dropdown.classList.contains('is-open');
      document.querySelectorAll('.nav-dropdown').forEach(function (other) {
        other.classList.remove('is-open'); other.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      dropdown.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open));
    });
    dropdown.querySelectorAll('.dropdown-menu a').forEach(function (link) { link.addEventListener('click', close); });
    document.addEventListener('click', function (event) { if (!dropdown.contains(event.target)) close(); });
    dropdown.addEventListener('focusout', function (event) { if (!dropdown.contains(event.relatedTarget)) close(); });
    dropdown.addEventListener('keydown', function (event) { if (event.key === 'Escape') { close(); toggle.focus(); } });
  });
