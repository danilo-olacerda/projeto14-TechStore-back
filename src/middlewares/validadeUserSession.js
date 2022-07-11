import { db } from '../db/mongo.js';

export default async function validateUserSession(req, res, next){

    const token = req.headers.authorization?.replace("Bearer", "").trim();

    const user = await db.collection("sessions").findOne({token});

    if (!user) {
        res.status(404).send("Token invalido!");
        return;
    }

    res.locals.userID = user.userID;
    next();
}