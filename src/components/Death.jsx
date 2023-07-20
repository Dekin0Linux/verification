// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Death() {
//   const [code, setCode] = useState("");
//   const navigate = useNavigate();

//   const submitCode = (e) => {
//     e.preventDefault();

//     fetch("/birth.json")
//       .then((res) => res.json())
//       .then((data) => {
//         let user = data.find((user) => user.entry_no === code);
//         if (user) {
//           navigate(`/verify/${code}`);
//         } else {
//           swal({
//             title: "Invalid Number",
//             text: "Please check your number and try again",
//             icon: "error",
//             button: "Cancel",
//           });
//         }
//       });
//   };

//   return (
    
//   );
// }

// export default Death;
