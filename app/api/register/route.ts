import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";
export async function POST(req: NextRequest) {
  const body = await req.json();

  

  const filePath = path.join(process.cwd(), "data", "user-data.json");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  let existingData: any[] = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    try {
      existingData = JSON.parse(fileContent);
      const checkEmail = existingData.find((item) => item.email === body.email);
      const checkUsername = existingData.find(
        (item) => item.username === body.username,
      );

      if (checkEmail || checkUsername) {
        return NextResponse.json(
          { message: "Bad Request Existing Data" },
          { status: 400 },
        );
      }

      if (!Array.isArray(existingData)) {
        existingData = [existingData];
      }
    } catch (err) {
      console.error("Error parsing existing JSON:", err);
    }
  }

  existingData.push(body);

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  const token = CryptoJS.AES.encrypt(
    JSON.stringify(existingData),
    "emp",
  ).toString();

  return NextResponse.json({ token: token }, { status: 200 });
}
