import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

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
  const [imageWindow, setImageWindow] = useState(item.image);
  const [imageFocus, setImageFocus] = useState(1);

  useEffect(() => {
    if (imageFocus == 7) {
      setImageWindow(item.image);
    } else {
      setImageWindow(item.gallery[imageFocus]);
    }
  }, [imageFocus]);

  return (
    <div className="w-screen h-screen bg-slate-100/80 fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-white rounded-b-xl rounded-t-2xl w-[1000px] shadow-lg shadow-slate-400 p-6">
        <div className="cursor-pointer bg-white border-b-2 border-slate-200 pb-3 rounded-t-xl flex justify-between items-center text-textDark">
          <h2 className="text-2xl font-medium">Detail</h2>
          <FontAwesomeIcon
            className="text-2xl p-2 hover:bg-white hover:text-textDark rounded-lg"
            icon={faXmark}
            onClick={() => {
              setToggle(false);
            }}
          />
        </div>{" "}
        <div className="grid grid-cols-[4fr_2fr] gap-5 pt-4">
          <div className=" flex flex-col gap-2">
            <div
              style={{
                backgroundImage: `url(${imageWindow})`,
                backgroundSize: "cover",
              }}
              className="min-h-[400px] rounded-lg flex items-center justify-between p-4"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (imageFocus > 0) {
                    setImageFocus(imageFocus - 1);
                  } else {
                    setImageFocus(7);
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-textDark text-2xl p-2 bg-white rounded-full shadow-md cursor-pointer"
                />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  if (imageFocus < 7) {
                    setImageFocus(imageFocus + 1);
                  } else {
                    setImageFocus(0);
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-textDark text-2xl p-2 bg-white rounded-full shadow-md cursor-pointer"
                />
              </button>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 items-stretch gap-2">
              {imageFocus == 7 ? (
                <img
                  src={item.image}
                  className="rounded-lg object-cover cursor-pointer brightness-100 hover:brightness-100 ease-in-out transition-all"
                  onClick={() => {
                    setImageWindow(item.image);
                  }}
                />
              ) : (
                <img
                  src={item.image}
                  className="rounded-lg object-cover cursor-pointer brightness-40 hover:brightness-100 ease-in-out transition-all"
                  onClick={() => {
                    setImageFocus(7);
                    setImageWindow(item.image);
                  }}
                />
              )}

              {item.gallery.map((item: string, index) => {
                return (
                  <>
                    {imageFocus == index ? (
                      <img
                        src={item}
                        className="rounded-lg object-cover  cursor-pointer brightness-100 hover:brightness-100 ease-in-out transition-all"
                        onClick={() => {
                          setImageWindow(item);
                        }}
                      />
                    ) : (
                      <img
                        src={item}
                        className="rounded-lg object-cover  cursor-pointer brightness-40 hover:brightness-100 ease-in-out transition-all"
                        onClick={() => {
                          setImageFocus(index);
                          setImageWindow(item);
                        }}
                      />
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-textDark">
                {item.name}
              </h2>

              <p className="text-bases font-semibold text-textDarker">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 items-stretch gap-2">
              <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg text-center border-2 border-slate-100">
                <h3 className="font-semibold text-2xl text-textDark">
                  {item.templatesNumber}
                </h3>
                <h3 className="text-base font-semibold text-textDark">
                  Počet karet v šabloně
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg border-2 border-slate-100">
                <div className="flex items-end gap-1">
                  {item.type.map((item: string) => {
                    return (
                      <>
                        {item == "square" && (
                          <div className="w-[25px] h-[25px]  rounded-md bg-slate-200 flex items-end justify-center font-semibold text-sm text-textDarker"></div>
                        )}
                        {item == "portrait" && (
                          <div className="w-[25px] h-[30px] rounded-md bg-slate-300 flex items-end justify-center text-sm text-textDarker"></div>
                        )}
                        {item == "story" && (
                          <div className="w-[25px] h-[35px] rounded-md bg-slate-400 flex items-end justify-center text-sm text-textDarker"></div>
                        )}
                      </>
                    );
                  })}{" "}
                </div>
                <h3 className="font-semibold text-textDark text-base">
                  Rozměry:
                </h3>
              </div>
            </div>

            <div className="flex gap-1 flex-wrap items-end"></div>

            <div className="border-t-2 border-slate-200 flex pt-4">
              <button className="bg-slate-800 w-full text-textLight font-bold p-2 py-4 rounded-lg hover:bg-primaryDarker ease-in-out transition-all cursor-pointer text-3xl">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
