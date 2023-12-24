// import React from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/user/Navbar";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { saveUserAsync } from "../actions/userRegisterAction";
// const Register = () => {
//   const navigate = useNavigate();
//   const { loading, success, error } = useSelector((state) => state.register);
//   const [credential, setCredential] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState(false);
//   const handlePhoneNumberChange = (event) => {
//     const phonenumberValue = event.target.value;
//     setPhonenumber(phonenumberValue);

//     // Regular expression for validating a phone number
//     // const phoneNumberRegex = /^\d{10}$/;

//   }

// const handleChange= () =>{
//  const x = 10
// }

//   const HandleSubmit = (e) => {
//     e.preventDefault();

//   };

  
//   return (
//     <>
//     <Navbar/>
//     <div className=" flex w-full bg-white justify-center font-josefin-sans text-sm">
//       <form className="input_box text-left w-1/4" onSubmit={HandleSubmit}>
//         <div className="">
//           <h1 className=" font-bold text-4xl py-5 text-center">Register</h1>
//         </div>

//         <div className="py-2">
//           <label htmlFor="">Full Name</label>
//           <div className="input_container border-2 border-customOutline px-9 pb-1 pt-2 hover:border-black">
//             <input 
//             type="text" 
//             className="input_column outline-none"
//             autoComplete="given-name"
//             name="fullName"
//             // onChange={(e) => setName(e.target.value)}
//             value={name}
//               />
//           </div>
//         </div>

//         <div className="py-2">
//           <label htmlFor="">Phone</label>
//           <div className="input_container  border-2 border-customOutline px-9 pb-1 pt-2 hover:border-black">
//             <input 
//             type="text" 
//             className="input_column outline-none"
//             autoComplete="given-name"
//             name="phone"
//             // onChange={(e) => setPhonenumber(e.target.value)}
//             error={phoneNumberError}
//             value={phonenumber}
//              />
//           </div>
//         </div>

//         <div className="py-2">
//           <label htmlFor="">Email Address</label>
//           <div className="input_container  border-2 border-customOutline px-9 pb-1 pt-2 hover:border-black">
//             <input 
//             type="email" 
//             className="input_column outline-none"
//             autoComplete="given-name"
//             name="email"
//             // onChange={(e) => setEmail(e.target.value)}
//             value={email}
//              />
//           </div>
//         </div>

//         <div className="py-2">
//           <label htmlFor="">Password</label>
//           <div className="input_container  border-2 border-customOutline px-9 pb-1 pt-2 hover:border-black">
//             <input 
//             type="password" 
//             className="input_column outline-none"
//             autoComplete="given-name"
//             name="password"
//             // onChange={(e) => setPassword(e.target.value)}
//             value={password}
//              />
//           </div>
//         </div>

//         <div className="py-2">
//           <div className="input_container  border-2 bg-black border-customOutline px-9 pb-2 pt-3 hover:border-black">
//             <button className=" text-white text-xs w-full text-center">
//               REGISTER
//             </button>
//           </div>
//         </div>

//         <p className=" text-center">or</p>
//         <div className="py-2">
//         <Link to="/login">
//           <div className="input_container  border-2 bg-white border-customOutline px-9 pb-2 pt-3 hover:border-black">          
//             <button className=" text-black text-xs w-full text-center">
//               LOGIN
//             </button>            
//           </div>
//           </Link>
//         </div>
//       </form>
//     </div>
//     </> 
//   );
// };

// export default Register;
