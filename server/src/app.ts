import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import sequelize from "./config/database";
import associations from "./config/associations";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Json Body-parser

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to TeaLogix API</h1>");
});

associations();

sequelize
  .sync({ alter: true, force: true })
  .then(() =>
    console.log(
      chalk.bgBlack.green("Database connected & all tables are synced")
    )
  )
  .catch((err) =>
    console.log(chalk.bgRed.white("Connection Failed to database."), err)
  );

const PORT = process.env.PORT ?? 5555;
app.listen(PORT, () =>
  console.log(
    chalk.bgWhite.blue(`Server is running at http://localhost:${PORT}`)
  )
);
