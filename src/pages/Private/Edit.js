import React, { useState, useEffect, Fragment } from "react";
import "./style/newUser.css";
import { PermIdentity } from "@material-ui/icons";
import axios from "axios";
import { PhoneAndroid } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { LocationSearching } from "@material-ui/icons";
import { Publish } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [UserImage, setUserImage] = useState(null);
  const [UserName, setUserName] = useState();
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Role, setRole] = useState("");
  const [status, setstatus] = useState("");
  const [user, setuser] = useState({});

  useEffect(() => {
    setUserImage(user.fileName);
    setUserName(user.UserName);
    setLastName(user.LastName);
    setemail(user.email);
    setPhone(user.Phone);
    setRole(user.Role);
    setstatus(user.status);
  }, []);

  var navigate = useNavigate();
  const handleImageUpload = (e) => {
    const Userimage = e.target.files[0];
    setUserImage(Userimage);
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("UserImage", UserImage);
    formData.append("LastName", LastName);
    formData.append("email", email);
    formData.append("Phone", Phone);
    formData.append("Role", Role);
    formData.append("status", status);

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    await axios
      .put(`http://localhost:3015/api/UpdateUser/` + formData._id, formData)
      .then((res) => {
        navigate("/InterfaceAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /****************************
   * RENDERER
   ***************************/
  return (
    <Fragment>
      <div className="Analyste">
        <div className="AnalystetitleContainer">
          <h4 className="AnalysteTitle">Ajout User </h4>
          <Link to="/addUser">
            <button className="AnalysteAdd"> Create</button>
          </Link>
          <div className="AnalysteContainer">
            <div className="AnalysteShow">
              <div className="AnalysteshowTop">
                <img
                  src="https://static.remove.bg/remove-bg-web/669d7b10b2296142983fac5a5243789bd1838d00/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                  alt=""
                  className="analyseShowImg"
                ></img>
              </div>
              <div className="AnalysteShowBottom">
                <span className="title">Acount details</span>
                <div className="AnalysteShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="AnalysteInfoTitle">mohamed Hssine</span>
                </div>
                <div className="AnalysteShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="AnalysteInfoTitle">med@hassine</span>
                </div>

                <div className="AnalysteShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="AnalysteInfoTitle">213589745</span>
                </div>

                <div className="AnalysteShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="AnalysteInfoTitle">software engineer</span>
                </div>
              </div>
            </div>
            <div className="AnalysteUpdate">
              <span className="edit">Edit</span>
              <form className="analysteUpdateForm">
                <div className="updateRight">
                  <div className="updateUploadFile">
                    <img
                      className="analysteUpdateImg"
                      // src={`/uploads/${productImage}`}
                      src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="UserImage"
                    />
                    <label htmlFor="file">
                      <Publish className="iconfile" />{" "}
                    </label>
                    <input
                      class="inputeUpdate"
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="updateleft">
                  <div className="updateitem">
                    <input
                      type="UserName"
                      placeholder="UserName"
                      value={UserName}
                      required
                    />
                  </div>
                  <div className="updateitem">
                    <input
                      type="texte"
                      placeholder="LastName"
                      value={UserName}
                      required
                    />
                  </div>
                  <div className="updateitem">
                    <input
                      type="email"
                      placeholder="email"
                      value={email}
                      required
                    />
                  </div>
                  <div className="updateitem">
                    <input
                      type="phone"
                      placeholder="phone"
                      value={Phone}
                      required
                    />
                  </div>
                  <div className="updateitem">
                    <input
                      type="texte"
                      placeholder="status"
                      value={status}
                      required
                    />
                  </div>
                  <div className="newUserSelect">
                    <br />
                    <label>Update Role : </label>
                    <select>
                      <option>Markiting</option>
                      <option>Analyste</option>
                    </select>
                  </div>
                </div>{" "}
                <br />
                <button className="updateButton">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Edit;
