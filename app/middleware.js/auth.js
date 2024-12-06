const jwt = require('jsonwebtoken');

const authCheck=(req,res,next)=>{
    const token = req.headers['authorization'] && req.headers['authorization']
    if (!token) return res.sendStatus(401);

    jwt.verify(token, "rajukayalsagnikduttaswarup", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = authCheck;

