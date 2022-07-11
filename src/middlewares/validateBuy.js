import joi from "joi";
import { db } from "../db/mongo.js";

const itemSchema = joi.object({
    name: joi.string().required(),
    quantity: joi.number().required(),

    index: joi.number(),
    value: joi.number(),
    image: joi.string()
});
const itemsSchema = joi.array().items(itemSchema);

export default async function validateBuy(req, res, next){

    const body = req.body;
    const token = req.headers.authorization?.replace("Bearer", "").trim();

    const { error } = itemsSchema.validate(body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const user = await db.collection("sessions").findOne({token: token});
    if (!user){
        res.status(404).send("Token invalido!");
        return;
    }

    /* 


    verificar se a quantidade pode ser retirada do inventory


    */

    console.log(user)

    res.locals.user = user;
    res.locals.buys = body;

    next();
}