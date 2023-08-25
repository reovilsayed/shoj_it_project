import React, { useState } from "react";
import people from "../../assets/header_icons/SVGRepo_iconCarrier.svg";
import logo from "../../assets/Logo/Official Logo 5.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ShowModal from "../../utilitis/ShowModal/ShowModal";
import SubModal2 from "../../utilitis/SubModal2/SubModal2";
import VerifyModal from "../../utilitis/VerifyModal/VerifyModal";
import CheckOutModal from "../../utilitis/CheckOutModal/CheckOutModal";
import FinalModal from "../../utilitis/FinalModal/FinalModal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [subModal, setSubModal] = useState(false);
  const [verify, setVerify] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [finalModal, setFinalModal] = useState(false);
  return (
    <div className="pt-[16px] pb-[16px] bg-[var(--header-bg-color)] cursor-pointer">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div className="2xl:flex xl:flex lg:flex flex justify-between items-center">
          {/* mobile view */}
          <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block">
            <img
              className="2xl:mr-[30px] xl:mr-[30px] lg:mr-[30px] inline-block w-[90px] h-[38px] object-cover"
              src={logo}
              alt="logo"
            />
          </div>
          <div
            className="2xl:hidden xl:hidden lg:hidden md:block sm:block block "
            onClick={() => setShow(!show)}
          >
            {show ? (
              <RxCross2 size="35px" color="#d53535" />
            ) : (
              <RxHamburgerMenu size="35px" />
            )}
          </div>
          {/* mobile view */}
          {/* laptop view */}
          <div
            className={`2xl:flex xl:flex lg:flex 2xl:static xl:static lg:static absolute top-[200px] 2xl:bg-inherit xl:bg-inherit lg:bg-inherit bg-slate-300 ${
              show ? "left-0" : "-left-[600px]"
            } justify-between items-center 2xl:w-full xl:w-full lg:w-full w-[50%] rounded-lg 2xl:duration-0 xl:duration-0 lg:duration-0 duration-700`}
          >
            <div className="nav_logo 2xl:flex xl:flex lg:flex items-center">
              <div className="2xl:block xl:block lg:block text-center 2xl:py-0 xl:py-0 lg:py-0 py-5">
                <img
                  className="2xl:mr-[30px] xl:mr-[30px] lg:mr-[30px] inline-block w-[90px] h-[38px] object-cover"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="nav_items 2xl:flex xl:flex lg:flex gap-[29px]">
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] 2xl:font-semibold xl:font-semibold lg:font-medium text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5">
                  À propos de nous
                </li>
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] 2xl:font-semibold xl:font-semibold lg:font-medium text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5">
                  Catégories
                </li>
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] 2xl:font-semibold xl:font-semibold lg:font-medium text-[#000] 2xl:pl-0 xl:pl-0 lg:pl-0 pl-5 cursor-pointer 2xl:pb-0 xl:pb-0 lg:pb-0 pb-5">
                  Contactez-nous
                </li>
              </div>
            </div>
            <div className="nav_right_items 2xl:flex xl:flex lg:flex gap-[25px]">
              <div className="flex items-center justify-center 2xl:py-0 xl:py-0 lg:py-0 py-5 gap-[10px]">
                <img
                  className="w-[19px] h-[19px] block object-cover"
                  src={people}
                  alt="people"
                />
                <li className="2xl:text-[15px] xl:text-[15px] lg:text-[15px] 2xl:font-bold xl:font-semibold lg:font-semibold text-[#006]">
                  Connexion
                </li>
              </div>
              <div className="2xl:py-0 xl:py-0 lg:py-0 py-5 flex justify-center items-center">
                <button
                  className="common_btn px-4 py-3 rounded-full  text-[#fff] font-semibold m-0 border-none outline-none"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Pour Entreprises
                </button>
              </div>
            </div>
          </div>
          {/* laptop view */}
        </div>
      </div>
      {open && (
        <ShowModal setSubModal={setSubModal} open={open} setOpen={setOpen} />
      )}
      {subModal && (
        <SubModal2
          setSubModal={setSubModal}
          subModal={subModal}
          setVerify={setVerify}
          setOpen={setOpen}
        />
      )}
      {verify && (
        <VerifyModal
          setVerify={setVerify}
          verify={verify}
          setSubModal={setSubModal}
          setCheckOut={setCheckOut}
        />
      )}
      {checkOut && (
        <CheckOutModal
          setCheckOut={setCheckOut}
          checkOut={checkOut}
          setFinalModal={setFinalModal}
        />
      )}
      {finalModal && (
        <FinalModal setFinalModal={setFinalModal} finalModal={finalModal} />
      )}
    </div>
  );
}
