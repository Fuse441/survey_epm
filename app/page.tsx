/* eslint-disable prettier/prettier */
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input, Textarea } from "@heroui/input";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Pagination } from "@heroui/pagination";
import React from "react";
import CryptoJS from "crypto-js";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Chip } from "@heroui/chip";
import { Form } from "@heroui/form";
import { Select, SelectedItems, SelectItem } from "@heroui/select";
import GetProvince from "./../service/province";

import { groupTypeBusiness, typeOfBusiness } from "@/config/configForm";
import Questions from "@/components/question";
import { questions } from "@/config/questions";
import { selectCourse, selectSoftSkill } from "@/config/selectCourse";
// import { stateQuestions } from "@/config/stateQuestions";
import { IForm } from "@/interfaces/form";
import { Spinner } from "@heroui/spinner";
import { registrationNumber } from "./../config/configForm";
import { messageAuthen } from "@/config/message";
import { stateQuestionsError } from "@/config/stateQuestions";
import { useQuestion } from "@/hooks/useQuestion";
import Confirm from "@/components/Confirm";

export default function Home() {
  const confirmDisclosure = useDisclosure();
  const [provideSkills, setProvideskills] = useState("");
  const province = GetProvince();
  const [errors, setErrors] = React.useState({});
  const [selected, setSelected] = useState<{
    [key: string]: string | string[];
  }>({});
  const { selectQuestions, setQuestions } = useQuestion(); 
  const precisBranch:Record<string,string> = {
      "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)" : "IIS",
      "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)" : "SES",
      "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)" : "ITS",
      "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)" : "SD",
      "Accounting & Finance (งานบัญชีและการเงิน)" : "AF",
      "Human Resource (ฝ่ายทรัพยากรบุคคล)" : "HR",
      "Administration (ฝ่ายธุรการ)" : "ADMIN",
      "Procurement (ฝ่ายจัดซื้อ)" : "PROC",
      "Project Management (ฝ่ายบริหารงานโครงการ)" : "PM",
      "Sales (ฝ่ายขาย)" : "SALES"
  } 
  const [isLoading, setLoading] = React.useState<boolean>(false);
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
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [isQuestion, setQuestion] = useState<boolean>(false);

  const [isAuthen, setIsAuthen] = useState<boolean>();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const data = localStorage.getItem("token");
    const decrypt_token = CryptoJS.AES.decrypt(
      JSON.parse(data!),
      "emp"
    ).toString(CryptoJS.enc.Utf8);
    if (!localStorage.getItem("token")) {
      return router.push("/login");
    }

    if (JSON.parse(decrypt_token).role == "admin") {
      return router.push("/dashboard");
    }

    if (JSON.parse(decrypt_token).status) {
      setIsAuthen(true);
      setShowSuccess(true);
    }
    setLoading(false);
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [courses, setCourse] = useState<any>([]);
  const [showSuccess, setShowSuccess] = useState(false);

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
      const { name, value } = input.target;

      setForm((prev) => {
        if (prev.hasOwnProperty(name)) {
          return { ...prev, [name]: value };
        } else {
          return { ...prev, user: { ...prev.user, [name]: value } };
        }
      });
    } else {
      setForm((prev) => {
        if (prev.hasOwnProperty(input.name)) {
          return { ...prev, [input.name]: input.value };
        } else {
          return { ...prev, user: { ...prev.user, [input.name]: input.value } };
        }
      });
    }
  };

  const saveData = async () => {
    setLoading(true);
    const selectObject: any = courses;

    const resultArray = selectObject.map((dataGroup: any) => {
      // //console.log("dataGroup ==> ", dataGroup);
      let departmentName = "";
      const labelList: string[] = [];
      const softSkillList: string[] = [];
      const recommandList: string[] = [];
      Object.entries(dataGroup).forEach(([key, value]) => {
        if (key === "recommandList" && Array.isArray(value)) {
          // แยกเก็บชื่อหลักสูตรแนะนำ
          value.forEach((rec: any) => {
            if (rec.name) recommandList.push(rec.name);
          });
        } else if (Array.isArray(value)) {
          // เก็บ label ของหลักสูตรปกติ
          departmentName = key;
          value.forEach((item: any) => {
            if (item.label) labelList.push(item.label);
          });
        } else if (typeof value === "object" && value !== null) {
          // เก็บ label ของ softskill
          Object.values(value).forEach((item: any) => {
            if (item.label) softSkillList.push(item.label);
          });
        }
      });

      return {
        department: departmentName,
        label: labelList,
        softskill: softSkillList,
        recommandList: recommandList,
      };
    });

    //console.log("resultArray ==> ", resultArray);

    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        business: form.typeBusiness,
        size: form.size,
        data: resultArray,
      }),
    });

    const data = localStorage.getItem("token");
    const decrypt_token = CryptoJS.AES.decrypt(
      JSON.parse(data!),
      "emp"
    ).toString(CryptoJS.enc.Utf8);

    const update = await fetch("/api/update_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: decrypt_token,
    });

    if (res && update) {
      setLoading(false);
      setShowSuccess(true);
    }
    //
  };
  const [openQuestion, setOpenQuestion] = useState(false);

  useEffect(() => {
    console.log("output ==> " + Array.from(selectQuestions))
    if(Array.from(selectQuestions).includes("none")){
      return setOpenQuestion(false);
    }
  
  }, [selectQuestions])
  
  const updateStatus = (key: string | number, value: any) => {
    setStateError((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], status: value },
    }));
  };

  const itemsPerPage = 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCourses = courses?.slice(startIndex, endIndex) ?? [];
  const isFirstRender = useRef(true);
  const [stateQuestions, setStateQuestions] = React.useState<boolean[]>([]);
  const [statusSubmit, setStatusSubmit] = React.useState<boolean>(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = {
      // vaildate_RegisNumber,
      // vaildatedate_InsuranceCode,
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

    await Promise.all(
      Object.entries(validationErrors).map(async ([key, value]) => {
        await updateStatus(key, value === true);
      })
    );

    const updatedStateQuestions: boolean[] = [];
    await Promise.all(
      questions.filter((item) => selectQuestions.has(item.id)).map(async (question, index) => {
        const current = index + 1;
        let foundDefined = false;
        console.log("question ==> ",question)
        for (let jndex = 0; jndex < question.sub_question.length; jndex++) {
          const currentJ = jndex + 1;

          // Check if the value is undefined
          if (selected[`${current}.${currentJ}`] === undefined) {
            foundDefined = true;
            break;
          } else {
            foundDefined = false;
          }
        }

        // Add result to the state array
        stateQuestionsError[index] = foundDefined;
        updatedStateQuestions.push(foundDefined);
      })
    );

    // Update stateQuestions with the accumulated result

    setStateQuestions(updatedStateQuestions);

    let scheme: any[] = [];

    function getSortedCourses(
      result: any[],
      unselectedItems: any[],
      maxRecommend = 1
    ) {
      let finalItems = [...result];
      if (result.length < maxRecommend && unselectedItems.length > 0) {
        const recommendItems = unselectedItems
          .slice(0, maxRecommend - result.length)
          .map((item) => ({
            ...item,
            recommend: true,
          }));
        finalItems = [...result, ...recommendItems];
      }

      // ให้ recommend = false อยู่ข้างหน้า
      return finalItems.sort((a, b) => (a.recommend ? 1 : -1));
    }
    const mapQuestion = questions.filter((item) => selectQuestions.has(item.id))
    console.log("mapQuestion ==> ", mapQuestion);
    
    for (let index = 0; index < mapQuestion.length; index++) {
      const question = mapQuestion[index].question;
      const recommand = mapQuestion[index].sub_question[1].Recommended;

      const current = index + 1;

      const level = selected[`${current}.1`];
      const knowledge = selected[`${current}.2`];
      const selectedSkills = selected[`${current}.3`] || [];
      const allCourses = selectCourse[question] || [];
      const softSkill = selectSoftSkill;
      let finalCourses: any[] = [];

      if (level === "มาก") {
        if (selectedSkills != "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") {
          const result = allCourses.filter((item: { match: string }) =>
            selectedSkills.includes(item.match)
          );
          const unselected = allCourses.filter(
            (item: { match: string }) => !selectedSkills.includes(item.match)
          );
          finalCourses = getSortedCourses(result, unselected, 3);
        } else if (selectedSkills == "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") {
          //console.log("case มาก ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้");
          finalCourses = getSortedCourses([], [], 0);
        }
      } else if (level === "ปานกลาง") {
        if (selectedSkills === "ไม่ทราบทักษะที่ควรพัฒนา") {
          finalCourses = getSortedCourses([], allCourses, 2);
        } else if (selectedSkills == "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") {
          //console.log("case ปานกลาง ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้");
          finalCourses = getSortedCourses([], [], 0);
        } else {
          //console.log("case ปานกลาง else");
          const result = allCourses.filter((item: { match: string }) =>
            selectedSkills.includes(item.match)
          );
          const unselected = allCourses.filter(
            (item: { match: string }) => !selectedSkills.includes(item.match)
          );
          finalCourses = getSortedCourses(result, unselected, 2);
        }
      } else if (level === "น้อย") {
        // //console.log("selectedSkills ==> ",((knowledge == "อื่นๆ" || knowledge == "ไม่ทราบ") && selectedSkills.includes("ไม่ทราบทักษะที่ควรพัฒนา") == true) )
        if (selectedSkills == "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") {
          //console.log("case ปานกลาง ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้");
          finalCourses = getSortedCourses([], [], 0);
        } else if (
          (knowledge == "อื่นๆ" || knowledge == "ไม่ทราบ") &&
          selectedSkills.includes("ไม่ทราบทักษะที่ควรพัฒนา") == true
        ) {
          //console.log("case อื่นๆ หรือ ไม่ทราบ & ไม่ทราบทักษะที่ควรพัฒนา");
          finalCourses = [allCourses[0]];
        } else if (knowledge !== "อื่นๆ" && knowledge !== "ไม่ทราบ") {
          //console.log("case อื่นๆ &&  ไม่ทราบ");
          const result = allCourses.filter((item: { match: string }) =>
            selectedSkills.includes(item.match)
          );
          finalCourses = getSortedCourses(result, [], 2);
        } else if (knowledge === "อื่นๆ") {
          //console.log("case อื่นๆ ");
          finalCourses = allCourses.map((item: any) => ({
            ...item,
            recommend: true,
          }));
          finalCourses = finalCourses.sort((a, b) => (a.recommend ? 1 : -1));
        }
      }
      const recommandList =
        knowledge &&
        recommand?.filter((item, index) => !knowledge.includes(item.name));
      //console.log("recommandList ==> ", recommandList);
      scheme.push({
        [question]: finalCourses,
        softSkill,
        recommandList,
      });
    }

    setCourse(scheme);
    //console.log("paginatedCourses ==> ", paginatedCourses);
    // //console.log("isSubmit && isQuestion ==> ", isSubmit, isQuestion);

    setLoading(false);
    setStatusSubmit(true);
  };
  const handleSelectionQuestionChange = (keys: unknown) => {
    
    if (keys instanceof Set) {
      // console.log("keys ==> ",Array.from(keys))
      if(Array.from(keys).includes("none")){
        return setQuestions(new Set<string>("none"));
      }
      setQuestions(keys as Set<string>);
    } else if (typeof keys === 'string') {
      setQuestions(new Set([keys]));
    } else if (
      typeof keys === 'object' &&
      keys !== null &&
      ('anchorKey' in keys || 'currentKey' in keys)
    ) {
      console.warn('Received range selection object:', keys);
    } else {
      console.warn('Unexpected keys:', keys);
    }
  };
  
  useEffect(() => {
    if (isFirstRender.current) {
      //console.log("isFirstRender.current ==> ", isFirstRender.current);
      isFirstRender.current = false;
      return;
    }
    if (statusSubmit) {
      const checkForm = Object.values(stateError).filter(
        (item) => item.status === true
      );
      const _isSubmit = checkForm.length === 0;

      const filter = stateQuestions.filter((item) => item === true);
      const _isQuestion = filter.length === 0;

      setSubmit(_isSubmit);
      setQuestion(_isQuestion);

      console.log("isSubmit (จาก stateError) ==> ", _isSubmit);
      console.log("isQuestion (จาก stateQuestions) ==> ", _isQuestion);

      // ✅ ใช้ค่าที่คำนวณมาแล้วแทน state
      if (_isSubmit && _isQuestion) {
        console.log("_isSubmit && _isQuestion ==> ", _isSubmit && _isQuestion);

        onOpen();
      }
    }
  }, [stateError, stateQuestions]);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   if (isSubmit && isQuestion) {
  //     onOpen();
  //   }
  // }, [isSubmit, isQuestion]);

  return (
    <>
      <div>
        {showSuccess ? (
          <Modal
            isOpen={true}
            onOpenChange={() => setShowSuccess(false)}
            hideCloseButton={true}
            size="2xl"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    เราได้รับข้อมูลของท่านเรียบร้อยแล้ว
                  </ModalHeader>
                  <ModalBody>
                    <p className="whitespace-pre-line">
                      {isAuthen
                        ? `${messageAuthen.isAuthen}`
                        : `${messageAuthen.notAuthen}`}
                    </p>
                    <p>
                      หากมีข้อสงสัยหรือต้องการสอบถามเพิ่มเติม
                      ทีมงานของเราพร้อมให้ความช่วยเหลือเสมอ
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onPress={() => {
                        onClose();
                        router.push("/login");
                      }}
                    >
                      ไปที่หน้าเข้าสู่ระบบ
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        ) : null}
      </div>
      <Form className="w-full " validationErrors={errors} onSubmit={onSubmit}>
        {!isLoading ? null : (
          <>
            <div className="fixed inset-0 blur-xl bg-red-50 bg-opacity-50 z-40"></div>

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <Spinner
                classNames={{ label: "text-foreground mt-4" }}
                label="กำลังโหลด"
                variant="simple"
              />
            </div>
          </>
        )}
        <div className="mb-10 flex justify-center w-full">
          <h1 className="text-3xl text-center">
            แบบสำรวจความต้องการพัฒนาฝีมือแรงงานของสถานประกอบการ
          </h1>
        </div>
        <section className="flex flex-col items-center justify-center gap-4 w-full ">
          <Card className="w-full ">
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
                    isDisabled={form.insuranceCode ? true : false}
                    name="regisNumber"
                    placeholder="กรอกเลขทะเบียนพาณิชย์"
                    value={form.regisNumber}
                    onChange={handleChange}
                    type="number"
                    className="col-span-3"
                    // isDisabled={}
                    isInvalid={
                      form.regisNumber != "" && form.regisNumber.length !== 13
                    }
                    errorMessage={(validationDetails) =>
                      validationDetails.isInvalid
                        ? "กรุณากรอกเลขทะเบียนพาณิชย์ให้ครบ 13 หลัก"
                        : ""
                    }
                    pattern="^\d{13}$"
                    label="เลขทะเบียนพาณิชย์"
                  />
                  <Input
                    className="col-span-3"
                    isDisabled={form.regisNumber ? true : false}
                    label="รหัสประกันสังคม"
                    name="insuranceCode"
                    type="number"
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
                  isRequired
                  isVirtualized
                  className="col-span-1"
                  errorMessage={"กรุณาเลือกจังหวัด"}
                  isInvalid={
                    !form.user.province && stateError.vaildate_Province.status
                  }
                  label="จังหวัด"
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
                  isRequired
                  isVirtualized
                  className="col-span-1"
                  errorMessage={"กรุณาเลือก อำเภอ/เขต"}
                  isInvalid={
                    !form.user.district && stateError.vaildate_District.status
                  }
                  label="อำเภอ/เขต"
                  placeholder="เลือก อำเภอ/เขต"
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
                  errorMessage={"กรุณาเลือก ตำบล/แขวง"}
                  isInvalid={
                    !form.user.subdistrict &&
                    stateError.vaildate_SubDistrict.status
                  }
                  label="ตำบล/แขวง"
                  placeholder="เลือก ตำบล/แขวง"
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
                  errorMessage={"กรุณากรอกรหัสไปรษณีย์"}
                  isInvalid={
                    !form.user.zipCode && stateError.vaildate_ZipCode.status
                  }
                  label="รหัสไปรษณีย์"
                  placeholder="กรอกรหัสไปรษณีย์"
                  type="number"
                  value={form.user.zipCode}
                  onChange={(event) => {
                    handleChange({
                      name: "zipCode",
                      value: event.target.value,
                    });
                  }}
                />
                <h1 className="mx-2 text-xl col-span-3 text-stone-950">
                  รายละเอียดผู้ตอบแบบสำรวจ
                </h1>
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={"กรุณากรอกชื่อ"}
                  isInvalid={
                    !form.user.firstName && stateError.vaildate_FirstName.status
                  }
                  label="ชื่อ"
                  placeholder="กรอกชื่อ"
                  value={form.user.firstName}
                  onChange={(event) => {
                    handleChange({
                      name: "firstName",
                      value: event.target.value,
                    });
                  }}
                />
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={"กรุณากรอกนามสกุล"}
                  isInvalid={
                    !form.user.lastName && stateError.vaildate_LastName.status
                  }
                  label="นามสกุล"
                  placeholder="กรอกนามสกุล"
                  value={form.user.lastName}
                  onChange={(event) => {
                    handleChange({
                      name: "lastName",
                      value: event.target.value,
                    });
                  }}
                />
                <Input
                  isRequired
                  className="col-span-1"
                  errorMessage={
                    !form.user.phoneNumber
                      ? "กรุณากรอกเบอร์โทรศัพท์"
                      : form.user.phoneNumber.length !== 10
                        ? "เบอร์โทรศัพท์ต้องมี 10 หลัก"
                        : ""
                  }
                  isInvalid={
                    form.user.phoneNumber.length != 10 &&
                    form.user.phoneNumber != ""
                  }
                  label="เบอร์โทรศัพท์"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  type="tel"
                  value={form.user.phoneNumber}
                  onChange={(event) => {
                    const input = event.target.value.replace(/\D/g, ""); // ลบ non-digit
                    handleChange({ name: "phoneNumber", value: input });
                  }}
                />

                <Input
                  isRequired
                  className="col-span-3"
                  errorMessage={"กรุณากรอกกรอกอีเมล"}
                  isInvalid={
                    !form.user.email && stateError.vaildate_Email.status
                  }
                  label="อีเมล"
                  placeholder="กรอกอีเมล"
                  type="email"
                  value={form.user.email}
                  onChange={(event) => {
                    handleChange({ name: "email", value: event.target.value });
                  }}
                />
                <Input
                  isRequired
                  className="col-span-3"
                  errorMessage={"กรุณากรอกกรอกตำแหน่ง"}
                  isInvalid={
                    !form.user.position && stateError.vaildate_Position.status
                  }
                  label="ตำแหน่ง"
                  placeholder="กรอกตำแหน่ง"
                  value={form.user.position}
                  onChange={(event) => {
                    handleChange({
                      name: "position",
                      value: event.target.value,
                    });
                  }}
                />
              </div>
            </CardBody>
            <CardFooter />
          </Card>
          <Card className="w-full">
            <div className="questions col-span-3 mt-3">
              <CardHeader>
                <h1 className="text-xl">แบบสอบถาม</h1>
              </CardHeader>
              <CardBody>
              {/* <p className="text-small text-default-500">Selected: {Array.from(selectQuestions).join(", ")}</p> */}
              <Select
                  className="w-full mb-3"
                  label="เลือกแผนก"
                  selectedKeys={selectQuestions}
                  placeholder="เลือกแผนก"
                  selectionMode="multiple"
                  onSelectionChange={handleSelectionQuestionChange}
                  onOpenChange={setOpenQuestion}

                  renderValue={(items: SelectedItems<any>) => {
                    return (
                      <div className="flex flex-wrap gap-2">
                       
                      {items.map((select: any, index) => {
                        const children = select.props?.children;
                        
                        return (
                          <Chip key={index} color="primary">
                            {precisBranch[children]}
                          </Chip>
                        );
                      })}
                    </div>
                    );
                  }}
                >
                  
                  {[
                    <SelectItem key={"none"}>
                      ไม่ต้องการเลือกแผนก
                    </SelectItem>,
                    ...questions.map((question) => (
                      <SelectItem key={question.id}>
                        {question.question}
                      </SelectItem>
                    ))
                  ]}

                </Select> 
                <Questions selected={selected} setSelected={setSelected} />
              </CardBody>
              {/* <pre>{JSON.stringify(selected, null, 2)}</pre> */}
            </div>
          </Card>

          <Card className="w-full px-3 ">
            <CardHeader>
              <h1 className="mx-2 mt-3 text-xl col-span-3 text-stone-950">
                ปัจจุบันบริษัทของท่านมีการอบรมหรือพัฒนาทักษะให้กับพนักงาน
                หรือไม่?
              </h1>
            </CardHeader>
            <CardBody className="w-full m-3">
              <RadioGroup
                className="col-span-3"
                defaultValue="has"
                label="ปัจจุบันบริษัทของท่านมีการอบรมหรือพัฒนาทักษะให้กับพนักงาน"
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
            </CardBody>
          </Card>

          {/* </div> */}
          <Button
            className="text-sky-50 mt-5 w-full"
            color="primary"
            type="submit"

            // onPress={()=> {
            //   //console.log(isSubmit,isQuestion)
            //   if(isSubmit && isQuestion){
            //     onOpen();
            //   }

            // } }
          >
            ยืนยัน
          </Button>

          <Modal
            isOpen={isOpen}
            scrollBehavior={"inside"}
            size={"5xl"}
            onOpenChange={onOpenChange}
            className=""
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    หลักสูตรอบรม
                  </ModalHeader>
                  <p className="px-4" />
                  <ModalBody className="">
                    {Array.isArray(courses) &&
                      paginatedCourses.map((item: any, index: number) => (
                        <div key={index} className="gap-4">
                          {/* 🔹 วนลูป IT Infrastructure Services (Array) */}
                          {Object.keys(item)
                            .filter((key) => key != "recommandList") // ❌ เอา Recommended ออกจากการลูปนี้
                            .map((category, idx) => {
                              //console.log("category ==> ", category);
                              const categoryData = item[category];
                              const isEmptyArray =
                                Array.isArray(categoryData) &&
                                categoryData.length === 0;
                              const isEmptyObject =
                                typeof categoryData === "object" &&
                                categoryData !== null &&
                                Object.keys(categoryData).length === 0;

                              return (
                                <div key={idx}>
                                  <h2 className="text-xl font-bold mb-2">
                                    {category === "softSkill"
                                      ? "ทักษะทางสังคมที่ใช้เพื่อปฏิสัมพันธ์กับผู้คน"
                                      : category}
                                  </h2>

                                  {isEmptyArray || isEmptyObject ? (
                                    <p className="text-gray-500 my-4">
                                      ไม่พบหลักสูตรที่แนะนำ
                                    </p>
                                  ) : Array.isArray(categoryData) ? (
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
                                              {(course.detail ?? []).map(
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
                                              {course.recommend ? (
                                                <Chip color="secondary">
                                                  หลักสูตรที่เกี่ยวข้อง
                                                </Chip>
                                              ) : (
                                                <Chip
                                                  color="success"
                                                  className="text-sky-50"
                                                >
                                                  หลักสูตรแนะนำ
                                                </Chip>
                                              )}
                                            </div>
                                          </CardBody>
                                        </Card>
                                      )
                                    )
                                  ) : (
                                    Object.keys(categoryData).map(
                                      (subCategory, subIdx) => {
                                        const course =
                                          categoryData[subCategory];
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
                                                {(course.detail ?? []).map(
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

                                  {/* แสดงเฉพาะ Recommended แบบแยกโครงสร้างออกมาเลย */}
                                </div>
                              );
                            })}

                          {item.recommandList &&
                            item.recommandList.length > 0 && (
                              <div className="mt-5">
                                <h2 className="text-xl font-bold mb-2">
                                  หลักสูตรเสริมทักษะ
                                </h2>
                                {item.recommandList.map(
                                  (course: any, idx: number) => (
                                    <Card key={idx} className="py-4 my-4">
                                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <h1 className="text-default-800 text-lx font-bold">
                                          {course.name}
                                        </h1>
                                      </CardHeader>
                                      <CardBody>
                                        <ul className="list-disc pl-5">
                                          {(course.description ?? []).map(
                                            (desc: string, i: number) => (
                                              <li key={i}>{desc}</li>
                                            )
                                          )}
                                        </ul>
                                        <p className="text-sm font-light my-2">
                                          <strong>หลักสูตรเสริมทักษะ:</strong>{" "}
                                          {course.courseList}
                                        </p>
                                        <div className="w-full flex justify-end">
                                          <Chip
                                            color="success"
                                            className="text-sky-50"
                                          >
                                            หลักสูตรเสริมทักษะ
                                          </Chip>
                                        </div>
                                      </CardBody>
                                    </Card>
                                  )
                                )}
                              </div>
                            )}
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
                    <Button
                      className="mx-3"
                      color="primary"
                      onPress={() => {
                        onClose();
                        confirmDisclosure.onOpen(); // เปิด Confirm Modal
                      }}
                    >
                      บันทึกข้อมูล
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </section>
      </Form>
      <Confirm
  stateOpen={{
    isOpen: confirmDisclosure.isOpen,
    onOpen: confirmDisclosure.onOpen,
    onOpenChange: confirmDisclosure.onOpenChange,
  }}
  modal={{
    title: "คุณต้องการยืนยันการส่งข้อมูลหรือไม่?",
    description: "หากกดยืนยันแล้ว จะไม่สามารถกลับมาแก้ไขข้อมูลได้อีก กรุณาตรวจสอบข้อมูลให้เรียบร้อยก่อนกด 'ยืนยัน'",
    confirmText: "ยืนยัน",
    cancelText: "ยกเลิก",
    onConfirm: () => {
      saveData();   // ปิด modal หลัก
    },
  }}
/>
   
    </>

    
  );
}
