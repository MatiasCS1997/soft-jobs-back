const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const CsbInspector = require("csb-inspector");
CsbInspector();
const morganBody = require("morgan-body");
morganBody(app);
CsbInspector();

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
