import { connect } from "mongoose";
import { MONGODB_URI } from "../config";


// connection to db
(async () => {
  try {
    console.log("Uri:" + MONGODB_URI);
    const db = await connect(MONGODB_URI, { 
    });
    console.log("Db connect to", db.connection.name);
  } catch (error) {
    console.log("no me pude conectar a la red: " + error);
  }
})();
