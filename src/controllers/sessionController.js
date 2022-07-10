import { db } from "../db/mongo.js";

export async function getName (req, res){
    const {authorization}= req.headers;
    const token = authorization?.replace('Bearer ', '');

    try{
    const isLogged = await db.collection('sessions').findOne({token: token});
    if(isLogged){
        const userData = await db.collection('users').findOne({_id: isLogged.userID});
        res.status(200).send(userData);
    }
    }catch(error){
        res.sendStatus(404);
    }
}

export async function deleteUser (req, res){
    const {authorization}= req.headers;
    const token = authorization?.replace('Bearer ', '');
    
    try{
        const deleted= await db.collection('sessions').deleteOne({token: token});
        res.status(200).send(deleted);
    }catch(error){
        res.send(error).status(401);
    }
}