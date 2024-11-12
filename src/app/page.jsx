import Card from "@/components/Card/Card";
import axios from "axios";

async function fetchData() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const dataResult = await axios.get(`${baseURL}/api/getList`);

    return dataResult.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Home() {
  const homes = await fetchData();

  return (
    <div
      className="w-full flex flex-wrap gap-5 items-center py-12 px-12 content-start
     "
    >
      {homes &&
        homes.map((home) => {
          return (
            <Card
              key={home.id}
              imgSrc={home.imageUrl}
              price={home.price}
              addres={home.address}
              rooms={home.amount}
              vector={home.postalCode}
              space={home.width}
              forRent={home.propertyType}
            />
          );
        })}
    </div>
  );
}
