import axios from "axios";

export const signIn = async (formData) => {
  const reponse = await axios.post("http://localhost:5000/api/login", formData);
  return reponse;
  // reponse tetkawen : token w user w msg
};
export const signUp = async (formData) => {
  const reponse = await axios.post(
    "http://localhost:5000/api/inscritUser ",
    formData
  );
  return reponse;
};

export const deleteAnalyste = async (id) => {
  const reponse = await axios.delete(
    "http://localhost:3015/api/deleteUser/" + id
  );
  return reponse;
};
export const UpdateAnalyste = async (formData, id) => {
  const reponse = await axios.put(
    "http://localhost:3015/api/UpdateUser/" + id,
    formData
  );
  return reponse;
};

export const getAnalyste = async () => {
  const response = await axios.get("http://localhost:3015/api/getUser");
  return response;
};

export const getAnalysteId = async (id) => {
  const reponse = await axios.delete(
    "http://localhost:3015/api/getUserId" + id
  );
  return reponse;
};
