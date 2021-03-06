module.exports = (req, res, next) => {
  let body = '';
  req.on('data', (chunk) => body += chunk);
  req.on('end', () => {
    try {
      req.body = JSON.parse(body);
      next();
    } catch (err){
      next(err);
    }
  });
};


