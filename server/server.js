import express from "express";
import cors from "cors";
import connect from "./database/conn.js";
import dotenv from "dotenv";
import router from "./router/route.js";
dotenv.config();
const app = new express();
import fs from "fs";

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// HTTP GET Request
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

// Api Route
app.use("/api", router);

connect()
  .then(() => {
    console.log("Database Connected🆗");
    console.log("Server connecting......");
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to👉 http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server...📛");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...❌");
  });
