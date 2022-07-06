import Joi, { func } from "joi";
import bcrypt from 'bcrypt';
import { db } from "../db/mongo.js";

export default async function validateRegister (req, res, next) {
    next();
}