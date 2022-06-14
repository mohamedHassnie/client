import React, { useState } from "react";
import { signUp } from "../../api/ApiAdmin";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import "./style/Analyste.css";
function Add_User() {
  const [formData, setFormData] = useState({
    UserName: "",
    LastName: "",
    email: "",
    password: "",
    password2: "",
    Phone: "",
    Role: "",
    status: "",
  });
  const {
    UserName,
    LastName,
    email,
    password,
    password2,
    Phone,

    Role,
    status,
  } = formData;
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const HandleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      if (
        isEmpty(UserName) ||
        isEmpty(LastName) ||
        isEmpty(email) ||
        isEmpty(Phone) ||
        isEmpty(password) ||
        isEmpty(password2) ||
        isEmpty(Role) ||
        isEmpty(status)
      ) {
        setFormData({
          ...formData,
          errorMsg: "All fields are required",
        });
      } else if (!isEmail(email)) {
        setFormData({
          ...formData,
          errorMsg: "Invalid email",
        });
      } else if (!equals(password, password2)) {
        setFormData({
          ...formData,
          errorMsg: "Passwords do not match",
        });
      } else {
        const {
          UserName,
          LastName,
          email,
          password,
          Phone,

          Role,
          status,
        } = formData;
        const data = {
          UserName,
          LastName,
          email,
          password,
          Phone,

          Role,
          status,
        };

        setFormData({ ...formData, loading: true });

        const response = signUp(data);
        if (response) {
          console.log("Axios signup success: ", response);
          setFormData({
            username: "",
            LastName: "",
            email: "",
            password: "",
            password2: "",
            Phone: "",

            Role: "",
            status: "",
          });
        } else {
          console.log("error");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="newUser">
        <h1 className="newUserTitle">NewUser</h1>
        <form className="newUserForm" onSubmit={HandleSubmit}>
          <div className="newUseritem">
            <input
              type="UserName"
              placeholder="UserName"
              value={UserName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="newUseritem">
            <input
              type="LastName"
              placeholder="LastName"
              value={LastName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="newUseritem">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="newUseritem">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <br />
          <div className="newUseritem">
            <input
              type="password"
              placeholder="password 2"
              value={password2}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <br />
          <div className="newUseritem">
            <input
              type="number"
              placeholder="Phone"
              value={Phone}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <br />
          <div className="newUseritem">
            <input
              type="status"
              placeholder="status"
              value={status}
              onChange={handleChange}
              required
            />
          </div>{" "}
          <br />
          <div className="newUserSelect">
            <br />
            <label>choose Role_User : </label>
            <select>
              <option>Markiting</option>
              <option>Analyste</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    </div>
  );
}
export default Add_User;
