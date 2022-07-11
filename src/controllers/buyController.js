import { db, objectId } from "../db/mongo.js";

async function buy(_, res) {

    const user = res.locals.user;
    const buys = res.locals.buys;

    const newBuy = {
        ...buys,
        userID: user.userID
    };

    await db.collection("buys").insertOne(newBuy);

    res.status(200).send(newBuy);
}

async function userbuys(req, res) {

    const userID = res.locals.userID;

    const buys = await db.collection("buys").find({userID}).toArray();

    res.send(buys)

}

export { buy, userbuys };