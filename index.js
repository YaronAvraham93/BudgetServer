const express = require("express");
const connectDB = require("./db/db");
const logger = require("./logger/logger");
const userRouter = require("./routes/user-router");
const transaction = require("./routes/transaction-router");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/transaction", transaction);
app.use("/api/user", userRouter);
app.get("/healthcheck", (req, res) => {
  return res.status(200).send("OK");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.log("info", `Server run on port ${PORT}`));
