import React from "react";
import heroPic from "../../assets/Logo/Header reviews.svg";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
export default function HeroSection() {
  return (
    <div className="pt-[94px] bg-[#EAF4FC]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w--[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 ">
        <div className="hero_wrapper flex 2xl:pb-10 xl:pb-10 lg:pb-10 pb-5">
          <div className="hero_description 2xl:w-1/2 xl:w-1/2 lg:w-1/2">
            <h4 className="paragraph 2xl:text-[42px] xl:text-[42px] lg:text-[42px] text-[24px] text-[#000066] font-bold 2xl:pb-[40px] ">
              Noty - Votre guide de confiance pour les services et produits en
              Tunisie.{" "}
            </h4>
            <p className="2xl:pt-[40px] xl:pt-[40px] lg:pt-[40px] pt-5 2xl:text-[24px] xl:text-[24px] lg:-[24px] text-[18px] leading-6 text-[#667799] font-semibold pb-[116px]">
              Trouvez les meilleurs produits et services en un seul endroit.
            </p>
            <div className="2xl:flex xl:flex lg:flex md:flex items-center gap-[15px]">
              <div className="2xl:w-[456px] xl:w-[456px] lg:w-[456px] w-[300px] h-[65px] bg-[#FFFFFF] border-[3px]  border-[#000066] rounded-full overflow-hidden flex justify-center ">
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Recherchez un établissement... (Boutiques, Restaurants, etc.)"
                  className=" outline-none w-[456px] py-3  px-5"
                />
                <div className=" hidden">
                  <div className="flex px-5 justify-between items-center pt-10">
                    <li>
                      <h2 className="text-[16px] font-bold">ZARA</h2>
                      <p className="text-[#D2D2D2] text-[13px] font-medium pt-[3px]">
                        zara.com/tn
                      </p>
                    </li>
                    <div className="flex gap-3 items-center">
                      <div className="flex bg-[#FFF8BF]">
                        <AiFillStar color="#FCD700" />
                        <p className=" font-medium text-[13px]">2.9/5</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-[10px] h-[10px] bg-[#FCD700] rounded-full block"></span>
                        <p className=" font-medium text-[13px]">253 avis</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-5 justify-between items-center py-3">
                    <li>
                      <h2 className="text-[16px] font-bold">ZARA</h2>
                      <p className="text-[#D2D2D2] text-[13px] font-medium pt-[3px]">
                        zara.com/tn
                      </p>
                    </li>
                    <div className="flex gap-3 items-center">
                      <div className="flex bg-[#FFF8BF]">
                        <AiFillStar color="#FCD700" />
                        <p className=" font-medium text-[13px]">2.9/5</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-[10px] h-[10px] bg-[#FCD700] rounded-full block"></span>
                        <p className=" font-medium text-[13px]">253 avis</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-5 justify-between items-center py-3">
                    <li>
                      <h2 className="text-[16px] font-bold">ZARA</h2>
                      <p className="text-[#D2D2D2] text-[13px] font-medium pt-[3px]">
                        zara.com/tn
                      </p>
                    </li>
                    <div className="flex gap-3 items-center">
                      <div className="flex bg-[#FFF8BF]">
                        <AiFillStar color="#FCD700" />
                        <p className=" font-medium text-[13px]">2.9/5</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-[10px] h-[10px] bg-[#FCD700] rounded-full block"></span>
                        <p className=" font-medium text-[13px]">253 avis</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-5 justify-between items-center py-3">
                    <li>
                      <h2 className="text-[16px] font-bold">ZARA</h2>
                      <p className="text-[#D2D2D2] text-[13px] font-medium pt-[3px]">
                        zara.com/tn
                      </p>
                    </li>
                    <div className="flex gap-3 items-center">
                      <div className="flex bg-[#FFF8BF]">
                        <AiFillStar color="#FCD700" />
                        <p className=" font-medium text-[13px]">2.9/5</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-[10px] h-[10px] bg-[#FCD700] rounded-full block"></span>
                        <p className=" font-medium text-[13px]">253 avis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-5">
                <button className="w-[230px] h-[65px] common_btn rounded-full text-white flex justify-center items-center text-[16px] font-semibold gap-1">
                  Laissez votre avis
                  <HiOutlineArrowNarrowRight color="" size="28px" />
                </button>
              </div>
            </div>
          </div>
          <div className="hero_pic 2xl:w-1/2 xl:w-1/2 lg:w-1/2 2xl:block xl:block lg:block md:block hidden">
            <img src={heroPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
