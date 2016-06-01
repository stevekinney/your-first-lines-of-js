const $ = require('jquery');
const content = require('../README.md');

require('./style.css');

const $content = $('.content');
const $chapters = $('.navigation-list');

$content.html(content);

$('h2').each(function (index, heading) {
  const href = $(heading).attr('id');
  const title = $(heading).text();
  $chapters.append(`
    <li class="navigation-list-item">
      <a href="#${href}" title="${title}">${title}</a>
    </li>
  `);
});

$('.lang-javascript').replaceWith(function (index, content) {
  return `<script type="text/p5" data-autoplay>${content}</script>`
});
