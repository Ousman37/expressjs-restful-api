require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware for å parse JSON
app.use(express.json());

// Inkluder rutene
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// En enkel rot-endepunkt for testing
app.get("/", (req, res) => {
  res.send("Velkommen til Express.js RESTful API!");
});

// MongoDB tilkobling
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB tilkoblet"))
  .catch((err) => console.error("MongoDB tilkoblingsfeil:", err));

// Server oppsett
const PORT = process.env.PORT || 5001;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Feil ved oppstart av serveren: ${err}`);
  } else {
    console.log(`Server kjører på port ${PORT}`);
  }
});
