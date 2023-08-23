import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import logo from "../../assets/Logo/bbbcc63f-011b-4dd3-bad0-e19625de2de3 1.png";

export default function FinalModal({ setFinalModal }) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-auto h-auto  bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setFinalModal(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container 2xl:px-[141px] pt-[72px] xl:px-[132px] lg:px-[110px] px-[70px]">
                <div>
                  <div className="pb-[46px]">
                    <img
                      className="w-[150px] h-[150px] object-cover block mx-auto"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px]">
                    Votre mot de passe a été réinitialisé avec succès.
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5">
                    Vous pouvez désormais accéder à votre compte en utilisant
                    votre nouveau mot de passe. N'hésitez pas à nous contacter
                    si vous avez besoin d'aide supplémentaire. Merci pour votre
                    confiance !
                  </p>

                  <form action="#">
                    {/* button */}
                    <div
                      className="pb-[93px]"
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
