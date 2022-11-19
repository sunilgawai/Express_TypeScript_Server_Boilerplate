import express, { Application } from "express";
import cors from "cors";
import { APP_PORT } from "../config";
import { DataBaseConnection } from "../database";
import { errorHandler } from "./middlewares";
import router from "./routes";
const app: Application = express();

// Database connection....
DataBaseConnection();

// Middlewares....
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes....
app.use('/api/v1', router);
app.use('/', (_req, _res) => {
    _res.send(`<h1> <404/> No data found for this route</h1>`);
})

// Error Handler....
app.use(errorHandler);

app.listen(APP_PORT || 4000, () => console.log(`listening on http://localhost:${APP_PORT}`))