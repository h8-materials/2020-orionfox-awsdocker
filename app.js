const express = require("express");
const app = express();
const db = require("./config/mongo");

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Having fun with docker",
//   });
// });

// app.listen(PORT, () => {
//   console.log("App listening on port 3000!");
// });

app.get("/", async (req, res) => {
  const users = await db.collection("users").find({}).toArray();
  console.log("--->", users);

  res.send(users);
});

app.listen(PORT, () => {
  console.log("Express server started at port : " + PORT);
});
