import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Notices from "./Notices";
export default function NoticesSection() {
  return (
    <div className="bg-[#F2F2F2] pt-[67px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div>
          <div className="category_heading flex justify-between items-center">
            <div>
              <h2 className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] text-[#000080] font-semibold pb-[24px]">
                Entreprises les mieux notées
              </h2>
              <p className="text-[#06C] font-medium 2xl:leading-none leading-6 text-[16px]">
                Plongez dans notre sélection des entreprises les mieux évaluées
                et les plus recommandées par nos utilisateurs satisfaits.
              </p>
            </div>
          </div>
          {/* category single items */}
          <div className="pt-[59px]">
            <Notices />
          </div>
          {/* category single items */}
        </div>
      </div>
    </div>
  );
}
