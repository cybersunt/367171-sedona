'use strict';

(function () {

  var searchBox = document.querySelector('.search-box');

  var toggleSearchForm = searchBox.querySelector('.search-box__link');
  var searchForm = searchBox.querySelector('.search-form');

  toggleSearchForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('hidden');
  })
})();
