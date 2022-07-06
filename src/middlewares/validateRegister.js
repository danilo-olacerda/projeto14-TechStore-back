import joi from "joi";
import bcrypt from 'bcrypt';
import { db } from "../db/mongo.js";

const newUserSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    address: joi.string().required(),
    addressNumber: joi.number().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});

export default async function validateRegister (req, res, next) {

    const newUser = req.body;

    const { error } = newUserSchema.validate(newUser);

    if (error) {
        res.status(400).send("Campo body inválido/faltando dados!");
        return;
    }

    const emailExists = await db.collection("users").findOne({email: newUser.email});

    if (emailExists) {
        res.status(409).send("Email já está em uso!");
        return;
    }
    if (newUser.password!==newUser.confirmPassword){
        res.status(400).send("As senhas devem ser iguais!");
        return;
    }

    delete newUser.confirmPassword;
    newUser.password = bcrypt.hashSync(newUser.password, 10);

    res.locals.newUser = newUser;

    next();
}