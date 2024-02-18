import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';  
import database from './database.js'; 
import userRoutes from "./routes/users.js";  

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", userRoutes); 

app.listen(8800);
