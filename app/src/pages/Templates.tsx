import React from "react";
import TemplatesList from "../components/TemplatesList";
import Sidebar from "../components/Sidebar";
import TemplatesSearch from "../components/TemplatesSearch";

export default function Templates() {
  return (
    <>
      <div className="grid grid-cols-[1fr_4fr] min-h-screen gap-5">
        <div className="">
          <TemplatesSearch />
        </div>
        <div className="">
          <TemplatesList />
        </div>
      </div>
    </>
  );
}
