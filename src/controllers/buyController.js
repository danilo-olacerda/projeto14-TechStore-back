import { db, objectId } from "../db/mongo.js";

async function buy(_, res) {

    const user = res.locals.user;
    const buys = res.locals.buys;

    const newBuy = {
        ...buys,
        userID: user._id
    };

    await db.collection("buys").insertOne(newBuy);

    res.status(200).send(newBuy);
}

export { buy };