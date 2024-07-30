import { config } from "dotenv";

config();

console.log('Mongo pointed to: ' + process.env.MONGODB_URI);

 export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27018";


