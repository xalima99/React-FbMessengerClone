// import React, { useState } from "react";
// import ActiveUsers from "./ActiveUsers";
// import Messages from "./Messages";
// import { useDispatch, useSelector } from "react-redux";
// import {signout} from '../redux/actions';


// const Sidebard = () => {
//     const dispatch = useDispatch();
//     const auth = useSelector(state => state.auth)
//     const Allusers = useSelector(state => state.user.users)
//     // const history = useHistory()
//   return (
//     <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
//       <div className="header p-4 flex flex-row justify-between items-center flex-none">
//         <div
//           className="w-16 h-16 relative flex flex-shrink-0"
//           style={{ filter: "invert(100%)" }}
//         >
//           <img
//             className="rounded-full w-full h-full object-cover"
//             alt="ravisankarchinnam"
//             src="https://avatars3.githubusercontent.com/u/22351907?s=60"
//           />
//         </div>
//         <p className="text-md font-bold hidden md:block group-hover:block">
//           Messenger
//         </p>

//         <span onClick={() => dispatch(signout(auth.uid))}
//         className="block relative rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block">
//           <i
//             style={{ color: "red", opacity: ".6", fontSize: "25px" }}
//             className="fas fa-power-off absolute"
//           ></i>
//         </span>
//       </div>
//       <div className="search-box p-4 flex-none">
//         <form >
//           <div className="relative">
//             <label>
//               <input
//                 className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
//                 type="text"
//                 value="f"
//                 placeholder="Search Messenger"
//               />
//               <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
//                 <svg viewBox="0 0 24 24" className="w-6 h-6">
//                   <path
//                     fill="#bbb"
//                     d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
//                   />
//                 </svg>
//               </span>
//             </label>
//           </div>
//         </form>
//       </div>
//       <ActiveUsers />
//       <div className="contacts p-2 flex-1 overflow-y-scroll">
//         {
//             Allusers.map(item => (
//                 <Messages displayName={item.displayName} photoURL={item.photoURL}
//                 isOnline={item.isOnline} />
//             ))
//         }
//       </div>
//     </section>
//   );
// };

// export default Sidebard;
