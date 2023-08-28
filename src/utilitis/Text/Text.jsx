import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Text() {
  const [text, setText] = useState("");
  return (
    <div className="2xl:flex justify-center relative">
      <div
        className={`2xl:w-[456px]   ${
          text.length === 0 && "h-[65px]"
        } xl:w-[300px] lg:w-[300px] md:w-[300px] w-full  bg-transparent ${
          text.length > 0 && "bg-white box_shadow_input"
        } border-[2px] border-[#000066] ${
          text.length > 0 ? "rounded-[28px]" : "rounded-[62px]  "
        }`}
      > 
        <div className={`relative px-[16px] ${text.length > 0 && "px-[19px]"}`}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Recherchez un établissement... (Boutiques, Restaurants, etc.)"
            className={`outline-none   placeholder:text-[13px] 
         
            placeholder:font-medium bg-transparent ${
              text.length > 0 ? "h-[65px]" : "h-[62px] "
            } ${
              text.length > 0 && "border-b-[2px] border-[#EFEFEF]"
            }  w-full bg-transparent  placeholder:text-[rgb(102,119,153)] `}
          />
          {text.length > 0 && (
            <button className=" absolute right-[5px] top-[5px] h-[55px] w-[120px] rounded-3xl px-[9px] bg-[#DAE4FF] py-[11px] text-[#000099] text-[15px] font-semibold">
              Rechercher
            </button>
          )}
        </div>
        {text?.length > 0 && (
          <div className={`w-[98%] `}>
            {/* 1 */}
            <div
              className={`flex items-center justify-between  hover:bg-[#EEF3FF]  duration-200 rounded-sm py-2 w-[97%] mx-auto mt-2 px-[16px] ${
                text.length > 0 && "px-[16px]"
              }`}
            >
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
            <div
              className={`flex items-center justify-between  mt-5 hover:bg-[#EEF3FF] rounded-sm duration-200 py-2 w-[97%] mx-auto ${
                text.length > 0 && "px-[16px]"
              } `}
            >
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
            <div
              className={`flex items-center justify-between mt-5  hover:bg-[#EEF3FF] duration-200 py-2 w-[97%] mx-auto ${
                text.length > 0 && "px-[16px]"
              }`}
            >
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
            <hr className="mt-2 w-[410px] mx-auto" />
            {/*  */}
            <div className=" flex justify-center items-center pt-5 pb-3 px-[16px] ">
              <button className="w-[465px] h-[40px] py-3 text-center text-[#000000]  border-[2px] border-[#CFCFCF]  justify-center rounded-full flex items-center font-semibold text-[16px] f">
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
