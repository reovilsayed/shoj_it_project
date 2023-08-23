import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function SubModal2({ setSubModal, setOpen, setVerify }) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-[488px] xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setSubModal(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container 2xl:px-[141px] pt-[72px] xl:px-[132px] lg:px-[110px] px-[70px]">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px]">
                    Besoin d'aide pour récupérer votre compte ?
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5">
                    Entrez votre adresse e-mail pour recevoir un code de
                    vérification unique (OTP) et réinitialiser votre mot de
                    passe.
                  </p>

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

                    {/* button */}
                    <div
                      className=" pb-[15px] pt-[33px]"
                      onClick={() => {
                        setSubModal(false);
                        setVerify(true);
                      }}
                    >
                      <button className="common_btn py-[14px] w-full rounded-full text-[#fff] font-semibold text-[15px] ">
                        Se connecter
                      </button>
                    </div>
                    {/* button */}
                    {/* button */}
                    <div
                      className="pb-[72px]"
                      onClick={() => {
                        setSubModal(false);
                        setOpen(true);
                      }}
                    >
                      <button className="common_btn py-[14px] w-full rounded-full text-[#fff] font-semibold text-[15px] flex justify-center items-center gap-2">
                        <HiOutlineArrowNarrowLeft color="white" size="20px" />
                        Retour à la page de connexion
                      </button>
                    </div>
                    {/* button */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
