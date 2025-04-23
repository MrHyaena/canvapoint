import { faL, faM, faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TemplatesSearch() {
  return (
    <div className="sticky top-20 bg-white rounded-lg shadow-md shadow-slate-200 p-5 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Parametry</h2>
      <div className="flex flex-col gap-3 ">
        <button className="border-2 rounded-lg border-slate-200 text-lg font-semibold text-textDarker font-oswald hover:bg-slate-200 cursor-pointer transition-all ease-in-out">
          Barva
        </button>

        <button className="border-2 rounded-lg border-slate-200 text-lg font-semibold text-textDarker font-oswald hover:bg-slate-200 cursor-pointer transition-all ease-in-out">
          Kategorie
        </button>
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 grid grid-cols-3 items-stretch gap-x-2">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Počet karet v šabloně
          </legend>

          <div className="group flex flex-col items-center justify-end border p-2 py-3 rounded-lg border-slate-200 cursor-pointer hover:bg-primary hover:border-0 transition-all ease-in-out">
            <FontAwesomeIcon
              icon={faS}
              className="text-textDarker group-hover:text-textLight"
            />
            <p className="text-base font-semibold text-textDarker cursor-pointer group-hover:text-textLight">
              {"<"} 200
            </p>
          </div>

          <div className="group flex flex-col items-center justify-end border p-2 py-3 rounded-lg border-slate-200 cursor-pointer hover:bg-primary hover:border-0 transition-all ease-in-out">
            <FontAwesomeIcon
              icon={faM}
              className="text-textDarker group-hover:text-textLight"
            />
            <p className="text-base font-semibold text-textDarker cursor-pointer group-hover:text-textLight">
              {"<"} 500
            </p>
          </div>
          <div className="group flex flex-col items-center justify-end border p-2 py-3 rounded-lg border-slate-200 cursor-pointer hover:bg-primary hover:border-0 transition-all ease-in-out">
            <FontAwesomeIcon
              icon={faL}
              className="text-textDarker group-hover:text-textLight"
            />
            <p className="text-base font-semibold text-textDarker cursor-pointer group-hover:text-textLight">
              {"<"} 1000
            </p>
          </div>
        </fieldset>
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 grid grid-cols-3 items-stretch gap-x-2">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Rozměry
          </legend>

          <div className="flex flex-col items-center justify-end border p-2 rounded-lg border-slate-200">
            <div className="w-[25px] h-[25px]  rounded-md bg-slate-300 flex items-end justify-center font-semibold text-sm text-textDarker"></div>
            <p className="text-base font-semibold text-textDarker text-">
              Čtverec
            </p>
          </div>

          <div className="flex flex-col items-center justify-end border p-2 rounded-lg border-slate-200">
            <div className="w-[25px] h-[30px] rounded-md bg-slate-400 flex items-end justify-center text-sm text-textDarker"></div>
            <label className="text-base font-semibold text-textDarker text-">
              Portrét
            </label>
          </div>
          <div className="flex flex-col items-center justify-end border p-2 rounded-lg border-slate-200">
            <div className="w-[25px] h-[35px] rounded-md bg-slate-500 flex items-end justify-center text-sm text-textDarker"></div>
            <label className="text-base font-semibold text-textDarker text-">
              Stories
            </label>
          </div>
        </fieldset>
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 grid grid-cols-2 gap-x-3">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Barva
          </legend>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Modrá
            </label>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Zelená
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Červená
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Žlutá
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Fialová
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Kaštanová
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
