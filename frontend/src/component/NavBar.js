// import React from 'react'
// import { Link } from "react-router-dom";

// export default function NavBar () {
//     return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">home</Link>
//           </li>
//           <li>
//             <Link to="/about">about</Link>
//           </li>
//           <li>
//             <Link to="/Corses">Corses</Link>
//           </li>
//           <li>
//             <Link to="/Personal">Personal</Link>
//           </li>
//         </ul>
//       </div>
//     );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
     <div>
        <input type="text" /><br />
        <input type="text" /><br />
        <button>SingIn</button>
      </div>
    </div>
  );
}
