import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import { ConnectMongo } from "@/app/database/connectDB";

export async function POST(req: NextRequest) {
  const body = await req.json();
 
  const collection = await ConnectMongo("departmentSkills")
  try {
     await collection.insertOne({data : body})
      return NextResponse.json({
        message : "บันทึกข้อมูลสำเร็จ"
      })
  } catch (error) {
    return NextResponse.json({
      message : "เซิฟเวอร์เกิดปัญหา",
      detail : error
    },{
      status : 500
    })
  }

  
}

export async function GET() {
  const collection = await ConnectMongo("departmentSkills")
 const data = await collection.find({}).toArray()
 console.log("data ==> ", data);
 
    try {
      return NextResponse.json({
        message : "ดึงข้อมูลสำเร็จ",
        values : data
      })
    } catch (err) {
      console.error("Error parsing existing JSON:", err);
    }
  
}
