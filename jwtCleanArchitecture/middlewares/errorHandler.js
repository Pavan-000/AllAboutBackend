const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    console.log(err.stack);
    res.status(statusCode).json(
        {
            message : err.message || "something went wrong"
        });
};

module.exports = errorHandler;