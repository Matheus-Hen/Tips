import Express from "express";
import connect from "./database/db.js";
import router from "./router/routers.js";
import dotenv from "dotenv";
dotenv.config({ path: './env' });

const url = process.env.URL
connect(url)
const app = Express();
app.use(Express.json());
app.use(router)
app.listen(3000, () => {
  console.log("Conectado na porta 3000!");
})



