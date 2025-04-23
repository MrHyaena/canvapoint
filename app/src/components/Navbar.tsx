import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white p-5 rounded-xl flex justify-end shadow-md shadow-slate-200 items-center">
      <nav className="flex gap-10 items-center font-semibold">
        <Link to={"/account"}>
          <p className="headingItem">Šablony</p>
        </Link>
        <Link to={"/account"}>
          <p className="headingItem">Účet</p>
        </Link>
        <button className="buttonSmall">Odhlásit se</button>
      </nav>
    </div>
  );
}
