import { db, objectId } from "../db/mongo.js";

async function register(_, res) {

    const newUser = res.locals.newUser;

    await db.collection("users").insertOne(newUser);
    res.sendStatus(201);
}

async function login(req, res) {

    res.sendStatus(200);
}

export { register, login };