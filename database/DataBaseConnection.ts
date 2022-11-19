import mongoose from "mongoose";
import { DB_URL } from "../config";

// const optionalSchema = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// }

const DataBaseConnection = () => {
    try {
        mongoose.connect(DB_URL as string)
            .then(() => console.log('connected to DataBase'))
            .catch(err => console.error(`an error occured, ${err}`));
    } catch (err) {
        console.error(`an error occured while connecting to database, ${err}`);
    }
}

export default DataBaseConnection;