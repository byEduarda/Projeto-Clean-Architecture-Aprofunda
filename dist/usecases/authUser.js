"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = authUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../shared/helpers/jwt");
const userModel_1 = require("../models/userModel");
async function authUser(email, password) {
    const user = await userModel_1.UserModel.findOne({ email });
    if (!user)
        return null;
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid)
        return null;
    const token = (0, jwt_1.generateToken)({ id: user._id, email: user.email });
    return { token, user };
}
