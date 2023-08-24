import { Chip, Divider } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SignUpModal({ setOpen, setSubModal }) {
  return (
    <div className=" cursor-pointer relative">
      <RxCross2
        onClick={() => {
          setOpen(false);
        }}
        color="#D6D6D6"
        size="30px"
        className="cross_btn hover:rotate-180 duration-500 absolute left-1/2 -translate-x-1/2 top-5"
      />
      <div className="signUp_container 2xl:px-[141px] 2xl:pt-[72px] xl:pt-[60px] lg:pt-[10px] pt-3 xl:px-[132px] lg:px-[110px] px-[70px] ">
        <div>
          <h3 className=" text-[16px] font-semibold text-[#000] 2xl:pb-[14px] xl:pb-3 pb-3 ">
            Connectez-vous à votre compte
          </h3>
          <p className="text-[#666] font-medium text-[14px] 2xl:pb-[47px] pb-5">
            Accédez à votre espace personnel en quelques clics.
          </p>
          {/* facebook btn */}
          <div className="flex relative pb-[15px]">
            <FaFacebook
              size="28px"
              color="#1877F2"
              className=" absolute left-2 top-[12px]"
            />
            <button className=" w-full py-[14px] ring ring-[#CFCFCF] rounded-full px-2 text-center">
              Continuer avec Facebook
            </button>
          </div>
          {/* facebook btn */}
          {/* google */}
          <div className="flex relative 2xl:pb-[15px]">
            <FcGoogle
              size="28px"
              color="#1877F2"
              className=" absolute left-2 top-[12px]"
            />
            <button className=" w-full py-[14px] ring ring-[#CFCFCF] rounded-full px-2 text-center">
              Continuer avec Google
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
            <div className="input_filed pb-[17px]">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Entrez votre adresse e-mail"
                className="py-[11px] px-[25px] w-full ring rounded-full ring-[#CFCFCF] border-none outline-none placeholder:text-[#CFCFCF]"
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=" e-mail"
                className="text-[14px] text-[#000] font-semibold pb-[10px] block"
              >
                Mot de passe
              </label>
              <a className="text-[13px] font-medium text-[#333333] underline">
                Oublié?
              </a>
            </div>
            <div className="input_filed ">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Entrez votre mot de passe"
                className="py-[11px] px-[25px] w-full ring rounded-full ring-[#CFCFCF] border-none outline-none placeholder:text-[#CFCFCF]"
              />
            </div>
            {/* check box */}
            <div className="flex items-center gap-[5px] pt-[11px] pb-[34px]">
              <input
                type="checkbox"
                name="text"
                className="h-[18px] w-[18px] border border-[#CFCFCF] border-none outline-none"
              />
              <p>Se souvenir de moi</p>
            </div>
            {/* check box */}
            {/* button */}
            <div
              className=" 2xl:pb-[71px] xl:pb-10"
              onClick={() => {
                setOpen(false);
                setSubModal(true);
              }}
            >
              <button className="common_btn py-[14px] w-full rounded-full text-[#fff] font-semibold text-[15px] ">
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
