import React, { useState } from "react";
import { signUp } from "../../../api/ApiAdmin";
import isEmpty from "validator/lib/isEmpty";
import "../style/inscriptionPatient.css";
function UpdateCompte() {
  const [formData, setFormData] = useState({
    UserName: "",
    LastName: "",
    email: "",
    Nationality: "",
    Gender: "",
    Date_of_birth: "",
    Contact_number: "",
    Physical_Address: "",
    Country_of_Origin: "",
    type_Analyse: "",
  });

  const {
    UserName,
    LastName,
    email,
    Nationality,
    Gender,
    Date_of_birth,
    Contact_number,
    Physical_Address,
    Country_of_Origin,
    type_Analyse,
  } = formData;
  const handleChange = (evt) => {
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
        isEmpty(Nationality) ||
        isEmpty(Gender) ||
        isEmpty(Date_of_birth) ||
        isEmpty(Contact_number) ||
        isEmpty(Country_of_Origin) ||
        isEmpty(type_Analyse)
      ) {
        setFormData({
          ...formData,
          errorMsg: "All fields are required",
        });
      } else {
        const {
          UserName,
          LastName,
          email,
          Nationality,
          Gender,
          Date_of_birth,
          Contact_number,
          Country_of_Origin,
          type_Analyse,
        } = formData;
        const data = {
          UserName,
          LastName,
          email,
          Nationality,
          Gender,
          Date_of_birth,
          Contact_number,
          Physical_Address,
          Country_of_Origin,
          type_Analyse,
        };

        setFormData({ ...formData });

        const response = signUp(data);
        if (response) {
          console.log("Axios signup success: ", response);
          setFormData({
            username: "",
            UserName: "",
            LastName: "",
            email: "",
            Nationality: "",
            Gender: "",
            Date_of_birth: "",
            Contact_number: "",
            Physical_Address: "",
            Country_of_Origin: "",
            type_Analyse: "",
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
    <>
      <br />{" "}
      <div className=" text-center mb-3 font-bold">
        <h4>Registre User</h4>
      </div>
      <div className="container mx-auto px-4 h-full table">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={HandleSubmit} className="aa">
            <table>
              <tr>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">UserName</label>
                    <input
                      name="UserName"
                      value={UserName}
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">LastName</label>
                    <input
                      name="LastName"
                      value={LastName}
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">email</label>
                    <input
                      name="email"
                      value={email}
                      className="form-control"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">Nationality</label>
                    <input
                      name="Nationality"
                      value={Nationality}
                      className="form-control"
                      type="texte"
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">Date_of_birth</label>
                    <input
                      name="Date_of_birth"
                      value={Date_of_birth}
                      className="form-control"
                      type="date"
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">Contact_number</label>
                    <input
                      name="Contact_number"
                      value={Contact_number}
                      className="form-control"
                      type="phone"
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">Country_of_Origin</label>
                    <input
                      name="Country_of_Origin"
                      value={Country_of_Origin}
                      className="form-control"
                      type="texte"
                      onChange={handleChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="relative w-full mb-3">
                    <label className="ee">Physical_Address</label>
                    <input
                      name="phone"
                      value={Physical_Address}
                      className="form-control"
                      type="texte"
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="relative w-full mb-3">
                    <br />
                    <label> Gender : </label>
                    <select>
                      <option>Homme</option>
                      <option>femme</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="relative w-full mb-3">
                    <label>type analyse : </label>
                    <select>
                      <option>aaaaa</option>
                      <option>bbbbbbb</option>
                      <option>ccccccc</option>
                      <option>dddddddd</option>
                    </select>
                  </div>
                </td>
              </tr>
              <br />
              <tr>
                <button type="button" class="btn btn-success">
                  Envoyer
                </button>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateCompte;
