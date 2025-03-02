"use client";

import { useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";

const question = {
  text: "ข้อใดคือกรอบงานสำหรับพัฒนาเว็บแอปพลิเคชันด้วย React?",
  options: [
    { id: "vue", text: "Vue.js" },
    { id: "angular", text: "Angular" },
    { id: "next", text: "Next.js" },
    { id: "svelte", text: "Svelte" },
  ],
};

export default function Questions() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
  <div>
      <h2 className="text-lg">{question.text}</h2>

      <RadioGroup value={selected} onValueChange={setSelected}  className=" ">
        <div className="flex gap-3">
        {question.options.map((option) => (
          <Radio key={option.id} value={option.id} className="">
            {option.text}
          </Radio>
        ))}
        </div>
      </RadioGroup>

     
    </div>
  );
}
