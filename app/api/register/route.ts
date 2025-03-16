import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";
import { ConnectMongo } from "@/app/database/connectDB";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const collection = await ConnectMongo("users")
  const users = await collection.find({}).toArray()
  
  if(users) {
   const vaildateEmail =  users.find((item:any) => (item.email == body.email))
   const vaildateUsername = users.find((item:any) => (item.username == body.username))
   if(vaildateEmail){
      return NextResponse.json({
        message : "อีเมลนี้มีผู้ใช้งานแล้ว กรุณาลองใหม่อีกครั้ง",
      },{
        status : 400
      })
    }else if(vaildateUsername) { 
      return NextResponse.json({
        message : "ชื่อผู้ใช้งานนี้มีผู้ใช้งานแล้ว กรุณาลองใหม่อีกครั้ง",
       
      },{
        status : 400
      })
    }
  
  }
  await collection.insertOne(body)
  return NextResponse.json({
    message : "สมัครสมาชิกสำเร็จ"
  })
  // if (fs.existsSync(filePath)) {
  //   const fileContent = fs.readFileSync(filePath, "utf-8");

  //   try {
  //     existingData = JSON.parse(fileContent);
  //     const checkEmail = existingData.find((item) => item.email === body.email);
  //     const checkUsername = existingData.find(
  //       (item) => item.username === body.username,
  //     );

  //     if (checkEmail || checkUsername) {
  //       return NextResponse.json(
  //         { message: "Bad Request Existing Data" },
  //         { status: 400 },
  //       );
  //     }

  //     if (!Array.isArray(existingData)) {
  //       existingData = [existingData];
  //     }
  //   } catch (err) {
  //     console.error("Error parsing existing JSON:", err);
  //   }
  // }

  // existingData.push(body);

  // fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  // const token = CryptoJS.AES.encrypt(
  //   JSON.stringify(existingData),
  //   "emp",
  // ).toString();

  // return NextResponse.json({ token: token }, { status: 200 });
}
