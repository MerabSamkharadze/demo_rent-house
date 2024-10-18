import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import pool from "@/libs/connection";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      propertyType,
      location,
      price,
      postalCode,
      region,
      city,
      width,
      amount,
      description,
      imageUrl,
    } = data;

    if (
      !imageUrl ||
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

    const query = `
        INSERT INTO rooms (propertyType, lcoation, price, postalCode, region, city, width, amount, description, imageUrl)
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
      imageUrl,
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
