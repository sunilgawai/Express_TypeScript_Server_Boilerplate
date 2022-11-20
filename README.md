## `Node, Express, TypeScript, MongoDB -- Server`

`Express && TypeScript` magic for your next project.

👉 All the files are `pre configured` for you.

   Just clone and start working. 👈

## Overview

* All the files and folders are preconfigured
* Best project structure
* Best for any `Small | Medium | Large ` project
* Lets you define your own ways (to `Code` instead of `Forcing`) you


## Dependencies of the project
* Express -> As a base framework
* TypeScript -> For extra type security
* ESM -> For better experience with es6 syntax
* Joi -> For req/res data validation
* bcrypt -> For encoding user credentials
* jsonwebtoken -> For JWT authentication
* Multer -> For uploading file
* Morgan -> To impress girls. Terminal looks cool using this 😎😁
* dotenv -> For managing envirement variables.

## Syntax highlighting and warnings

Project is using `eslint` for error highlighing and code style management

## Here is the first page, pretty simple and clean, isn't it😘
```js
import express, { Application } from "express";
import cors from "cors";
import morgan from 'morgan';
import { APP_PORT } from "../config";
import { DataBaseConnection } from "../database";
import { errorHandler } from "./middlewares";
import router from "./routes";
const app: Application = express();

// Database connection....
DataBaseConnection();

// Middlewares....
app.use(cors());
app.use(morgan('dev'))
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
```

Pretty neat, eh?
