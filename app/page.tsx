/* eslint-disable prettier/prettier */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input, Textarea } from "@heroui/input";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import React from "react";
import { Form } from "@heroui/form";
import {
  groupTypeBusiness,
  registrationNumber,
  thaiAmphures,
  thaiProvinces,
  thaiTambons,
  typeOfBusiness,
} from "@/config/configForm";
import Questions from "@/components/question";

export default function Home() {
  const [selected, setSelected] = useState<{ [key: string]: string | string[] }>({});
  const [isAuthen, setIsAuthen] = useState<string>();
  const [regisNumber, setRegisNumber] = useState<string>();
  const [securityCode, setSecurityCode] = useState<string>();
  const [establishmentName, setEstablishmentName] = useState<string>();
  const [provinces, setProvinces] = useState<string>();
  const [amphures, setAmphures] = useState<any>();
  const [tambons, setTambons] = useState<any>();
  const [zipCode, setZipCode] = useState<string>("");
  const [provideSkills, setProvideskills] = useState<string>();
  const [typeBusiness, setTypeBusiness] = useState<string>();
  const [branch, setBranch] = useState<string>();
  const [size, setSize] = useState<string>();
  const router = useRouter();
  const [stateError, setStateError] = useState({
    vaildate_EstablishmentName: {
      status: false,
    },
    vaildate_Branch : {
      status : false
    },
    vaildate_TypeBusiness : {
      status : false
    },
    vaildate_Size : {
      status : false
    }
  });

  const updateStatus = (key: string | number, value: any) => {
    setStateError((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], status: value },
    }));
  };
  const handleSubmit = () => {
    const validationErrors = {
        vaildate_EstablishmentName: !establishmentName,
        vaildate_Branch: !branch,
        vaildate_TypeBusiness: !typeBusiness,
        vaildate_Size : !size
    };

    Object.entries(validationErrors).forEach(([key, value]) => {
        if (value) updateStatus(key, true);
    });

    console.log({
        regisNumber,
        securityCode,
        establishmentName,
        branch,
        typeBusiness,
        size,
        provideSkills,
        provinces,
        amphures,
        tambons,
        zipCode,
        selected
    });
};

  const onProvinceChange = (value: any) => {
    setProvinces(value);

    if (!value) {
      setAmphures([]);

      return;
    }

    const selectObject = thaiAmphures.filter(
      (item) => item.province_id === value.id
    );

    setAmphures(selectObject);
  };
  const onAmphureChange = (value: any) => {
    if (!value) {
      setTambons([]);
    }
    const selectObject =
      value && thaiTambons.filter((item) => item.amphure_id == value.id);

    setTambons(selectObject);
  };
  const onTambonChange = (value: any) => {
    if (!value) {
      setZipCode("");

      return;
    }
    value && setZipCode(value.zip_code);
  };

  return (
    <>
     {/* <pre>{JSON.stringify(selected, null, 2)}</pre> */}
      <div className="mb-10 flex justify-center">
        <h1 className="text-3xl">
          แบบสำรวจความต้องการพัฒนาฝีมือแรงงานของสถานประกอบการ
        </h1>
      </div>
      <section className="flex flex-col items-center justify-center gap-4">
        <Card className="w-full">
          <CardHeader className="flex gap-3 text-xl ">
            ข้อมูลสถานประกอบการ
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-red-500">
              *กรอกข้อมูลของท่านด้วยเลขทะเบียนพาณิชย์
              หรือเลขประกันสังคมอย่างใดอย่างหนึ่ง
            </p>
            <div className="mt-5 grid grid-cols-3 gap-4 w-full">
              <div className="col-span-3 grid grid-cols-6 gap-4">
                <Input
                  className="col-span-3"
                  isDisabled={securityCode && !regisNumber ? true : false}
                  label="เลขทะเบียนพาณิชย์"
                  placeholder="กรอกเลขทะเบียนพาณิชย์"
                  value={regisNumber}
                  onValueChange={setRegisNumber}
                />
                <Input
                  className="col-span-3"
                  isDisabled={!securityCode && regisNumber ? true : false}
                  label="รหัสประกันสังคม"
                  placeholder="กรอกรหัสประกันสังคม"
                  value={securityCode}
                  onValueChange={setSecurityCode}
                />
              </div>

              <Input
                isRequired
                errorMessage={"กรุณากรอกชื่อสถานประกอบการ"}
                isInvalid={
                  !establishmentName &&
                  stateError.vaildate_EstablishmentName.status
                }
                className="col-span-2"
                label="ชื่อสถานประกอบการ"
                placeholder="กรอกชื่อสถานประกอบการ"
                value={establishmentName}
                onValueChange={setEstablishmentName}
              />

              <Input
                isRequired
                errorMessage={"กรุณากรอกสาขา"}
                isInvalid={
                  !branch &&
                  stateError.vaildate_Branch.status
                }
                className="col-span-1"
                label="สาขา"
                placeholder="กรอกสาขา"
                value={branch}
                onValueChange={setBranch}
              />

              <div className="grid grid-cols-6 gap-4 col-span-3">
                <Autocomplete
                   isRequired
                  isInvalid={!typeBusiness && stateError.vaildate_TypeBusiness.status}
                  errorMessage="กรุณาเลือกประเภทกิจการ"
                  className="col-span-3"
                  label="ประเภทกิจการ"
                  placeholder="เลือก TSIC"
                  onInputChange={(event) => {
                    const selectObject = typeOfBusiness.find(
                      (item) => item.label == event
                    );

                    setTypeBusiness(selectObject?.TSIC_ID);
                    console.log(typeBusiness);
                  }}
                >
                  {typeOfBusiness.map((item, index) => (
                    <AutocompleteItem key={index}>
                      {item.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Input
                  className=" col-span-3"
                  isDisabled={true}
                  label="กลุ่มประเภทกิจการ"
                  value={
                    groupTypeBusiness.find(
                      (item) => item.value === typeBusiness
                    )?.label ?? ""
                  }
                />
              </div>
              <div className="col-span-3">
                <RadioGroup className="w-full" label="ขนาดสถานประกอบการ" isRequired errorMessage="กรุณาเลือกขนาดสถานประกอบการ" isInvalid={!size && stateError.vaildate_Size.status} value={size} onValueChange={setSize} >
                  <div className="flex flex-row gap-4">
                    <Radio value="less-10">น้อยกว่า 10 คน</Radio>
                    <Radio value="10-19">10-19 คน</Radio>
                    <Radio value="20-49">20-49 คน</Radio>
                    <Radio value="50-99">50-99 คน</Radio>
                    <Radio value="100-199">100-199 คน</Radio>
                    <Radio value="more-200">200 คนขึ้นไป</Radio>
                  </div>
                </RadioGroup>
              </div>

              <div className="col-span-3">
                <Textarea
                  className="w-full max-w-full"
                  label="ที่อยู่"
                  placeholder="ป้อนคำอธิบายของคุณ"
                />
              </div>

              <Autocomplete
                isVirtualized
                className="col-span-1"
                label="จังหวัด"
                placeholder="เลือกจังหวัด"
                onInputChange={(value) => {
                  const selectObject =
                    thaiProvinces &&
                    thaiProvinces.find((item) => item.name_th === value);

                  onProvinceChange(
                    selectObject
                      ? { id: selectObject.id, name: selectObject.name_th }
                      : null
                  );
                }}
              >
                {thaiProvinces.map((item, index) => (
                  <AutocompleteItem key={index}>
                    {item.name_th}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              <Autocomplete
                isVirtualized
                className="col-span-1"
                isDisabled={provinces == null ? true : false}
                label="อำเภอ"
                placeholder="เลือกอำเภอ"
                onInputChange={(value) => {
                  const selectObject =
                    thaiAmphures &&
                    thaiAmphures.find((item) => item.name_th == value);

                  onAmphureChange(
                    selectObject
                      ? { id: selectObject.id, name: selectObject.name_th }
                      : null
                  );
                }}
              >
                {amphures &&
                  amphures!.map((item: any, index: any) => (
                    <AutocompleteItem key={index}>
                      {item.name_th}
                    </AutocompleteItem>
                  ))}
              </Autocomplete>
              <Autocomplete
                isVirtualized
                className="col-span-1"
                isDisabled={!amphures || amphures == "" ? true : false}
                label="ตำบล"
                placeholder="เลือกตำบล"
                onInputChange={(value) => {
                  const selectObject =
                    tambons &&
                    tambons.find((item: any) => item.name_th == value);

                  onTambonChange(selectObject);
                }}
              >
                {tambons &&
                  tambons!.map((item: any, index: any) => (
                    <AutocompleteItem key={index}>
                      {item.name_th}
                    </AutocompleteItem>
                  ))}
              </Autocomplete>
              <Input
                className="col-span-1"
                label="รหัสไปรษณีย์"
                placeholder="กรอกรหัสไปรษณีย์"
                value={zipCode}
              />
              <Input
                className="col-span-2"
                label="เบอร์โทรศัพท์"
                placeholder="กรอกเบอร์โทรศัพท์"
                type="number"
              />

              <h1 className="mx-2 text-xl col-span-3 text-stone-950">
                รายละเอียดผู้ตอบแบบสำรวจ
              </h1>
              <Input
                className="col-span-1"
                label="ชื่อ"
                placeholder="กรอกชื่อ"
              />
              <Input
                className="col-span-1"
                label="นามสกุล"
                placeholder="กรอกนามสกุล"
              />
              <Input
                className="col-span-1"
                label="เบอร์โทรศัพท์"
                placeholder="กรอกเบอร์โทรศัพท์"
                type="number"
              />
              <Input
                className="col-span-3"
                label="อีเมล"
                placeholder="กรอกอีเมล"
                type="email"
              />
              <Input
                className="col-span-3"
                label="ตำแหน่ง"
                placeholder="กรอกตำแหน่ง"
              />

              <div className="questions col-span-3 mt-3">
                <h1 className="text-xl">คำถาม</h1>
                <Questions selected={selected} setSelected={setSelected} />
              </div>

              <h1 className="mx-2 mt-3 text-xl col-span-3 text-stone-950">
                ข้อมูลความต้องการพัฒนาทักษะแรงงานหรือไม่?
              </h1>
              {/* <h1 className="mx-2 mt-3 text-xl col-span-3 text-stone-950">
          ปัจจุบันบริษัทขงท่านมีการอบรมหรือพัฒนาทักษะให้กับพนักงาน หรือไม่?
        </h1> */}

              <RadioGroup
                className="col-span-3"
                defaultValue="has"
                label="ปัจจุบันบริษัทขงท่านมีการอบรมหรือพัฒนาทักษะให้กับพนักงาน"
                onValueChange={(value) => setProvideskills(value)}
              >
                <div className="flex flex-col gap-3">
                  <Radio className="w-[350px]" value="has">
                    มี{" "}
                  </Radio>{" "}
                  <Input
                    isDisabled={provideSkills == "dontHas"}
                    label="(ระบุประเภทของการอบรม)"
                  />
                  <Radio value="dontHas">ไม่มี</Radio>
                </div>
              </RadioGroup>
            </div>

            <Button
              className="text-sky-50 mt-5"
              color="success"
              onPress={handleSubmit}
            >
              ยืนยัน
            </Button>
          </CardBody>
          <CardFooter />
        </Card>
      </section>
    </>
  );
}
