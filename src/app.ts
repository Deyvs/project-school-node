import { errorMiddleware } from "./middlewares/error.handler";
import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes";
import { connectDB } from "./config/db.cnonnection";

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
