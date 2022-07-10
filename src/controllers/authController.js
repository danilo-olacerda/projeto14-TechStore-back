import { db, objectId } from "../db/mongo.js";

async function register(_, res) {

    const newUser = res.locals.newUser;

    await db.collection("users").insertOne(newUser);
    res.sendStatus(201);
}

async function login(_, res) {

    const newSession = res.locals.newSession;

    const token = {
        token: newSession.token
    };

    const currentSession = await db.collection("sessions").findOne({userID: newSession.userID});

    if (currentSession){
        await db.collection("sessions").updateOne({userID: new objectId(newSession.userID)}, {$set: token});
        res.status(200).send(token);
        return;
    }

    await db.collection("sessions").insertOne(newSession);

    res.status(200).send(token.token);
}

export { register, login };