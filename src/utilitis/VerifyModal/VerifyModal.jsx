import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function VerifyModal({
  setSubModal,
  setVerify,
  verify,
  setCheckOut,
}) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={verify}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-[488px] xl:h-[488px] h-auto   bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setVerify(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container 2xl:px-[141px] pt-[72px] xl:px-[132px] lg:px-[110px] px-[70px]">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px]">
                    Code de Vérification OTP
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5">
                    Veuillez saisir le code de vérification à 7 chiffres que
                    nous avons envoyé à votre adresse e-mail pour réinitialiser
                    votre mot de passe.
                  </p>

                  <div>
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-semibold pb-[10px] block"
                      >
                        Code de Vérification
                      </label>
                    </div>
                    <div className="input_filed pb-[23px] flex items-center  gap-[15px]">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="w-[40px] h-[46px] border border-[#CFCFCF]   rounded-lg "
                      />
                    </div>

                    {/* button */}
                    <div
                      className=" pb-[15px] "
                      onClick={() => {
                        setCheckOut(true);
                        setVerify(false);
                      }}
                    >
                      <button className="common_btn 2xl:w-[372px] h-[46px] w-full rounded-full text-[#fff] font-semibold text-[15px] ">
                        Se connecter
                      </button>
                    </div>
                    {/* button */}
                    {/* button */}
                    <div
                      className="pb-[63px]"
                      onClick={() => {
                        setVerify(false);
                        setSubModal(true);
                      }}
                    >
                      <button className="common_btn  2xl:w-[372px] h-[46px] w-full rounded-full text-[#fff] font-semibold text-[15px] flex justify-center items-center gap-2">
                        <HiOutlineArrowNarrowLeft color="white" size="20px" />
                        Retour à la page de connexion
                      </button>
                    </div>
                    {/* button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
