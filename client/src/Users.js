// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Det oppsto en feil ved henting av brukere:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Brukere</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;
