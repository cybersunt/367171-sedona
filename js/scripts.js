'use strict';

//modal window
(function () {

  var searchBox = document.querySelector('.search-box');

  var toggleSearchForm = searchBox.querySelector('.search-box__link');
  var searchForm = searchBox.querySelector('.search-form');

  toggleSearchForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('hidden');
  })
})();

//yandex-map
ymaps.ready(function(){

  var map = new ymaps.Map('map', {
    center: [34.81029621, -111.76329386],
    zoom: 9,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  var placemark = new ymaps.Placemark(['34.89', '-111.77'], {
    preset: 'islands#icon',
    iconColor: '#0095b6'
  });

  map.geoObjects.add(placemark);

  //hide map image
  (function () {
    document.querySelector('.map__img').classList.add('hidden');
  })();
});
