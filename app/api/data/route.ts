import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();

  

  const filePath = path.join(process.cwd(), "data", "data.json");

  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  let existingData: any[] = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    try {
      existingData = fileContent && JSON.parse(fileContent);

      if (!Array.isArray(existingData)) {
        existingData = [existingData];
      } else {
      }
    } catch (err) {
      // console.error("Error parsing existing JSON:", err);
    }
  }

  existingData.push(body);

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  return NextResponse.json({ message: "success" }, { status: 200 });
}

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "data.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    try {
      return NextResponse.json({ data: fileContent }, { status: 200 });
    } catch (err) {
      console.error("Error parsing existing JSON:", err);
    }
  }
}
