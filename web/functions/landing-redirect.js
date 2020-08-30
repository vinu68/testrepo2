const cookie = require('cookie');

exports.handler = async (event, context) => {
  const visited = (event.headers.cookie && cookie.parse(event.headers.cookie).visited) || false;
  let landingPage = '/login';
  if (visited) {
    landingPage = '/login';
  }
  console.log('visited: ' + visited);
  return {
    statusCode: 302,
    headers: {
      Location: landingPage,
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({}),
  };
};
