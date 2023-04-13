import express from "express";
import cors from "cors";
import routes from "./routes";
require("dotenv").config();
import contactsRouter from "./routes";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
console.log("estou aqui 0");
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
