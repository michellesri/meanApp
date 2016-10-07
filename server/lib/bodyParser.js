module.exports = (req, res, next) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      req.body = JSON.parse(body);
      next();
    } catch (err){
      next(err);
    }
  });
};
