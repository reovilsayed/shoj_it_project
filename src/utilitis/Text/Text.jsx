import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Text() {
  const [text, setText] = useState("");
  console.log(text.length);
  return (
    <div className="flex justify-center">
      <div className="w-[456px]  bg-[#fff] border-4 border-[#000066] rounded-3xl">
        <div className=" relative">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Zara.c"
            className={`px-3 outline-none py-[23px] text-[17px] placeholder:text-[18px] placeholder:font-semibold ${
              text.length > 0 && "border-b-[2px] border-[#EFEFEF]"
            }  w-full py-3 bg-inherit`}
          />
          {text.length > 0 && (
            <button className=" absolute right-0 top-[6px] rounded-3xl px-5 bg-[#DAE4FF] py-3 text-[#000099] font-semibold">
              Rechercher
            </button>
          )}
        </div>
        {text?.length > 0 && (
          <div className="">
            {/* 1 */}
            <div className="flex items-center justify-between px-3 ">
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
            <div className="flex items-center justify-between px-3 pt-5">
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
            <div className="flex items-center justify-between px-3 pt-5 pb-3 border-b-[2px]">
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
            <div className=" flex justify-center items-center pt-5 pb-3">
              <button className="w-[90%] py-3 text-center text-[#000000]  border-[2px] border-[#CFCFCF]  justify-center rounded-full flex items-center font-semibold text-[16px]">
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
