import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white p-5 rounded-xl  shadow-md shadow-slate-200 items-center grid grid-cols-3">
      <div></div>
      <div className="flex gap-8 items-center justify-self-center">
        <Link to={"/account"}>
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
