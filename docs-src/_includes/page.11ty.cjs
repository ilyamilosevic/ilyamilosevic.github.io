const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="${relative(page.url, '/docs.css')}">
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script src="/node_modules/lit/polyfill-support.js"></script>
    <script src="${relative(
      page.url,
      '/index.bundled.js'
    )}"></script>
  </head>
  <body>
    <main>
      ${content}
    </main>
  </body>
</html>`;
};
