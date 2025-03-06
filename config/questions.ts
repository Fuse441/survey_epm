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
    ],
  },
  {
    id: "q02",
    question: "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",

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
        type: "checkbox",
        question:
          "Software Enterprise Services (ฝ่ายบริการซอฟต์แวร์ธุรกิจองค์กร)",
        choices: [
          "ความรู้ด้าน ERP (SAP, Oracle, Microsoft Dynamics ฯลฯ)",
          "การพัฒนาและปรับแต่งซอฟต์แวร์ธุรกิจ (Customization & Integration)",
          "การบริหารฐานข้อมูล (SQL, NoSQL)",
          "ความเข้าใจในระบบ Business Intelligence (Power BI, Tableau)",
          "การใช้ API และ Middleware เพื่อเชื่อมโยงระบบ",
          "ไม่ทราบ",
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
    ],
  },
  {
    id: "q03",
    question: "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",

    sub_question: [
      {
        id: "03",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "03",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "radio",
        question: "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        choices: [
          "การดูแลและสนับสนุนผู้ใช้ (IT Support & Helpdesk)",
          "การติดตั้งและซ่อมแซมอุปกรณ์ IT (Hardware & Software Troubleshooting)",
          "การบริหารสิทธิ์การเข้าถึงระบบ (Access Control & Active Directory)",
          "การจัดการความปลอดภัยข้อมูลเบื้องต้น (Endpoint Security)",
          "ไม่ทราบ",
        ],
      },
      {
        id: "03",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question: "IT Services (ฝ่ายบริการเทคโนโลยีสารสนเทศ)",
        choices: [
          "IT Support & Helpdesk with AI Integration",
          "Endpoint Security & Zero Trust Architecture",
          "ITIL & IT Service Management",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
    ],
  },
  {
    id: "q04",
    question: "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
    sub_question: [
      {
        id: "04",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "04",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        choices: [
          "การพัฒนาเว็บและแอปพลิเคชัน (Frontend & Backend Development)",
          "ความรู้ด้าน API และ Web Services (REST, GraphQL)",
          "การพัฒนา AI & Machine Learning",
          "การใช้เครื่องมือ DevOps (Docker, Kubernetes, CI/CD)",
          "การออกแบบสถาปัตยกรรมซอฟต์แวร์",
          "ไม่ทราบ",
          
        ],
        
      },
      {
        id: "04",
        label:
          "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question: "Solutions Development (ฝ่ายพัฒนาดิจิทัลโซลูชั่นส์)",
        choices: [
          "Full-Stack Development",
          "DevOps & CI/CD",
          "AI & Machine Learning Development",
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
        ],
      },
    ],
  },
  {
    id: "q05",
    question: "Accounting & Finance (งานบัญชีและการเงิน)",
    sub_question: [
      {
        id: "05",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Accounting & Finance (งานบัญชีและการเงิน)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "05",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Accounting & Finance (งานบัญชีและการเงิน)",
        choices: [
          "การใช้โปรแกรมบัญชี (SAP, QuickBooks, Oracle Finance)",
          "การวิเคราะห์และบริหารงบประมาณ",
          "การคำนวณภาษีและงบการเงิน",
          "ความรู้ด้านกฎหมายและมาตรฐานบัญชี",
          "ไม่ทราบ",
          
        ],
      },
      {
        id: "05",
        label: "ทักษะฝีมือด้านใดบ้างที่ท่านต้องการให้พนักงานพัฒนาอย่างต่อเนื่องหรือยังขาดแคลนบุคลากรที่มีทักษะเหล่านี้",
        type: "checkbox",
        question: "Accounting & Finance (งานบัญชีและการเงิน)",
        choices: [
          "Data Analytics for Finance", 
          "Blockchain & Digital Payment Systems", 
          "Regulatory Compliance & International Taxation", 
          "ไม่ทราบทักษะที่ควรพัฒนา",
          "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้",
          
        ],
      },
    ],
  },
  {
    id: "q06",
    question: "Human Resource (ฝ่ายทรัพยากรบุคคล)",
    sub_question: [
      {
        id: "06",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "06",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Human Resource (ฝ่ายทรัพยากรบุคคล)",
        choices: [
          "การบริหารทรัพยากรบุคคล (HR Management)",
          "การใช้ HR Software (SAP HR, Workday, BambooHR)",
          "การคำนวณเงินเดือนและสวัสดิการ",
          "การจัดการด้านแรงงานสัมพันธ์และกฎหมายแรงงาน",
          "ไม่ทราบ",
          
        ],
      },
    ],
  },
  {
    id: "q07",
    question: "Administration (ฝ่ายธุรการ)",
    sub_question: [
      {
        id: "07",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Administration (ฝ่ายธุรการ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "07",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Administration (ฝ่ายธุรการ)",
        choices: [
          "การบริหารงานเอกสารและข้อมูล (Document & Records Management)",
          "การใช้โปรแกรมสำนักงาน (Microsoft Office, Google Workspace)",
          "การจัดการระบบอำนวยความสะดวกในองค์กร",
          "ไม่ทราบ",
          
        ],
      },
    ],
  },
  {
    id: "q08",
    question: "Procurement (ฝ่ายจัดซื้อ)",
    sub_question: [
      {
        id: "08",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Procurement (ฝ่ายจัดซื้อ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "08",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Procurement (ฝ่ายจัดซื้อ)",
        choices: [
          "การบริหารจัดซื้อและซัพพลายเชน (Procurement & Supply Chain Management)",
          "การเจรจาต่อรองและการทำสัญญา",
          "ความเข้าใจเกี่ยวกับต้นทุนและงบประมาณ",
          "ไม่ทราบ",
          
        ],
      },
    ],
  },
  {
    id: "q09",
    question: "Project Management (ฝ่ายบริหารงานโครงการ)",
    sub_question: [
      {
        id: "09",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Project Management (ฝ่ายบริหารงานโครงการ)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "09",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Project Management (ฝ่ายบริหารงานโครงการ)",
        choices: [
          "การใช้เครื่องมือบริหารโครงการ (JIRA, Trello, Asana)",
          "ความเข้าใจเกี่ยวกับ Agile & Scrum หรือ Waterfall",
          "การบริหารทรัพยากรและงบประมาณโครงการ",
          "การวิเคราะห์และบริหารความเสี่ยง",
          "ไม่ทราบ",
          
        ],
      },
    ],
  },
  {
    id: "q10",
    question: "Sales (ฝ่ายขาย)",
    sub_question: [
      {
        id: "10",
        label: "โปรดบอกความต้องการพัฒนาทักษะฝีมือของฝ่ายงานในองค์กรของท่าน",
        type: "radio",
        question: "Sales (ฝ่ายขาย)",
        choices: ["มาก", "ปานกลาง", "น้อย"],
      },
      {
        id: "10",
        label: "ทักษะฝีมือใดที่พนักงานของท่านมี (เลือกได้มากกว่า 1 ข้อ)",
        type: "checkbox",
        question: "Sales (ฝ่ายขาย)",
        choices: [
          "การขายและการนำเสนอผลิตภัณฑ์ IT",
          "การใช้ CRM (Salesforce, HubSpot)",
          "การวิเคราะห์ตลาดและพฤติกรรมลูกค้า",
          "ไม่ทราบ",
          
        ],
      },
    ],
  },
];
