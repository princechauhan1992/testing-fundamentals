var http = require('http');

const handleDefault = (res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
};

const handlePrince = (res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Prince!');
  res.end();
};

const server = http.createServer(function (req, res) {
  console.log('path', req.path);
  console.log('method', req.method);
  console.log('headers', req.headers);
  console.log('body', req.body);
  console.log('url', req.url);
  console.log('query', req.query);

  if (req.url === '/') {
    handleDefault(res);
  } else if (req.url === '/prince') {
    handlePrince(res);
  }
  //   console.log(res);
});

server.listen(8080);
