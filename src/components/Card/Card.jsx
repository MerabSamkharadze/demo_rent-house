import Image from "next/image";
import Lokation from "@/public/svg/Lokation";
import Bed from "@/public/svg/Bed";
import Vector from "@/public/svg/Vector";
import Vector2 from "@/public/svg/Vector2";

export default function Card({
  imgSrc,
  price,
  addres,
  rooms,
  vector,
  space,
  forRent,
}) {
  return (
    <div className="  flex-col justify-start items-start inline-flex cursor-pointer ">
      <div className="absolute mt-5 ml-5 w-[90px] h-[26px] p-1.5 bg-[#021526]/50 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-xs font-medium font-['FiraGO'] tracking-wide">
          {forRent ? "ქირავდება" : "იყიდება"}
        </div>
      </div>
      <Image
        alt="home-image"
        width={400}
        height={400}
        className=" self-stretch h-[307px] rounded-tl-[14px] rounded-tr-[14px]"
        src={imgSrc}
      />

      <div className="self-stretch h-[148px] px-[25px] py-[22px] bg-white rounded-bl-[14px] rounded-br-[14px] border-l border-r border-b border-[#dadada] flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch text-[#021526] text-[28px] font-bold font-['FiraGO']">
            {price} ₾
          </div>
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <Lokation />

            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              {addres}
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 inline-flex">
          <div className="h-6 justify-start items-center gap-[5px] flex">
            <Bed />
            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              {rooms}
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <div className="justify-start items-center gap-1 flex">
              <Vector />
              <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
                {space} მ
              </div>

              <div className="text-[#021526]/70 text-[10px] font-normal font-['FiraGO']">
                2
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <Vector2 />
            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              {vector}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
