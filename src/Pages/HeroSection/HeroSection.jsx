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
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] 2xl:h-[582px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4  relative ">
        <div className="hero_wrapper flex 2xl:pb-0 xl:pb-10 lg:pb-10 pb-5   relative">
          <div className="hero_description 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full ">
            <h1 className=" 2xl:w-[867px] xl:w-[867px] 2xl:h-[93px] xl:h-[93px] w-full h-auto font-bold text-[48px]  flex  items-center  mt-[114px] leading-[54px] text-[#006]">
              Noty - Votre guide de confiance pour les services et produits en
              Tunisie.{" "}
            </h1>
            <p className=" pt-[40px] text-[24px] text-[#679] font-semibold 2xl:leading-[0px] leading-7">
              Trouvez les meilleurs produits et services en un seul endroit.
            </p>
            <form
              onChange={handelChange}
              className="2xl:flex xl:block lg:block md:block items-center gap-[15px] pt-[116px] 2xl:absolute xl:absolute z-40"
            >
              <Text />
              <div className="flex items-center gap-1 2xl:w-[230px] w-[230px]   2xl:h-[65px]   common_btn rounded-full text-white justify-center font-semibold text-[16px] 2xl:mt-0 mt-5 2xl:absolute xl:absolute 2xl:left-[470px] xl:left-[330px] 2xl:top-[116px] xl:top-[97px]">
                <button className=" 2xl:p-0 p-5">Laissez votre avis</button>
                <HiOutlineArrowNarrowRight size="28px" />
              </div>
            </form>
          </div>
          <div className="hero_pic 2xl:w-1/2 xl:w-1/2 lg:w-1/2 2xl:block xl:block lg:block md:hidden hidden  pt-[87px]">
            <img className="" src={heroPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
