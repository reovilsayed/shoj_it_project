import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Text() {
  const [text, setText] = useState("");
  return (
    <div className="2xl:flex justify-center relative">
      <div
        className={`2xl:w-[456px] ${
          text.length < 1 && "h-[65px]"
        } xl:w-[300px] lg:w-[300px] md:w-[300px] w-full  bg-transparent ${
          text.length > 0 && "bg-white shadow shadow-[#000066]"
        } border-[3px] border-[#000066]   rounded-[28px]`}
      >
        <div className=" relative">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Recherchez un établissement... (Boutiques, Restaurants, etc.)"
            className={`px-4 outline-none  text-[17px] placeholder:text-[15px] placeholder:font-semibold bg-transparent h-[55px] ${
              text.length > 0 && "border-b-[2px] border-[#EFEFEF]"
            }  w-full bg-transparent`}
          />
          {text.length > 0 && (
            <button className=" absolute right-[6px] top-[6px] rounded-3xl px-5 bg-[#DAE4FF] py-[10px] text-[#000099] font-semibold">
              Rechercher
            </button>
          )}
        </div>
        {text?.length > 0 && (
          <div className="">
            {/* 1 */}
            <div className="flex items-center justify-between  px-1 hover:bg-[#EEF3FF] duration-200 py-2 w-[97%] mx-auto mt-2">
              <div>
                <li className="font-bold text-[16px] text-[#0D0D0D]">Zara</li>
                <p className="text-[#D2D2D2] font-medium">zara.com/tn</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center bg-[#FFF8BF] p-1 font-medium">
                  {" "}
                  <AiFillStar color="#FCD700" size="12px" />
                  <p className=" font-medium">2.9/5</p>
                </div>
                <div className="w-[10px] h-[10px] bg-[#FCD700] rounded-full"></div>
                <li className="text-[#000033] font-semibold">253 avis</li>
              </div>
            </div>
            {/* 1 */}
            {/* 1 */}
            <div className="flex items-center justify-between px-1 mt-5 hover:bg-[#EEF3FF] duration-200 py-2 w-[97%] mx-auto">
              <div>
                <li className="font-bold text-[16px]">BluZarTech Solutions</li>
                <p className="text-[#D2D2D2] font-medium">bluzartech.tn</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center bg-[#D0F3CB] p-1 font-medium">
                  {" "}
                  <AiFillStar color="#43A047" size="12px" />
                  <p className=" font-medium">2.9/5</p>
                </div>
                <div className="w-[10px] h-[10px] bg-[#43A047] rounded-full"></div>
                <li className="text-[#000033] font-semibold">253 avis</li>
              </div>
            </div>

            {/* 1 */}
            {/* 1 */}
            <div className="flex items-center justify-between px-1 mt-5  hover:bg-[#EEF3FF] duration-200 py-2 w-[97%] mx-auto ">
              <div>
                <li className="font-bold text-[16px]">ProZarMax</li>
                <p className="text-[#D2D2D2] font-medium">prozarmax.tn</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center bg-[#F7CAFF] p-1 font-medium">
                  {" "}
                  <AiFillStar color="#7B1FA2" size="12px" />
                  <p className=" font-medium">2.9/5</p>
                </div>
                <div className="w-[10px] h-[10px] bg-[#7B1FA2] rounded-full"></div>
                <li className="text-[#000033] font-semibold">253 avis</li>
              </div>
            </div>
            {/* 1 */}
            <hr className="mt-2" />
            {/*  */}
            <div className=" flex justify-center items-center pt-5 pb-3 ">
              <button className="w-[90%] py-3 text-center text-[#000000]  border-[2px] border-[#CFCFCF]  justify-center rounded-full flex items-center font-semibold text-[16px] f">
                Afficher tous les résultats
                <LiaLongArrowAltRightSolid size="40px" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
