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
  }


];
