
"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Divider } from '@heroui/divider';
import {Select, SelectItem} from "@heroui/select";
import { registrationNumber } from '@/config/registrationNumber';
import {Autocomplete,AutocompleteSection,AutocompleteItem} from "@heroui/autocomplete";
export default function Home() {
  const [isAuthen, setIsAuthen] = useState<string>();
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token");
  token ? 
      ""
      : router.push("/login")
  }, []); 
  
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <Card className="w-full">
    <CardHeader className="flex gap-3">
    ข้อมูลสถานประกอบการ
    </CardHeader>
    <Divider/>
    <CardBody>
        <p>*ค้นหาข้อมูลของท่านด้วยเลขทะเบียนพาณิชย์ หรือเลขประกันสังคมอย่างใดอย่างหนึ่ง</p>
        <div className="flex">
        <Autocomplete className="max-w-xs m-3" label="เลขทะเบียนพาณิชย์">
        {registrationNumber.map((number,index) => (
          <AutocompleteItem key={index}>{number}</AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete className="max-w-xs m-3" label="สาขา">
        {registrationNumber.map((number,index) => (
          <AutocompleteItem key={index}>{number}</AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete className="max-w-xs m-3" label="รหัสประกันสังคม">
        {registrationNumber.map((number,index) => (
          <AutocompleteItem key={index}>{number}</AutocompleteItem>
        ))}
      </Autocomplete>
      
      </div>
      </CardBody>
      <CardFooter>
      
      </CardFooter>
    </Card>
      </section></>
  );
}
