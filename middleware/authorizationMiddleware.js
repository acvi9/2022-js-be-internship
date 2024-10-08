const jwt = require('jsonwebtoken');
const authorizationRules = require('./authorizationRules');
const {STATUS_CODES} = require('../constants');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) {
        return res.sendStatus(STATUS_CODES.FORBIDDEN);
      }
      let stack = req.route.stack;
      const functionName = stack[stack.length-1].name;

      req.userData = data;
      if(authorizationRules[functionName].includes(data.role))
        next();
      else      
        return res.sendStatus(STATUS_CODES.FORBIDDEN);
    });
  } else {
    res.sendStatus(STATUS_CODES.UNAUTHORIZED);
  }
};

module.exports = {
  authenticateJWT,
}
