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

$('pre > .lang-javascript').replaceWith(function (index, content) {
  return desanitize`<script type="text/p5" data-autoplay>${content}</script>`
});

function desanitize([openingTag, closingTag], content) {
  const substitutions = { '&lt;': '<', '&gt;': '>'  };

  for (let [sanitized, unsanitized] of Object.entries(substitutions)) {
    content = content.replace(sanitized, unsanitized);
  }

  return openingTag + content + closingTag;
}
