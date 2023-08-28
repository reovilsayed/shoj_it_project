import React, { useEffect, useRef, useState } from "react";
import heroPic from "../../assets/Logo/Header reviews.svg";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import Text from "../../utilitis/Text/Text";
export default function HeroSection() {
  const [show, setShow] = useState(false);
  console.log(show);
  const handelInput = useRef();
  const handelChange = () => {
    const value = handelInput.current.value;
    if (value.length > -1) {
      setShow(true);
    }
  };
  return (
    <div className=" bg-[#EAF4FC] rounded-b-[50px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1542px] 2xl:h-[582px] xl:mx-auto lg:w-[1542px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0   relative px-0">
        <div className="hero_wrapper flex 2xl:pb-0 xl:pb-10 lg:pb-10 pb-5   relative">
          <div className="hero_description 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full ">
            <h1 className=" 2xl:w-[867px] xl:w-[867px] 2xl:h-[93px] xl:h-[93px] w-full h-auto font-bold text-[48px]  flex   mt-[87px] leading-[58px] text-[#006] ">
              Noty - Votre guide de confiance pour les services et produits en
              Tunisie.{" "}
            </h1>
            <p className=" pt-[66px] text-[24px] text-[#679] font-semibold 2xl:leading-[0px] leading-7">
              Trouvez les meilleurs produits et services en un seul endroit.
            </p>
            <form
              onChange={handelChange}
              className="2xl:flex xl:block lg:block md:block items-center gap-[15px] pt-[132px] 2xl:absolute xl:absolute z-40"
            >
              <Text />
              <div className="flex items-center gap-1 2xl:w-[230px] w-[230px]   2xl:h-[65px]   common_btn rounded-full text-white justify-center font-semibold text-[16px] 2xl:mt-0 mt-5 2xl:absolute xl:absolute 2xl:left-[470px] xl:left-[330px] 2xl:top-[132px] xl:top-[132px]">
                <button className="  mr-[7px]">Laissez votre avis</button>
                <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM1 9L29 9V7L1 7L1 9Z" fill="white" />
                </svg>
              </div>
            </form>
          </div>
          <div className="hero_pic 2xl:w-[770px] xl:w-[770px] lg:w-[770px] 2xl:h-[471px] xl:h-[471px] lg:h-[471px] 2xl:block xl:block lg:block md:hidden hidden pt-[71px]">
            <img className="object-cover custom-image-size" src={heroPic} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}
