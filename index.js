const express = require("express");
const cors = require("cors");
const connectDB = require("./db/index");
const logger = require("./logger/logger");
const userRouter = require("./routes/user-router");
const transaction = require("./routes/transaction-router");
const app = express();

connectDB();
app.use(cors());
app.use(express.json({ extended: true }));

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/transaction", transaction);
app.use("/api/user", userRouter);
app.get("/health-check", (req, res) => {
  return res.status(200).json("OK");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => logger.log("info", `Server run on port ${PORT}`));
