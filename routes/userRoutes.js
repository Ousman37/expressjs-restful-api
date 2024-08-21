const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Opprett flere brukere i bulk (POST /api/users/bulk)
router.post("/users/bulk", async (req, res) => {
  try {
    const emails = req.body.map((user) => user.email);
    const existingUsers = await User.find({ email: { $in: emails } });

    if (existingUsers.length > 0) {
      const existingEmails = existingUsers.map((user) => user.email);

      // Filtrer ut brukere som allerede eksisterer
      const newUsers = req.body.filter(
        (user) => !existingEmails.includes(user.email)
      );

      // Opprett kun nye brukere
      if (newUsers.length > 0) {
        const createdUsers = await User.insertMany(newUsers);
        return res.status(201).json({
          message: "Nye brukere opprettet.",
          createdUsers,
          existingEmails,
        });
      } else {
        return res.status(200).json({
          message:
            "Ingen nye brukere ble opprettet. Alle e-poster var allerede registrert.",
          existingEmails,
        });
      }
    } else {
      // Ingen duplikater, opprett alle brukere
      const users = await User.insertMany(req.body);
      res.status(201).json(users);
    }
  } catch (err) {
    console.error("Feil ved opprettelse av brukere:", err.message);
    res.status(400).json({ error: err.message });
  }
});


// Hent alle brukere (GET /api/users)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Feil ved henting av brukere:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
