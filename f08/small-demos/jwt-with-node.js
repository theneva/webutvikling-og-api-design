const jwt = require('jwt-simple');

const secret = 'some top secret string';

const payload = {
  username: 'theneva',
};

// Token for sending
const signedToken = jwt.encode(payload, secret);
console.log(signedToken); // eyJ0eXAiOiJKV1QiLC…

// Decode the token using the secret
const decodedPayload = jwt.decode(signedToken, secret);
console.log(decodedPayload); // { username: 'theneva' }
