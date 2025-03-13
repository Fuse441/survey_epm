import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Request body:", body);

  const filePath = path.join(process.cwd(), "data", "user-data.json");

  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileContent);

      const index = data.findIndex((item: any) => item.email === body.email);
        
      if (index !== -1) {
        // ✅ เพิ่มหรืออัปเดต key isSend: true
        data[index].isSend = true;

        // ✅ เขียนกลับไปยังไฟล์
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

        return NextResponse.json({ message: "isSend updated", status: 200 });
      } else {
        return NextResponse.json({ message: "User not found", status: 404 });
      }

    } catch (err) {
      console.error("Error processing JSON file:", err);
      return NextResponse.json({ message: "Server error", status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Data file not found", status: 500 });
  }
}
