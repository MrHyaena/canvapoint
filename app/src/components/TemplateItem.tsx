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
  };
}

export default function TemplateItem({ item }: Props) {
  return (
    <div className="bg-white w-[400px] rounded-2xl shadow-md shadow-slate-200">
      <img
        src={item.image}
        className="rounded-t-2xl min-h-[300px] w-full object-cover"
      />
      <div className="min-h-[200px] p-5 flex flex-col gap-5">
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
        <h2 className="text-xl font-semibold">{item.name}</h2>

        <p>{item.description}</p>
        <div className="flex gap-2 flex-wrap items-end">
          <p className="font-semibold">Rozměry:</p>
          {item.type.map((item: string) => {
            return (
              <>
                {item == "square" && (
                  <div className="w-[25px] h-[25px]  rounded-md bg-zinc-300"></div>
                )}
                {item == "portrait" && (
                  <div className="w-[25px] h-[30px] rounded-md bg-zinc-400"></div>
                )}
                {item == "story" && (
                  <div className="w-[25px] h-[35px] rounded-md bg-zinc-500"></div>
                )}
              </>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-[4fr_1fr] gap-2">
          <button className="buttonSmall">Detail</button>
          <button className="buttonSmall">
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <p className="italic text-center text-[12px]">Autor: Canvapoint</p>
      </div>
    </div>
  );
}
