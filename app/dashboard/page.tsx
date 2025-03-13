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
import { Radar, Doughnut, Bar } from "react-chartjs-2";

import { bar, doughnut, radar, topLearn } from "@/config/dashboard";

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
  LinearScale,
);

export default function DashBoardPage() {
  const [result, setResult] = React.useState();
  const [top, setTop] = React.useState<any>();
  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      const result = await fetchData();

      setResult(result || []);
      const sort = topLearn(result);

      
      setTop(sort);
    };

    fetchAndSetData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Department Courses Distribution",
      },
    },
  };

  return (
    <div className="w-full">
      <div className="text-start my-5">
        <h1 className="font-bold text-4xl">Dashboard Survey</h1>
      </div>

      <div className="grid grid-cols-5 grid-rows-6 gap-2">
        {/* Radar Chart */}
        <div className="col-span-3 row-span-2 flex items-center justify-center">
          <Card className="py-4 w-full h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Department Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex items-center">
              <div className="flex  w-[500] h-full justify-center ">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  //  <Spinner classNames={{label: "text-foreground mt-4"}} label="simple" variant="simple" />
                  <Radar data={radar(result)} />
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start">
                แสดงหลักสูตรที่ควรเรียนของแต่ละแผนก
                เพื่อเปรียบเทียบความเหมาะสมของหลักสูตรที่แนะนำในแต่ละด้านตามลักษณะงานของแผนกต่างๆ
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Doughnut Chart */}
        <div className="col-start-4 col-span-3 row-span-2 bg-gray-20 flex items-center justify-center">
          <Card className="py-4 w-full h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Hard Skill & Soft Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
              <div className="flex justify-center">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  //  <Spinner classNames={{label: "text-foreground mt-4"}} label="simple" variant="simple" />
                  <Doughnut data={doughnut(result)} />
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start">
                แผนภูมิวงกลมแสดงอัตราส่วน (ร้อยละ)
                ของหลักสูตรที่จำเป็นต้องเรียนรู้และหลักสูตรที่ไม่ต้องการเรียนรู้ในแต่ละแผนก
                เพื่อใช้ในการวิเคราะห์และวางแผนการพัฒนาทักษะของบุคลากรอย่างเหมาะสม
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Top Courses to Learn */}
        <div className="col-start-1 col-span-5 row-start-3 row-span-1 flex items-center justify-center">
          <Card className="py-4 w-full min-h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-xl uppercase font-bold ">
                Top 5 Courses to Learn
              </p>
              <small className="text-default-500" />
         
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-5">
              <div className="flex flex-col">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  //  <Spinner classNames={{label: "text-foreground mt-4"}} label="simple" variant="simple" />
                  top &&
                  top.map((item: any, index: number) => {
                    return (
                      <span key={index}>
                        {item.department} : {item.score}
                      </span>
                    );
                  })
                )}
                {}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start">
                แสดง 5 อันดับหลักสูตรที่ได้รับความสนใจมากที่สุดจากแต่ละแผนก
                โดยพิจารณาจากจำนวนหัวข้อเนื้อหาที่เกี่ยวข้อง
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Bar Chart */}
        <div className="col-span-5 row-start-4 row-span-2 flex items-center justify-center">
          <Card className="py-4 w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Skill Overview</p>
              <small className="text-default-500" />
              <h4 className="font-bold text-large">Department Skill</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex justify-center">
                {!result ? (
                  <div className="flex items-center justify-center">
                    <Spinner
                      classNames={{ label: "text-foreground mt-4" }}
                      label="กำลังโหลดข้อมูล"
                      variant="simple"
                    />
                  </div>
                ) : (
                  //  <Spinner classNames={{label: "text-foreground mt-4"}} label="simple" variant="simple" />
                  <Bar data={bar(result)} options={options} />
                )}
              </div>
            </CardBody>
            <CardFooter>
              <p className="text-start">
                แสดงการกระจายของหลักสูตรที่ได้รับความนิยมในแต่ละแผนก
                โดยใช้กราฟแท่งเพื่อเปรียบเทียบจำนวนหลักสูตรที่แต่ละแผนกต้องเรียนรู้
                ช่วยให้สามารถมองเห็นแนวโน้มและความสำคัญของการพัฒนาทักษะในแต่ละสายงานได้อย่างชัดเจน
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
