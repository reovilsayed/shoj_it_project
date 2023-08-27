import { Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SignUpModal({ setOpen, setSubModal, open }) {
  return (
    <div className=" cursor-pointer relative">
      <RxCross2
        onClick={() => {
          setOpen(false);
        }}
        color="#D6D6D6"
        size="30px"
        className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
      />
      <div className="signUp_container 2xl:px-[141px] 2xl:pt-[72px] xl:pt-[60px] lg:pt-[20px] pt-[60px]  xl:px-[132px] lg:px-[110px] px-[70px] ">
        <div>
          <h3 className=" text-[16px] font-semibold text-[#000] 2xl:pb-[14px] xl:pb-3 pb-3 ">
            Connectez-vous à votre compte
          </h3>
          <p className="text-[#666] font-medium text-[14px] 2xl:pb-[47px] pb-5">
            Accédez à votre espace personnel en quelques clics.
          </p>
          {/* facebook btn */}
          <div className="flex relative pb-[15px]">
            <button className=" w-[372px] h-[46px] border-[1px] border-[#CFCFCF] rounded-full pl-[12px]  text-center flex items-center justify-center">
              <FaFacebook size="28px" color="#1877F2" className="" />
              <span className="flex-1 font-semibold text-[15px]">
                {" "}
                Continuer avec Facebook
              </span>
            </button>
          </div>
          {/* facebook btn */}
          {/* google */}
          <div className="flex relative 2xl:pb-[15px]">
            <button className=" w-[372px] h-[46px] border-[1px] border-[#CFCFCF] rounded-full pl-[12px]  text-center flex items-center justify-center">
              <FcGoogle size="28px" color="#1877F2" />
              <span className="flex-1 font-semibold text-[15px]">
                {" "}
                Continuer avec Google
              </span>
            </button>
          </div>
          {/* google */}
          {/* divider */}
          <div className="2xl:pt-[43px] pt-4 2xl:pb-[43px]  pb-4">
            <Divider>
              <Chip label="Ou bien" />
            </Divider>
          </div>
          {/* divider */}
          <form action="#">
            <div>
              <label
                htmlFor=" e-mail"
                className="text-[14px] text-[#000] font-semibold pb-[10px] block"
              >
                Adresse e-mail
              </label>
            </div>
            <div className="input_filed w-[372px] h-[46px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre adresse e-mail"
                className=" pl-[25px] w-full h-full border-[1px] rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF]"
              />
            </div>
            <div className="flex items-center justify-between pt-[17px] pb-[10px]">
              <label
                htmlFor="Password"
                className="text-[14px] text-[#000] font-semibold  block"
              >
                Mot de passe
              </label>
              <a className="text-[13px] font-medium text-[#333333] underline ">
                Oublié?
              </a>
            </div>
            <div className="input_filed w-[372px] h-[46px]">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                className=" pl-[25px] w-full h-full border-[1px] rounded-full border-[#CFCFCF]  outline-none placeholder:text-[14px] placeholder:text-[#CFCFCF]"
              />
            </div>
            {/* check box */}
            <div className="flex items-center gap-[5px] pt-[11px] pb-[34px]">
              <input
                type="checkbox"
                name="text"
                className="h-[18px] w-[18px] border border-[#CFCFCF]  outline-none"
              />
              <p>Se souvenir de moi</p>
            </div>
            {/* check box */}
            {/* button */}
            <div
              className="2xl:pb-0 pb-5"
              onClick={() => {
                setOpen(false);
                setSubModal(true);
              }}
            >
              <button className="common_btn 2xl:w-[372px] 2xl:h-[46px] rounded-full w-full h-[46px] text-[#fff] font-semibold text-[15px]  ">
                Se connecter
              </button>
            </div>
            {/* button */}
          </form>
        </div>
      </div>
    </div>
  );
}
