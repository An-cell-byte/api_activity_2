import express from "express"
import morgan from "morgan"
import mongoose from "mongoose";
import indexRoute from "./routes/index.routes.js"
import dotenv from "dotenv";

//Configuración de base de datos
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err))

//Configuración de express, puerto, y el resto de la app. 
const app = express()

app.use(express.json());
app.use(morgan("dev")) // sirve para ver el registro de los endpoints a los que has intentado acceder
//(si accedes a un endpoint inexistente, entonces saldrá un error determinado). 
app.use(indexRoute)

const PORT = 5000

app.listen(PORT, console.log("http://localhost:"+PORT))