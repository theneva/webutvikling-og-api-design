const app = require('express')();
const jwt = require('jwt-simple');

app.post('/sessions', (req, res) => {
	// get and validate login info

	if (invalid) {
		// respond with 401 unauthorized
	} else {
		// encode jwt with payload & sign with secret
		// return the jwt
	}
});

app.get('/user', (req, res) => {
	// verify & decode jwt
	// get jwt payload username
	// retrieve user by username from DB
	// return user info
});

app.listen(1234, () => console.log('listening on port 1234'));
