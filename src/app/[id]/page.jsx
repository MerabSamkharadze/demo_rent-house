import axios from "axios";
import Image from "next/image";

async function fetchData(id) {
  console.log(`Fetching data for ID: ${id}`);
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const dataResult = await axios.get(`${baseURL}/api/getList?id=${id}`);
    console.log("Data fetched:", dataResult.data);
    return dataResult.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Slug({ params }) {
  const singleId = await fetchData(params.id);
  const data = singleId.data[0];
  console.log(singleId);

  if (!singleId) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center mt-8 h-[200vh]">
      <div className="flex gap-8" style={{ width: "1340px" }}>
        <div className="relative" style={{ flex: "0 0 840px" }}>
          <Image
            className="rounded-tr-xl rounded-tl-xl object-cover"
            src={`${data.imageUrl}`}
            width={840}
            height={670}
            alt="home"
            unoptimized={true}
          />
          <div className="absolute top-10 left-10 bg-black opacity-50 w-36 h-10 rounded-[20px] flex justify-center items-center">
            <h2 className="text-white tracking-wider">{data.propertyType}</h2>
          </div>
        </div>

        <div style={{ flex: "0 0 500px" }} className="flex flex-col">
          <h1 className="text-5xl text-black font-black pt-5">
            {data.price} ₾
          </h1>
          <div className="mt-5">
            <div className="flex gap-2 items-center mt-5">
              <Image
                src="/assets/location-marker.png"
                width={22}
                height={22}
                className="object-contain"
                alt="location"
              />
              <p className="text-kadi">{data.lcoation}</p> {/* Fixed typo */}
            </div>
            <div className="flex gap-2 items-center mt-5">
              <Image
                src="/assets/Vector.png"
                width={22}
                height={22}
                className="object-contain"
                alt="vector"
              />
              <p className="text-kadi">{data.width}</p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <Image
                src="/assets/bed.png"
                width={22}
                height={22}
                className="object-contain"
                alt="bed"
              />
              <p className="text-kadi">{data.amount}</p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <Image
                src="/assets/Frame 184.png"
                width={22}
                height={22}
                className="object-contain"
                alt="Frame"
              />
              <p className="text-kadi">საფოსტო ინდექსი {data.postalCode}</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="py-3 text-kadi">{data.description}</p>
          </div>
          <div className="mt-6 border-solid border-2 border-[#DBDBDB] rounded-lg p-6">
            <div className="flex gap-5">
              <Image
                src="/assets/Beautiful young woman looking serious.png"
                width={72}
                height={72}
                className="object-contain"
                alt="woman"
              />
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-black font-bold">სოფიო გელოვანი</h3>
                <p className="text-[#676E7]">აგენტი</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex gap-2">
                <Image
                  src="/assets/Mail.png"
                  width={16}
                  height={13}
                  className="object-contain"
                  alt="Mail"
                />
                <p className="text-kadi">sophio.gelovani@redberry.ge</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/Phone.png"
                  width={16}
                  height={13}
                  className="object-contain"
                  alt="Phone"
                />
                <p className="text-kadi">577 777 777</p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-32 h-9 mt-7 border-solid border-2 rounded-lg border-[#676E76] text-[#676E76]">
            <p className="text-xs">ლისტინგის წაშლა</p>
          </div>
        </div>
      </div>
    </div>
  );
}
