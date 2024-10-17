import { NextResponse } from "next/server";
import pool from "@/libs/connection";

export async function POST(req) {
  try {
    const data = await req.formData();
    const propertyType = data.get("propertyType");
    const location = data.get("location");
    const price = data.get("price");
    const postalCode = data.get("postalCode");
    const region = data.get("region");
    const city = data.get("city");
    const width = data.get("width");
    const amount = data.get("amount");
    const description = data.get("description");
    const file = data.get("image");

    if (
      !file ||
      !propertyType ||
      !description ||
      !location ||
      !postalCode ||
      !region ||
      !city ||
      !width ||
      !price ||
      !amount
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const query = `
      INSERT INTO rooms (propertyType, lcoation, price, postalCode, region, city, width, amount, description, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      propertyType,
      location,
      price,
      postalCode,
      region,
      city,
      width,
      amount,
      description,
      buffer,
    ];

    const [result] = await pool.query(query, values);

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
