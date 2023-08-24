import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function CheckOutModal({ setCheckOut, setFinalModal, setOpen }) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-auto xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setCheckOut(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container 2xl:px-[141px] pt-[72px] xl:px-[132px] lg:px-[110px] px-[70px]">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px]">
                    Réinitialisation de Mot de Passe
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5">
                    Veuillez saisir votre nouveau mot de passe ci-dessous pour
                    réinitialiser votre compte. Assurez-vous qu'il est sécurisé
                    et répond aux exigences de sécurité.
                  </p>

                  <form action="#">
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-semibold pb-[10px] block"
                      >
                        Nouveau Mot de Passe
                      </label>
                    </div>
                    <div className="input_filed pb-[17px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Entrez votre nouveau mot de passe"
                        className="py-[11px] px-[25px] w-full border rounded-full border-[#CFCFCF] border-none outline-none placeholder:text-[#CFCFCF]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-semibold pb-[10px] block"
                      >
                        Confirmer Votre Nouveau Mot de Passe
                      </label>
                    </div>
                    <div className="input_filed pb-[25px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Re-entrez votre nouveau mot de passe"
                        className="py-[11px] px-[25px] w-full border rounded-full border-[#CFCFCF] border-none outline-none placeholder:text-[#CFCFCF]"
                      />
                    </div>

                    {/* button */}
                    <div
                      className="pb-[72px]"
                      onClick={() => {
                        setCheckOut(false);
                        setFinalModal(true);
                      }}
                    >
                      <button className="common_btn py-[14px] w-full rounded-full text-[#fff] font-semibold text-[15px] ">
                        Réinitialiser le Mot de Passe
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
