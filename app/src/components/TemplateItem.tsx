import { faSquare, IconLookup } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  item: {
    image: string;
    gallery: any[];
    name: string;
    category: any[];
    type: any[];
    description: string;
    link: string;
    templatesNumber: number;
  };
}

export default function TemplateItem({ item }: Props) {
  function truncate(text: string) {
    return text.slice(0, 130) + "...";
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md shadow-slate-200">
        <img
          src={item.image}
          className="rounded-t-2xl min-h-[250px] w-full object-cover z-0"
        />
        <div className="flex justify-end pr-3">
          {item.templatesNumber > 0 && item.templatesNumber <= 100 && (
            <div className="w-[80px] h-[80px] bg-blue-500 shadow-[0px_0px_7px_2px] shadow-slate-700 mt-[-40px] mb-[-40px] rounded-full flex flex-col items-center justify-center text-textLight font-semibold z-100">
              <p className="text-xl mt-[-5px]">{item.templatesNumber}</p>
              <p className="mt-[-5px]  text-sm">šablon</p>
            </div>
          )}
          {item.templatesNumber > 101 && item.templatesNumber <= 500 && (
            <div className="w-[80px] h-[80px] bg-blue-500 shadow-[0px_0px_7px_2px] shadow-slate-700 mt-[-40px] mb-[-40px] rounded-full flex flex-col items-center justify-center text-textLight font-semibold z-100">
              <p className="text-xl mt-[-5px]">{item.templatesNumber}</p>
              <p className="mt-[-5px]  text-sm">šablon</p>
            </div>
          )}
          {item.templatesNumber > 501 && (
            <div className="w-[80px] h-[80px] bg-blue-500 shadow-[0px_0px_7px_2px] shadow-slate-700 mt-[-40px] mb-[-40px] rounded-full flex flex-col items-center justify-center text-textLight font-semibold z-100">
              <p className="text-xl mt-[-5px]">{item.templatesNumber}</p>
              <p className="mt-[-5px]  text-sm">šablon</p>
            </div>
          )}
        </div>

        <div className="min-h-[200px] p-5 flex flex-col gap-3">
          <div className="flex gap-2 flex-wrap">
            {item.category.map((item: string) => {
              return (
                <>
                  <p className="p-1 rounded-md font-semibold text-sm bg-primary text-textLight">
                    {item}
                  </p>
                </>
              );
            })}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{item.name}</h2>

            <p className="text-bases font-semibold text-textDarker">
              {truncate(item.description)}
            </p>
          </div>
          <div className="flex gap-1 flex-wrap items-end">
            <p className="font-semibold text-textDarker">Rozměry:</p>
            {item.type.map((item: string) => {
              return (
                <>
                  {item == "square" && (
                    <div className="w-[25px] h-[25px]  rounded-md bg-zinc-300 flex items-end justify-center font-semibold text-sm text-textDarker"></div>
                  )}
                  {item == "portrait" && (
                    <div className="w-[25px] h-[30px] rounded-md bg-zinc-400 flex items-end justify-center text-sm text-textDarker"></div>
                  )}
                  {item == "story" && (
                    <div className="w-[25px] h-[35px] rounded-md bg-zinc-500 flex items-end justify-center text-sm text-textDarker"></div>
                  )}
                </>
              );
            })}
          </div>
          <div className="border-b-1 border-zinc-200"></div>
          <div className="w-full grid grid-cols-[4fr_1fr] gap-2">
            <button className="buttonSmall">Detail</button>
            <button className="buttonSmall">
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
          <p className="italic text-center text-[12px] text-textLighter">
            Autor: Canvapoint
          </p>
        </div>
      </div>
    </>
  );
}
