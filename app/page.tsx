
"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import {RadioGroup, Radio} from "@heroui/radio";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Divider } from '@heroui/divider';
import {Select, SelectItem} from "@heroui/select";
import { groupTypeBusiness, registrationNumber, thaiAmphures, thaiProvinces, typeOfBusiness } from '@/config/configForm';
import { Input, Textarea } from '@heroui/input';
import {Autocomplete,AutocompleteSection,AutocompleteItem} from "@heroui/autocomplete";
import { Button } from '@heroui/button';
import {Form} from '@heroui/form'
import React from 'react';
export default function Home() {
  const [isAuthen, setIsAuthen] = useState<string>();
  const [provinces,setProvinces] = useState<string>();
  const [amphures,setAmphures] = useState<any>();
  const [tambons,setTambons] = useState<any>();
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token");
  token ? 
      ""
      : router.push("/login")
  }, []); 
  const onProvinceChange = (value: any) => {
    setProvinces(value);
  
    if (!value) {
      setAmphures([]); 
      return;
    }
  
    const selectObject = thaiAmphures.filter((item) => item.province_id === value.id);
    setAmphures(selectObject);
  };
  
  return (
    <>
    <div className='mb-10 flex justify-center'>
    <h1 className='text-3xl'>แบบสำรวจความต้องการพัฒนาฝีมือแรงงานของสถานประกอบการ</h1> 

    </div>
    <section className="flex flex-col items-center justify-center gap-4">
    <Card className="w-full">
    <CardHeader className="flex gap-3 text-xl ">
   
    ข้อมูลสถานประกอบการ
   
    </CardHeader>
    <Divider/>
    <CardBody className='text-red-500'>
        <p>*กรอกข้อมูลของท่านด้วยเลขทะเบียนพาณิชย์ หรือเลขประกันสังคมอย่างใดอย่างหนึ่ง</p>
        <div className="mt-5 grid grid-cols-3 gap-4 w-full">
  <Input className="col-span-1" label="เลขทะเบียนพาณิชย์">
 
  </Input>
  <Input className="col-span-1" label="สาขา">
    {registrationNumber.map((number, index) => (
      <AutocompleteItem key={index}>{number}</AutocompleteItem>
    ))}
  </Input>
  <Input className="col-span-1" label="รหัสประกันสังคม">
    {registrationNumber.map((number, index) => (
      <AutocompleteItem key={index}>{number}</AutocompleteItem>
    ))}
  </Input>
  <Input className="col-span-2" label="ชื่อสถานประกอบการ">
 
  </Input>
  <Autocomplete className="col-span-1" label="ประเภทกิจการ">
    {typeOfBusiness.map((item, index) => (
      <AutocompleteItem key={index}>{item.label}</AutocompleteItem>
    ))}
  </Autocomplete>
  <Autocomplete className="col-span-3" label="กลุ่มประเภทกิจการ">
    {groupTypeBusiness.map((item, index) => (
      <AutocompleteItem key={index}>{item.label}</AutocompleteItem>
    ))}
  </Autocomplete>
 
  
  <div className="col-span-3">
    <RadioGroup className="w-full" label="ขนาดสถานประกอบการ">
      <div className="flex flex-row gap-4">
        <Radio value="buenos-aires">น้อยกว่า 10 คน</Radio>
        <Radio value="sydney">10-20 คน</Radio>
        <Radio value="san-francisco">20-49 คน</Radio>
        <Radio value="london">50-99 คน</Radio>
        <Radio value="tokyo">100-199 คน</Radio>
        <Radio value="tokyo1">200 คน</Radio>
      </div>
    </RadioGroup>
  </div>

  <div className="col-span-3">
    <Textarea className="w-full max-w-full" label="ที่อยู่" placeholder="ป้อนคำอธิบายของคุณ" />
  </div>
 
  <Autocomplete isVirtualized className="col-span-1" label="จังหวัด" onInputChange={(value) => {
    const selectObject = thaiProvinces.find((item) => item.name_th === value)
    onProvinceChange(selectObject ? {id : selectObject.id,name : selectObject.name_th} : null)
  }}>
    {thaiProvinces.map((item, index) => (
      <AutocompleteItem key={index}>{item.name_th}</AutocompleteItem>
    ))}
  </Autocomplete>
  <Autocomplete className="col-span-1" label="อำเภอ" isDisabled={provinces == null? true : false}>
    {amphures && amphures!.map((item:any,index:any) => (
   
     <AutocompleteItem key={index}>{item.name_th}</AutocompleteItem>
    ))}
  </Autocomplete>
  <Autocomplete className="col-span-1" label="ตำบล" isDisabled={(provinces == null && amphures == null )? true : false }>
    {groupTypeBusiness.map((item, index) => (
      <AutocompleteItem key={index}>{item.label}</AutocompleteItem>
    ))}
  </Autocomplete>

</div>


      <Button className='text-sky-50 mt-5' color="success">Success</Button>
      </CardBody>
      <CardFooter>
      
      </CardFooter>
    </Card>
      </section></>
  );
}
