import Card from "@/components/Card";
import image from "@/public/images/h1.png";

export default function Home() {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Card
        imgSrc={image}
        price={"80 000"}
        addres={"თბილისი, ი. ჭავჭავაძის 53"}
        rooms={"2"}
        vector={"0160"}
        space={"55"}
        forRent
      />
    </div>
  );
}
