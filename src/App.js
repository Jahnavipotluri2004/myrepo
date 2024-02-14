import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import {Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Account from "./components/Account";
import Signout from "./components/Signout";
import GoldAccount from "./components/GoldAccount";
import FetchRegistration from "./components/FetchRegistration";


function App() {
  return <React.Fragment>
    <header>
       <Header/>
      </header>
     <main>
      <Routes>
      <Route path="/" element={ <Home/>} exact />
      <Route path="/signup" element={ <Signout/>} exact />
      <Route path="/signin" element={ <Signin/>} exact />
      <Route path="/account" element={ <Account/>} exact />
      <Route path="/Goldaccount" element={ <GoldAccount/>} exact />
      <Route path="/fetchregistration" element={ <FetchRegistration/>} exact />
    </Routes>
   </main>
   </React.Fragment>
};

export default App;