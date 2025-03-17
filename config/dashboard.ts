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
      // console.log("element ==> ", element);
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

  if (response) {
    const object = response

    response;
    object.forEach((array: any) => {
      array.data.forEach((dept: any) => {
        totalLabel += dept.label?.length || 0;
        totalSoftskill += dept.softskill?.length || 0;
      });
    });
  }

  const total = totalLabel + totalSoftskill;
  const percentLabel = ((totalLabel / total) * 100).toFixed(2);
  const percentSoftskill = ((totalSoftskill / total) * 100).toFixed(2);

  return {
    labels: [
      "หลักสูตรเชิงเทคนิค (Hard Skill)",
      "หลักสูตรทักษะเสริม (Soft Skill)",
    ],
    datasets: [
      {
        label: "อัตราส่วน (ร้อยละ)",
        data: [Number(percentLabel), Number(percentSoftskill)],
        backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };
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

  return {
    labels: departments,
    datasets: [
      {
        label: "จำนวนหลักสูตรที่ต้องเรียนรู้ในแต่ละแผนก",
        data: departments.map((dept) => department[dept]),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
};
