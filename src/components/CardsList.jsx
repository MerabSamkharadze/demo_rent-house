import Card from "@/components/Card";

import image1 from "@/public/images/h2.png";
import image2 from "@/public/images/h3.png";
import image3 from "@/public/images/h4.png";
import image4 from "@/public/images/h5.png";
import image5 from "@/public/images/h6.png";
import image6 from "@/public/images/h7.png";
import image7 from "@/public/images/h8.png";

export default function CardsList() {
  const homes = [
    {
      id: 1,
      address: "შარტავას 2ა",
      zip_code: "0101",
      price: 100000,
      area: 100.5,
      bedrooms: 3,
      is_rental: false,
      city_id: 1,
      image: image1,
      city: {
        id: 1,
        name: "სოხუმი",
        region_id: 1,
        region: {
          id: 1,
          name: "აფხაზეთი",
        },
      },
    },
    {
      id: 2,
      address: "ბაგრატიონის 12",
      zip_code: "0202",
      price: 75000,
      area: 85.0,
      bedrooms: 2,
      is_rental: true,
      city_id: 2,
      image: image2,
      city: {
        id: 2,
        name: "ბათუმი",
        region_id: 2,
        region: {
          id: 2,
          name: "Adjara",
        },
      },
    },
    {
      id: 3,
      address: "თამარ მეფის 7",
      zip_code: "0303",
      price: 150000,
      area: 120.0,
      bedrooms: 4,
      is_rental: false,
      city_id: 3,
      image: image3,
      city: {
        id: 3,
        name: "თბილისი",
        region_id: 3,
        region: {
          id: 3,
          name: "ქართული",
        },
      },
    },
    {
      id: 4,
      address: "პუშკინის 5",
      zip_code: "0404",
      price: 50000,
      area: 60.0,
      bedrooms: 1,
      is_rental: true,
      city_id: 1,
      image: image4,
      city: {
        id: 1,
        name: "სოხუმი",
        region_id: 1,
        region: {
          id: 1,
          name: "აფხაზეთი",
        },
      },
    },
    {
      id: 5,
      address: "ხუთყურას 9",
      zip_code: "0505",
      price: 120000,
      area: 150.0,
      bedrooms: 5,
      is_rental: false,
      city_id: 2,
      image: image5,
      city: {
        id: 2,
        name: "ბათუმი",
        region_id: 2,
        region: {
          id: 2,
          name: "Adjara",
        },
      },
    },
    {
      id: 6,
      address: "პავლიკ მოროზოვის 10",
      zip_code: "0606",
      price: 90000,
      area: 95.0,
      bedrooms: 3,
      is_rental: false,
      city_id: 1,
      image: image6,
      city: {
        id: 1,
        name: "სოხუმი",
        region_id: 1,
        region: {
          id: 1,
          name: "აფხაზეთი",
        },
      },
    },
    {
      id: 7,
      address: "ზვიად გამსახურდიას 14",
      zip_code: "0707",
      price: 200000,
      area: 200.0,
      bedrooms: 6,
      is_rental: true,
      city_id: 3,
      image: image7,
      city: {
        id: 3,
        name: "თბილისი",
        region_id: 3,
        region: {
          id: 3,
          name: "ქართული",
        },
      },
    },
  ];

  return (
    <div
      className="w-full flex flex-wrap gap-5 items-center py-12 px-12
     "
    >
      {homes.map((home) => {
        return (
          <Card
            key={home.id}
            imgSrc={home.image}
            price={home.price}
            addres={home.address}
            rooms={home.bedrooms}
            vector={home.zip_code}
            space={home.area}
            forRent={home.is_rental}
          />
        );
      })}
    </div>
  );
}
