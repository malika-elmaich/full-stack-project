module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const response = {
    message: err.message || 'Internal Server Error',
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  res.status(status).json(response);
};
