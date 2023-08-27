import React from "react";
import logo from "../../../assets/Logo/Official Logo white 4.png";
import footer from "../../../assets/footer/Yuniqode white png 1.png";
import icon1 from "../../../assets/Social Icons/_Facebook.png";
import icon2 from "../../../assets/Social Icons/_Twitter.png";
import icon3 from "../../../assets/Social Icons/Group.png";
import icon4 from "../../../assets/Social Icons/Vector.png";

export default function Footer() {
  return (
    <div className="bg-[#000033] pt-[73px]">
      <div className="nav_container 2xl:w-[1542px] 2xl:mx-auto xl:w-[1320px] xl:mx-auto lg:w-[1320px] w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-4 relative">
        <div id="footer">
          <div>
            <div className="footer lg:flex justify-between items-center pb-[74px] border-b-[1px] border-[#FFF]">
              <div className="logo">
                <img className="w-[181.02px] h-[76px]" src={logo} alt="logo" />
                <p className="w-[336px] pt-[10px] leading-[151.253%] text-[14px] text-[#fff] font-medium footer_text">
                  Construisant des ponts entre les consommateurs et les
                  entreprises pour une meilleure expérience de consommation en
                  Tunisie.
                </p>
              </div>
              <div className="footer_list flex flex-wrap gap-[100px] lg:pt-0 pt-5 footer_text">
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px] footer_text">
                    Noty
                  </h2>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Notre mission
                  </li>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Carrières
                  </li>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Nous contacter
                  </li>
                  <li className="text-[16px] font-medium text-[#D0D0D0] footer_text">
                    Guide d’utilisation
                  </li>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px] footer_text">
                    Entreprises
                  </h2>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Pourquoi Noty?
                  </li>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Plans & tarifs
                  </li>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Espace Entreprise
                  </li>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-white pb-[33px] footer_text">
                    Légal
                  </h2>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Conditions d'utilisation
                  </li>
                  <li className="text-[16px] font-medium pb-[13px] text-[#D0D0D0] footer_text">
                    Politique de confidentialité
                  </li>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-[10px] pb-[10px]">
              <div className="flex items-center justify-center footer_text">
                <p className="flex items-center  text-white text-[16px] font-medium">
                  &copy;2023 Noty - Tous droits réservés.
                </p>
                <div>
                  <p className="text-white text-[12px] footer_text font-medium   ">
                    | Conçu et Développé par
                  </p>
                </div>
                <div className="mt-[9px] lg:block hidden">
                  <img src={footer} alt="" />
                </div>
              </div>
              <div className="social_icons flex gap-[17px] items-center justify-center">
                <img
                  className="w-[15.998px] h-[15.995px]"
                  src={icon3}
                  alt="logo"
                />
                <img className="w-[16.02px] h-[16px]" src={icon1} alt="logo" />
                <img className="w-[16.02px] h-[16px]" src={icon2} alt="logo" />
                <img className="w-[14.002px] h-[16px]" src={icon4} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
