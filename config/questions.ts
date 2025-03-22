export const questions = [
  {
    id: "q01",
    question:
      "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
    sub_question: [
      {
        id: "01",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "01",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        type: "checkbox",
        choices: [
          "การออกแบบและบริหารระบบเครือข่าย (Network Design & Administration)",
          "การบริหารระบบคลาวด์ (AWS, Azure, Google Cloud)",
          "การบริหารจัดการเซิร์ฟเวอร์ (Linux/Windows Server Administration)",
          "การรักษาความปลอดภัยทางไซเบอร์ (Cybersecurity & Firewall Management)",
          "การบริหารและดูแลศูนย์ข้อมูล (Data Center & Virtualization)",
          "การใช้เครื่องมือมอนิเตอร์ระบบ (Nagios, Splunk, Zabbix ฯลฯ)",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
        Recommended: [
          {
            name : "การออกแบบและบริหารระบบเครือข่าย (Network Design & Administration)",
            description : ["เน้นการออกแบบและตั้งค่าเครือข่ายให้มีประสิทธิภาพ","เรียนรู้ขั้นพื้นฐานจนถึงขั้นสูงของการทำงานกับอุปกรณ์เครือข่าย เช่น Router, Switch, Firewall"],
            courseList :"CCNA, CCNP, CompTIA Network+ และ JNCIA"
          },{
            name: "การบริหารระบบคลาวด์ (AWS, Azure, Google Cloud)",
            description : ["เรียนรู้โครงสร้างพื้นฐานระบบคลาวด์ และการตั้งค่า Infrastructure as Code (IaC)","เรียรรู้การบริหารและออกแบบระบบให้ปลอดภัยและมีประสิทธิภาพ บน AWS, Azure, GCP"],
            courseList :"AWS Solutions Architect, Azure Administrator, Google Cloud Architect และ Terraform Training"
          },{
            name: "การบริหารจัดการเซิร์ฟเวอร์ (Linux/Windows Server Administration)",
            description : ["ดูแลและจัดการระบบปฏิบัติการเซิร์ฟเวอร์ ทั้ง Windows และ Linux","เน้น การตั้งค่า บำรุงรักษา และแก้ไขปัญหาการทำงานของเซิร์ฟเวอร์"],
            courseList :"RHCSA, LPIC-1, Windows Server Administrator และ CompTIA Linux+"
          },{
            name: "การรักษาความปลอดภัยทางไซเบอร์ (Cybersecurity & Firewall Management)",
            description : ["เสริมทักษะด้านความปลอดภัยไซเบอร์และป้องกันการโจมตี","ความรู้ในเรื่อง Firewall, Penetration Testing, Security Architecture"],
            courseList :"CEH, Security+, CISSP, Fortinet NSE และ Palo Alto PCNSE"
          },{
            name: "การบริหารและดูแลศูนย์ข้อมูล (Data Center & Virtualization)",
            description : ["เรียนรู้การจัดการโครงสร้างพื้นฐานของศูนย์ข้อมูลและการทำ Virtualization","เรียนรู้ VMware, Cisco Data Center, Cloud-based Data Centers"],
            courseList :"VCP-DCV, Cisco Data Center Specialist และ Azure Solutions Architect"
          },{
            name: "การใช้เครื่องมือมอนิเตอร์ระบบ (Nagios, Splunk, Zabbix ฯลฯ)",
            description : ["เรียนรู้การใช้เครื่องมือมอนิเตอร์ระบบเพื่อเฝ้าระวังและวิเคราะห์ปัญหา","การใช้งาน Nagios, Splunk, Zabbix, ELK Stack"],
            courseList :"Splunk Fundamentals, Nagios Certified, Zabbix Specialist และ ELK Stack Training"
          }
        ],
      },
      {
        id: "01",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        choices: [
          "Cloud Computing & Cloud Security",
          "Cybersecurity & Ethical Hacking",
          "Automation & Infrastructure as Code (IaC)",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question:
          "ทักษะ Soft Skills ใดที่พนักงานของท่านควรได้รับการพัฒนาเพิ่มเติม? (เลือกได้มากกว่า 1 ข้อ)",
        choices: [
          "การสื่อสารและการนำเสนอ (Communication & Presentation)",
          "การทำงานเป็นทีมและการประสานงาน (Teamwork & Collaboration)",
          "การคิดเชิงวิเคราะห์และการแก้ปัญหา (Critical Thinking & Problem Solving)",
          "ความคิดสร้างสรรค์และนวัตกรรม (Creativity & Innovation)",
          "ภาวะผู้นำและการบริหารทีม (Leadership & Management)",
          "การบริหารเวลาและการทำงานอย่างมีประสิทธิภาพ (Time Management & Productivity)",
          "การปรับตัวต่อการเปลี่ยนแปลง (Adaptability & Resilience)",
          "การรับมือกับความเครียดและความกดดัน (Resilience & Stress Management)",
          "การเจรจาต่อรองและแก้ไขความขัดแย้ง (Negotiation & Conflict Resolution)",
          "อื่นๆ",
        ],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: [
          "ณ สถาบันพัฒนาฝีมือแรงงาน",
          "ณ สถานประกอบการ/บริษัทของท่าน",
          "Online Training",
        ],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question: "ท่านต้องการให้หลักสูตรฝึกอบรมมีการประเมินผลอย่างไร?",
        choices: [
          "การทดสอบหลังการฝึกอบรม",
          "การประเมินผลจากผู้เข้าร่วม",
          "การประเมินผลจากผู้สอน",
          "ไม่มีการประเมินผล",
        ],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q02",
    question:
      "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
    sub_question: [
      {
        id: "02",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "02",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        type: "checkbox",
        choices: [
          "ความรู้ด้าน ERP (SAP, Oracle, Microsoft Dynamics ฯลฯ)",
          "การพัฒนาและปรับแต่งซอฟต์แวร์ธุรกิจ (Customization & Integration)",
          "การบริหารฐานข้อมูล (SQL, NoSQL)",
          "ความเข้าใจในระบบ Business Intelligence (Power BI, Tableau)",
          "การใช้ API และ Middleware เพื่อเชื่อมโยงระบบ",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
        Recommended: [
          {
            name : "ความรู้ด้าน ERP (SAP, Oracle, Microsoft Dynamics ฯลฯ)",
            description : ["เรียนรู้หลักการทำงานของระบบ ERP ในการจัดการ บัญชี, การเงิน, โลจิสติกส์, การผลิต และทรัพยากรบุคคล","ศึกษา แพลตฟอร์ม ERP ชั้นนำ เช่น SAP, Oracle ERP, Microsoft Dynamics 365"],
            courseList :"SAP Certified Application Associate (SAP S/4HANA),Oracle ERP Cloud Certification Microsoft Dynamics 365 Fundamentals & Associate,ERP Fundamentals (Udemy, Coursera, Pluralsight ฯลฯ)"
          },{
            name: "การพัฒนาและปรับแต่งซอฟต์แวร์ธุรกิจ (Customization & Integration)",
            description : ["เรียนรู้ การเขียนโค้ดและปรับแต่งโมดูล ERP หรือ Business Applications","ศึกษา การใช้ SDK และเครื่องมือพัฒนา ERP เช่น SAP ABAP, Oracle APEX, Microsoft Power Platform"],
            courseList :"SAP ABAP Programming for Beginners,Oracle APEX Development Fundamentals,Microsoft Power Platform Developer Certification (PL-400),Salesforce Platform Developer I & II (สำหรับระบบ CRM ที่นิยมใช้ในธุรกิจ)"
          },{
            name: "การบริหารฐานข้อมูล (SQL, NoSQL)",
            description : ["เรียนรู้จัดการข้อมูลในระบบ ERP และ Business Applications อย่างมีประสิทธิภาพ","เรียนรู้ SQL สำหรับโครงสร้างข้อมูลเชิงสัมพันธ์ และ NoSQL สำหรับ Big Data & Scalable Apps"],
            courseList :"Microsoft Certified: Azure Database Administrator Associate,Oracle Database SQL Certified Associate,MySQL for Beginners (Udemy, Coursera, Pluralsight),MongoDB University (NoSQL & Document Database)"
          },{
            name: "ความเข้าใจในระบบ Business Intelligence (Power BI, Tableau)",
            description : ["วิเคราะห์และแสดงผลข้อมูลเพื่อสนับสนุนการตัดสินใจทางธุรกิจ","ใช้เครื่องมือ Power BI, Tableau, Qlik Sense ในการสร้าง Dashboard และ Reports"],
            courseList :"•	Microsoft Certified: Power BI Data Analyst (PL-300),Tableau Desktop Specialist / Certified Associate,Google Data Analytics Professional Certificate"
          },{
            name: "การใช้ API และ Middleware เพื่อเชื่อมโยงระบบ",
            description : ["ออกแบบและพัฒนา API สำหรับเชื่อมโยงระบบ ERP, CRM, และ BI Applications","เรียนรู้ Middleware & Integration Platform เช่น MuleSoft, Apache Camel, Microsoft Power Automate"],
            courseList :"REST API Development with Node.js & Express.js,MuleSoft Certified Developer (MCD - Level 1),Microsoft Power Automate & Logic Apps Fundamentals,IBM API Connect & Cloud Integration"
          }
        ],
      },
      {
        id: "01",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        choices: [
          "Enterprise Resource Planning (ERP) Implementation",
          "Data Analytics & Business Intelligence",
          "AI & Process Automation",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question:
          "ทักษะ Soft Skills ใดที่พนักงานของท่านควรได้รับการพัฒนาเพิ่มเติม? (เลือกได้มากกว่า 1 ข้อ)",
        choices: [
          "การสื่อสารและการนำเสนอ (Communication & Presentation)",
          "การทำงานเป็นทีมและการประสานงาน (Teamwork & Collaboration)",
          "การคิดเชิงวิเคราะห์และการแก้ปัญหา (Critical Thinking & Problem Solving)",
          "ความคิดสร้างสรรค์และนวัตกรรม (Creativity & Innovation)",
          "ภาวะผู้นำและการบริหารทีม (Leadership & Management)",
          "การบริหารเวลาและการทำงานอย่างมีประสิทธิภาพ (Time Management & Productivity)",
          "การปรับตัวต่อการเปลี่ยนแปลง (Adaptability & Resilience)",
          "การรับมือกับความเครียดและความกดดัน (Resilience & Stress Management)",
          "การเจรจาต่อรองและแก้ไขความขัดแย้ง (Negotiation & Conflict Resolution)",
          "อื่นๆ",
        ],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: [
          "ณ สถาบันพัฒนาฝีมือแรงงาน",
          "ณ สถานประกอบการ/บริษัทของท่าน",
          "Online Training",
        ],
      },
      {
        id: "01",
        label: "",
        type: "checkbox",
        question: "ท่านต้องการให้หลักสูตรฝึกอบรมมีการประเมินผลอย่างไร?",
        choices: [
          "การทดสอบหลังการฝึกอบรม",
          "การประเมินผลจากผู้เข้าร่วม",
          "การประเมินผลจากผู้สอน",
          "ไม่มีการประเมินผล",
        ],
      },
      {
        id: "01",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  }

];
