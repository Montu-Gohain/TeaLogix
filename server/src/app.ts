import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import sequelize from "./config/database";
import associations from "./config/associations";
import allRoutes from "./config/routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Json Body-parser

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to TeaLogix API</h1>");
});

// Adding all the routes

app.use("/api/v1", allRoutes);

associations();

/**
 * To sync all the tables, pass this object in sync function
 * { alter: true, force: true }
 * */
sequelize
  .sync()
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
    chalk.bgWhite.red(`Server is running at http://localhost:${PORT}`)
  )
);
