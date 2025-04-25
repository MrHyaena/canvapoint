import React from "react";
import TemplatesSearch from "../components/TemplatesSearch";
import TemplatesList from "../components/TemplatesList";

export default function Account() {
  return (
    <>
      <div className=" grid grid-cols-2 gap-5 items-stretch">
        <div className=" bg-white shadow-md shadow-slate-200 rounded-lg p-10 flex flex-col items-start justify-between gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-textDarker">Účet</h3>
            <p className="font-semibold text-textDarker">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              maxime magni distinctio facere placeat dicta explicabo commodi
              minus quasi optio voluptates asperiores sequi porro quos voluptate
              praesentium dolores, unde doloribus?
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-textDarker">
              Kontaktujte nás
            </h4>
            <p className="font-semibold text-textDarker">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              maxime magni distinctio facere placeat dicta explicabo commodi
              minus quasi optio voluptates asperiores sequi porro quos voluptate
              praesentium dolores, unde doloribus?
            </p>
          </div>
          <div className="grid grid-cols-[4fr_3fr] gap-3 items-start">
            <div>
              <h4 className="text-xl font-semibold text-textDarker">
                Změna hesla
              </h4>
              <p className="font-semibold text-textDarker">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                maxime magni distinctio facere placeat dicta explicabo commodi
                minus quasi optio voluptates.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-textDarker">
              <div className="flex flex-col gap-1 ">
                <label className="text-lg font-semibold">Staré heslo:</label>
                <input
                  type="text"
                  className="border border-slate-300 rounded-sm"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">Nové heslo:</label>
                <input
                  type="text"
                  className="border border-slate-300 rounded-sm"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">
                  Nové heslo znovu:
                </label>
                <input
                  type="text"
                  className="border border-slate-300 rounded-sm"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button className="p-3 text-xl bg-secondary hover:bg-red-600 transition-all ease-in-out cursor-pointer text-textLight font-semibold rounded-lg w-full">
              Uložit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className=" bg-white shadow-md shadow-slate-200 rounded-lg p-10 flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <h2 className="text-xl font-semibold text-textDarker">
                  Předplatné
                </h2>
                <p className="px-2 py-1 bg-emerald-600 text-textLight font-semibold rounded-lg text-sm">
                  Aktivní
                </p>
              </div>
              <p className="font-semibold text-textDarker">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                maxime magni distinctio facere placeat dicta explicabo commodi
                minus quasi optio voluptates asperiores sequi porro quos
                voluptate praesentium dolores, unde doloribus?
              </p>
            </div>
            <button className="p-3 text-xl bg-secondary hover:bg-red-600 transition-all ease-in-out cursor-pointer text-textLight font-semibold rounded-lg w-full">
              Deaktivovat předplatné
            </button>
          </div>
          <div className=" bg-white shadow-md shadow-slate-200 rounded-lg p-10 flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-textDarker">
                Zrušit účet
              </h2>
              <p className="font-semibold text-textDarker">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                maxime magni distinctio facere placeat dicta explicabo commodi
                minus quasi optio voluptates asperiores sequi porro quos
                voluptate praesentium dolores, unde doloribus?
              </p>
            </div>
            <button className="p-3 text-xl bg-secondary hover:bg-red-600 transition-all ease-in-out cursor-pointer text-textLight font-semibold rounded-lg w-full">
              Zrušit účet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
