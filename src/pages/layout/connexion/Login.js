import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../api/ApiAdmin";
import axios from "axios";
import img1 from "../../images/log.svg";
import img2 from "../../images/register.svg";

import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import "../style/Login.css";

import {
  setAuthentication,
  isAuthenticated,
} from "../../../components/helpers/auth";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Register Variable
  const [emailR, setemailR] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Country_of_Origin, setCountry_of_Origin] = useState("");

  const [UserName, setUserName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("");
  const [photo, setphoto] = useState("");

  const onFileUpload = (e) => {
    const formData = new FormData();

    let file = e.target.files[0];

    formData.append("image", file);

    setphoto(file.name);

    axios.post("http://localhost:5000/api/upload", formData);

    console.log("photo", photo);
  };

  const submithandlerR = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    await axios
      .post(
        "http://localhost:5000/api/inscritUser",
        {
          UserName,
          LastName,
          email,
          phone,
          password,
          status: "ACTIVE",
          role,
          image: photo,
          Nationality,
        },
        config
      )
      .then((data) => {
        //notification.success({ message: "You are One of us  " + data.data.name });
        setTogel((togel = ""));
      })
      .catch(() => {
        //notification.error({ message: "check your Data" });
      });
  };

  let [togel, setTogel] = useState("");
  const handelchangeIn = () => {
    setTogel((togel = ""));
  };

  const handelchangeUp = () => {
    setTogel((togel = "sign-up-mode"));
  };

  const { email, password } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  var navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({ ...formData });

      signIn(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);
          if (isAuthenticated() && isAuthenticated().role === "admin") {
            let path = `/interfaceAdmin`;
            navigate(path);
          } else if (
            isAuthenticated() &&
            isAuthenticated().role === "markiting"
          ) {
            let path = `/InterfaceAnalyste`;
            navigate(path);
          } else if (
            isAuthenticated() &&
            isAuthenticated().role === "analyste"
          ) {
            let path = `/InterfaceMarkiting`;
            navigate(path);
          }
        })
        .catch((err) => {
          console.log("signin api function error: ", err);
        });
    }
  };
  return (
    <React.Fragment>
      <div className={`container_log ${togel}`}>
        <div className="forms-container_log">
          <div className="signin-signup">
            <form onSubmit={HandleSubmit} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                  minLength={5}
                  autoComplete
                />
              </div>

              <input
                type="submit"
                defaultValue="Login"
                className="btn_log solid"
              />
            </form>

            <form onSubmit={submithandlerR} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Username"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  minLength={4}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="LastName"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  minLength={4}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  placeholder="Email"
                  value={emailR}
                  onChange={(e) => setemailR(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <i className="fas fa-phone" />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  required
                  minLength={8}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="texte"
                  placeholder="Nationality"
                  value={Nationality}
                  minLength={5}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="texte"
                  placeholder="Country_of_Origin"
                  value={Country_of_Origin}
                  minLength={5}
                  onChange={(e) => setCountry_of_Origin(e.target.value)}
                  required
                />
              </div>
              {/* <div className="input-field">
                <i className="fas fa-users" />
                <select onChange={(e) => setrole(e.target.value)} required>
                  <option>Femme</option>
                  <option>Homme</option>
                </select>
              </div> */}

              {/* <div className="input-field">
                <i className="fas fa-image" />
                <input
                  type="file"
                  placeholder="photo"
                  onChange={onFileUpload}
                />
              </div> */}

              <input type="submit" className="btn_log" defaultValue="Sign up" />
            </form>
          </div>
        </div>
        <div className="panels-container_log">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Add Your Text Text Text Text ...</p>
              <button
                className="btn_log transparent"
                id="sign-up-btn_log"
                onClick={handelchangeUp}
              >
                Sign up
              </button>
            </div>
            <div className="image">
              <img src={img2} alt="image"></img>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Add Your Text Text Text Text ...</p>
              <button
                className="btn_log transparent"
                id="sign-in-btn_log"
                onClick={handelchangeIn}
              >
                Sign in
              </button>
            </div>
            <div className="image">
              <img src={img1} alt="image"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
