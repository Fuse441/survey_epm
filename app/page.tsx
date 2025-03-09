/* eslint-disable prettier/prettier */
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input, Textarea } from "@heroui/input";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Pagination } from "@heroui/pagination";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Chip } from "@heroui/chip";

import GetProvince from "./../service/province";

import { groupTypeBusiness, typeOfBusiness } from "@/config/configForm";
import Questions from "@/components/question";
import { questions } from "@/config/questions";
import { selectCourse } from "@/config/selectCourse";
import { stateQuestions } from "@/config/stateQuestions";
import { IForm } from "@/interfaces/form";
import { Form } from "@heroui/form";
import { group } from "console";

export default function Home() {
  const [provideSkills,setProvideskills] = useState("")
  const province = GetProvince();
  const [errors, setErrors] = React.useState({});
  const [selected, setSelected] = useState<{
    [key: string]: string | string[];
  }>({});
  const [form, setForm] = useState<IForm>({
    regisNumber: "",
    insuranceCode: "",
    establishmentName: "",
    branch: "",
    typeBusiness: "",
    groupTypeBusiness: "",
    size: "",
    user: {
      address: "",
      province: "",
      district: "",
      subdistrict: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      position: "",
    },
  });
  const [isAuthen, setIsAuthen] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem("token")){
        router.push("/login")
    }
    
 
  }, [])
  

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [courses, setCourse] = useState<any>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [stateError, setStateError] = useState({
    vaildate_EstablishmentName: {
      status: false,
    },
    vaildate_Branch: {
      status: false,
    },
    vaildate_TypeBusiness: {
      status: false,
    },
    vaildate_Size: {
      status: false,
    },
    vaildate_Address: {
      status: false,
    },
    vaildate_Province: {
      status: false,
    },
    vaildate_District: {
      status: false,
    },
    vaildate_SubDistrict: {
      status: false,
    },
    vaildate_ZipCode: {
      status: false,
    },
    vaildate_FirstName: {
      status: false,
    },
    vaildate_LastName: {
      status: false,
    },
    vaildate_PhoneNumber: {
      status: false,
    },
    vaildate_Email: {
      status: false,
    },
    vaildate_Position: {
      status: false,
    },
  });

  const handleChange = (
    input: React.ChangeEvent<HTMLInputElement> | { name: string; value: any }
  ) => {
    if ("target" in input) {
      // เมื่อ event มาจาก input element
      const { name, value } = input.target;

      console.log("Event from Input ==> ", name, value);

      setForm((prev) => {
        if (prev.hasOwnProperty(name)) {
          return { ...prev, [name]: value };
        } else {
          return { ...prev, user: { ...prev.user, [name]: value } };
        }
      });
    } else {
      console.log("Custom Change ==> ", input.name, input.value);

      setForm((prev) => {
        if (prev.hasOwnProperty(input.name)) {
          console.log("hasOwnProperty");

          return { ...prev, [input.name]: input.value };
        } else {
          return { ...prev, user: { ...prev.user, [input.name]: input.value } };
        }
      });
    }
  };

  const saveData = async () => {
    const selectObject: any = courses;
  
    const resultArray = selectObject.map((dataGroup: any) => {
      let departmentName = "";
      const labelList: string[] = [];
      const softSkillList: string[] = [];
  
      Object.entries(dataGroup).forEach(([key, value]) => {
        if (Array.isArray(value)) {
         
          departmentName = key;
          value.forEach((item: any) => {
            if (item.label) labelList.push(item.label);
          });
        } else if (typeof value === "object" && value !== null) {
          // ถือว่าเป็น softSkill group
          Object.values(value).forEach((item: any) => {
            if (item.label) softSkillList.push(item.label);
          });
        }
      });
  
      return {
        department: departmentName,
        label: labelList,
        softskill: softSkillList,
      };
    });
  
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultArray),
    });

    // console.log(resultArray);
  };
  
  

  const updateStatus = (key: string | number, value: any) => {
    setStateError((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], status: value },
    }));
  };
  const selectSoftSkill: any = {
    "หลักสูตร Effective Communication & Teamwork (การสื่อสาร การนำเสนอ และการทำงานเป็นทีม)":
      {
        label: "หลักสูตร Network Design & Administration",
        match: "Cloud Computing & Cloud Security",
        deltail: [
          "เทคนิคการสื่อสารในที่ทำงานอย่างมืออาชีพ",
          "Storytelling & Presentation Skills เพื่อการนำเสนอที่น่าสนใจ",
          "Active Listening & Nonverbal Communication (การฟังอย่างมีประสิทธิภาพ)",
          "การใช้ภาษากายและน้ำเสียง เพื่อเพิ่มประสิทธิภาพในการนำเสนอ",
          "Collaboration Tools (Microsoft Teams, Slack, Trello) และการทำงานข้ามแผนก",
          "•	Team Dynamics & Conflict Resolution – การทำงานเป็นทีมและการแก้ไขข้อขัดแย้ง",
        ],
        time: "1 Day",
        location: "สถาบันพัฒนาฝีมือแรงงาน / Online Training",
        noti: "*หากท่านต้องการอบรม ณ สถานประกอบการ กรุณาติดต่อเจ้าหน้าที่ของสถาบันพัฒนาฝีมือแรงงาน",
        reason:
          "เพื่อเพิ่มความสามารถในการออกแบบและบริหารเครือข่ายให้มีประสิทธิภาพ รองรับปริมาณการใช้งานที่เพิ่มขึ้น และลดปัญหาการหยุดชะงักของระบบ",
      },
    "หลักสูตร Problem Solving & Leadership in the Digital Age (การคิดเชิงวิเคราะห์ การบริหารทีม และการแก้ปัญหา)":
      {
        label:
          "หลักสูตร Problem Solving & Leadership in the Digital Age (การคิดเชิงวิเคราะห์ การบริหารทีม และการแก้ปัญหา)",
        match: "Cloud Computing & Cloud Security",
        deltail: [
          "Critical Thinking Frameworks (SWOT Analysis, Root Cause Analysis, 5 Whys)",
          "Structured Problem Solving  วิธีการวิเคราะห์ปัญหาอย่างเป็นระบบ",
          "การใช้ Design Thinking เพื่อพัฒนานวัตกรรมในองค์กร",
          "การคิดสร้างสรรค์และการพัฒนาไอเดียใหม่ ๆ",
          "แนวทางการเป็นผู้นำที่สร้างแรงบันดาลใจ",
          "Emotional Intelligence (EQ) และการบริหารทีมแบบ Agile Leadership",
        ],
        time: "1 Day",
        location: "สถาบันพัฒนาฝีมือแรงงาน / Online Training",
        noti: "*หากท่านต้องการอบรม ณ สถานประกอบการ กรุณาติดต่อเจ้าหน้าที่ของสถาบันพัฒนาฝีมือแรงงาน",
        reason: "",
      },
    "หลักสูตร Productivity, Adaptability & Stress Management (การบริหารเวลา ความยืดหยุ่น และการจัดการความเครียด)":
      {
        label:
          "หลักสูตร Productivity, Adaptability & Stress Management (การบริหารเวลา ความยืดหยุ่น และการจัดการความเครียด)",
        match: "Cloud Computing & Cloud Security",
        deltail: [
          "เทคนิคการจัดลำดับความสำคัญของงาน (Eisenhower Matrix, Pomodoro Technique)",
          "Digital Tools for Productivity (Google Calendar, Microsoft Outlook, Notion)",
          "Growth Mindset & Adaptability – การปรับตัวในยุค Digital Transformation",
          "Stress Management Techniques  เทคนิคจัดการความเครียด และ Work-Life Balance",
          "Conflict Resolution & Negotiation Skills – วิธีการเจรจาต่อรองแบบ Win-Win",
          "Emotional Resilience & Mindfulness – การเสริมสร้างความแข็งแกร่งทางอารมณ์",
        ],
        time: "1 Day",
        location: "สถาบันพัฒนาฝีมือแรงงาน / Online Training",
        noti: "*หากท่านต้องการอบรม ณ สถานประกอบการ กรุณาติดต่อเจ้าหน้าที่ของสถาบันพัฒนาฝีมือแรงงาน",
        reason: "",
      },
  };

  const course = () => {
    console.log("selected ==> ", selected);
    for (let index = 0; index < 10; index++) {
      const current = index + 1;
      let foundDefined = false;

      for (let jndex = 0; jndex < 10; jndex++) {
        const currentJ = jndex + 1;

        if (selected[`${current}.${currentJ}`] === undefined) {
          foundDefined = true;
          break;
        }
      }

      stateQuestions[index] = foundDefined;
    }


    const department = [];
    let scheme: any[] = [];

    for (let index = 0; index < 10; index++) {
      const question = questions[index].question;
      const current = index + 1;

      let obj = {};

      if (
        selected[`${current}.1`] != "น้อย" &&
        selected[`${current}.3`] != "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้" &&
        selected[`${current}.4`] != "น้อย"
      ) {
        const obj = {
          [question]: selectCourse[question] || {},
          softSkill: selectSoftSkill,
        };

        scheme.push(obj);
      } else if (
        selected[`${current}.1`] == "น้อย" &&
        selected[`${current}.3`] == "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
      ) {
        const result = selectCourse[question].filter((item: any) =>
          selected[`${current}.3`].includes(item.match)
        );
        let clone: any = selectCourse[question];

        clone &&= [];
        clone == 0 && (clone = result);

        const obj = {
          [question]: clone || {},
          softSkill: selectSoftSkill,
        };

        scheme.push(obj);
      }
    }
    setCourse(scheme);

    return true;
  };
 
  const itemsPerPage = 1; 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCourses = courses?.slice(startIndex, endIndex) ?? [];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const validationErrors = {
      vaildate_EstablishmentName: !form.establishmentName,
      vaildate_Branch: !form.branch,
      vaildate_TypeBusiness: !form.typeBusiness,
      vaildate_Size: !form.size,
      vaildate_Address: !form.user.address,
      vaildate_Province: !form.user.province,
      vaildate_District: !form.user.district,
      vaildate_SubDistrict: !form.user.subdistrict,
      vaildate_ZipCode: !form.user.zipCode,
      vaildate_FirstName: !form.user.firstName,
      vaildate_LastName: !form.user.lastName,
      vaildate_PhoneNumber: !form.user.phoneNumber,
      vaildate_Email: !form.user.email,
      vaildate_Position: !form.user.position,
    };

    Object.entries(validationErrors).forEach(([key, value]) => {
      if (value) updateStatus(key, true);
    });
  };

  return (
    <>
      <Form className="w-full" validationErrors={errors} onSubmit={onSubmit}>
        <div className="mb-10 flex justify-center">
          <h1 className="text-3xl">
            แบบสำรวจความต้องการพัฒนาฝีมือแรงงานของสถานประกอบการ
          </h1>
        </div>
        <section className="flex flex-col items-center justify-center gap-4 w-full">
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
                    name="regisNumber"
                    isDisabled={form.insuranceCode ? true : false}
                    placeholder="กรอกเลขทะเบียนพาณิชย์"
                    value={form.regisNumber}
                    onChange={handleChange}
                    className="col-span-3"
                    // isDisabled={}
                    label="เลขทะเบียนพาณิชย์"
                  />
                  <Input
                    isDisabled={form.regisNumber ? true : false}
                    className="col-span-3"
                    label="รหัสประกันสังคม"
                    name="insuranceCode"
                    placeholder="กรอกรหัสประกันสังคม"
                    value={form.insuranceCode}
                    onChange={handleChange}
                  />
                </div>
                <Input
                  isRequired
                  className="col-span-2"
                  errorMessage={"กรุณากรอกชื่อสถานประกอบการ"}
                  isInvalid={
                    !form.establishmentName &&
                    stateError.vaildate_EstablishmentName.status
                  }
                  label="ชื่อสถานประกอบการ"
                  name="establishmentName"
                  placeholder="กรอกชื่อสถานประกอบการ"
                  value={form.establishmentName}
                  onChange={handleChange}
                />
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={"กรุณากรอกสาขา"}
                  isInvalid={!form.branch && stateError.vaildate_Branch.status}
                  label="สาขา"
                  name="branch"
                  placeholder="กรอกสาขา"
                  value={form.branch}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-6 gap-4 col-span-3">
                  <Autocomplete
                    isRequired
                    className="col-span-3"
                    errorMessage="กรุณาเลือกประเภทกิจการ"
                    isInvalid={
                      !form.typeBusiness &&
                      stateError.vaildate_TypeBusiness.status
                    }
                    label="ประเภทกิจการ"
                    name="typeBusiness"
                    placeholder="เลือก TSIC"
                    value={form.typeBusiness}
                    onInputChange={(event) => {
                      handleChange({ name: "typeBusiness", value: event });
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
                        (item) =>
                          item.value ===
                          typeOfBusiness.find(
                            (item) => item.label === form.typeBusiness
                          )?.TSIC_ID
                      )?.label ?? ""
                    }
                  />
                </div>
                <div className="col-span-3">
                  <RadioGroup
                    isRequired
                    className="w-full"
                    errorMessage="กรุณาเลือกขนาดสถานประกอบการ"
                    isInvalid={!form.size && stateError.vaildate_Size.status}
                    label="ขนาดสถานประกอบการ"
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                  >
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
                    isRequired
                    className="w-full max-w-full"
                    errorMessage={"กรุณากรอกที่อยู่ของคุณ"}
                    isInvalid={
                      !form.user.address && stateError.vaildate_Address.status
                    }
                    label="ที่อยู่"
                    name="address"
                    placeholder="กรอกที่อยู่ของคุณ"
                    value={form.user.address}
                    onChange={handleChange}
                  />
                </div>
                <Autocomplete
                  isVirtualized
                  className="col-span-1"
                  label="จังหวัด"
                  isRequired
                  errorMessage={"กรุณาเลือกจังหวัด"}
                  isInvalid={
                    !form.user.province && stateError.vaildate_Province.status
                  }
                  name="province"
                  placeholder="เลือกจังหวัด"
                  onInputChange={(event) => {
                    handleChange({ name: "province", value: event });
                  }}
                >
                  {province.map((item, index) => (
                    <AutocompleteItem key={index}>
                      {item.name_th}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Autocomplete
                  isVirtualized
                  isRequired
                  className="col-span-1"
                  label="อำเภอ"
                  errorMessage={"กรุณาเลือกอำเภอ"}
                  isInvalid={
                    !form.user.district && stateError.vaildate_District.status
                  }
                  placeholder="เลือกอำเภอ"
                  value={form.user.district}
                  onInputChange={(event) => {
                    handleChange({ name: "district", value: event });
                  }}
                >
                  {province
                    .find((item) => item.name_th === form.user.province)
                    ?.amphure?.map((amphureItem: any, index: number) => (
                      <AutocompleteItem key={index}>
                        {amphureItem.name_th}
                      </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                  isRequired
                  isVirtualized
                  className="col-span-1"
                  label="ตำบล"
                  placeholder="เลือกตำบล"
                  errorMessage={"กรุณาเลือกตำบล"}
                  isInvalid={
                    !form.user.subdistrict &&
                    stateError.vaildate_SubDistrict.status
                  }
                  value={form.user.subdistrict}
                  onInputChange={(event) => {
                    handleChange({ name: "subdistrict", value: event });
                  }}
                >
                  {province
                    .find((item) => item.name_th === form.user.province) // หา จังหวัด
                    ?.amphure?.find(
                      (amphureItem: any) =>
                        amphureItem.name_th === form.user.district
                    ) // หา อำเภอ
                    ?.tambon?.map((tambonItem: any, index: number) => (
                      <AutocompleteItem key={index}>
                        {tambonItem.name_th}
                      </AutocompleteItem>
                    ))}
                </Autocomplete>

                <Input
                  isRequired
                  className="col-span-3"
                  label="รหัสไปรษณีย์"
                  type="number"
                  placeholder="กรอกรหัสไปรษณีย์"
                  errorMessage={"กรุณากรอกรหัสไปรษณีย์"}
                  isInvalid={
                    !form.user.zipCode && stateError.vaildate_ZipCode.status
                  }
                  value={form.user.zipCode}
                  onChange={(event) => {
                    handleChange({ name: "zipCode", value:  event.target.value });
                  }}
                />
                {/* <Input
                  isRequired
                  className="col-span-2"
                  label="เบอร์โทรศัพท์"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  errorMessage={"กรุณากรอกเบอร์โทรศัพท์"}
                  isInvalid={
                    !form.user.phoneNumber &&
                    stateError.vaildate_PhoneNumber.status
                  }
                  type="number"
                  onChange={(event) => {
                    handleChange({ name: "phoneNumber", value: event.target.value });
                  }}
                  value={form.user.phoneNumber}
                /> */}
                <h1 className="mx-2 text-xl col-span-3 text-stone-950">
                  รายละเอียดผู้ตอบแบบสำรวจ
                </h1>
                <Input
                  isRequired
                  errorMessage={"กรุณากรอกชื่อ"}
                  isInvalid={
                    !form.user.firstName && stateError.vaildate_FirstName.status
                  }
                  value={form.user.firstName}
                  onChange={(event) => {
                    handleChange({ name: "firstName", value: event.target.value });
                  }}
                  className="col-span-1"
                  label="ชื่อ"
                  placeholder="กรอกชื่อ"
                />
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={"กรุณากรอกนามสกุล"}
                  onChange={(event) => {
                    handleChange({ name: "lastName", value: event.target.value });
                  }}
                  value={form.user.lastName}
                  isInvalid={
                    !form.user.lastName && stateError.vaildate_LastName.status
                  }
                  label="นามสกุล"
                  placeholder="กรอกนามสกุล"
                />
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={"กรุณากรอกเบอร์โทรศัพท์"}
                  isInvalid={
                    !form.user.phoneNumber &&
                    stateError.vaildate_PhoneNumber.status
                  }
                  label="เบอร์โทรศัพท์"
                  onChange={(event) => {
                    handleChange({ name: "phoneNumber", value: event.target.value });
                  }}
                  value={form.user.phoneNumber}
                  placeholder="กรอกเบอร์โทรศัพท์"
                  type="number"
                />
                <Input
                  isRequired
                  className="col-span-3"
                  errorMessage={"กรุณากรอกกรอกอีเมล"}
                  isInvalid={
                    !form.user.email && stateError.vaildate_Email.status
                  }
                  onChange={(event) => {
                    handleChange({ name: "email", value: event.target.value });
                  }}
                  value={form.user.email}
                  label="อีเมล"
                  placeholder="กรอกอีเมล"
                  type="email"
                />
                <Input
                  isRequired
                  className="col-span-3"
                  label="ตำแหน่ง"
                  errorMessage={"กรุณากรอกกรอกตำแหน่ง"}
                  isInvalid={
                    !form.user.position && stateError.vaildate_Position.status
                  }
                  onChange={(event) => {
                    handleChange({ name: "position", value: event.target.value });
                  }}
                  value={form.user.position}
                  placeholder="กรอกตำแหน่ง"
                />
                <div className="questions col-span-3 mt-3">
                  <h1 className="text-xl">แบบสอบถาม</h1>
                  {/* <pre>{JSON.stringify(selected, null, 2)}</pre> */}

                  <Questions selected={selected} setSelected={setSelected} />
                </div>
                <h1 className="mx-2 mt-3 text-xl col-span-3 text-stone-950">
                  ข้อมูลความต้องการพัฒนาทักษะแรงงานหรือไม่?
                </h1>
                 <h1 className="mx-2 mt-3 text-xl col-span-3 text-stone-950">
          ปัจจุบันบริษัทขงท่านมีการอบรมหรือพัฒนาทักษะให้กับพนักงาน หรือไม่?
        </h1> 
                
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
                color="primary"
                type="submit"
                onPress={()=> {
                  
                  course() && onOpen();

                } }
              >
                ยืนยัน
              </Button>

              <Modal
                isOpen={isOpen}
                scrollBehavior={"inside"}
                size={"5xl"}
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        หลักสูตรอบรม
                      </ModalHeader>
                      <p className="px-4" />
                      <ModalBody>
                        {Array.isArray(courses) &&
                          paginatedCourses.map((item: any, index: number) => (
                            <div key={index} className="gap-4">
                              {/* 🔹 วนลูป IT Infrastructure Services (Array) */}
                              {Object.keys(item).map((category, idx) => {
                                const categoryData = item[category]; // ดึงข้อมูลใน category นั้น ๆ
                                const isEmptyArray =
                                  Array.isArray(categoryData) &&
                                  categoryData.length === 0;
                                const isEmptyObject =
                                  typeof categoryData === "object" &&
                                  Object.keys(categoryData).length === 0;

                                return (
                                  <div key={idx}>
                                    <h2 className="text-xl font-bold">
                                      {category === "softSkill"
                                        ? "ทักษะทางสังคมที่ใช้เพื่อปฏิสัมพันธ์กับผู้คน"
                                        : category}
                                    </h2>

                                    {isEmptyArray || isEmptyObject ? (
                                      <p className="text-gray-500 my-4">
                                        ไม่พบหลักสูตร
                                      </p>
                                    ) : Array.isArray(categoryData) ? (
                                      // 🔸 วนลูป Array ของหลักสูตร
                                      categoryData.map(
                                        (course: any, courseIdx: number) => (
                                          <Card
                                            key={courseIdx}
                                            className="py-4 my-4"
                                          >
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                              <h1 className="text-default-800 text-lx font-bold">
                                                {course.label}
                                              </h1>
                                            </CardHeader>
                                            <CardBody>
                                              <ul className="list-disc pl-5">
                                                {course.deltail.map(
                                                  (
                                                    detail: string,
                                                    detailIdx: number
                                                  ) => (
                                                    <li key={detailIdx}>
                                                      {detail}
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                              <p className="text-sm font-light my-2">
                                                {course.reason}
                                              </p>
                                              <p className="text-sm text-gray-500">
                                                {course.noti}
                                              </p>
                                              <div className="w-full flex justify-end gap-3">
                                                <Chip color="primary">
                                                  {course.location}
                                                </Chip>
                                                <Chip color="primary">
                                                  {course.time}
                                                </Chip>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        )
                                      )
                                    ) : (
                                      // 🔸 วนลูป Object (softSkill)
                                      Object.keys(categoryData).map(
                                        (subCategory, subIdx) => {
                                          const course =
                                            categoryData[subCategory]; // ข้อมูลหลักสูตร

                                          return (
                                            <Card
                                              key={subIdx}
                                              className="py-4 my-2"
                                            >
                                              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                <h1 className="text-default-800 font-bold">
                                                  {subCategory}
                                                </h1>
                                              </CardHeader>
                                              <CardBody>
                                                <ul className="list-disc pl-5">
                                                  {course.deltail.map(
                                                    (
                                                      detail: string,
                                                      detailIdx: number
                                                    ) => (
                                                      <li key={detailIdx}>
                                                        {detail}
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                                <p className="text-sm font-light my-2">
                                                  {course.reason}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                  {course.noti}
                                                </p>
                                                <div className="w-full flex justify-end gap-3">
                                                  <Chip color="primary">
                                                    {course.location}
                                                  </Chip>
                                                  <Chip color="primary">
                                                    {course.time}
                                                  </Chip>
                                                </div>
                                              </CardBody>
                                            </Card>
                                          );
                                        }
                                      )
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                      </ModalBody>
                      <ModalFooter>
                    
                        <Pagination
                          loop
                          showControls
                          initialPage={currentPage}
                          total={courses!.length}
                          onChange={setCurrentPage}
                        />
                            <Button className="mx-3" color="primary" onPress={saveData}>
                            บันทึกข้อมูล
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
            <CardFooter />
          </Card>
        </section>
      </Form>
    </>
  );
}
