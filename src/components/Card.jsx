import Image from "next/image";
import image from "@/public/images/house.jpg";
import Lokation from "@/public/svg/Lokation";
import Bed from "@/public/svg/Bed";
import Vector from "@/public/svg/Vector";
import Vector2 from "@/public/svg/Vector2";

export default function Card() {
  return (
    <div className="w-96 h-[455px] flex-col justify-start items-start inline-flex">
      <Image
        alt="home-image"
        width={1000}
        height={1000}
        className="self-stretch h-[307px] rounded-tl-[14px] rounded-tr-[14px]"
        src={image}
      />

      <div className="self-stretch h-[148px] px-[25px] py-[22px] bg-white rounded-bl-[14px] rounded-br-[14px] border-l border-r border-b border-[#dadada] flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch text-[#021526] text-[28px] font-bold font-['FiraGO']">
            80 000 ₾
          </div>
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <Lokation />

            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              თბილისი, ი. ჭავჭავაძის 53
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 inline-flex">
          <div className="h-6 justify-start items-center gap-[5px] flex">
            <Bed />
            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              2
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <div className="justify-start items-center gap-1 flex">
              <Vector />
              <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
                55 მ
              </div>

              <div className="text-[#021526]/70 text-[10px] font-normal font-['FiraGO']">
                2
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-[5px] flex">
            <Vector2 />
            <div className="text-[#021526]/70 text-base font-normal font-['FiraGO']">
              0160
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
