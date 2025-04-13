export const topLearn = (response: any) => {
  const departments = [
    "IT Infrastructure Services",
    "Software Enterprise Services",
    "IT Services",
    "Solutions Development",
    "Accounting & Finance",
    "Human Resource",
    "Administration",
    "Procurement",
    "Project Management",
    "Sales",
  ];

  // เริ่มต้นด้วยค่าศูนย์ทั้งหมด
  let department: { [key: string]: number } = {};

  departments.forEach((dept) => {
    department[dept] = 0;
  });

  if (response) {
    const object = response

    

    object.forEach((array: any) => {
      array.data.forEach((element: any) => {
        const matchedDept = departments.find((dept) =>
          new RegExp(dept, "i").test(element.department),
        );

        if (matchedDept) {
          department[matchedDept] += element.label?.length || 0;
        }
      });
    });
  }

  const top5 = Object.entries(department)
    .sort((a, b) => b[1] - a[1]) // เรียงจากมากไปน้อย
    .slice(0, 5) // เอาแค่ 5 อันดับแรก
    .map(([name, value]) => ({ department: name, score: value }));

  return top5;
};

export const radar = (response: any) => {
  const departments = [
    "IT Infrastructure Services",
    "Software Enterprise Services",
    "IT Services",
    "Solutions Development",
    "Accounting & Finance",
    "Human Resource",
    "Administration",
    "Procurement",
    "Project Management",
    "Sales",
  ];

  // เริ่มต้นด้วยค่าศูนย์ทั้งหมด
  let department: { [key: string]: number } = {};

  departments.forEach((dept) => {
    department[dept] = 0;
  });

  if (response) {
 
    const object = response
 

    

    object.forEach((array: any) => {
   
      array.data.forEach((element: any) => {
      // //console.log("element ==> ", element);
        const matchedDept = departments.find((dept) =>
          new RegExp(dept, "i").test(element.department),
        );

        if (matchedDept) {
          department[matchedDept] += element.label?.length || 0;
        }
      });
    });
  }

  

  const total = Object.values(department).reduce((sum, val) => sum + val, 0);

  const percentageData = departments.map((dept) => {
    const value = department[dept];

    return total > 0 ? (value / total) * 100 : 0;
  });

  return {
    labels: departments,
    datasets: [
      {
        label: "อัตรา (ร้อยละ) หลักสูตรที่ต้องเรียน",
        data: percentageData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export const doughnut = (response: any) => {
  let totalLabel = 0;
  let totalSoftskill = 0;
  let totalRecommandCoures = 0;
  if (response) {
    const object = response

    response;
    object.forEach((array: any) => {
      array.data.forEach((dept: any) => {
        totalLabel += dept.label?.length || 0;
        totalSoftskill += dept.softskill?.length || 0;
        totalRecommandCoures += dept.recommandList?.length || 0;
        
      });
    });
  }

  const total = totalLabel + totalSoftskill + totalRecommandCoures;
  const percentLabel = ((totalLabel / total) * 100).toFixed(2);
  const percentSoftskill = ((totalSoftskill / total) * 100).toFixed(2);
  const percentRecommandCourse = ((totalRecommandCoures / total) * 100).toFixed(2);

  return {
    labels: [
      "หลักสูตรเชิงเทคนิค (Hard Skill)",
      "หลักสูตรทักษะเสริม (Soft Skill)",
      "หลักสูตรที่แนะนำ (Recommanded Course)"
    ],
    datasets: [
      {
        label: "อัตราส่วน (ร้อยละ)",
        data: [Number(percentLabel), Number(percentSoftskill),Number(percentRecommandCourse)],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",    // ฟ้า
          "rgba(255, 206, 86, 0.5)",    // เหลือง
          "rgba(75, 192, 135, 0.5)"     // เขียวมินต์
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",      // ฟ้าเข้ม
          "rgba(255, 206, 86, 1)",      // เหลืองเข้ม
          "rgba(75, 192, 192, 1)"       // เขียวเข้ม
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const tables = (response: any[]) => {
  //console.log("response ==> ", response);

  const departmentLabelMap: Record<string, string[]> = {};

  // 1. รวม label ทั้งหมดของแต่ละแผนก
  response.forEach((item) => {
    item.data.forEach((d: any) => {
      const dept = d.department;
      if (!departmentLabelMap[dept]) {
        departmentLabelMap[dept] = [];
      }
      departmentLabelMap[dept].push(...(d.label || []));
    });
  });

  // 2. หา label ที่เจอบ่อยที่สุดในแต่ละแผนก
  const labels: string[] = [];
  const data: number[] = [];
  let result: Record<string, any>[] = [];
  Object.entries(departmentLabelMap).forEach(([dept, labelList]) => {
  // //console.log("dept ==> ", dept);
    const countMap: Record<string, number> = {};

    labelList.forEach((label) => {
      countMap[label] = (countMap[label] || 0) + 1;
    });

    // หา label ที่มี count สูงสุด
    const topLabel = Object.entries(countMap).sort((a, b) => b[1] - a[1])[0];
    // //console.log("topLabel ==> ", topLabel);
    if (topLabel) {
      result.push({department : dept,course : topLabel[0],score : topLabel[1]})
      // labels.push(topLabel[0]); // ชื่อหลักสูตร
      // data.push(topLabel[1]);   // จำนวนที่เจอ
    }
  });
  //console.log(result)
  return result
};


export const bar = (response: any) => {
  const departments = [
    "IT Infrastructure Services",
    "Software Enterprise Services",
    "IT Services",
    "Solutions Development",
    "Accounting & Finance",
    "Human Resource",
    "Administration",
    "Procurement",
    "Project Management",
    "Sales",
  ];

  let technicalCourses: { [key: string]: number } = {};
  let softSkillsCourses: { [key: string]: number } = {};
  let recommandSkillsCourses: { [key: string]: number } = {};

  departments.forEach((dept) => {
    technicalCourses[dept] = 0;
    softSkillsCourses[dept] = 0;
    recommandSkillsCourses[dept] = 0;
  });

  if (response) {
    const object = response;

    object.forEach((array: any) => {
      array.data.forEach((element: any) => {
        const matchedDept = departments.find((dept) =>
          new RegExp(dept, "i").test(element.department),
        );

        if (matchedDept) {
          technicalCourses[matchedDept] += element.label?.length || 0;
          softSkillsCourses[matchedDept] += element.softskill?.length || 0;
          recommandSkillsCourses[matchedDept] += element.recommandList?.length || 0;
        }
      });
    });
  }

  return {
    labels: departments,
 
    datasets: [
      {
        label: "หลักสูตรเชิงเทคนิค (Hard Skill)",
        data: departments.map((dept) => technicalCourses[dept]),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "หลักสูตรทักษะเสริม (Soft Skill)",
        data: departments.map((dept) => softSkillsCourses[dept]),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "หลักสูตรที่แนะนำ (Recommanded Course)",
        data: departments.map((dept) => recommandSkillsCourses[dept]),
        backgroundColor: "rgba(35, 90, 180, 0.5)",
        borderColor: "rgba(0, 73, 182, 0.37)",
        borderWidth: 1,
      },
    ],
  };
};

