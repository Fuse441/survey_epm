import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import { ConnectMongo } from "@/app/database/connectDB";

export async function POST(req: NextRequest) {
  const body = await req.json();
 
  const collection = await ConnectMongo("departmentSkills")
  try {
     await collection.insertOne({
      business : body.business,size:body.size ,data : body.data})
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const business = searchParams.get("business"); // ดึง query string
  const size = searchParams.get("size");

  const query: any = {};

  if(business != "ทั้งหมด"){
    query.business = business;
  }

  if(size != "all"){
    query.size = size;
  }
  console.log(query)

  try {
    const collection = await ConnectMongo("departmentSkills");
    const data = await collection.find(query).toArray();

    return NextResponse.json({
      message: "ดึงข้อมูลสำเร็จ",
      values: data,
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({ message: "เกิดข้อผิดพลาด", error: err }, { status: 500 });
  }
}
