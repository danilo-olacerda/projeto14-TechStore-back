import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.URL_CONNECT_MONGO);
let db;
mongoClient.connect(() => {
  db = mongoClient.db('TechStore');
});

const objectId = ObjectId;

export { db, objectId };
