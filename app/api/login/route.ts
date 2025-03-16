import { NextRequest, NextResponse } from "next/server";
import { ConnectMongo } from "../../database/connectDB";
import CryptoJS from "crypto-js";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const collection = await ConnectMongo("users");
    const users = await collection.find({}).toArray();
    const selectObject = users.find((item: any) => item.email === body.email);

    if (selectObject) {
      if (selectObject.password === body.password) {
        const token = CryptoJS.AES.encrypt(
          JSON.stringify(selectObject),
          "emp"
        ).toString();

        return NextResponse.json({ token }, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "User not found" },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Email not found" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
