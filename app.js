const express = require("express");
const app = express();
const authRoutes = require("./routes/auth-routes");

app.set("view engine", "ejs");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(4000, () => {
  console.log("App is listening on port 4000...");
});
