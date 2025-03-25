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
            name: "การออกแบบและบริหารระบบเครือข่าย (Network Design & Administration)",
            description: ["เน้นการออกแบบและตั้งค่าเครือข่ายให้มีประสิทธิภาพ", "เรียนรู้ขั้นพื้นฐานจนถึงขั้นสูงของการทำงานกับอุปกรณ์เครือข่าย เช่น Router, Switch, Firewall"],
            courseList: "CCNA, CCNP, CompTIA Network+ และ JNCIA"
          }, {
            name: "การบริหารระบบคลาวด์ (AWS, Azure, Google Cloud)",
            description: ["เรียนรู้โครงสร้างพื้นฐานระบบคลาวด์ และการตั้งค่า Infrastructure as Code (IaC)", "เรียรรู้การบริหารและออกแบบระบบให้ปลอดภัยและมีประสิทธิภาพ บน AWS, Azure, GCP"],
            courseList: "AWS Solutions Architect, Azure Administrator, Google Cloud Architect และ Terraform Training"
          }, {
            name: "การบริหารจัดการเซิร์ฟเวอร์ (Linux/Windows Server Administration)",
            description: ["ดูแลและจัดการระบบปฏิบัติการเซิร์ฟเวอร์ ทั้ง Windows และ Linux", "เน้น การตั้งค่า บำรุงรักษา และแก้ไขปัญหาการทำงานของเซิร์ฟเวอร์"],
            courseList: "RHCSA, LPIC-1, Windows Server Administrator และ CompTIA Linux+"
          }, {
            name: "การรักษาความปลอดภัยทางไซเบอร์ (Cybersecurity & Firewall Management)",
            description: ["เสริมทักษะด้านความปลอดภัยไซเบอร์และป้องกันการโจมตี", "ความรู้ในเรื่อง Firewall, Penetration Testing, Security Architecture"],
            courseList: "CEH, Security+, CISSP, Fortinet NSE และ Palo Alto PCNSE"
          }, {
            name: "การบริหารและดูแลศูนย์ข้อมูล (Data Center & Virtualization)",
            description: ["เรียนรู้การจัดการโครงสร้างพื้นฐานของศูนย์ข้อมูลและการทำ Virtualization", "เรียนรู้ VMware, Cisco Data Center, Cloud-based Data Centers"],
            courseList: "VCP-DCV, Cisco Data Center Specialist และ Azure Solutions Architect"
          }, {
            name: "การใช้เครื่องมือมอนิเตอร์ระบบ (Nagios, Splunk, Zabbix ฯลฯ)",
            description: ["เรียนรู้การใช้เครื่องมือมอนิเตอร์ระบบเพื่อเฝ้าระวังและวิเคราะห์ปัญหา", "การใช้งาน Nagios, Splunk, Zabbix, ELK Stack"],
            courseList: "Splunk Fundamentals, Nagios Certified, Zabbix Specialist และ ELK Stack Training"
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
            name: "ความรู้ด้าน ERP (SAP, Oracle, Microsoft Dynamics ฯลฯ)",
            description: ["เรียนรู้หลักการทำงานของระบบ ERP ในการจัดการ บัญชี, การเงิน, โลจิสติกส์, การผลิต และทรัพยากรบุคคล", "ศึกษา แพลตฟอร์ม ERP ชั้นนำ เช่น SAP, Oracle ERP, Microsoft Dynamics 365"],
            courseList: "SAP Certified Application Associate (SAP S/4HANA),Oracle ERP Cloud Certification Microsoft Dynamics 365 Fundamentals & Associate,ERP Fundamentals (Udemy, Coursera, Pluralsight ฯลฯ)"
          }, {
            name: "การพัฒนาและปรับแต่งซอฟต์แวร์ธุรกิจ (Customization & Integration)",
            description: ["เรียนรู้ การเขียนโค้ดและปรับแต่งโมดูล ERP หรือ Business Applications", "ศึกษา การใช้ SDK และเครื่องมือพัฒนา ERP เช่น SAP ABAP, Oracle APEX, Microsoft Power Platform"],
            courseList: "SAP ABAP Programming for Beginners,Oracle APEX Development Fundamentals,Microsoft Power Platform Developer Certification (PL-400),Salesforce Platform Developer I & II (สำหรับระบบ CRM ที่นิยมใช้ในธุรกิจ)"
          }, {
            name: "การบริหารฐานข้อมูล (SQL, NoSQL)",
            description: ["เรียนรู้จัดการข้อมูลในระบบ ERP และ Business Applications อย่างมีประสิทธิภาพ", "เรียนรู้ SQL สำหรับโครงสร้างข้อมูลเชิงสัมพันธ์ และ NoSQL สำหรับ Big Data & Scalable Apps"],
            courseList: "Microsoft Certified: Azure Database Administrator Associate,Oracle Database SQL Certified Associate,MySQL for Beginners (Udemy, Coursera, Pluralsight),MongoDB University (NoSQL & Document Database)"
          }, {
            name: "ความเข้าใจในระบบ Business Intelligence (Power BI, Tableau)",
            description: ["วิเคราะห์และแสดงผลข้อมูลเพื่อสนับสนุนการตัดสินใจทางธุรกิจ", "ใช้เครื่องมือ Power BI, Tableau, Qlik Sense ในการสร้าง Dashboard และ Reports"],
            courseList: "•	Microsoft Certified: Power BI Data Analyst (PL-300),Tableau Desktop Specialist / Certified Associate,Google Data Analytics Professional Certificate"
          }, {
            name: "การใช้ API และ Middleware เพื่อเชื่อมโยงระบบ",
            description: ["ออกแบบและพัฒนา API สำหรับเชื่อมโยงระบบ ERP, CRM, และ BI Applications", "เรียนรู้ Middleware & Integration Platform เช่น MuleSoft, Apache Camel, Microsoft Power Automate"],
            courseList: "REST API Development with Node.js & Express.js,MuleSoft Certified Developer (MCD - Level 1),Microsoft Power Automate & Logic Apps Fundamentals,IBM API Connect & Cloud Integration"
          }
        ],
      },
      {
        id: "02",
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
        id: "02",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "02",
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
        id: "02",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "02",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "02",
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
        id: "02",
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
        id: "02",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q03",
    question:
      "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
    sub_question: [
      {
        id: "03",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "03",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        type: "checkbox",
        choices: [
          "การดูแลและสนับสนุนผู้ใช้ (IT Support & Helpdesk)",
          "การติดตั้งและซ่อมแซมอุปกรณ์ IT (Hardware & Software Troubleshooting)",
          "การบริหารสิทธิ์การเข้าถึงระบบ (Access Control & Active Directory)",
          "การจัดการความปลอดภัยข้อมูลเบื้องต้น (Endpoint Security)",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
        Recommended: [
          {
            "name": "การดูแลและสนับสนุนผู้ใช้ (IT Support & Helpdesk)",
            "description": [
              "เรียนรู้พื้นฐานการแก้ไขปัญหาการใช้งานระบบคอมพิวเตอร์และซอฟต์แวร์",
              "เรียนรู้การให้บริการลูกค้าด้าน IT, การจัดการอุปกรณ์ และการแก้ไขปัญหาซอฟต์แวร์เบื้องต้น"
            ],
            "courseList": "CompTIA IT Fundamentals (ITF+), Google IT Support Professional Certificate, Microsoft 365 Certified: Modern Desktop Administrator Associate, HDI Desktop Support Technician (HDI-DST)"
          },
          {
            "name": "การติดตั้งและซ่อมแซมอุปกรณ์ IT (Hardware & Software Troubleshooting)",
            "description": [
              "เรียนรู้การติดตั้ง ซ่อมแซม และแก้ไขปัญหาฮาร์ดแวร์และซอฟต์แวร์",
              "ครอบคลุม การจัดการอุปกรณ์คอมพิวเตอร์, ระบบปฏิบัติการ และเครือข่ายเบื้องต้น"
            ],
            "courseList": "CompTIA A+, Microsoft Certified: Windows Server Hybrid Administrator Associate, PC Hardware & Software Troubleshooting (Udemy, Pluralsight, Coursera ฯลฯ)"
          },
          {
            "name": "การบริหารสิทธิ์การเข้าถึงระบบ (Access Control & Active Directory)",
            "description": [
              "เรียนรู้การบริหารจัดการบัญชีผู้ใช้, สิทธิ์การเข้าถึง และนโยบายรักษาความปลอดภัยในองค์กร",
              "เรียนรู้ Active Directory, Identity & Access Management (IAM), Zero Trust Security"
            ],
            "courseList": "Microsoft Certified: Identity and Access Administrator (SC-300), CompTIA Security+, Azure Active Directory & Identity Management (Udemy, Coursera ฯลฯ), Okta Certified Professional"
          },
          {
            "name": "การจัดการความปลอดภัยข้อมูลเบื้องต้น (Endpoint Security)",
            "description": [
              "เรียนรู้แนวทางป้องกันภัยคุกคามด้านไซเบอร์ และการรักษาความปลอดภัยของอุปกรณ์ปลายทาง (Endpoints)",
              "เรียนรู้ Antivirus, Endpoint Detection & Response (EDR), Data Loss Prevention (DLP)"
            ],
            "courseList": "Certified Information Systems Security Professional (CISSP), CompTIA Cybersecurity Analyst (CySA+), Microsoft Certified: Security Operations Analyst Associate (SC-200), Palo Alto Networks Certified Cybersecurity Associate (PCCSA)"
          }
        ]

      },
      {
        id: "03",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        choices: [
          "IT Support & Helpdesk with AI Integration",
          "Endpoint Security & Zero Trust Architecture",
          "ITIL & IT Service Management",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "03",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "03",
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
        id: "03",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "03",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "03",
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
        id: "03",
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
        id: "03",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q04",
    question:
      "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
    sub_question: [
      {
        id: "04",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "04",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        type: "checkbox",
        choices: [
          "การพัฒนาเว็บและแอปพลิเคชัน (Frontend & Backend Development)",
          "ความรู้ด้าน API และ Web Services (REST, GraphQL)",
          "การพัฒนา AI & Machine Learning",
          "การใช้เครื่องมือ DevOps (Docker, Kubernetes, CI/CD)",
          "การออกแบบสถาปัตยกรรมซอฟต์แวร์",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การพัฒนาเว็บและแอปพลิเคชัน (Frontend & Backend Development)",
          "description": [
            "เรียนรู้การพัฒนาเว็บไซต์และแอปพลิเคชัน ทั้ง Frontend และ Backend",
            "เรียนรู้ภาษา HTML, CSS, JavaScript, React, Vue.js, Angular, Node.js, Django, Laravel ฯลฯ"
          ],
          "courseList": "The Complete Web Developer Bootcamp (Udemy, Codecademy, Coursera, freeCodeCamp), Meta Front-End Developer Professional Certificate (Coursera), Full-Stack Web Development with React & Node.js (Udemy, Pluralsight), Backend Development with Node.js, Express & MongoDB, Python/Django Full Stack Web Development (Udemy, Pluralsight)"
        },
        {
          "name": "ความรู้ด้าน API และ Web Services (REST, GraphQL)",
          "description": [
            "พัฒนาและออกแบบ API สำหรับเชื่อมโยงระบบต่างๆ",
            "เรียนรู้ REST API, GraphQL, API Security & Authentication (JWT, OAuth, OpenID Connect)"
          ],
          "courseList": "REST API Design & Development with Node.js & Express, GraphQL for Beginners (Apollo, Hasura, GraphQL Playground), API Security & Best Practices (OAuth2, JWT, OpenAPI), Building Scalable Microservices with gRPC & GraphQL"
        },
        {
          "name": "การพัฒนา AI & Machine Learning",
          "description": [
            "เรียนรู้การสร้างโมเดล AI และ Machine Learning",
            "ภาษา Python, TensorFlow, PyTorch, Scikit-learn, Deep Learning, NLP"
          ],
          "courseList": "Google AI & Machine Learning Crash Course, Deep Learning Specialization by Andrew Ng (Coursera), TensorFlow Developer Certificate Program, Fast.ai Practical Deep Learning for Coders, Machine Learning with Python (Scikit-learning, Pandas, NumPy)"
        },
        {
          "name": "การใช้เครื่องมือ DevOps (Docker, Kubernetes, CI/CD)",
          "description": [
            "เรียนรู้แนวทางการจัดการโครงสร้างพื้นฐานซอฟต์แวร์แบบอัตโนมัติ",
            "เรียนรู้ Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, Ansible"
          ],
          "courseList": "Docker & Kubernetes: The Complete Guide, Certified Kubernetes Administrator (CKA) / Certified Kubernetes Application Developer (CKAD), Continuous Integration & Deployment with Jenkins/GitHub Actions, Infrastructure as Code (IaC) with Terraform & Ansible"
        },
        {
          "name": "การออกแบบสถาปัตยกรรมซอฟต์แวร์ (Software Architecture)",
          "description": [
            "เรียนรู้หลักการออกแบบซอฟต์แวร์เพื่อรองรับการขยายตัวของระบบ (Scalability, Microservices, Event-Driven Architecture)",
            "เรียนรู้ Design Patterns, Clean Architecture, Microservices, Cloud-Native Architectures"
          ],
          "courseList": "Software Architecture & Design Patterns (SOLID, DDD, Clean Architecture), Microservices Architecture & Event-Driven Systems, Cloud-Native Software Architecture (AWS, Azure, Google Cloud), System Design & Scalability (Backend Engineering, Load Balancing, Caching, Database Sharding)"
        }
      ],
    },
      {
        id: "04",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        choices: [
          "Full-Stack Development",
          "DevOps & CI/CD",
          "AI & Machine Learning Development",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "04",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "04",
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
        id: "04",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "04",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "04",
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
        id: "04",
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
        id: "04",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q05",
    question:
      "Accounting & Finance (งานบัญชีและการเงิน)",
    sub_question: [
      {
        id: "05",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Accounting & Finance (งานบัญชีและการเงิน)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "05",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Accounting & Finance (งานบัญชีและการเงิน)",
        type: "checkbox",
        choices: [
          "การใช้โปรแกรมบัญชี (SAP, QuickBooks, Oracle Finance)",
          "การวิเคราะห์และบริหารงบประมาณ",
          "การคำนวณภาษีและงบการเงิน",
          "ความรู้ด้านกฎหมายและมาตรฐานบัญชี",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การใช้โปรแกรมบัญชี (SAP, QuickBooks, Oracle Finance)",
          "description": [
            "เรียนรู้การใช้งานโปรแกรมบัญชียอดนิยม เช่น SAP, QuickBooks, Oracle Finance",
            "ครอบคลุมการจัดการบัญชี, การรายงานทางการเงิน, การวิเคราะห์ข้อมูลการเงิน"
          ],
          "courseList": "SAP Financial Accounting (FI), QuickBooks Online for Accounting, Oracle Financial Management Cloud, Mastering QuickBooks Pro"
        },
        {
          "name": "การวิเคราะห์และบริหารงบประมาณ",
          "description": [
            "เรียนรู้การวิเคราะห์งบประมาณและการคาดการณ์ทางการเงินสำหรับองค์กร",
            "ครอบคลุมการวางแผนงบประมาณ, การบริหารต้นทุน, การตรวจสอบการใช้จ่าย"
          ],
          "courseList": "Budgeting & Financial Management, Financial Analysis & Planning for Business, Corporate Finance & Budgeting, Mastering Financial Modeling and Analysis"
        },
        {
          "name": "การคำนวณภาษีและงบการเงิน",
          "description": [
            "เรียนรู้การคำนวณภาษี, การทำงบการเงิน, และการประเมินผลทางการเงิน",
            "ครอบคลุมการคำนวณภาษีสำหรับบุคคลและธุรกิจ, การจัดทำงบการเงิน"
          ],
          "courseList": "Corporate Taxation & Accounting, Taxation for Business & Individuals, Financial Statement Analysis & Reporting, Advanced Taxation: Corporate & Business Tax Planning"
        },
        {
          "name": "ความรู้ด้านกฎหมายและมาตรฐานบัญชี",
          "description": [
            "เรียนรู้กฎหมายภาษีและกฎหมายการเงิน รวมถึงมาตรฐานการบัญชี",
            "ครอบคลุมกฎหมายภาษีธุรกิจ, IFRS, GAAP และมาตรฐานการรายงานทางการเงิน"
          ],
          "courseList": "International Accounting Standards (IAS) & IFRS, Corporate Tax Law and Regulations, General Accepted Accounting Principles (GAAP), Financial Accounting & Reporting Standards"
        }
      ]
    },
      {
        id: "05",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Accounting & Finance (งานบัญชีและการเงิน)",
        choices: [
          "Data Analytics for Finance",
          "Blockchain & Digital Payment Systems",
          "Regulatory Compliance & International Taxation",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "05",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "05",
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
        id: "05",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "05",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "05",
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
        id: "05",
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
        id: "05",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q06",
    question:
      "Human Resource (ฝ่ายทรัพยากรบุคคล)",
    sub_question: [
      {
        id: "06",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "06",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        type: "checkbox",
        choices: [
          "การบริหารทรัพยากรบุคคล (HR Management)",
          "การใช้ HR Software (SAP HR, Workday, BambooHR)",
          "การคำนวณเงินเดือนและสวัสดิการ",
          "การจัดการด้านแรงงานสัมพันธ์และกฎหมายแรงงาน",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การบริหารทรัพยากรบุคคล (HR Management)",
          "description": [
            "เรียนรู้หลักการพื้นฐานและแนวทางในการบริหารจัดการทรัพยากรบุคคลในองค์กร",
            "ครอบคลุมการสรรหาและการเลือกสรรพนักงาน, การพัฒนาบุคลากร, การฝึกอบรม, การประเมินผลการทำงาน"
          ],
          "courseList": "Human Resource Management (HRM), HR Management Professional Certificate, Strategic Human Resource Management, Managing Human Resources"
        },
        {
          "name": "การใช้ HR Software (SAP HR, Workday, BambooHR)",
          "description": [
            "เรียนรู้การใช้งานซอฟต์แวร์ HR ชั้นนำ เช่น SAP HR, Workday, BambooHR",
            "ครอบคลุมการจัดการข้อมูลพนักงาน, การบริหารการจ่ายเงินเดือน, การติดตามประสิทธิภาพของพนักงาน"
          ],
          "courseList": "SAP HR (Human Resources) for Beginners, Workday HCM Training, BambooHR Training for HR Professionals, HR Management Software & Tools"
        },
        {
          "name": "การคำนวณเงินเดือนและสวัสดิการ",
          "description": [
            "เรียนรู้การคำนวณเงินเดือน, สวัสดิการ, และการหักภาษีที่เกี่ยวข้อง",
            "ครอบคลุมการคำนวณโบนัส, ค่าใช้จ่ายต่างๆ และการใช้โปรแกรมในการจัดการเงินเดือน"
          ],
          "courseList": "Payroll & Benefits Administration, Payroll Processing and Compliance, Certified Payroll Professional (CPP), HR and Payroll Management"
        },
        {
          "name": "การจัดการด้านแรงงานสัมพันธ์และกฎหมายแรงงาน",
          "description": [
            "เรียนรู้การจัดการแรงงานสัมพันธ์, การเจรจาต่อรอง, และกฎหมายแรงงานในแต่ละประเทศ",
            "ครอบคลุมสิทธิและหน้าที่ของนายจ้างและลูกจ้าง, กฎหมายแรงงานและการปฏิบัติตามข้อกำหนดทางกฎหมาย"
          ],
          "courseList": "Labor Relations & Collective Bargaining, Employment Law & HR Compliance, HR and Labor Law Compliance, Labor Law & Workplace Regulations"
        }
      ]      
    },
      {
        id: "06",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        choices: [
          "HR Analytics & People Data Science",
          "HR Technology (HRIS, Workday, SAP SuccessFactors)",
          "Employer Branding & Employee Experience Design",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "06",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "06",
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
        id: "06",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "06",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "06",
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
        id: "06",
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
        id: "06",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q07",
    question:
      "Administration (ฝ่ายธุรการ)",
    sub_question: [
      {
        id: "07",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Administration (ฝ่ายธุรการ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "07",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Administration (ฝ่ายธุรการ)",
        type: "checkbox",
        choices: [
          "การบริหารงานเอกสารและข้อมูล (Document & Records Management)",
          "การใช้โปรแกรมสำนักงาน (Microsoft Office, Google Workspace)",
          "การจัดการระบบอำนวยความสะดวกในองค์กร",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การบริหารงานเอกสารและข้อมูล (Document & Records Management)",
          "description": [
            "เรียนรู้การจัดการเอกสารและข้อมูลในองค์กร เพื่อให้สามารถค้นหาข้อมูลได้อย่างมีประสิทธิภาพและปฏิบัติตามข้อกำหนดทางกฎหมาย",
            "เรียนรู้การจัดการเอกสารทั้งในรูปแบบดิจิทัลและเอกสารกระดาษ, การเก็บรักษา, การทำลายเอกสาร"
          ],
          "courseList": "Document and Records Management, Records Management Professional Certificate, Information and Document Management Systems, Document Control and Records Management"
        },
        {
          "name": "การใช้โปรแกรมสำนักงาน (Microsoft Office, Google Workspace)",
          "description": [
            "เรียนรู้การใช้โปรแกรมสำนักงานยอดนิยม เช่น Microsoft Office และ Google Workspace",
            "เรียนรู้การใช้งาน Word, Excel, PowerPoint, Outlook, Google Docs, Google Sheets, Google Drive, Google Meet"
          ],
          "courseList": "Microsoft Office Specialist Certification (MOS), Advanced Microsoft Excel Training, Google Workspace for Business, Google Docs and Sheets for Beginners"
        },
        {
          "name": "การจัดการระบบอำนวยความสะดวกในองค์กร",
          "description": [
            "เรียนรู้การจัดการระบบต่างๆ ที่ช่วยให้องค์กรทำงานได้สะดวกและมีประสิทธิภาพ เช่น การจัดการงานประจำวัน, การใช้เครื่องมือร่วมมือ",
            "เรียนรู้การใช้ระบบบริหารจัดการโปรเจค, การวางแผนการทำงาน, การใช้ระบบคลาวด์ในการแบ่งปันข้อมูล"
          ],
          "courseList": "Project Management for Beginners, Effective Office Management and Organization, Collaboration Tools for Business Success, Cloud-based Document Management Systems"
        }
      ]      
    },
      {
        id: "07",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Administration (ฝ่ายธุรการ)",
        choices: [
          "Digital Office Management ",
          "E-Document & Workflow Automation",
          "Project Coordination Tools",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "07",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "07",
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
        id: "07",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "07",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "07",
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
        id: "07",
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
        id: "07",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q08",
    question:
      "Procurement (ฝ่ายจัดซื้อ)",
    sub_question: [
      {
        id: "08",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Procurement (ฝ่ายจัดซื้อ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "08",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Procurement (ฝ่ายจัดซื้อ)",
        type: "checkbox",
        choices: [
          "การบริหารจัดซื้อและซัพพลายเชน (Procurement & Supply Chain Management)",
          "การเจรจาต่อรองและการทำสัญญา",
          "ความเข้าใจเกี่ยวกับต้นทุนและงบประมาณ",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การบริหารจัดซื้อและซัพพลายเชน (Procurement & Supply Chain Management)",
          "description": [
            "เรียนรู้การบริหารจัดการกระบวนการจัดซื้อและซัพพลายเชนตั้งแต่ต้นทางจนถึงปลายทาง",
            "ครอบคลุมการเลือกผู้จัดจำหน่าย, การจัดการคลังสินค้า, การจัดส่ง, และการจัดการสินค้าคงคลัง"
          ],
          "courseList": "Supply Chain Management (SCM) Basics, Procurement and Supply Chain Management Fundamentals, Inventory and Warehouse Management, Global Supply Chain and Supplier Relationship Management"
        },
        {
          "name": "การเจรจาต่อรองและการทำสัญญา",
          "description": [
            "เรียนรู้ทักษะการเจรจาต่อรองเพื่อให้ได้ข้อเสนอที่ดีที่สุดและการจัดการสัญญาอย่างมีประสิทธิภาพ",
            "ครอบคลุมการเจรจาต่อรองในระดับองค์กร, การทำสัญญาทางธุรกิจ, การจัดการข้อกำหนดในสัญญา"
          ],
          "courseList": "Negotiation Skills for Business, Contract Law and Negotiation, Advanced Negotiation Tactics, Contract Management and Administration"
        },
        {
          "name": "ความเข้าใจเกี่ยวกับต้นทุนและงบประมาณ",
          "description": [
            "เรียนรู้การวิเคราะห์ต้นทุน, การกำหนดงบประมาณ, และการจัดการต้นทุนในกระบวนการผลิต",
            "เรียนรู้การจัดทำงบประมาณ, การประเมินผลกำไรและขาดทุน, การควบคุมต้นทุน"
          ],
          "courseList": "Cost Analysis and Financial Decision Making, Budgeting and Financial Management, Cost Control and Profitability Analysis, Financial Accounting and Budgeting for Managers"
        }
      ]      
    },
      {
        id: "08",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Procurement (ฝ่ายจัดซื้อ)",
        choices: [
          "E-Procurement & Supply Chain Analytics",
          "Sustainable Procurement & ESG Compliance",
          "Data-Driven Decision Making in Procurement",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "08",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "08",
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
        id: "08",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "08",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "08",
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
        id: "08",
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
        id: "08",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q09",
    question:
      "Project Management (ฝ่ายบริหารงานโครงการ)",
    sub_question: [
      {
        id: "09",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Project Management (ฝ่ายบริหารงานโครงการ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "09",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Project Management (ฝ่ายบริหารงานโครงการ)",
        type: "checkbox",
        choices: [
          "การใช้เครื่องมือบริหารโครงการ (JIRA, Trello, Asana)",
          "ความเข้าใจเกี่ยวกับ Agile & Scrum หรือ Waterfall",
          "การวิเคราะห์และบริหารความเสี่ยง",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การใช้เครื่องมือบริหารโครงการ (JIRA, Trello, Asana)",
          "description": [
            "เรียนรู้วิธีการใช้เครื่องมือที่ช่วยในการบริหารจัดการโครงการทั้งในระดับบุคคลและทีม",
            "เรียนรู้การใช้งานเครื่องมือที่ได้รับความนิยม เช่น JIRA, Trello และ Asana ในการติดตามความคืบหน้าของโครงการ, การมอบหมายงาน, และการวางแผนโครงการ"
          ],
          "courseList": "JIRA Software for Project Management, Mastering Trello for Project Management, Asana Project Management for Teams"
        },
        {
          "name": "ความเข้าใจเกี่ยวกับ Agile & Scrum หรือ Waterfall",
          "description": [
            "เรียนรู้เกี่ยวกับแนวทางการบริหารโครงการต่างๆ เช่น Agile, Scrum, และ Waterfall",
            "เรียนรู้การใช้เทคนิค Agile และ Scrum เพื่อปรับปรุงกระบวนการพัฒนาโครงการ รวมถึงการเข้าใจการทำงานแบบ Waterfall ที่เหมาะสมกับโครงการที่มีลักษณะซับซ้อนและยาวนาน"
          ],
          "courseList": "Agile and Scrum Mastery เช่น Scrum Master, Product Owner และ Development Team, Scrum Framework and Implementation, Waterfall Project Management Fundamentals"
        },
        {
          "name": "การบริหารทรัพยากรและงบประมาณโครงการ",
          "description": [
            "เรียนรู้การบริหารทรัพยากรและงบประมาณในการดำเนินโครงการให้มีประสิทธิภาพ",
            "การวางแผนและควบคุมงบประมาณ, การจัดสรรทรัพยากรให้ตรงตามความต้องการของโครงการ, การตรวจสอบและติดตามงบประมาณที่ใช้ไป"
          ],
          "courseList": "Project Resource Management, Project Budgeting and Financial Control, Effective Project Cost Management"
        },
        {
          "name": "การวิเคราะห์และบริหารความเสี่ยง",
          "description": [
            "เรียนรู้วิธีการระบุ วิเคราะห์ และบริหารความเสี่ยงที่อาจเกิดขึ้นในโครงการ",
            "เรียนรู้เทคนิคต่างๆ ในการประเมินความเสี่ยง, การจัดทำแผนรับมือกับความเสี่ยง, และการติดตามความเสี่ยงในระหว่างการดำเนินโครงการ"
          ],
          "courseList": "Risk Management for Project Managers, Risk Analysis and Mitigation Strategies, Project Risk Management Tools and Techniques เช่น Risk Register, Monte Carlo Simulation และการวิเคราะห์ความเสี่ยงโดยใช้ค่าเฉลี่ย"
        }
      ]
      
    },
      {
        id: "09",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Project Management (ฝ่ายบริหารงานโครงการ)",
        choices: [
          "Agile & Scrum Mastery",
          "Risk Management & Change Management",
          "Project Financial Management",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "09",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "09",
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
        id: "09",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "09",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "09",
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
        id: "09",
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
        id: "09",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  },
  {
    id: "q10",
    question:
      "Sales (ฝ่ายขาย)",
    sub_question: [
      {
        id: "10",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question:
          "Sales (ฝ่ายขาย)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "10",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        question:
          "Sales (ฝ่ายขาย)",
        type: "checkbox",
        choices: [
          "การขายและการนำเสนอผลิตภัณฑ์ IT",
          "การใช้ CRM (Salesforce, HubSpot)",
          "การวิเคราะห์ตลาดและพฤติกรรมลูกค้า",
          "ไม่ทราบ",
          "อื่นๆ"
        ],
      
      Recommended : [
        {
          "name": "การขายและการนำเสนอผลิตภัณฑ์ IT",
          "description": [
            "เรียนรู้เทคนิคและกลยุทธ์ในการขายผลิตภัณฑ์ IT โดยมุ่งเน้นการเข้าใจความต้องการของลูกค้า",
            "สร้างความสัมพันธ์กับลูกค้า, การสาธิตผลิตภัณฑ์, การปรับกลยุทธ์การขายให้เหมาะสมกับตลาด IT และการตอบโจทย์ข้อสงสัยของลูกค้า"
          ],
          "courseList": "IT Product Sales Techniques, Selling Technology Solutions, Effective IT Product Presentations"
        },
        {
          "name": "การใช้ CRM (Salesforce, HubSpot)",
          "description": [
            "เรียนรู้การใช้เครื่องมือ CRM ที่มีประสิทธิภาพในการจัดการลูกค้าและเพิ่มยอดขาย",
            "เรียนรู้การใช้งาน Salesforce และ HubSpot ในการติดตามลูกค้า, การสร้างโอกาสทางการขาย, การจัดการข้อมูลลูกค้า และการวิเคราะห์ผลการขาย"
          ],
          "courseList": "Salesforce CRM for Sales Professionals, Mastering HubSpot CRM, CRM Tools for Effective Sales Management"
        },
        {
          "name": "การวิเคราะห์ตลาดและพฤติกรรมลูกค้า",
          "description": [
            "เรียนรู้การวิเคราะห์ตลาดและพฤติกรรมของลูกค้า เพื่อกำหนดกลยุทธ์การขายที่มีประสิทธิภาพ",
            "เรียนรู้การใช้ข้อมูลเพื่อการตลาด, การวิเคราะห์แนวโน้มของตลาด, การทำ Segmentation, และการทำ Behavioral Analysis"
          ],
          "courseList": "Market Analysis and Customer Behavior, Customer Insight and Behavior Analytics, Data-Driven Marketing and Sales Strategies"
        }
      ]
      
      
    },
      {
        id: "10",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question:
          "Project Management (ฝ่ายบริหารงานโครงการ)",
        choices: [
          "Data-Driven Sales & CRM Management",
          "B2B Sales & Solution Selling",
          "Digital Marketing & Social Selling",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
      {
        id: "10",
        label: "",
        type: "radio",
        question:
          "ท่านคิดว่าทักษะ Soft Skills มีผลต่อประสิทธิภาพการทำงานของพนักงานภายในองค์กรของท่าน มากน้อยเพียงใด?",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "10",
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
        id: "10",
        label: "",
        type: "checkbox",
        question: "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        choices: ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์", "ทุกช่วงเวลา"],
      },
      {
        id: "10",
        label: "",
        type: "radio",
        question: "ระยะเวลาฝึกอบรมที่เหมาะสมกับองค์กรของท่าน",
        choices: ["หลักสูตรระยะสั้น (1-3 วัน)", "หลักสูตรระยะกลาง (1-4 สัปดาห์)", "หลักสูตรระยะยาว (มากกว่า 1 เดือน)"],
      },
      {
        id: "10",
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
        id: "10",
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
        id: "10",
        label: "",
        type: "radio",
        question: "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        choices: ["จำเป็น", "ไม่จำเป็น"],
      },
    ],
  }


];
