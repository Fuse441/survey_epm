import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";

import CryptoJS from 'crypto-js';
export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("Request body:", body);

  const filePath = path.join(process.cwd(), "data", "user-data.json");


  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent)
  
   

    try {
   
      const findObject =  data.find((item:any) => item.email == body.email)
   

      if(findObject && (findObject.password == body.password)){
        const token = CryptoJS.AES.encrypt(JSON.stringify(findObject), 'emp').toString();
    
        return NextResponse.json(
          { token},
          { status: 200 }
        );
      }else{
        return NextResponse.json(
          { message: "Not Found Data" },
          { status: 400 }
        );
      }

   
    
    } catch (err) {
      console.error("Error parsing existing JSON:", err);
    }
  }

  


}
