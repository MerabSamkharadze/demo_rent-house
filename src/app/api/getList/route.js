import { NextResponse } from "next/server";
import pool from "@/libs/connection";

export async function GET(request) {
  const { searchParams } = new URL(request.url); 
  const id = searchParams.get("id"); 
  try {
    const values = [];
    let sql = `SELECT * FROM rooms `; 
    if (id) {
      sql += ` WHERE id = ?`; 
      values.push(id);
    }

    const [results] = await pool.query(sql, values);

    const products = results.map((result) => ({
      ...result,
      image: result.image.toString("base64"),
    }));

    if (products.length === 0) {
      return NextResponse.json(
        { success: true, message: "No rooms found", data: [] },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Rooms retrieved successfully",
        data: products,
      },
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
