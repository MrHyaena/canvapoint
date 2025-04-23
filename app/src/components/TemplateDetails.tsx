import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
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
  setToggle: Function;
}

export default function TemplateDetails({ item, setToggle }: Props) {
  return (
    <div className="w-screen h-screen bg-slate-800/80 fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-white rounded-b-xl rounded-t-2xl w-[1000px] h-[800px]">
        <div className="cursor-pointer p-4 bg-secondary rounded-t-xl flex justify-between items-center text-textLight">
          <h2 className="text-3xl">{item.name}</h2>
          <FontAwesomeIcon
            className="text-2xl p-2 hover:bg-white hover:text-textDark rounded-lg"
            icon={faXmark}
            onClick={() => {
              setToggle(false);
            }}
          />
        </div>{" "}
      </div>
    </div>
  );
}
