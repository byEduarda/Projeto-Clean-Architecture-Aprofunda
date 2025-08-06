"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jwt_1 = require("../../shared/helpers/jwt");
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: 'Token não fornecido' });
    const [, token] = authHeader.split(' ');
    const decoded = (0, jwt_1.verifyToken)(token);
    if (!decoded)
        return res.status(401).json({ error: 'Token inválido' });
    req.user = decoded;
    next();
}
