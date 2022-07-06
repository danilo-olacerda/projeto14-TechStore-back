import joi from "joi";
import bcrypt from 'bcrypt';
import { db } from "../db/mongo.js";
import { v4 as uuid } from "uuid";

const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export default async function validateLogin (req, res, next) {

    const user = req.body;

    const { error } = userSchema.validate(user);

    if (error) {
        res.status(400).send('Campo body inválido/faltando dados!');
        return;
    }

    const userExists = await db.collection("users").findOne({email: user.email});

    if (!userExists || !bcrypt.compareSync(user.password, userExists.password)){
        res.status(404).send('Email ou senha Inválidos!');
        return;
    }

    const token = uuid();
    const newSession = {
        userID: userExists._id,
        token 
    };

    res.locals.newSession = newSession;

    next();
}