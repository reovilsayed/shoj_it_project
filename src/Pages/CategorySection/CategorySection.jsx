import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import CategoryItems from "./CategoryItems";
export default function CategorySection() {
  return (
    <div className="bg-[#F7FAFC] pt-[60px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div>
          <div className="category_heading lg:flex justify-between items-center">
            <div>
              <h2 className="2xl:text-[36px] xl:text-[32px] lg:text-[32px] text-[#000] font-semibold pb-[18px]">
                Explorez par Catégorie
              </h2>
              <p className="text-[#4F637B] font-medium leading-6 text-[17px]">
                Découvrez les entreprises et produits les mieux notés dans
                chaque catégorie et trouvez exactement ce que vous cherchez.
              </p>
            </div>
            <div className="flex items-center justify-center lg:pt-0 pt-5 gap-1 ">
              <li className="  font-semibold 2xl:text-[16px] xl:text-[16px] lg:text-[20px] text-[#006] tracking-wide">
                Voir Plus
              </li>
              <LiaLongArrowAltRightSolid size="38px" />
            </div>
          </div>
          {/* category single items */}
          <div className="pt-[59px] pb-[84px]">
            <CategoryItems />
          </div>
          {/* category single items */}
        </div>
      </div>
    </div>
  );
}
