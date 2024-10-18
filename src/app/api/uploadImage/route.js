import { NextResponse } from "next/server";
import AWS from "aws-sdk";

// Configure AWS SDK for S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("image"); // Get the uploaded image from the request

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No image uploaded" },
        { status: 400 }
      );
    }

    // Convert the image file to a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload the image to S3 without the ACL
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // Your S3 bucket name
      Key: `uploads/${Date.now()}-${file.name}`, // Unique file name in the bucket
      Body: buffer,
      ContentType: file.type, // Set the file MIME type
    };

    const uploadResult = await s3.upload(params).promise();

    // Return the S3 URL of the uploaded file
    return NextResponse.json(
      { success: true, imageUrl: uploadResult.Location },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
