"use client";
import { useState, useEffect } from "react";
import { title } from "@/components/primitives";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashBoardPage() {
  const [dataFromFile, setDataFromFile] = useState<any[]>([]);

  useEffect(() => {
    // ฟังก์ชันในการดึงข้อมูลจาก API
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const data = await response.json();
      setDataFromFile(data);
    };

    fetchData();
  }, []);

  if (dataFromFile.length === 0) {
    return <div>Loading...</div>; // จะแสดง "Loading..." ขณะที่ข้อมูลยังไม่ได้รับ
  }

  // ตัวอย่างการใช้ข้อมูลที่ได้จากไฟล์ JSON
  const data = {
    labels: dataFromFile.map((item) => item.department), // ใช้ชื่อแผนกเป็น label
    datasets: [
      {
        label: "Courses Offered",
        // ใช้จำนวนของ courses ที่มีในแต่ละแผนก
        data: dataFromFile.map((item) => item.label.length), // นับจำนวนของ courses ในแต่ละแผนก
        backgroundColor: ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa", "#f472b6", "#6ee7b7"],
        borderColor: ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa", "#f472b6", "#6ee7b7"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const

      },
      title: {
        display: true,
        text: "Department Courses Distribution",
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className={title()}>DashBoard</h1>
      <div className="max-w-sm mx-auto mt-6">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
