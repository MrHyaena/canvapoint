import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shopr-google.png";

export default function Navbar() {
  return (
    <div className="bg-white py-5 px-10 rounded-b-xl  shadow-md shadow-slate-200 items-center grid grid-cols-3 w-[1500px] justify-self-center max-h-[100px]">
      <img src={logo} className="max-h-[40px]" />
      <div className="flex gap-8 items-center justify-self-center">
        <Link to={"/"}>
          <p className="headingItem">Šablony</p>
        </Link>
        <Link to={"/account"}>
          <p className="headingItem">Nastavení účtu</p>
        </Link>
      </div>

      <p className="headingItem justify-self-end">Odhlásit se</p>
    </div>
  );
}
