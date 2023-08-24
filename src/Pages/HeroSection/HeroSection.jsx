import React, { useEffect, useRef, useState } from "react";
import heroPic from "../../assets/Logo/Header reviews.svg";
import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import AutoComPleted from "../../utilitis/AutoCompleted/AutoComPleted";
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
    <div className="pt-[94px] bg-[#EAF4FC]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w--[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 ">
        <div className="hero_wrapper flex 2xl:pb-10 xl:pb-10 lg:pb-10 pb-5">
          <div className="hero_description 2xl:w-1/2 xl:w-1/2 lg:w-1/2">
            <p className="paragraph 2xl:text-[48px] xl:text-[48px] lg:text-[42px] text-[24px] text-[#000066] font-bold 2xl:pb-[40px] 2xl:w-[867px]">
              Noty - Votre guide de confiance pour les services et produits en
              Tunisie.{" "}
            </p>
            <p className="2xl:pt-[10px] xl:pt-[40px] lg:pt-[40px] pt-5 2xl:text-[24px] xl:text-[24px] lg:-[24px] text-[18px] leading-6 text-[#667799] font-semibold pb-[116px]">
              Trouvez les meilleurs produits et services en un seul endroit.
            </p>
            <form
              onChange={handelChange}
              className="2xl:flex xl:flex lg:flex md:flex items-center gap-[15px] "
            >
              <Text />
              <div className="flex items-center gap-1 w-[230px] h-[80px] common_btn rounded-full text-white justify-center font-semibold text-[16px]">
                <button>Laissez votre avis</button>
                <HiOutlineArrowNarrowRight size="28px" />
              </div>
            </form>
          </div>
          <div className="hero_pic 2xl:w-1/2 xl:w-1/2 lg:w-1/2 2xl:block xl:block lg:block md:block hidden">
            <img src={heroPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
