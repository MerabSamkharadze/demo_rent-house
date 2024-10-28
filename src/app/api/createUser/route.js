import pool from "@/libs/connection";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

const SALT_ROUNDS = 10;

export async function POST(req) {
  try {
    const data = await req.json();
    const { userName, password, email } = data;

    if (!userName || !password || !email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailCheckQuery = "SELECT * FROM users WHERE email = ?";
    const [existingUser] = await pool.query(emailCheckQuery, [email]);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { success: false, message: "Email is already in use" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const userId = uuidv4();
    const verificationToken = uuidv4();

    const query = `
      INSERT INTO users (id, userName, email, password, verificationToken, isVerified)

      VALUES (?, ?, ?, ?, ?, 0)


    `;
    const values = [userId, userName, email, hashedPassword, verificationToken];
    const [result] = await pool.query(query, values);

    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verifyEmail?token=${verificationToken}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email address",
      html: `<p>Please verify your email by clicking the link below:</p>
             <a href="${verificationLink}">Verify Email</a>`,
    });

    return NextResponse.json(
      {
        success: true,
        id: userId,
        message:
          "Registration successful, Please check your email to verify your account.",
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
