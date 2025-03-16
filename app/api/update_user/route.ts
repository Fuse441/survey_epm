import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { ConnectMongo } from "@/app/database/connectDB";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const collection = await ConnectMongo("users")
  try{
    await collection.updateOne({email:body.email},{$set : {status:true}})
    return  NextResponse.json({
      message: "อัพเดตข้อมูลผู้ใช้งานเรียบร้อย"
    },
  {
    status : 200
  })
  }catch(error){
  console.error("error ==> ", error);
   return NextResponse.json({
      message: "เซิฟเวอร์มีปัญหา"
    },
  {
    status : 500
  })
  }

 
}
