import React from "react";
import img1 from "../../assets/Notes/logo_darty 1.png";
import img2 from "../../assets/Notes/347607172_617243330089630_28312197502042379_n 1.png";
import img3 from "../../assets/Notes/326732265_612793127524990_8319150349199829063_n 1.png";
import img4 from "../../assets/Notes/399010_10151170752048874_483975833_n 1.png";
import img5 from "../../assets/Notes/unnamed 1.png";
import img6 from "../../assets/Notes/106046609_10158285942070907_7859076810884144613_n 1.png";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import arrow from "../../assets/Logo/Arrow 1.png";
import arrow3 from "../../assets/Logo/Arrow 3.svg";
import arrow11 from "../../assets/Logo/Arrow 11.svg";
import edit from "../../assets/Logo/notesss.svg";
export default function Notices() {
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[45px]">
        {/* single notes 1*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex  gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img1} alt="category1" />
            <div className=" pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066]">
                DARTY
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[5px]">
                Entreprise de vente au détail
              </p>
              <div className="ratting">
                <div className="flex gap-[7px] justify-center items-center py-[20px] color_box1">
                  <StarRatings
                    rating={4.403}
                    starRatedColor="#43A047"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="2px"
                  />
                  <div className="round"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#43A047]">
                    EXCELLENT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.3/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">250</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 1*/}

        {/* single notes 2*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img2} alt="category1" />
            <div className="pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066]">
                Ennakl Automobiles
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[5px]">
                Concessionnaire de Voitures
              </p>
              <div className="ratting">
                <div className="flex gap-[7px] items-center py-[20px] color_box2">
                  <StarRatings
                    rating={2.403}
                    starRatedColor="#FCD700"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="2px"
                  />
                  <div className="round1"></div>
                  <h5 className="font-semibold 2xl:text-[13px] text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">2.5/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 2*/}
        {/* single notes 3*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img3} alt="category1" />
            <div className=" 2xl:pt-[11px] pt-[11px]">
              <h2 className=" font-bold 2xl:text-[15px] text-[15px] text-[#000066] 2xl:leading-none leading-5">
                La Cigale Tabarka Hôtel-Thalasso & Spa - Golf
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[11px]">
                Concessionnaire de Voitures
              </p>
              <div className="ratting">
                <div className="flex gap-[7px]  items-center pt-[20.2px] pb-[19.8px] color_box3 ">
                  <StarRatings
                    rating={4}
                    starRatedColor="#7B1FA2"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <div className="round2"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#7B1FA2]">
                    BON
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 3*/}
        {/* single notes 4*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img4} alt="category1" />
            <div className=" 2xl:pt-[11px] pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066]">
                GlobalNet
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[5px]">
                IT et Communication
              </p>
              <div className="ratting">
                <div className="flex gap-[7px] justify-center items-center py-[20px] color_box4">
                  <StarRatings
                    rating={2}
                    starRatedColor="#FF7A00"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <div className="round3"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#FF7A00]">
                    DÉCEVANT
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">4.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">121</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 4*/}
        {/* single notes 5*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img5} alt="category1" />
            <div className=" 2xl:pt-[11px] pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066]">
                Bolt
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[5px]">
                Services de Taxi et VTC
              </p>
              <div className="ratting">
                <div className="flex gap-[7px] justify-center items-center py-[20px] color_box5">
                  <StarRatings
                    rating={1}
                    starRatedColor="#EA0000"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <div className="round4"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#EA0000]">
                    MÉDIOCRE
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">1.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">650</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 5*/}
        {/* single notes 6*/}
        <div className="notes bg-[#FFFFFF]  2xl:w-[484px] 2xl:h-[266px] rounded-[13px]">
          <div className=" flex gap-[19px] pt-[25px] pl-[25px]">
            <img className="w-[70px] h-[70px] " src={img6} alt="category1" />
            <div className=" 2xl:pt-[11px] pt-[11px]">
              <h2 className=" font-bold 2xl:text-[24px] text-[24px] text-[#000066]">
                Zara
              </h2>
              <p className="text-[#333333] font-medium text-[15px] pt-[5px]">
                Magasin de Vêtements
              </p>
              <div className="ratting">
                <div className="flex gap-[7px] justify-center items-center py-[20px] color_box6">
                  <StarRatings
                    rating={2}
                    starRatedColor="#FCD700"
                    starDimension="12px"
                    numberOfStars={5}
                    starSpacing="3px"
                  />
                  <div className="round5"></div>
                  <h5 className=" font-semibold 2xl:text-[13px] text-[13px] text-[#FCD700]">
                    MOYEN
                  </h5>
                </div>
                <p className=" font-medium text-[15px] text-[#333333]">
                  Score: <span className="text-[#000099]">2.0/5</span>
                </p>
                <p className=" font-medium text-[15px] text-[#333333] pt-[10px] pb-[30px]">
                  Nombre d’avis: <span className="text-[#000099]">430</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#EDEDFF] "></div>

          {/* button */}
          <div className="flex items-center justify-between pt-[10px] px-[25px]">
            <button className="  flex justify-center items-center rounded-full gap-2">
              <li className="text-[15px] text-[#000066] font-medium">
                Lire les avis
              </li>
              <div className="w-[25px]">
                <img className="w-full" src={arrow} alt="" />
              </div>
            </button>
            <button className="w-[133px] h-[40px] bg-[#DAE4FF] flex justify-center items-center rounded-[56px] gap-[9.56px]">
              <div className="w-[12.444px] h-[12.444px]">
                <img className="w-full" src={edit} alt="" />
              </div>
              <li className="2xl:text-[15px] text-[15px] font-medium text-[#000066]">
                site web
              </li>
            </button>
          </div>
          {/* button */}
        </div>
        {/* single notes 6*/}
      </div>
      <div className="pt-[74px] pb-[75px] flex justify-between items-center cursor-pointer">
        <p className="  flex items-center text-[#006] font-medium text-[15px] gap-[10px]">
          Trouver d'autres entreprises recommandées{" "}
          <div className="w-[18px]">
            <img className="w-[18px]" src={arrow} alt="" />
          </div>
        </p>
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-[40px] border-[1px] border-[#000066] rounded-full flex justify-center items-center">
            <img className="w-[18px] text-[##000066]" src={arrow3} alt="" />
          </div>
          <div className="w-[40px] h-[40px] border-[1px] border-[#000066] rounded-full flex justify-center items-center">
            <img className=" w-[18px]" src={arrow11} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
