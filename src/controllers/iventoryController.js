import {db} from '../db/mongo.js';


export async function listItens (req, res){
    try{
        const itens = await db.collection('inventory').find({quantity :{$gt :0}}).toArray();
        res.status(200).send(itens);
    }catch(error){
        res.sendStatus(500);
    }

}

