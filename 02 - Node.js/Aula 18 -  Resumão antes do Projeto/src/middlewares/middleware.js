module.exports.middleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local, vindo do middleware.' /// acessivel em todas views
    next();
}


module.exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('403');
    }
}