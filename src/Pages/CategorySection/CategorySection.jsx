import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import arrow from "../../assets/Logo/Arrow 2.svg";
import CategoryItems from "./CategoryItems";
export default function CategorySection() {
  return (
    <div className="bg-[#F7FAFC] pt-[52px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div>
          <div className="category_heading ">
            <div className="lg:flex justify-between items-center mb-[18px]">
              <h2 className="2xl:text-[36px] xl:text-[32px] lg:text-[32px] text-[#003] font-semibold  text-center">
                Explorez par Catégorie
              </h2>
              <div className="flex items-center gap-[10px]">
                <li className="font-semibold 2xl:text-[16px] xl:text-[16px] lg:text-[20px] text-[#006] ">
                  Voir Plus
                </li>
                <img className="w-[20px]" src={arrow} alt="" />
              </div>
            </div>
            <p className="text-[#4F637B] font-medium leading-6 text-[17px]">
              Découvrez les entreprises et produits les mieux notés dans chaque
              catégorie et trouvez exactement ce que vous cherchez.
            </p>
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
