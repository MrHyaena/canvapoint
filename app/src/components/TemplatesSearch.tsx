export default function TemplatesSearch() {
  return (
    <div className="sticky top-20 max-h-[500px] bg-white rounded-lg shadow-md shadow-slate-200 p-5 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Parametry</h2>
      <div className="flex flex-col gap-3 overflow-y-scroll pr-2">
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 gap-x-3">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Uložené
          </legend>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              Ukázat pouze uložené
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

        <fieldset className="border-2 rounded-lg border-slate-100 p-3 grid grid-cols-2 gap-x-3">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Kategorie
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
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 flex flex-col items-stretch gap-x-2">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Počet karet v šabloně
          </legend>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              0 - 200
            </label>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              201 - 500
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              500 a více
            </label>
          </div>
        </fieldset>
        <fieldset className="border-2 rounded-lg border-slate-100 p-3 grid grid-cols-2 items-stretch gap-x-2">
          <legend className="px-2 text-lg font-semibold text-textDark">
            Rozměry
          </legend>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              1:1
            </label>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              4:5
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              3:4
            </label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <label className="text-base font-semibold text-textDarker text-">
              16:9
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
