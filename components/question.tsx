"use client";

import { useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";
import { questions } from "@/config/questions";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";

export default function Questions() {
  const [selected, setSelected] = useState<{ [key: string]: string | string[] }>({});

  return (
    <div>
      {questions.map((item, index) => (
        <div className="questions" key={index}>
          <h2 className="text-lg">{item.question}</h2>
          {item.sub_question.map((sub, id_sub) => {
            const key = `${index+1}.${id_sub+1}`; 

            return (
              <div className="sub_question m-2" key={id_sub}>
                <h2 className="text-lg">{`${index + 1}.${id_sub + 1} ${sub.question}`}</h2>
                <div className="choices mt-2">
                  {item.type === "radio" && (
                    <RadioGroup
                      value={typeof selected[key] === "string" ? selected[key] : ""}
                      onValueChange={(newValue) =>
                        setSelected((prev) => ({
                          ...prev,
                          [key]: newValue, // ใช้ key ที่กำหนด
                        }))
                      }
                      className=""
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

                  {item.type === "checkbox" && (
                    <CheckboxGroup
                      value={Array.isArray(selected[key]) ? selected[key] : []}
                      onChange={(newValues) =>
                        setSelected((prev) => ({
                          ...prev,
                          [key]: newValues, // เก็บค่าเป็น array
                        }))
                      }
                      className=""
                    >
                      <div className="flex flex-col gap-3">
                        {sub.choices.map((option, index) => (
                          <Checkbox key={`${sub.id}-${index}`} value={option}>
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
        </div>
      ))}

      {/* <pre>{JSON.stringify(selected, null, 2)}</pre> */}
    </div>
  );
}
