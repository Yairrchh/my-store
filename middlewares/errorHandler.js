function logError(error, req, res, next) {
  console.log('logError')
  console.error(error);
  next(error);
}

function errorHandle(error, req, res, next){
  console.log('errorHanlde')
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandle(error, req, res, next){
  if(error.isBoom) {
    const {output} = error;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(error);
  }
}

module.exports = {logError, errorHandle, boomErrorHandle};
