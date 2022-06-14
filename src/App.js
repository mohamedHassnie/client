import "./App.css";

import Login from "./pages/layout/connexion/Login";
import Index from "./components/public/Index";
import UpdateCompte from "./pages/layout/connexion/inscriptionPatient.js";
import InterfaceAdmin from "./pages/Private/InterfaceAdmin.js";
import Edit from "./pages/Private/Edit";
import HomeDash from "./pages/Private/HomeDash.js";
import ListUser from "./pages/Private/ListeUser";
import InterfaceAnalyste from "./pages/Private/InterfaceAnalyste";
import InterfaceMarkiting from "./pages/Private/InterfaceMarkiting";
import AddUser from "./pages/Private/Add_User";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/InterfaceAdmin" element={<InterfaceAdmin />}></Route>
          <Route path="/HomeDash" element={<HomeDash />}></Route>
          <Route path="/ListUser" element={<ListUser />}></Route>
          <Route path="/User" element={<Edit />}></Route>
          <Route path="/User/:userId" element={<Edit />}></Route>
          <Route
            path="/InterfaceAnalyste"
            element={<InterfaceAnalyste />}
          ></Route>
          <Route
            path="/InterfaceMarkiting"
            element={<InterfaceMarkiting />}
          ></Route>
          <Route path="/UpdateCompte" element={<UpdateCompte />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
