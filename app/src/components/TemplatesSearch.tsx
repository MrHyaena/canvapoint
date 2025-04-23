import React from "react";

export default function TemplatesSearch() {
  return (
    <div className="sticky top-20 bg-white rounded-lg shadow-md shadow-slate-200 p-5 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Parametry</h2>
      <div className="flex flex-col gap-3">
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
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 w-full flex flex-col gap-5">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Barva
          </legend>

          <div className="w-full gap-2 flex items-center">
            <label className="text-base font-semibold text-textDarker">
              Počet šablon
            </label>
            <input type="range" className="w-full" />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Zelená
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
