import {db} from '../db/mongo.js';

export async function addItem (req, res){
    const item = req.body;
    try{
        await db.collection('inventory').insertOne(item);
        res.status(200).send(item);
    }catch(error){
        res.sendStatus(500);
    }
}