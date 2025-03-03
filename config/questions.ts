export const questions = [
  {
    "id": "q01",
    "question": "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
    "type": "radio",
    "sub_question": [
      {
        "id": "01",
        "question": "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      },
      {
        "id": "02",
        "question": "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      },
      {
        "id": "03",
        "question": "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "04",
        "question": "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "05",
        "question": "Accounting & Finance (งานบัญชีและการเงิน)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "06",
        "question": "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "07",
        "question": "Administration (ฝ่ายธุรการ)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "08",
        "question": "Procurement (ฝ่ายจัดซื้อ)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "09",
        "question": "Project Management (ฝ่ายบริหารงานโครงการ)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      }, {
        "id": "10",
        "question": "Sales (ฝ่ายขาย)",
        "choices": ["มาก", "ปานกลาง", "น้อย"]
      },
    ],

  },
  {
    "id": "q02",
    "question": "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
    "type": "checkbox",
    "sub_question": [
      {
        "id": "01",
        "question": "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        "choices": ["การออกแบบและบริหารระบบเครือข่าย (Network Design & Administration)", "การบริหารระบบคลาวด์ (AWS, Azure, Google Cloud)", "การบริหารจัดการเซิร์ฟเวอร์ (Linux/Windows Server Administration)", "การรักษาความปลอดภัยทางไซเบอร์ (Cybersecurity & Firewall Management)", "การบริหารและดูแลศูนย์ข้อมูล (Data Center & Virtualization)", "การใช้เครื่องมือมอนิเตอร์ระบบ (Nagios, Splunk, Zabbix ฯลฯ)", "ไม่ทราบ"]
      },
      {
        "id": "02",
        "question": "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        "choices": ["ความรู้ด้าน ERP (SAP, Oracle, Microsoft Dynamics ฯลฯ)", "การพัฒนาและปรับแต่งซอฟต์แวร์ธุรกิจ (Customization & Integration)", "การบริหารฐานข้อมูล (SQL, NoSQL)", "ความเข้าใจในระบบ Business Intelligence (Power BI, Tableau)", "การใช้ API และ Middleware เพื่อเชื่อมโยงระบบ", "ไม่ทราบ"]
      },
      {
        "id": "03",
        "question": "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        "choices": ["การดูแลและสนับสนุนผู้ใช้ (IT Support & Helpdesk)", "การติดตั้งและซ่อมแซมอุปกรณ์ IT (Hardware & Software Troubleshooting)", "การบริหารสิทธิ์การเข้าถึงระบบ (Access Control & Active Directory)", "การจัดการความปลอดภัยข้อมูลเบื้องต้น (Endpoint Security)", "ไม่ทราบ"]
      }, {
        "id": "04",
        "question": "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        "choices": ["การพัฒนาเว็บและแอปพลิเคชัน (Frontend & Backend Development)", "ความรู้ด้าน API และ Web Services (REST, GraphQL)", "การพัฒนา AI & Machine Learning", "การใช้เครื่องมือ DevOps (Docker, Kubernetes, CI/CD)", "การออกแบบสถาปัตยกรรมซอฟต์แวร์", "ไม่ทราบ"]
      }, {
        "id": "05",
        "question": "Accounting & Finance (งานบัญชีและการเงิน)",
        "choices": [
          "การใช้โปรแกรมบัญชี (SAP, QuickBooks, Oracle Finance)",
          "การวิเคราะห์และบริหารงบประมาณ",
          "การคำนวณภาษีและงบการเงิน",
          "ความรู้ด้านกฎหมายและมาตรฐานบัญชี",
          "ไม่ทราบ"
        ]
      },
      {
        "id": "06",
        "question": "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        "choices": [
          "การบริหารทรัพยากรบุคคล (HR Management)",
          "การใช้ HR Software (SAP HR, Workday, BambooHR)",
          "การคำนวณเงินเดือนและสวัสดิการ",
          "การจัดการด้านแรงงานสัมพันธ์และกฎหมายแรงงาน",
          "ไม่ทราบ"
        ]
      },
      {
        "id": "07",
        "question": "Administration (ฝ่ายธุรการ)",
        "choices": [
          "การบริหารงานเอกสารและข้อมูล (Document & Records Management)",
          "การใช้โปรแกรมสำนักงาน (Microsoft Office, Google Workspace)",
          "การจัดการระบบอำนวยความสะดวกในองค์กร",
          "ไม่ทราบ"
        ]
      },
      {
        "id": "08",
        "question": "Procurement (ฝ่ายจัดซื้อ)",
        "choices": [
          "การบริหารจัดซื้อและซัพพลายเชน (Procurement & Supply Chain Management)",
          "การเจรจาต่อรองและการทำสัญญา",
          "ความเข้าใจเกี่ยวกับต้นทุนและงบประมาณ",
          "ไม่ทราบ"
        ]
      },
      {
        "id": "09",
        "question": "Project Management (ฝ่ายบริหารงานโครงการ)",
        "choices": [
          "การใช้เครื่องมือบริหารโครงการ (JIRA, Trello, Asana)",
          "ความเข้าใจเกี่ยวกับ Agile & Scrum หรือ Waterfall",
          "การบริหารทรัพยากรและงบประมาณโครงการ",
          "การวิเคราะห์และบริหารความเสี่ยง",
          "ไม่ทราบ"
        ]
      },
      {
        "id": "10",
        "question": "Sales (ฝ่ายขาย)",
        "choices": [
          "การขายและการนำเสนอผลิตภัณฑ์ IT",
          "การใช้ CRM (Salesforce, HubSpot)",
          "การวิเคราะห์ตลาดและพฤติกรรมลูกค้า",
          "ไม่ทราบ"
        ]
      }

    ],

  }, {
    "id": "q03",
    "question": "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
    "type": "checkbox",
    "sub_question": [
      {
        "id": "01",
        "question": "IT Infrastructure Services (ฝ่ายบริหารโครงสร้างด้านเทคโนโลยีสารสนเทศ)",
        "choices": [
          "Cloud Computing & Cloud Security",
          "Cybersecurity & Ethical Hacking",
          "Automation & Infrastructure as Code (IaC)",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "02",
        "question": "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        "choices": [
          "Enterprise Resource Planning (ERP) Implementation",
          "Data Analytics & Business Intelligence",
          "AI & Process Automation",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "03",
        "question": "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        "choices": [
          "IT Support & Helpdesk with AI Integration",
          "Endpoint Security & Zero Trust Architecture",
          "ITIL & IT Service Management",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "04",
        "question": "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        "choices": [
          "Full-Stack Development",
          "DevOps & CI/CD",
          "AI & Machine Learning Development",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "05",
        "question": "Accounting & Finance (งานบัญชีและการเงิน)",
        "choices": [
          "Data Analytics for Finance",
          "Blockchain & Digital Payment Systems",
          "Regulatory Compliance & International Taxation",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "06",
        "question": "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        "choices": [
          "HR Analytics & People Data Science",
          "HR Technology (HRIS, Workday, SAP SuccessFactors)",
          "Employer Branding & Employee Experience Design",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "07",
        "question": "Administration (ฝ่ายธุรการ)",
        "choices": [
          "Digital Office Management",
          "E-Document & Workflow Automation",
          "Project Coordination Tools",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "08",
        "question": "Procurement (ฝ่ายจัดซื้อ)",
        "choices": [
          "E-Procurement & Supply Chain Analytics",
          "Sustainable Procurement & ESG Compliance",
          "Data-Driven Decision Making in Procurement",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "09",
        "question": "Project Management (ฝ่ายบริหารงานโครงการ)",
        "choices": [
          "Agile & Scrum Mastery",
          "Risk Management & Change Management",
          "Project Financial Management",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      },
      {
        "id": "10",
        "question": "Sales (ฝ่ายขาย)",
        "choices": [
          "Data-Driven Sales & CRM Management",
          "B2B Sales & Solution Selling",
          "Digital Marketing & Social Selling",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"
        ]
      }
    ],

  },{
    "id": "q04",
    "question": "",
    "type": "radio",
    "sub_question": [
      {
        "id": "01",
        "question": "ทักษะ Soft Skills ใดที่พนักงานของท่านควรได้รับการพัฒนาเพิ่มเติม? (เลือกได้มากกว่า 1 ข้อ)",
        "choices": ["การสื่อสารและการนำเสนอ (Communication & Presentation)", "การทำงานเป็นทีมและการประสานงาน (Teamwork & Collaboration)","ความคิดสร้างสรรค์และนวัตกรรม (Creativity & Innovation)","ภาวะผู้นำและการบริหารทีม (Leadership & Management)","การปรับตัวต่อการเปลี่ยนแปลง (Adaptability & Resilience)","การรับมือกับความเครียดและความกดดัน Resilience & Stress Management","การเจรจาต่อรองและแก้ไขความขัดแย้ง Negotiation & Conflict Resolution"]
      },
   
    ],

  },{
    "id": "q07",
    "question": "",
    "type": "radio",
    "sub_question": [
      {
        "id": "01",
        "question": "ทักษะ Soft Skills ใดที่พนักงานของท่านควรได้รับการพัฒนาเพิ่มเติม? (เลือกได้มากกว่า 1 ข้อ)",
        "choices": ["การสื่อสารและการนำเสนอ (Communication & Presentation)", "การทำงานเป็นทีมและการประสานงาน (Teamwork & Collaboration)", "การทำงานเป็นทีมและการประสานงาน (Teamwork & Collaboration)","ความคิดสร้างสรรค์และนวัตกรรม (Creativity & Innovation)","ภาวะผู้นำและการบริหารทีม (Leadership & Management)","การปรับตัวต่อการเปลี่ยนแปลง (Adaptability & Resilience)","การรับมือกับความเครียดและความกดดัน Resilience & Stress Management","การเจรจาต่อรองและแก้ไขความขัดแย้ง Negotiation & Conflict Resolution"]
      },
   
    ],

  },{
    "id": "q06",
    "question": "",
    "type": "checkbox",
    "sub_question": [
      {
        "id": "01",
        "question": "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        "choices": ["จันทร์ - ศุกร์", "เสาร์ - อาทิตย์","ทุกช่วงเวลา"]
      },
   
    ],

  },{
    "id": "q07",
    "question": "",
    "type": "checkbox",
    "sub_question": [
      {
        "id": "01",
        "question": "ท่านสะดวกฝึกอบรม ช่วงเวลาใด ",
        "choices": ["ณ สถาบันพัฒนาฝีมือแรงงาน", "ณ สถานประกอบการ/บริษัทของท่าน","Online Training"]
      },
   
    ],

  },{
    "id": "q08",
    "question": "",
    "type": "radio",
    "sub_question": [
      {
        "id": "01",
        "question": "ท่านต้องการให้หลักสูตรฝึกอบรมมีการประเมินผลอย่างไร?",
        "choices": ["การทดสอบหลังการฝึกอบรม", "การประเมินผลจากผู้เข้าร่วม","การประเมินผลจากผู้สอน","ไม่มีการประเมินผล"]
      },
   
    ],

  },{
    "id": "q09",
    "question": "",
    "type": "radio",
    "sub_question": [
      {
        "id": "01",
        "question": "ท่านต้องการให้หลักสูตรมีใบรับรองหรือประกาศนียบัตรหรือไม่?",
        "choices": ["จำเป็น", "ไม่จำเป็น"]
      },
   
    ],

  },
  
]