import Joi, { func } from "joi";
import bcrypt from 'bcrypt';
import { db } from "../db/mongo.js";

export default async function validateLogin (req, res, next) {
    next();
}