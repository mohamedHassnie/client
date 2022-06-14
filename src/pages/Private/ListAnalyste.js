// import React, { useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import "./style/ListAnalyste.css";
// import { AnalysteData } from "../../api/data";
// import { Link } from "react-router-dom";
// // import { getAnalyste } from "../../api/ApiAnalystes";
// export default function ListAnalyste() {
//   const [data, setData] = useState(AnalysteData);
//   const [roleid, setroleid] = useState(0);
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   const list_data = this.state.data.map((item, index) => {});

//   const columns = [
//     { field: "id", width: 200 },
//     {
//       field: "lastName",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.avatar} alt="" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },

//     {
//       field: "Name",
//       width: 200,
//     },
//     {
//       field: "Email",
//       width: 200,
//     },
//     {
//       field: "Phone",
//       width: 200,
//     },

//     {
//       field: "Poste",
//       width: 200,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <>
//             <div className="userListUser">
//               <Link to={"/Analyste/" + params.row.id}>
//                 <button className=" btn btn-success userEdit">Edit</button>
//               </Link>
//               <DeleteOutline
//                 className="user_delete"
//                 onClick={() => handleDelete(params.row.id)}
//               >
//                 Delete
//               </DeleteOutline>
//             </div>
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div>
//       <div className="UserList">
//         <div style={{ height: 400, width: "100%" }}>
//           <DataGrid
//             rows={data}
//             columns={columns}
//             disableSelectionOnClick
//             pageSize={5}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
