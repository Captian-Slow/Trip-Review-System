exports.log_time_date_req = function log_time_date_req(req, res, next) {
    console.log('NEW_REQ: ', new Date(), req.method, req.url);
    next();
}

