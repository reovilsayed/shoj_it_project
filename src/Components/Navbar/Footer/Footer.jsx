import React from "react";
import logo from "../../../assets/Logo/Official Logo white 4.png";
import footer from "../../../assets/footer/Yuniqode white png 1.png";
import icon1 from "../../../assets/Social Icons/_Facebook.png";
import icon2 from "../../../assets/Social Icons/_Twitter.png";
import icon3 from "../../../assets/Social Icons/Group.png";
import icon4 from "../../../assets/Social Icons/Vector.png";

export default function Footer() {
  return (
    <div className="bg-[#000033] pt-[96px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div id="footer">
          <div>
            <div className="footer lg:flex justify-between items-center">
              <div className="logo">
                <img src={logo} alt="logo" />
                <p className="w-[406px] pt-[10px] leading-7 text-[14px] text-[#fff] font-medium">
                  Construisant des ponts entre les consommateurs et les
                  entreprises pour une meilleure expérience de consommation en
                  Tunisie.
                </p>
              </div>
              <div className="footer_list flex flex-wrap gap-[100px] lg:pt-0 pt-5">
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px]">
                    Noty
                  </h2>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Notre mission
                  </li>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Carrières
                  </li>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Nous contacter
                  </li>
                  <li className="text-[16px] font-medium text-[#D0D0D0]">
                    Guide d’utilisation
                  </li>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px]">
                    Entreprises
                  </h2>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Pourquoi Noty?
                  </li>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Plans & tarifs
                  </li>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Espace Entreprise
                  </li>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px]">
                    Légal
                  </h2>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Conditions d'utilisation
                  </li>
                  <li className="text-[16px] font-medium pb-4 text-[#D0D0D0]">
                    Politique de confidentialité
                  </li>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#FFFFFF] mb-[10px] mt-[50px]"></div>
            <div className="flex justify-between items-center pt-[0px] pb-[5px]">
              <div className="flex items-center justify-center">
                <p className="flex items-center leading-6 text-white text-[12px] font-medium">
                  &copy;2023 Noty - Tous droits réservés. | Conçu et Développé
                  par
                </p>
                <div className="mt-[9px] lg:block hidden">
                  <img src={footer} alt="" />
                </div>
              </div>
              <div className="social_icons flex gap-5 items-center justify-center">
                <img className="w-[20px] h-[20px]" src={icon3} alt="logo" />
                <img className="w-[20px] h-[20px]" src={icon1} alt="logo" />
                <img className="w-[20px] h-[20px]" src={icon2} alt="logo" />
                <img className="w-[20px] h-[20px]" src={icon4} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
