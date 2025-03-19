import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import { ConnectMongo } from "@/app/database/connectDB";


export async function GET() {
  const collection = await ConnectMongo("users")
 const data = await collection.find({}).toArray()
 

    try {
      return NextResponse.json({
        message : "ดึงข้อมูลสำเร็จ",
        values : data.length
      })
    } catch (err) {
      console.error("Error parsing existing JSON:", err);
    }
  
}
