import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Json Body-parser

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to TeaLogix API</h1>");
});
``;
const PORT = process.env.PORT ?? 5555;

app.listen(PORT, () =>
  console.log(
    chalk.bgWhite.blue(`Server is running at http://localhost:${PORT}`)
  )
);
