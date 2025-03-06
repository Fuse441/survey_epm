"use client";

import { useState } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { questions } from "@/config/questions";
type QuestionsProps = {
  selected: { [key: string]: string | string[] };
  setSelected: React.Dispatch<React.SetStateAction<{ [key: string]: string | string[] }>>;
};
export default function Questions({ selected, setSelected }: QuestionsProps) {
  
  return (
    <div>


      {questions.map((item, index) => (
        <div key={index} className="questions">
          <Accordion>
            <AccordionItem
              key={index}
              aria-label={item.question}
              title={item.question}
            >
              {item.sub_question.map((sub, id_sub) => {
                const key = `${index + 1}.${id_sub + 1}`;

                return (
                  <div key={id_sub} className="sub_question m-2 mb-3">
                    <h2 className="text-lg">{sub.label}</h2>
                    {/* <h2 className="text-lg">{`${index + 1}.${id_sub + 1} ${sub.question}`}</h2> */}
                    <h2 className="text-lg ml-4">{`${sub.question}`}</h2>
                    <div className="choices mt-2 ml-5">
                      {sub.type === "radio" && (
                        <RadioGroup
                          className=""
                          value={
                            typeof selected[key] === "string"
                              ? selected[key]
                              : ""
                          }
                          onValueChange={(newValue) =>
                            setSelected((prev) => ({
                              ...prev,
                              [key]: newValue, // ใช้ key ที่กำหนด
                            }))
                          }
                        >
                          <div className="flex flex-col gap-3">
                            {sub.choices.map((option, index) => (
                              <Radio key={`${sub.id}-${index}`} value={option}>
                                {option}
                              </Radio>
                            ))}
                          </div>
                        </RadioGroup>
                      )}

                      {sub.type === "checkbox" && (
                        <CheckboxGroup
                          className=""
                          value={
                            Array.isArray(selected[key]) ? selected[key] : []
                          }
                          onChange={(newValues) => {
                            const selectedValue = newValues.find((item) => (item == "ไม่ทราบ" || item == "ไม่ทราบทักษะที่ควรพัฒนา" || item == "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้"))

                            console.log(selectedValue);
                            if (selectedValue) {
                              setSelected((prev) => ({
                                ...prev,
                                [key]: [selectedValue],
                              }));
                            } else {
                              setSelected((prev) => ({
                                ...prev,
                                [key]: newValues, // ปกติให้เก็บค่าตามที่เลือก
                              }));
                            }
                          }}
                        >
                          <div className="flex flex-col gap-3">
                            {sub.choices.map((option, index) => (
                              <Checkbox
                                key={`${sub.id}-${index}`}
                                isDisabled={
                                  (selected[key]?.includes("ไม่ทราบ") || 
                                   selected[key]?.includes("ไม่ทราบทักษะที่ควรพัฒนา") ||  
                                   selected[key]?.includes("ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้")) &&
                                  (option !== "ไม่ทราบ" && 
                                   option !== "ไม่ทราบทักษะที่ควรพัฒนา" && 
                                   option !== "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") ||
                                  (selected[key]?.includes("ไม่ทราบทักษะที่ควรพัฒนา") && option === "ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") ||
                                  (selected[key]?.includes("ไม่ต้องการพัฒนาทักษะสำหรับฝ่ายนี้") && option === "ไม่ทราบทักษะที่ควรพัฒนา")
                                }
                                value={option}
                              >
                                {option}
                              </Checkbox>
                            ))}
                          </div>
                        </CheckboxGroup>
                      )}
                    </div>
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
          <Divider />
        </div>
      ))}

      {/* <pre>{JSON.stringify(selected, null, 2)}</pre> */}
    </div>
  );
}
