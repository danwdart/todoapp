module.exports = function requireLogin(req, res, next) {
    if (!req.session.user)
        return res.status(403).send({error: 'You are not authorised to access this resource.'});
    next();
}
