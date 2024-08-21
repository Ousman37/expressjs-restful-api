// api/usersApi.js
import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/api/users");  // Sender GET-forespørsel til backend
};

export const createUser = (userData) => {
  return axios.post("/api/users", userData);  // Sender POST-forespørsel for å opprette en ny bruker
};

// Flere API-funksjoner kan legges til her
