// import { useLoaderData } from "react-router-dom";

// const BookService = () => {
//     const service = useLoaderData();
//   const { title, id } = service || {};
//     return (
//         <div>
//       <h1>Booked Services : {title}</h1>

//       <form className="card-body">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">First Name</span>
//             </label>
//             <input
//               name="name"
//               type="name"
//               placeholder="First name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Last Name</span>
//             </label>
//             <input
//               name="lastName"
//               type="last name"
//               placeholder="Last Name"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Phone Number</span>
//             </label>
//             <input
//               name="number"
//               type="number"
//               placeholder="Phone Number"
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Your Email</span>
//             </label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               className="input input-bordered"
//               required
//             />
//           </div>
//         </div>

//         <div className="form-control mt-6">
//           <input
//             type="submit"
//             value="Order Confirm"
//             className="btn btn-primary btn-block"
//           />
//         </div>
//       </form>
//     </div>
//     );
// };

// export default BookService;