import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { DeleteOutline } from "@material-ui/icons";
import "./style/List.css";
export default function ListeUser() {
  const [roleid, setroleid] = useState(0);
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(true);

  const authLogin = async () => {
    let jwtToken = Cookies.get("token");
    if (jwtToken === undefined) {
      setLogin(false);
    }
  };

  const loadUser = async (refid) => {
    return await axios
      .get("http://localhost:3015/getUser" + refid)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const deleteAnalyste = async (id) => {
    return axios
      .delete("http://localhost:3015/deleteUser/" + id)
      .then(function (response) {
        console.log(response);
      });
  };

  useEffect(() => {
    authLogin();
    loadUser();
    deleteAnalyste();
  }, []);

  const list_data = data.map((item, index) => {
    setroleid(0);
    let refid = 0;
    if (item.role === "Analyste") refid = 1;
    if (item.role === "markiting") refid = 0;
    if (refid === roleid) {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            <div className="userListUser">
              <img className="userListImg" src={item.Usename} alt="" />
              {item.image}
            </div>
          </td>
          <td>{item.LastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>
            <Link to={"/Users/" + item.id}>
              <button>Edit</button>
            </Link>

            <DeleteOutline
              className="user_delete"
              onClick={() => this.delete(item._id)}
            >
              Delete
            </DeleteOutline>
          </td>
          <td>
            <Link to="/">
              <button
                className="btn btn-info"
                onClick={() => this.updateuser(item)}
              >
                Update
              </button>
            </Link>
          </td>
        </tr>
      );
    }
  });
  let navigate = useNavigate();
  if (login === false) {
    return navigate("/Login");
  }
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => {
          console.log(e.target.selectedIndex);
          this.setState({
            roleid: e.target.selectedIndex,
          });
        }}
        defaultValue={"client"}
        name="user"
        id="user"
      >
        <option value="Analyste">all</option>
        <option value="Analyste">Analyste</option>
        <option value="Markiting">Markiting</option>
      </select>
      <h4 className="m-b-lg">List</h4>
      <table className="table">
        <tbody>
          <th>#</th>
          <th>Name</th>
          <th>Prenom</th>
          <th>email</th>
          <th>phone</th>
          <th>Delete </th>
          <th>update </th>
        </tbody>
        {list_data}
      </table>
    </div>
  );
}
