module.exports.middleware = (req, res, next) => {
   
    if (req.body.cliente) { 
        console.log();
        console.log(`Vi que voce posto : ${req.body.cliente}`);
        console.log();
    }
         
    
    next();
}


module.exports.outroMiddleware = (req, res, next) => {
   
    console.log(`1 - Outro Middleware`);
    
    next();
}