import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TemplateDetails from "./TemplateDetails";
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";

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
  const [toggleDetail, setToggleDetail] = useState(false);

  function truncate(text: string) {
    return text.slice(0, 130) + "...";
  }

  return (
    <>
      {toggleDetail && (
        <TemplateDetails setToggle={setToggleDetail} item={item} />
      )}
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-200">
        <div
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
          }}
          className="rounded-t-2xl min-h-[250px] w-full object-cover z-0 flex flex-col items-stretch justify-between p-3"
        >
          <div className="flex gap-2 flex-wrap items-center justify-between">
            <div className="flex gap-2">
              {item.category.map((item: string) => {
                return (
                  <>
                    <p className="p-1 px-2 rounded-full font-bold text-sm bg-white text-textDarker">
                      {item}
                    </p>
                  </>
                );
              })}
            </div>
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center group cursor-pointer">
              <FontAwesomeIcon
                icon={faStar}
                className="group-hover:text-amber-300 text-textLighter"
              />
            </div>
          </div>
          <div className="flex justify-end pr-3">
            <div className="w-[70px] h-[70px] bg-primary shadow-[0px_0px_8px_0px] shadow-slate-800 mt-[-40px] mb-[-40px] rounded-xl flex flex-col items-center justify-center text-textLight font-semibold">
              <p className="text-xl mt-[-5px]">{item.templatesNumber}</p>
              <p className="mt-[-5px]  text-sm">karet</p>
            </div>
          </div>
        </div>

        <div className="min-h-[200px] p-5 flex flex-col gap-3">
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
                    <div className="w-[25px] h-[25px]  rounded-md bg-slate-300 flex items-end justify-center font-semibold text-sm text-textDarker"></div>
                  )}
                  {item == "portrait" && (
                    <div className="w-[25px] h-[30px] rounded-md bg-slate-400 flex items-end justify-center text-sm text-textDarker"></div>
                  )}
                  {item == "story" && (
                    <div className="w-[25px] h-[35px] rounded-md bg-slate-500 flex items-end justify-center text-sm text-textDarker"></div>
                  )}
                </>
              );
            })}
          </div>
          <div className="border-b-1 border-zinc-200"></div>
          <div className="w-full grid grid-cols-[4fr_1fr] gap-2">
            <button
              className="buttonSmall"
              onClick={() => {
                setToggleDetail(!toggleDetail);
              }}
            >
              Detail
            </button>
            <button className="bg-slate-800 text-textLight font-bold p-2 rounded-lg hover:bg-primaryDarker ease-in-out transition-all cursor-pointer text-lg">
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
