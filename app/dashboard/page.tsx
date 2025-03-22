"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import React, { useEffect } from "react";
import { Spinner } from "@heroui/spinner";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Radar, Doughnut, Bar, Line } from "react-chartjs-2";

import { bar, doughnut, line, radar, topLearn } from "@/config/dashboard";
import { DepartmentIcon, UsersIcon } from "@/components/icons";
import { Chip } from "@heroui/chip";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { typeOfBusiness } from "@/config/configForm";
import {Tabs, Tab} from "@heroui/tabs";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default function DashBoardPage() {
  const [result, setResult] = React.useState<any>();
  const [top, setTop] = React.useState<any>();
  const emote = ["🥇", "🥈", "🥉", "🏅", "🏅"];
  const [total, setTotal] = React.useState<Number>(0);
  const [filterSize, setSize] = React.useState<any>("all");
  const [filterBusinessType, setBusinessType] =
    React.useState<string>("ทั้งหมด");
    const [selected, setSelected] = React.useState<any>("bar");
  const size = [
    "ทุกขนาด",
    "น้อยกว่า 10 คน",
    "10-19 คน",
    "20-49 คน",
    "50-99 คน",
    "100-199 คน",
    "200 คนขึ้นไป",
  ];
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const fetchData = async (filterBusinessType: string, filterSize: string) => {
    try {
      const response = await fetch(
        `/api/data?business=${filterBusinessType}&size=${filterSize}`
      );
      const getTotalUser = await fetch("/api/countUser");
      if (!response.ok || !getTotalUser.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const total = await getTotalUser.json();
      return { result: result.values, total: total };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchAndSetData = async () => {
      const getData = await fetchData(filterBusinessType!, filterSize!);

      setResult(getData?.result || []);
      setTotal(getData?.total.values || 0);
      const sort = topLearn(getData?.result);

      setTop(sort);
      if (getData) setLoading(false);
    };

    fetchAndSetData();
    // setLoading(false)
  }, [filterBusinessType, filterSize]);

  const options = {
    indexAxis: "x" as const,
    scales: {
      x: {
        ticks: {
          display: true,
          maxRotation: 45,
          minRotation: 0,
        },
        title: {
          display: true,
          text: selected == "bar" ? "ชื่อแผนก" : "ชื่อหลักสูตร", 
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 5,
        },
        title: {
          display: true,
          text: "จำนวนหลักสูตร", 
        },
      },
    },
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="fixed inset-0 z-50 bg-white/60 flex items-center justify-center">
          <Spinner
            classNames={{ label: "text-foreground mt-4" }}
            label="กำลังโหลดข้อมูล"
            variant="simple"
          />
        </div>
      ) : null}
      
      <div className="text-start my-5">
        <h1 className="font-bold text-4xl">
          Dashboard Workforce Skill Development Platform
        </h1>
      </div>
   
        <div className="headers flex gap-4 mb-5">
        <Card className="pl-3 w-[250px] text-center">
          <CardHeader className="flex justify-center items-center gap-2">
            <UsersIcon size={24} className="text-blue-500" />
            <p>ผู้ใช้งานในระบบทั้งหมด</p>
          </CardHeader>
          <CardBody>
            {!total ? (
              <div className="flex items-center justify-center">
                <Spinner
                  classNames={{ label: "text-foreground mt-4" }}
                  label="กำลังโหลดข้อมูล"
                  variant="simple"
                />
              </div>
            ) : (
              <p className="font-bold text-2xl">{String(total)} คน</p>
            )}
          </CardBody>
        </Card>

        <Card className="pl-3 w-[250px] text-center">
          <CardHeader className="flex justify-center items-center gap-2">
            <DepartmentIcon size={24} className="text-green-500" />
            <p>จำนวนแผนกทั้งหมด</p>
          </CardHeader>
          <CardBody>
            <p className="font-bold text-2xl">10 แผนก</p>
          </CardBody>
        </Card>
      </div>
      <div className="justify-start flex w-full gap-3 mb-3">
        <Card className="w-full">
          {/* <CardHeader>
          <h3 className="text-lg font-semibold">การตั้งค่าตัวกรองข้อมูลกิจการ</h3>
          </CardHeader> */}
          <CardBody className="">
            <div className="flex gap-3 justify-start">
              <Autocomplete
                className="w-[50%]"
                label="เลือกประเภทกิจการ"
                placeholder="เลือกประเภทกิจการ"
                onInputChange={setBusinessType}
                defaultInputValue={"ทั้งหมด"}
              >
                {typeOfBusiness && typeOfBusiness.length > 0 ? (
                  <>
                    <AutocompleteItem key="default">ทั้งหมด</AutocompleteItem>{" "}
                    {/* ค่า default */}
                    {typeOfBusiness.map((element: any, index: number) => (
                      <AutocompleteItem key={`${index}`}>
                        {element.label}
                      </AutocompleteItem>
                    ))}
                  </>
                ) : (
                  <AutocompleteItem>ไม่มีข้อมูล</AutocompleteItem>
                )}
              </Autocomplete>
              <Autocomplete
                className="w-[250px]"
                label="เลือกขนาดกิจการ"
                placeholder="เลือกขนาดกิจการ"
                defaultSelectedKey="all"
                onSelectionChange={setSize}
              >
                <AutocompleteItem key="all">ทุกขนาด</AutocompleteItem>
                <AutocompleteItem key="less-10">
                  น้อยกว่า 10 คน
                </AutocompleteItem>
                <AutocompleteItem key="10-19">10-19 คน</AutocompleteItem>
                <AutocompleteItem key="20-49">20-49 คน</AutocompleteItem>
                <AutocompleteItem key="50-99">50-99 คน</AutocompleteItem>
                <AutocompleteItem key="100-199">100-199 คน</AutocompleteItem>
                <AutocompleteItem key="more-200">200 คนขึ้นไป</AutocompleteItem>
              </Autocomplete>
              <Autocomplete
                className="w-[500px]"
                defaultInputValue={"ข้อมูล บริษัท ไอ วายด์ จำกัด"}
                label="เลือกบริษัท"
                placeholder="เลือกบริษัท"
              >
                <AutocompleteItem key={1}>
                  {"ข้อมูล บริษัท ไอวายด์ จำกัด"}
                </AutocompleteItem>
              </Autocomplete>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2  auto-rows-auto gap-[10px]">
        {/* Radar Chart */}
        <div className="row-span-2 h-full">
          <Card className="py-4 w-full h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Department Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex items-center">
              <div className="flex w-[400px] justify-center">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  <div className="w-full ">
                    <Radar data={radar(result)} />
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="flex flex-col gap-4 w-full">
              {/* Section: Skill Tags */}
              <div className="w-full">
                <p className="text-sm font-semibold mb-2">
                  อัตรา (ร้อยละ) แต่ละหลักสูตรที่ต้องเรียน{" "}
                </p>
                <div className="w-full flex flex-wrap gap-2">
                  {radar(result).datasets[0].data.map((item, index) => (
                    <Chip
                      color="danger"
                      key={index}
                      className="hover:scale-105 ease-out duration-300"
                    >
                      {radar(result).labels[index]} : {item.toFixed(2)}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Section: Description */}
              <div className="w-full text-start text-sm text-default-600 leading-relaxed">
                <p>
                  กราฟนี้แสดงให้เห็นว่าในแต่ละแผนกควรเรียนหลักสูตรมากน้อยแค่ไหน
                  เมื่อเทียบกับแผนกอื่น ๆ โดยระบบจะดูว่าหลักสูตรต่าง ๆ
                  เกี่ยวข้องกับแผนกใดบ้าง แล้วนำมาคิดเป็นเปอร์เซ็นต์
                  เพื่อช่วยให้เห็นภาพว่าแผนกไหนควรให้ความสำคัญกับการเรียนรู้มากที่สุด
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Doughnut Chart */}

        <div className="">
          <Card className="py-4 w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">
                Hard Skill & Soft Skill & Recommand Course
              </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-center w-[300px] h-full">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  <Doughnut data={doughnut(result)} />
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start text-sm text-default-600 leading-relaxed">
                แผนภูมินี้แสดงสัดส่วนของหลักสูตรแต่ละประเภท (Hard Skill, Soft
                Skill และ Recommended Course) จากภาพรวมของทุกแผนกภายในองค์กร
                เพื่อให้เห็นว่าทักษะด้านใดได้รับความสำคัญโดยรวม
                และช่วยให้สามารถวางแผนการพัฒนาทักษะของบุคลากรได้อย่างตรงจุด
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Top Courses to Learn */}
        <div className="">
          
          <Card className="py-4 w-full ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-xl uppercase font-bold">
                Top 5 Departments That Need to Learn the Most Skills
              </p>
              <small className="text-default-500" />
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-5">
              <div className="flex flex-col ">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  top.map((item: any, index: number) => {
                    return (
                      <span key={index} className="text-xl">
                        {emote[index]} {item.department} : {item.score}
                      </span>
                    );
                  })
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start text-sm text-default-600 leading-relaxed">
                แสดง 5 อันดับหลักสูตรที่ได้รับความสนใจมากที่สุดจากแต่ละแผนก
                โดยพิจารณาจากจำนวนหัวข้อเนื้อหาที่เกี่ยวข้อง
              </p>
            </CardFooter>
          </Card>
        </div>
       
       

        {/* Bar Chart */}
        <div className="col-span-2 row-start-3">
      
          <Card className="py-4 w-full ">
          <Tabs aria-label="Options" className="mx-4" selectedKey={selected} onSelectionChange={setSelected}>
          <Tab key="bar" title="ภาพรวม" >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Department Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-start">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  <Bar data={bar(result)} options={options} />
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start text-sm text-default-600 leading-relaxed">
                แสดงการกระจายของหลักสูตรที่ได้รับความนิยมในแต่ละแผนก
                โดยใช้กราฟแท่งเพื่อเปรียบเทียบจำนวนหลักสูตรที่แต่ละแผนกต้องเรียนรู้
                ช่วยให้สามารถมองเห็นแนวโน้มและความสำคัญของการพัฒนาทักษะในแต่ละสายงานได้อย่างชัดเจน
              </p>
            </CardFooter>
            </Tab>
            <Tab key="line" title="หลักสูตร">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Department Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-start">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  <Line options={options} data={line(result)}/>
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start text-sm text-default-600 leading-relaxed">
                แสดงการกระจายของหลักสูตรที่ได้รับความนิยมในแต่ละแผนก
                โดยใช้กราฟแท่งเพื่อเปรียบเทียบจำนวนหลักสูตรที่แต่ละแผนกต้องเรียนรู้
                ช่วยให้สามารถมองเห็นแนวโน้มและความสำคัญของการพัฒนาทักษะในแต่ละสายงานได้อย่างชัดเจน
              </p>
            </CardFooter>
            </Tab>
            </Tabs>
          </Card>
        
        </div>
      
      </div>

 
   
    </div>
  );
}
